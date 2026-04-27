
import Header from '../components/Header.jsx';
import { useState, useEffect } from 'react';
import serenities from '../api/sdk';

const METRO_TABLE = 'cmmq24t52005m7blb9qszqrpo';
const COUNTY_TABLE = 'cmo1hd7ha005o7bz7k8jaluca';
const CITY_TABLE = 'cmmq21muw004i7bml1dundklt';
const ZIP_TABLE = 'cmo1hd84j004j7b0hko9zzi38';

function fmt(n) {
  if (n == null) return '\u2014';
  return Number(n).toLocaleString('en-US');
}

function ChevronIcon({ open }) {
  return (
    <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ProgressBar({ current, total }) {
  const pct = total > 0 ? Math.min((current / total) * 100, 100) : 0;
  return (
    <div className="flex items-center gap-2 min-w-[120px]">
      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
        <div className="h-full rounded-full bg-[#08D9C4] transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-[10px] text-gray-500 w-10 text-right">{pct.toFixed(1)}%</span>
    </div>
  );
}

function SummaryCards({ dmas, counties, cities, zips }) {
  const totalPop = dmas.reduce((s, d) => s + (Number(d.Population) || 0), 0);
  const totalDrivers = dmas.reduce((s, d) => s + (Number(d.DriversNeeded) || 0), 0);
  const totalSignups = [dmas, counties, cities, zips].flat().reduce((s, r) => s + (Number(r.Signups) || 0), 0);
  const cards = [
    { label: 'Texas Population', value: fmt(totalPop), color: '#423DF9' },
    { label: 'Drivers Needed (40:1)', value: fmt(totalDrivers), color: '#08D9C4' },
    { label: 'Total Signups', value: fmt(totalSignups), color: '#10B981' },
    { label: 'DMAs', value: dmas.length, color: '#7742F1' },
    { label: 'Counties', value: counties.length, color: '#3a0ca3' },
    { label: 'Cities', value: cities.length, color: '#F59E0B' },
    { label: 'Zip Codes', value: zips.length, color: '#EF4444' },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
      {cards.map(c => (
        <div key={c.label} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
          <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">{c.label}</div>
          <div className="text-xl font-bold" style={{ color: c.color }}>{c.value}</div>
        </div>
      ))}
    </div>
  );
}

function ZipRow({ zip }) {
  return (
    <tr className="border-b border-gray-50 hover:bg-purple-50/30">
      <td className="py-2 pl-20 pr-2 text-sm text-gray-600">{zip.ZipCode}</td>
      <td className="py-2 px-2 text-sm text-gray-500">{zip.City || '\u2014'}</td>
      <td className="py-2 px-2 text-sm text-right text-gray-600">{fmt(zip.Population)}</td>
      <td className="py-2 px-2 text-sm text-right text-[#08D9C4] font-medium">{fmt(zip.DriversNeeded)}</td>
      <td className="py-2 px-2 text-sm text-right text-[#10B981] font-medium">{fmt(zip.Signups)}</td>
      <td className="py-2 px-2"><ProgressBar current={Number(zip.Signups) || 0} total={Number(zip.DriversNeeded) || 1} /></td>
    </tr>
  );
}

function CitySection({ city, zips }) {
  const [open, setOpen] = useState(false);
  const cityZips = zips.filter(z => z.City === city.Name);
  return (
    <>
      <tr className="border-b border-gray-100 hover:bg-indigo-50/30 cursor-pointer" onClick={() => setOpen(!open)}>
        <td className="py-2.5 pl-14 pr-2 text-sm font-medium text-gray-700 flex items-center gap-1.5">
          {cityZips.length > 0 && <ChevronIcon open={open} />}
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block" />
          {city.Name}
        </td>
        <td className="py-2.5 px-2 text-sm text-gray-500">{city.County || '\u2014'}</td>
        <td className="py-2.5 px-2 text-sm text-right text-gray-600">{fmt(city.Population)}</td>
        <td className="py-2.5 px-2 text-sm text-right text-[#08D9C4] font-medium">{fmt(city.DriversNeeded)}</td>
        <td className="py-2.5 px-2 text-sm text-right text-[#10B981] font-medium">{fmt(city.Signups)}</td>
        <td className="py-2.5 px-2"><ProgressBar current={Number(city.Signups) || 0} total={Number(city.DriversNeeded) || 1} /></td>
      </tr>
      {open && cityZips.sort((a, b) => (Number(b.Population) || 0) - (Number(a.Population) || 0)).map(z => (
        <ZipRow key={z.ZipCode} zip={z} />
      ))}
    </>
  );
}

function CountySection({ county, cities, zips }) {
  const [open, setOpen] = useState(false);
  const countyCities = cities.filter(c => c.County === county.Name).sort((a, b) => (Number(b.Population) || 0) - (Number(a.Population) || 0));
  return (
    <>
      <tr className="border-b border-gray-100 hover:bg-blue-50/30 cursor-pointer" onClick={() => setOpen(!open)}>
        <td className="py-2.5 pl-8 pr-2 text-sm font-semibold text-gray-700 flex items-center gap-1.5">
          {countyCities.length > 0 && <ChevronIcon open={open} />}
          <span className="w-2.5 h-2.5 rounded-full bg-[#3a0ca3] inline-block" />
          {county.Name} County
        </td>
        <td className="py-2.5 px-2 text-sm text-gray-500">{county.DMA || '\u2014'}</td>
        <td className="py-2.5 px-2 text-sm text-right text-gray-600">{fmt(county.Population)}</td>
        <td className="py-2.5 px-2 text-sm text-right text-[#08D9C4] font-medium">{fmt(county.DriversNeeded)}</td>
        <td className="py-2.5 px-2 text-sm text-right text-[#10B981] font-medium">{fmt(county.Signups)}</td>
        <td className="py-2.5 px-2"><ProgressBar current={Number(county.Signups) || 0} total={Number(county.DriversNeeded) || 1} /></td>
      </tr>
      {open && countyCities.map(c => (
        <CitySection key={c.Name} city={c} zips={zips} />
      ))}
    </>
  );
}

function DMASection({ dma, counties, cities, zips }) {
  const [open, setOpen] = useState(false);
  const dmaCounties = counties.filter(c => c.DMA === dma.Name).sort((a, b) => (Number(b.Population) || 0) - (Number(a.Population) || 0));
  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-teal-50/30 cursor-pointer" onClick={() => setOpen(!open)}>
        <td className="py-3 pl-3 pr-2 font-bold text-[#1D0652] flex items-center gap-2">
          <ChevronIcon open={open} />
          <span className="w-3 h-3 rounded-full bg-[#08D9C4] inline-block" />
          {dma.Name}
          {dma.DMACode && <span className="ml-1 px-1.5 py-0.5 bg-[#08D9C4]/10 text-[#0B9F90] text-[10px] font-bold rounded-full">DMA {dma.DMACode}</span>}
        </td>
        <td className="py-3 px-2 text-sm text-gray-500">{dmaCounties.length} counties</td>
        <td className="py-3 px-2 text-right font-semibold text-gray-800">{fmt(dma.Population)}</td>
        <td className="py-3 px-2 text-right font-semibold text-[#08D9C4]">{fmt(dma.DriversNeeded)}</td>
        <td className="py-3 px-2 text-right font-semibold text-[#10B981]">{fmt(dma.Signups)}</td>
        <td className="py-3 px-2"><ProgressBar current={Number(dma.Signups) || 0} total={Number(dma.DriversNeeded) || 1} /></td>
      </tr>
      {open && dmaCounties.map(c => (
        <CountySection key={c.Name} county={c} cities={cities} zips={zips} />
      ))}
    </>
  );
}

export default function TexasGTMData() {
  const [dmas, setDmas] = useState([]);
  const [counties, setCounties] = useState([]);
  const [cities, setCities] = useState([]);
  const [zips, setZips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const [dmaRows, countyRows, cityRows, zipRows] = await Promise.all([
          serenities.entities['Metro Areas'].list(null, 100),
          serenities.entities.Counties.list(null, 100),
          serenities.entities.Cities.list(null, 100),
          serenities.entities['Zip Codes'].list(null, 200),
        ]);
        setDmas((dmaRows || []).sort((a, b) => (Number(b.Population) || 0) - (Number(a.Population) || 0)));
        setCounties(countyRows || []);
        setCities(cityRows || []);
        setZips(zipRows || []);
      } catch (e) {
        console.error('Failed to load Texas data:', e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredDmas = search
    ? dmas.filter(d => {
        const q = search.toLowerCase();
        if (d.Name?.toLowerCase().includes(q)) return true;
        const dmaCounties = counties.filter(c => c.DMA === d.Name);
        if (dmaCounties.some(c => c.Name?.toLowerCase().includes(q))) return true;
        const dmaCities = cities.filter(c => c.DMA === d.Name);
        if (dmaCities.some(c => c.Name?.toLowerCase().includes(q))) return true;
        const dmaZips = zips.filter(z => z.DMA === d.Name);
        if (dmaZips.some(z => z.ZipCode?.includes(q) || z.City?.toLowerCase().includes(q))) return true;
        return false;
      })
    : dmas;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[88px] pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-[#1D0652]">Texas GTM Data</h1>
              <span className="px-2.5 py-1 bg-[#08D9C4]/10 text-[#0B9F90] text-xs font-bold rounded-full">US {'>'} Texas</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Hierarchical drill-down: DMA {'>'} County {'>'} City {'>'} Zip Code</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search DMA, county, city, zip..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#423DF9]/30 focus:border-[#423DF9] w-64"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <a href="/data" className="px-4 py-2 text-sm font-medium text-[#423DF9] bg-[#423DF9]/5 hover:bg-[#423DF9]/10 rounded-lg transition-colors">
              State Overview
            </a>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="w-8 h-8 border-4 border-[#423DF9]/20 border-t-[#423DF9] rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <SummaryCards dmas={dmas} counties={counties} cities={cities} zips={zips} />

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-3 px-3 text-[10px] uppercase tracking-wider text-gray-400 font-semibold w-[300px]">Name</th>
                      <th className="text-left py-3 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Parent / Detail</th>
                      <th className="text-right py-3 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Population</th>
                      <th className="text-right py-3 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Drivers Needed</th>
                      <th className="text-right py-3 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Signups</th>
                      <th className="py-3 px-2 text-[10px] uppercase tracking-wider text-gray-400 font-semibold w-[160px]">Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDmas.map(dma => (
                      <DMASection key={dma.Name} dma={dma} counties={counties} cities={cities} zips={zips} />
                    ))}
                  </tbody>
                </table>
              </div>
              {filteredDmas.length === 0 && (
                <div className="py-16 text-center text-gray-400 text-sm">No results matching "{search}"</div>
              )}
            </div>

            <div className="mt-4 text-xs text-gray-400 text-center">
              Population data sourced from worldpopulationreview.com and zipatlas.com. Driver ratio: 40:1 (population / 40).
            </div>
          </>
        )}
      </main>
    </div>
  );
}
