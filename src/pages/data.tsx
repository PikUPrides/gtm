
import Header from '../components/Header.jsx';
import { useState, useEffect, useRef } from 'react';
import serenities from '../api/sdk';

const GEOJSON_URL = 'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json';

const STATE_COLORS = [
  '#F4A6A0', '#F6C49B', '#A8D8EA', '#C3AED6', '#B5EAD7',
  '#FFD6A5', '#E2B6CF', '#A0C4FF', '#BDB2FF', '#FFC6FF',
  '#CAFFBF', '#FDFFB6', '#9BF6FF', '#FFB5A7', '#FCD5CE',
];

const STATE_ABBR = {
  'Alabama':'AL','Alaska':'AK','Arizona':'AZ','Arkansas':'AR','California':'CA',
  'Colorado':'CO','Connecticut':'CT','Delaware':'DE','Florida':'FL','Georgia':'GA',
  'Hawaii':'HI','Idaho':'ID','Illinois':'IL','Indiana':'IN','Iowa':'IA',
  'Kansas':'KS','Kentucky':'KY','Louisiana':'LA','Maine':'ME','Maryland':'MD',
  'Massachusetts':'MA','Michigan':'MI','Minnesota':'MN','Mississippi':'MS','Missouri':'MO',
  'Montana':'MT','Nebraska':'NE','Nevada':'NV','New Hampshire':'NH','New Jersey':'NJ',
  'New Mexico':'NM','New York':'NY','North Carolina':'NC','North Dakota':'ND','Ohio':'OH',
  'Oklahoma':'OK','Oregon':'OR','Pennsylvania':'PA','Rhode Island':'RI','South Carolina':'SC',
  'South Dakota':'SD','Tennessee':'TN','Texas':'TX','Utah':'UT','Vermont':'VT',
  'Virginia':'VA','Washington':'WA','West Virginia':'WV','Wisconsin':'WI','Wyoming':'WY',
  'District of Columbia':'DC',
};

function fmtNum(n) {
  if (n == null) return '\u2014';
  return Number(n).toLocaleString('en-US');
}

function fmtCur(n) {
  if (n == null) return '\u2014';
  return '\u0024' + Number(n).toLocaleString('en-US');
}

function fmtPct(n) {
  if (n == null) return '\u2014';
  return Number(n).toFixed(1) + '%';
}

function ordRank(n) {
  if (n == null) return '\u2014';
  const s = ['th','st','nd','rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function transformRow(row) {
  const gr = Number(row.GrowthRate);
  return {
    population: fmtNum(row.Population),
    populationRank: ordRank(row.PopulationRank),
    medianAge: row.MedianAge != null ? String(row.MedianAge) : '\u2014',
    medianIncome: fmtCur(row.MedianIncome),
    genderSplit: { male: Number(row.MalePercent) || 50, female: Number(row.FemalePercent) || 50 },
    unemploymentRate: fmtPct(row.UnemploymentRate),
    bachelorsDegree: fmtPct(row.BachelorsDegree),
    homeownershipRate: fmtPct(row.HomeownershipRate),
    medianHomeValue: fmtCur(row.MedianHomeValue),
    povertyRate: fmtPct(row.PovertyRate),
    foreignBorn: fmtPct(row.ForeignBorn),
    gdp: row.GDP || '\u2014',
    averageCommute: row.AverageCommute != null ? row.AverageCommute + ' min' : '\u2014',
    broadbandAccess: fmtPct(row.BroadbandAccess),
    medianRent: fmtCur(row.MedianRent),
    area: row.Area || '\u2014',
    density: row.Density || '\u2014',
    growthRate: row.GrowthRate != null ? (gr >= 0 ? '+' : '') + gr.toFixed(1) + '%' : '\u2014',
    ageGroups: [
      { label: '0-17', pct: Number(row.Age0to17) || 0 },
      { label: '18-34', pct: Number(row.Age18to34) || 0 },
      { label: '35-54', pct: Number(row.Age35to54) || 0 },
      { label: '55-64', pct: Number(row.Age55to64) || 0 },
      { label: '65+', pct: Number(row.Age65plus) || 0 },
    ],
    raceEthnicity: [
      { label: 'White (non-Hispanic)', pct: Number(row.White) || 0 },
      { label: 'Hispanic/Latino', pct: Number(row.Hispanic) || 0 },
      { label: 'Black', pct: Number(row.Black) || 0 },
      { label: 'Asian', pct: Number(row.Asian) || 0 },
      { label: 'Other', pct: Number(row.Other) || 0 },
    ],
    topCities: [],
  };
}

function BarChart({ items, color }) {
  const maxPct = Math.max(...items.map(i => i.pct));
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className="text-xs text-gray-500 w-32 text-right shrink-0">{item.label}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
            <div
              className="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-500"
              style={{ width: `${(item.pct / maxPct) * 100}%`, backgroundColor: color }}
            >
              <span className="text-[11px] font-semibold text-white">{item.pct}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MetroSection({ metros }) {
  if (!metros || metros.length === 0) return null;
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
      <h3 className="text-sm font-bold text-[#1D0652] uppercase tracking-wider mb-4 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#08D9C4]" />
        Metro Areas / DMA Markets
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold w-8">#</th>
              <th className="text-left py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Metro Area</th>
              <th className="text-right py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Population</th>
              <th className="text-right py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold hidden sm:table-cell">Med. Income</th>
              <th className="text-right py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold hidden md:table-cell">Med. Age</th>
              <th className="text-right py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold hidden lg:table-cell">Home Value</th>
              <th className="text-center py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold hidden sm:table-cell">DMA</th>
              <th className="text-center py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Nat'l Rank</th>
            </tr>
          </thead>
          <tbody>
            {metros.map((m, i) => (
              <tr key={m.name} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="py-2.5 px-2">
                  <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: '#08D9C4' }}>
                    {i + 1}
                  </span>
                </td>
                <td className="py-2.5 px-2 font-medium text-gray-800">{m.name}</td>
                <td className="py-2.5 px-2 text-right text-gray-600">{m.popFormatted}</td>
                <td className="py-2.5 px-2 text-right text-gray-600 hidden sm:table-cell">{m.medianIncome}</td>
                <td className="py-2.5 px-2 text-right text-gray-600 hidden md:table-cell">{m.medianAge}</td>
                <td className="py-2.5 px-2 text-right text-gray-600 hidden lg:table-cell">{m.medianHomeValue}</td>
                <td className="py-2.5 px-2 text-center hidden sm:table-cell">
                  {m.dmaCode ? (
                    <span className="inline-block px-2 py-0.5 bg-[#08D9C4]/10 text-[#0B9F90] text-[10px] font-bold rounded-full">{m.dmaCode}</span>
                  ) : (
                    <span className="text-gray-300 text-xs">{'\u2014'}</span>
                  )}
                </td>
                <td className="py-2.5 px-2 text-center font-semibold text-[#423DF9]">{ordRank(m.nationalRank)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CountySection({ counties, expandedDMA, onToggleDMA, stateZips, expandedCounty, onToggleCounty }) {
  if (!counties || counties.length === 0) return null;
  // Group counties by DMA
  const dmaGroups = {};
  counties.forEach(c => {
    const dma = c.dma || 'Other';
    if (!dmaGroups[dma]) dmaGroups[dma] = { counties: [], totalPop: 0 };
    dmaGroups[dma].counties.push(c);
    dmaGroups[dma].totalPop += c.population;
  });
  const sortedDMAs = Object.entries(dmaGroups).sort((a, b) => b[1].totalPop - a[1].totalPop);

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
      <h3 className="text-sm font-bold text-[#1D0652] uppercase tracking-wider mb-4 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#3a0ca3]" />
        Counties by DMA
      </h3>
      <div className="space-y-2">
        {sortedDMAs.map(([dmaName, group]) => (
          <div key={dmaName} className="border border-gray-100 rounded-lg overflow-hidden">
            <button
              onClick={() => onToggleDMA(expandedDMA === dmaName ? null : dmaName)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="inline-block px-2 py-0.5 bg-[#3a0ca3]/10 text-[#3a0ca3] text-[10px] font-bold rounded-full">DMA</span>
                <span className="text-sm font-semibold text-gray-800">{dmaName}</span>
                <span className="text-xs text-gray-400">{group.counties.length} {group.counties.length === 1 ? 'county' : 'counties'}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#3a0ca3]">{fmtNum(group.totalPop)}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-400 transition-transform ${expandedDMA === dmaName ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {expandedDMA === dmaName && (
              <div className="border-t border-gray-100">
                {group.counties.map((county, i) => {
                  const countyZips = stateZips ? stateZips.filter(z => z.county === county.name) : [];
                  return (
                    <div key={county.name}>
                      <div
                        className={`flex items-center justify-between px-4 py-2.5 ${i > 0 ? 'border-t border-gray-50' : ''} hover:bg-gray-50/50 transition-colors cursor-pointer`}
                        onClick={() => countyZips.length > 0 && onToggleCounty(expandedCounty === county.name ? null : county.name)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold text-white bg-[#3a0ca3]/70">{i + 1}</span>
                          <span className="text-sm text-gray-700">{county.name}</span>
                          {countyZips.length > 0 && (
                            <span className="text-[10px] text-gray-400">{countyZips.length} zip{countyZips.length !== 1 ? 's' : ''}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{county.popFormatted}</span>
                          {countyZips.length > 0 && (
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 text-gray-400 transition-transform ${expandedCounty === county.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      {expandedCounty === county.name && countyZips.length > 0 && (
                        <div className="bg-gray-50/50 border-t border-gray-100 px-4 py-2">
                          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-2 pl-8">Zip Codes</p>
                          {countyZips.map((zip, zi) => (
                            <div key={zip.zipCode} className="flex items-center justify-between py-1.5 pl-8">
                              <div className="flex items-center gap-2">
                                <span className="inline-block px-1.5 py-0.5 bg-[#0B9F90]/10 text-[#0B9F90] text-[10px] font-bold rounded">{zip.zipCode}</span>
                                <span className="text-xs text-gray-600">{zip.city}</span>
                              </div>
                              <span className="text-xs text-gray-500">{zip.popFormatted}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ZipCodeSection({ zips, zipMetric, onZipMetricChange }) {
  if (!zips || zips.length === 0) return null;
  const metrics = [
    { key: 'population', label: 'Population', getValue: z => z.population, format: z => z.popFormatted },
    { key: 'medianIncome', label: 'Med. Income', getValue: z => z.medianIncome, format: z => z.medianIncome ? fmtCur(z.medianIncome) : '\u2014' },
    { key: 'medianAge', label: 'Med. Age', getValue: z => z.medianAge, format: z => z.medianAge ? String(z.medianAge) : '\u2014' },
    { key: 'medianHomeValue', label: 'Home Value', getValue: z => z.medianHomeValue, format: z => z.medianHomeValue ? fmtCur(z.medianHomeValue) : '\u2014' },
    { key: 'renterPct', label: 'Renter %', getValue: z => z.renterPct, format: z => z.renterPct ? z.renterPct + '%' : '\u2014' },
    { key: 'hispanicPct', label: 'Hispanic %', getValue: z => z.hispanicPct, format: z => z.hispanicPct ? z.hispanicPct + '%' : '\u2014' },
    { key: 'bachelorsPct', label: "Bachelor's %", getValue: z => z.bachelorsPct, format: z => z.bachelorsPct ? z.bachelorsPct + '%' : '\u2014' },
    { key: 'medianRent', label: 'Med. Rent', getValue: z => z.medianRent, format: z => z.medianRent ? fmtCur(z.medianRent) : '\u2014' },
  ];
  const active = metrics.find(m => m.key === zipMetric) || metrics[0];
  const sorted = [...zips].sort((a, b) => active.getValue(b) - active.getValue(a));
  const maxVal = sorted.length > 0 ? active.getValue(sorted[0]) : 1;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h3 className="text-sm font-bold text-[#1D0652] uppercase tracking-wider flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#0B9F90]" />
          Top ZIP Codes
        </h3>
        <div className="flex flex-wrap gap-1">
          {metrics.map(m => (
            <button
              key={m.key}
              onClick={() => onZipMetricChange(m.key)}
              className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${zipMetric === m.key ? 'bg-[#0B9F90] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold w-8">#</th>
              <th className="text-left py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">ZIP Code</th>
              <th className="text-left py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">City</th>
              <th className="text-left py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold hidden sm:table-cell">County</th>
              <th className="text-right py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Population</th>
              <th className="text-right py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold text-[#0B9F90]">{active.label}</th>
              <th className="text-left py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold w-28"></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((z, i) => {
              const val = active.getValue(z);
              const barPct = maxVal > 0 ? (val / maxVal) * 100 : 0;
              return (
                <tr key={z.zipCode} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-2.5 px-2">
                    <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: i < 3 ? '#0B9F90' : i < 6 ? '#14b8a6' : '#5eead4' }}>
                      {i + 1}
                    </span>
                  </td>
                  <td className="py-2.5 px-2">
                    <span className="inline-block px-2 py-0.5 bg-[#0B9F90]/10 text-[#0B9F90] text-[11px] font-bold rounded">{z.zipCode}</span>
                  </td>
                  <td className="py-2.5 px-2 text-gray-700">{z.city}</td>
                  <td className="py-2.5 px-2 text-gray-500 hidden sm:table-cell">{z.county}</td>
                  <td className="py-2.5 px-2 text-right text-gray-600">{z.popFormatted}</td>
                  <td className="py-2.5 px-2 text-right font-semibold text-[#0B9F90]">{active.format(z)}</td>
                  <td className="py-2.5 px-2">
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-300" style={{ width: `${barPct}%`, backgroundColor: '#0B9F90' }} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DemographicsSection({ stateName, data, stateMetros, stateCounties, stateZips, cityMetric, onMetricChange, expandedDMA, onToggleDMA, expandedCounty, onToggleCounty, zipMetric, onZipMetricChange }) {
  if (!data) return null;
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #423DF9, #7742F1)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#1D0652]">{stateName}</h2>
          <p className="text-sm text-gray-500">Demographic Overview for GTM Targeting</p>
        </div>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Population', value: data.population, sub: `Rank: ${data.populationRank}`, color: '#423DF9' },
          { label: 'Median Age', value: data.medianAge, sub: 'years', color: '#7742F1' },
          { label: 'Median Income', value: data.medianIncome, sub: 'household', color: '#3a0ca3' },
          { label: 'Growth Rate', value: data.growthRate, sub: 'annual', color: '#08D9C4' },
          { label: 'Unemployment', value: data.unemploymentRate, sub: 'rate', color: '#120E78' },
          { label: "Bachelor's+", value: data.bachelorsDegree, sub: 'education', color: '#0B9F90' },
          { label: 'Homeownership', value: data.homeownershipRate, sub: 'rate', color: '#423DF9' },
          { label: 'Median Home', value: data.medianHomeValue, sub: 'value', color: '#7742F1' },
          { label: 'Poverty Rate', value: data.povertyRate, sub: '', color: '#3a0ca3' },
          { label: 'Foreign Born', value: data.foreignBorn, sub: 'of population', color: '#08D9C4' },
          { label: 'Area', value: data.area, sub: '', color: '#120E78' },
          { label: 'Density', value: data.density, sub: '', color: '#0B9F90' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-8 h-1 rounded-full mb-3" style={{ backgroundColor: stat.color }} />
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{stat.label}</p>
            <p className="text-lg font-bold text-[#1D0652] mt-1">{stat.value}</p>
            {stat.sub && <p className="text-[11px] text-gray-400 mt-0.5">{stat.sub}</p>}
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Age Distribution */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-sm font-bold text-[#1D0652] uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#423DF9]" />
            Age Distribution
          </h3>
          <BarChart items={data.ageGroups} color="#423DF9" />
        </div>

        {/* Race & Ethnicity */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-sm font-bold text-[#1D0652] uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#08D9C4]" />
            Race & Ethnicity
          </h3>
          <BarChart items={data.raceEthnicity} color="#08D9C4" />
        </div>
      </div>

      {/* Gender + Additional Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Gender Split */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-sm font-bold text-[#1D0652] uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#7742F1]" />
            Gender Split
          </h3>
          <div className="flex rounded-xl overflow-hidden h-10 mb-3">
            <div className="flex items-center justify-center text-xs font-bold text-white" style={{ width: `${data.genderSplit.male}%`, backgroundColor: '#423DF9' }}>
              Male {data.genderSplit.male}%
            </div>
            <div className="flex items-center justify-center text-xs font-bold text-white" style={{ width: `${data.genderSplit.female}%`, backgroundColor: '#7742F1' }}>
              Female {data.genderSplit.female}%
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#423DF9]" />
              Male
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#7742F1]" />
              Female
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-sm font-bold text-[#1D0652] uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#3a0ca3]" />
            Additional Insights
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'GDP', value: data.gdp },
              { label: 'Avg Commute', value: data.averageCommute },
              { label: 'Broadband', value: data.broadbandAccess },
              { label: 'Median Rent', value: data.medianRent },
            ].map(item => (
              <div key={item.label} className="bg-gray-50 rounded-lg p-3">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{item.label}</p>
                <p className="text-sm font-bold text-[#1D0652] mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Cities - only show if data available */}
      {data.topCities && data.topCities.length > 0 && (() => {
          const metrics = [
            { key: 'population', label: 'Population', getValue: c => c.rawPop, format: c => c.pop },
            { key: 'income', label: 'Med. Income', getValue: c => Number(c.medianIncome) || 0, format: c => fmtCur(c.medianIncome) },
            { key: 'age', label: 'Med. Age', getValue: c => Number(c.medianAge) || 0, format: c => c.medianAge != null ? String(c.medianAge) : '\u2014' },
            { key: 'homeValue', label: 'Home Value', getValue: c => Number(c.medianHomeValue) || 0, format: c => fmtCur(c.medianHomeValue) },
            { key: 'noVehicle', label: 'No Vehicle %', getValue: c => Number(c.noVehiclePct) || 0, format: c => fmtPct(c.noVehiclePct) },
            { key: 'renter', label: 'Renter %', getValue: c => Number(c.renterPct) || 0, format: c => fmtPct(c.renterPct) },
            { key: 'transit', label: 'Transit %', getValue: c => Number(c.transitPct) || 0, format: c => fmtPct(c.transitPct) },
            { key: 'young', label: 'Young 18-34 %', getValue: c => Number(c.young1834Pct) || 0, format: c => fmtPct(c.young1834Pct) },
            { key: 'hispanic', label: 'Hispanic %', getValue: c => Number(c.hispanicPct) || 0, format: c => fmtPct(c.hispanicPct) },
            { key: 'bachelors', label: "Bachelor's %", getValue: c => Number(c.bachelorsPct) || 0, format: c => fmtPct(c.bachelorsPct) },
            { key: 'unemployment', label: 'Unemp. Rate', getValue: c => Number(c.unemploymentRate) || 0, format: c => fmtPct(c.unemploymentRate) },
            { key: 'rent', label: 'Med. Rent', getValue: c => Number(c.medianRent) || 0, format: c => fmtCur(c.medianRent) },
          ];
          const active = metrics.find(m => m.key === cityMetric) || metrics[0];
          const sorted = [...data.topCities].sort((a, b) => active.getValue(b) - active.getValue(a));
          const maxVal = sorted.length > 0 ? active.getValue(sorted[0]) : 1;
          return (
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h3 className="text-sm font-bold text-[#1D0652] uppercase tracking-wider flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#3a0ca3]" />
                Top Cities
              </h3>
              <div className="flex gap-1 bg-gray-100 rounded-lg p-0.5 overflow-x-auto max-w-full">
                {metrics.map(m => (
                  <button
                    key={m.key}
                    onClick={() => onMetricChange(m.key)}
                    className={`px-2.5 py-1 text-[10px] font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${cityMetric === m.key ? 'bg-[#423DF9] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold w-8">#</th>
                    <th className="text-left py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">City</th>
                    <th className="text-right py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Population</th>
                    <th className="text-right py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold text-[#423DF9]">{active.label}</th>
                    <th className="text-left py-2 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold w-28"></th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((city, i) => {
                    const val = active.getValue(city);
                    const barPct = maxVal > 0 ? (val / maxVal) * 100 : 0;
                    return (
                      <tr key={city.name} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="py-2.5 px-2">
                          <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: i < 3 ? '#423DF9' : i < 6 ? '#7742F1' : '#a57ff7' }}>
                            {i + 1}
                          </span>
                        </td>
                        <td className="py-2.5 px-2 font-medium text-gray-800">{city.name}</td>
                        <td className="py-2.5 px-2 text-right text-gray-600">{city.pop}</td>
                        <td className="py-2.5 px-2 text-right font-semibold text-[#423DF9]">{active.format(city)}</td>
                        <td className="py-2.5 px-2">
                          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div className="h-full rounded-full transition-all duration-300" style={{ width: `${barPct}%`, backgroundColor: '#423DF9' }} />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          );
      })()}

      {/* Metro Areas for this state */}
      <MetroSection metros={stateMetros} />

      {/* Counties by DMA */}
      <CountySection counties={stateCounties} expandedDMA={expandedDMA} onToggleDMA={onToggleDMA} stateZips={stateZips} expandedCounty={expandedCounty} onToggleCounty={onToggleCounty} />

      {/* Top ZIP Codes */}
      <ZipCodeSection zips={stateZips} zipMetric={zipMetric} onZipMetricChange={setZipMetric} />

      {/* Data Sources */}
      <p className="text-xs text-gray-400 text-center pt-4 border-t border-gray-100">
        Sources: World Population Review 2026, Nielsen DMA.
      </p>
    </div>
  );
}

export default function Page() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const dataRef = useRef(null);
  const layersRef = useRef({});
  const selectedLayerRef = useRef(null);
  const stateColorsRef = useRef({});
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const [stateNames, setStateNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchRef = useRef(null);
  const [statesLookup, setStatesLookup] = useState({});
  const [citiesByState, setCitiesByState] = useState({});
  const [metroAreas, setMetroAreas] = useState([]);
  const [countiesByState, setCountiesByState] = useState({});
  const [zipsByState, setZipsByState] = useState({});
  const [dataLoading, setDataLoading] = useState(true);
  const [cityMetric, setCityMetric] = useState('population');
  const [expandedDMA, setExpandedDMA] = useState(null);
  const [expandedCounty, setExpandedCounty] = useState(null);
  const [zipMetric, setZipMetric] = useState('population');

  // Fetch demographics from States, Cities, and Metro Areas tables
  useEffect(() => {
    const loadStates = serenities.entities.States.list()
      .then(rows => {
        const lookup = {};
        rows.forEach(row => {
          if (row.Name) {
            lookup[row.Name] = transformRow(row);
          }
        });
        setStatesLookup(lookup);
      })
      .catch(err => console.error('Failed to load states data:', err));

    const loadCities = serenities.entities.Cities.list('-createdAt', 600)
      .then(rows => {
        const grouped = {};
        rows.forEach(row => {
          if (row.State) {
            if (!grouped[row.State]) grouped[row.State] = [];
            grouped[row.State].push({
              name: row.Name,
              pop: fmtNum(row.Population),
              rawPop: Number(row.Population) || 0,
              pct: Number(row.PctOfState) || 0,
              rank: Number(row.StateRank) || 99,
              medianIncome: row.MedianIncome,
              medianAge: row.MedianAge,
              medianHomeValue: row.MedianHomeValue,
              noVehiclePct: row.NoVehiclePct,
              renterPct: row.RenterPct,
              transitPct: row.TransitPct,
              young1834Pct: row.Young1834Pct,
              hispanicPct: row.HispanicPct,
              bachelorsPct: row.BachelorsPct,
              unemploymentRate: row.UnemploymentRate,
              medianRent: row.MedianRent,
            });
          }
        });
        Object.keys(grouped).forEach(state => {
          grouped[state].sort((a, b) => a.rank - b.rank);
        });
        setCitiesByState(grouped);
      })
      .catch(err => console.error('Failed to load cities data:', err));

    const loadMetros = serenities.entities['Metro Areas'].list()
      .then(rows => {
        const metros = rows.map(row => ({
          name: row.Name,
          states: row.States,
          population: Number(row.Population) || 0,
          popFormatted: fmtNum(row.Population),
          medianIncome: fmtCur(row.MedianIncome),
          medianAge: row.MedianAge != null ? String(row.MedianAge) : '\u2014',
          medianHomeValue: fmtCur(row.MedianHomeValue),
          nationalRank: Number(row.NationalRank) || 0,
          dmaCode: row.DMACode || null,
        })).sort((a, b) => a.nationalRank - b.nationalRank);
        setMetroAreas(metros);
      })
      .catch(err => console.error('Failed to load metro areas data:', err));

    Promise.all([loadStates, loadCities, loadMetros]).then(() => {
      setDataLoading(false);
    });
  }, []);

  // Load Counties and Zip Codes separately so they don't block core data
  useEffect(() => {
    try {
      serenities.entities.Counties.list(null, 200)
        .then(rows => {
          const grouped = {};
          rows.forEach(row => {
            if (row.State) {
              if (!grouped[row.State]) grouped[row.State] = [];
              grouped[row.State].push({
                name: row.Name,
                population: Number(row.Population) || 0,
                popFormatted: fmtNum(row.Population),
                dma: row.DMA || '',
                rank: Number(row.Rank) || 0,
              });
            }
          });
          Object.keys(grouped).forEach(state => {
            grouped[state].sort((a, b) => b.population - a.population);
          });
          setCountiesByState(grouped);
        })
        .catch(err => console.error('Counties load error:', err));
    } catch (e) { console.error('Counties entity error:', e); }

    try {
      serenities.entities['Zip Codes'].list(null, 200)
        .then(rows => {
          const grouped = {};
          const seen = new Set();
          rows.forEach(row => {
            if (row.State && row.ZipCode) {
              const key = row.State + '-' + row.ZipCode;
              if (seen.has(key)) return;
              seen.add(key);
              if (!grouped[row.State]) grouped[row.State] = [];
              grouped[row.State].push({
                zipCode: row.ZipCode,
                city: row.City,
                county: row.County || '',
                population: Number(row.Population) || 0,
                popFormatted: fmtNum(row.Population),
                medianIncome: Number(row.MedianIncome) || 0,
                medianAge: Number(row.MedianAge) || 0,
                medianHomeValue: Number(row.MedianHomeValue) || 0,
                renterPct: Number(row.RenterPct) || 0,
                hispanicPct: Number(row.HispanicPct) || 0,
                bachelorsPct: Number(row.BachelorsPct) || 0,
                medianRent: Number(row.MedianRent) || 0,
              });
            }
          });
          Object.keys(grouped).forEach(state => {
            grouped[state].sort((a, b) => b.population - a.population);
          });
          setZipsByState(grouped);
        })
        .catch(err => console.error('Zip Codes load error:', err));
    } catch (e) { console.error('Zip Codes entity error:', e); }
  }, []);

  useEffect(() => {
    if (mapInstance.current) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => {
      const L = window.L;
      const map = L.map(mapRef.current, {
        center: [39.8, -98.5],
        zoom: 4,
        minZoom: 3,
        maxZoom: 8,
        zoomControl: false,
        scrollWheelZoom: false,
        boxZoom: false,
      });

      L.control.zoom({ position: 'bottomleft' }).addTo(map);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      fetch(GEOJSON_URL)
        .then(r => r.json())
        .then(geojson => {
          let colorIndex = 0;
          const allNames = [];

          const selectState = (layer, name) => {
            // Reset previous selection
            if (selectedLayerRef.current) {
              const prevName = selectedLayerRef.current.feature.properties.name;
              selectedLayerRef.current.setStyle({
                fillColor: stateColorsRef.current[prevName],
                weight: 1.5,
                opacity: 1,
                color: '#fff',
                fillOpacity: 0.6,
              });
            }
            // Highlight new selection
            selectedLayerRef.current = layer;
            layer.setStyle({
              fillColor: '#423DF9',
              fillOpacity: 0.4,
              weight: 3,
              color: '#423DF9',
              opacity: 1,
            });
            setSelectedState(name);
            setCityMetric('population');
            setExpandedDMA(null);
            setExpandedCounty(null);
            map.fitBounds(layer.getBounds(), { padding: [50, 50], maxZoom: 6 });
            setTimeout(() => {
              if (dataRef.current) {
                dataRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 300);
          };

          const geojsonLayer = L.geoJSON(geojson, {
            style: (feature) => {
              const color = STATE_COLORS[colorIndex % STATE_COLORS.length];
              stateColorsRef.current[feature.properties.name] = color;
              colorIndex++;
              return {
                fillColor: color,
                weight: 1.5,
                opacity: 1,
                color: '#fff',
                fillOpacity: 0.6,
              };
            },
            onEachFeature: (feature, layer) => {
              const name = feature.properties.name;
              allNames.push(name);
              layersRef.current[name] = layer;

              layer.bindTooltip(name, {
                permanent: false,
                direction: 'center',
                className: 'state-tooltip',
              });

              layer.on({
                mouseover: (e) => {
                  if (e.target !== selectedLayerRef.current) {
                    e.target.setStyle({ fillOpacity: 0.85, weight: 2, color: '#888' });
                  }
                  setHoveredState(name);
                },
                mouseout: (e) => {
                  if (e.target !== selectedLayerRef.current) {
                    e.target.setStyle({
                      fillColor: stateColorsRef.current[name],
                      weight: 1.5,
                      opacity: 1,
                      color: '#fff',
                      fillOpacity: 0.6,
                    });
                  }
                  setHoveredState(null);
                },
                click: (e) => {
                  selectState(e.target, name);
                },
              });
            },
          }).addTo(map);
          setStateNames(allNames.sort());
          setMapReady(true);
        });

      mapInstance.current = map;
    };
    document.body.appendChild(script);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selectStateByName = (name) => {
    const layer = layersRef.current[name];
    if (!layer || !mapInstance.current) return;
    // Reset previous
    if (selectedLayerRef.current) {
      const prevName = selectedLayerRef.current.feature.properties.name;
      selectedLayerRef.current.setStyle({
        fillColor: stateColorsRef.current[prevName],
        weight: 1.5, opacity: 1, color: '#fff', fillOpacity: 0.6,
      });
    }
    selectedLayerRef.current = layer;
    layer.setStyle({
      fillColor: '#423DF9', fillOpacity: 0.4, weight: 3, color: '#423DF9', opacity: 1,
    });
    setSelectedState(name);
    setCityMetric('population');
    setExpandedDMA(null);
    setExpandedCounty(null);
    setSearchQuery('');
    setShowSearchDropdown(false);
    mapInstance.current.fitBounds(layer.getBounds(), { padding: [50, 50], maxZoom: 6 });
    setTimeout(() => {
      if (dataRef.current) {
        dataRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  const filteredStates = stateNames.filter(s =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const demographics = selectedState && statesLookup[selectedState] ? {
    ...statesLookup[selectedState],
    topCities: citiesByState[selectedState] || [],
  } : null;

  const stateAbbr = selectedState ? STATE_ABBR[selectedState] : null;
  const stateMetros = selectedState && stateAbbr ? metroAreas.filter(m =>
    m.states && m.states.split(',').some(s => s.trim() === stateAbbr)
  ) : [];
  const stateCounties = selectedState ? (countiesByState[selectedState] || []) : [];
  const stateZips = selectedState ? (zipsByState[selectedState] || []) : [];

  return (
    <div className="min-h-screen bg-[#fafafe]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
        .state-tooltip {
          background: rgba(0,0,0,0.8) !important;
          color: white !important;
          border: none !important;
          border-radius: 6px !important;
          padding: 4px 10px !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
        }
        .state-tooltip::before { display: none !important; }
        .leaflet-container { outline: none !important; }
        .leaflet-container:focus { outline: none !important; }
        .leaflet-interactive:focus { outline: none !important; }
        .leaflet-control-zoom a {
          background: white !important;
          color: #374151 !important;
          border: 1px solid #E5E7EB !important;
          width: 32px !important;
          height: 32px !important;
          line-height: 32px !important;
          font-size: 16px !important;
        }
        .leaflet-control-zoom a:hover { background: #F3F4F6 !important; }
      `}</style>
      <Header />

      <div className="pt-[72px]">
        {/* Top Bar */}
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-white">
          <div>
            <h1 className="text-xl font-bold text-[#1D0652]">US Market Data</h1>
            <p className="text-xs text-gray-500">Click any state to view demographics for GTM targeting</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#423DF9] focus-within:ring-1 focus-within:ring-[#423DF9]/30 transition-all">
                <svg className="ml-2.5 h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search state..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setShowSearchDropdown(true); }}
                  onFocus={() => setShowSearchDropdown(true)}
                  className="w-36 sm:w-48 px-2 py-1.5 text-sm bg-transparent border-none outline-none placeholder-gray-400"
                />
              </div>
              {showSearchDropdown && searchQuery && filteredStates.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-[9999]">
                  {filteredStates.map(name => (
                    <button
                      key={name}
                      onClick={() => selectStateByName(name)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-[#423DF9]/5 hover:text-[#423DF9] transition-colors"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {hoveredState && (
              <span className="text-sm text-gray-600 hidden sm:block">{hoveredState}</span>
            )}
            {selectedState && (
              <button
                onClick={() => {
                  if (selectedLayerRef.current) {
                    const prevName = selectedLayerRef.current.feature.properties.name;
                    selectedLayerRef.current.setStyle({
                      fillColor: stateColorsRef.current[prevName],
                      weight: 1.5, opacity: 1, color: '#fff', fillOpacity: 0.6,
                    });
                    selectedLayerRef.current = null;
                  }
                  setSelectedState(null);
                  if (mapInstance.current) {
                    mapInstance.current.flyTo([39.8, -98.5], 4, { duration: 0.5 });
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#423DF9]/10 text-[#423DF9] text-xs font-semibold rounded-full hover:bg-[#423DF9]/20 transition-colors"
              >
                {selectedState}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="relative" style={{ height: '65vh', minHeight: '400px' }}>
          <div ref={mapRef} className="w-full h-full" />
          {!mapReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-[#423DF9] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-gray-500">Loading map...</p>
              </div>
            </div>
          )}
        </div>

        {/* Demographics Section Below Map */}
        <div ref={dataRef}>
          {selectedState && demographics && (
            <div>
              <DemographicsSection stateName={selectedState} data={demographics} stateMetros={stateMetros} stateCounties={stateCounties} stateZips={stateZips} cityMetric={cityMetric} onMetricChange={setCityMetric} expandedDMA={expandedDMA} onToggleDMA={setExpandedDMA} expandedCounty={expandedCounty} onToggleCounty={setExpandedCounty} zipMetric={zipMetric} onZipMetricChange={setZipMetric} />
            </div>
          )}

          {selectedState && !demographics && (
            <div className="py-16">
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {dataLoading ? (
                    <div className="w-8 h-8 border-2 border-[#423DF9] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#1D0652] mb-1">{selectedState}</h3>
                <p className="text-sm text-gray-500">{dataLoading ? 'Loading demographics...' : 'Demographics data not available.'}</p>
              </div>
            </div>
          )}

          {!selectedState && (
            <div className="py-12 text-center">
              <p className="text-gray-400 text-sm">Select a state on the map above to view detailed demographics</p>
              {dataLoading && (
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="w-4 h-4 border-2 border-[#423DF9] border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs text-gray-400">Loading data for all 50 states...</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer accent */}
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #1D0652, #423DF9, #08D9C4)' }} />
      </div>
    </div>
  );
}
