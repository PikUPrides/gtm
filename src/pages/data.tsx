
import Header from '../components/Header.jsx';
import { useState, useEffect, useRef } from 'react';

const GEOJSON_URL = 'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json';

const STATE_COLORS = [
  '#F4A6A0', '#F6C49B', '#A8D8EA', '#C3AED6', '#B5EAD7',
  '#FFD6A5', '#E2B6CF', '#A0C4FF', '#BDB2FF', '#FFC6FF',
  '#CAFFBF', '#FDFFB6', '#9BF6FF', '#FFB5A7', '#FCD5CE',
];

const DEMOGRAPHICS = {
  'Texas': {
    population: '30,503,000',
    populationRank: '2nd',
    medianAge: '35.1',
    medianIncome: '$67,321',
    genderSplit: { male: 49.7, female: 50.3 },
    ageGroups: [
      { label: '0-17', pct: 25.5 },
      { label: '18-34', pct: 22.8 },
      { label: '35-54', pct: 26.1 },
      { label: '55-64', pct: 11.8 },
      { label: '65+', pct: 13.8 },
    ],
    raceEthnicity: [
      { label: 'Hispanic/Latino', pct: 40.2 },
      { label: 'White (non-Hispanic)', pct: 39.4 },
      { label: 'Black/African American', pct: 12.9 },
      { label: 'Asian', pct: 5.5 },
      { label: 'Other', pct: 2.0 },
    ],
    topCities: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth'],
    area: '268,596 sq mi',
    density: '113.6/sq mi',
    growthRate: '+1.6%',
  },
  'California': {
    population: '39,029,000',
    populationRank: '1st',
    medianAge: '37.0',
    medianIncome: '$84,097',
    genderSplit: { male: 49.7, female: 50.3 },
    ageGroups: [
      { label: '0-17', pct: 22.5 },
      { label: '18-34', pct: 23.1 },
      { label: '35-54', pct: 26.3 },
      { label: '55-64', pct: 12.4 },
      { label: '65+', pct: 15.7 },
    ],
    raceEthnicity: [
      { label: 'Hispanic/Latino', pct: 39.4 },
      { label: 'White (non-Hispanic)', pct: 34.7 },
      { label: 'Asian', pct: 15.9 },
      { label: 'Black/African American', pct: 6.5 },
      { label: 'Other', pct: 3.5 },
    ],
    topCities: ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno'],
    area: '163,696 sq mi',
    density: '238.4/sq mi',
    growthRate: '-0.3%',
  },
  'Florida': {
    population: '22,610,000',
    populationRank: '3rd',
    medianAge: '42.4',
    medianIncome: '$63,062',
    genderSplit: { male: 48.9, female: 51.1 },
    ageGroups: [
      { label: '0-17', pct: 19.7 },
      { label: '18-34', pct: 20.2 },
      { label: '35-54', pct: 24.8 },
      { label: '55-64', pct: 13.5 },
      { label: '65+', pct: 21.8 },
    ],
    raceEthnicity: [
      { label: 'White (non-Hispanic)', pct: 51.5 },
      { label: 'Hispanic/Latino', pct: 26.8 },
      { label: 'Black/African American', pct: 16.9 },
      { label: 'Asian', pct: 3.0 },
      { label: 'Other', pct: 1.8 },
    ],
    topCities: ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg'],
    area: '65,758 sq mi',
    density: '343.8/sq mi',
    growthRate: '+1.9%',
  },
  'New York': {
    population: '19,677,000',
    populationRank: '4th',
    medianAge: '39.2',
    medianIncome: '$74,314',
    genderSplit: { male: 48.5, female: 51.5 },
    ageGroups: [
      { label: '0-17', pct: 20.4 },
      { label: '18-34', pct: 22.6 },
      { label: '35-54', pct: 25.7 },
      { label: '55-64', pct: 13.4 },
      { label: '65+', pct: 17.9 },
    ],
    raceEthnicity: [
      { label: 'White (non-Hispanic)', pct: 52.5 },
      { label: 'Hispanic/Latino', pct: 19.5 },
      { label: 'Black/African American', pct: 17.6 },
      { label: 'Asian', pct: 9.0 },
      { label: 'Other', pct: 1.4 },
    ],
    topCities: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse'],
    area: '54,555 sq mi',
    density: '360.7/sq mi',
    growthRate: '-0.9%',
  },
  'Illinois': {
    population: '12,582,000',
    populationRank: '6th',
    medianAge: '38.7',
    medianIncome: '$72,205',
    genderSplit: { male: 49.1, female: 50.9 },
    ageGroups: [
      { label: '0-17', pct: 22.0 },
      { label: '18-34', pct: 22.1 },
      { label: '35-54', pct: 25.3 },
      { label: '55-64', pct: 13.0 },
      { label: '65+', pct: 17.6 },
    ],
    raceEthnicity: [
      { label: 'White (non-Hispanic)', pct: 58.3 },
      { label: 'Hispanic/Latino', pct: 18.2 },
      { label: 'Black/African American', pct: 14.6 },
      { label: 'Asian', pct: 6.1 },
      { label: 'Other', pct: 2.8 },
    ],
    topCities: ['Chicago', 'Aurora', 'Joliet', 'Naperville', 'Rockford'],
    area: '57,914 sq mi',
    density: '217.3/sq mi',
    growthRate: '-0.8%',
  },
};

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

function DemographicsSection({ stateName, data }) {
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: 'Population', value: data.population, sub: `Rank: ${data.populationRank}`, color: '#423DF9' },
          { label: 'Median Age', value: data.medianAge, sub: 'years', color: '#7742F1' },
          { label: 'Median Income', value: data.medianIncome, sub: 'household', color: '#3a0ca3' },
          { label: 'Growth Rate', value: data.growthRate, sub: 'annual', color: '#08D9C4' },
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

      {/* Gender + Cities Row */}
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

        {/* Top Cities */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-sm font-bold text-[#1D0652] uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#3a0ca3]" />
            Top Cities
          </h3>
          <div className="space-y-2">
            {data.topCities.map((city, i) => (
              <div key={city} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: ['#423DF9', '#7742F1', '#3a0ca3', '#08D9C4', '#0B9F90'][i] }}>
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700 font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <p className="text-xs text-gray-400 text-center pt-4 border-t border-gray-100">
        Sources: U.S. Census Bureau, World Population Review, Statista. Data approximate.
      </p>
    </div>
  );
}

export default function Page() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const dataRef = useRef(null);
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [mapReady, setMapReady] = useState(false);

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
          const geojsonLayer = L.geoJSON(geojson, {
            style: (feature) => {
              const color = STATE_COLORS[colorIndex % STATE_COLORS.length];
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
              layer.bindTooltip(name, {
                permanent: false,
                direction: 'center',
                className: 'state-tooltip',
              });

              layer.on({
                mouseover: (e) => {
                  e.target.setStyle({ fillOpacity: 0.85, weight: 2.5, color: '#423DF9' });
                  e.target.bringToFront();
                  setHoveredState(name);
                },
                mouseout: (e) => {
                  geojsonLayer.resetStyle(e.target);
                  setHoveredState(null);
                },
                click: (e) => {
                  const stateName = feature.properties.name;
                  setSelectedState(stateName);
                  map.fitBounds(e.target.getBounds(), { padding: [50, 50], maxZoom: 6 });
                  setTimeout(() => {
                    if (dataRef.current) {
                      dataRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 300);
                },
              });
            },
          }).addTo(map);
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

  const demographics = selectedState ? DEMOGRAPHICS[selectedState] : null;

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
            {hoveredState && (
              <span className="text-sm text-gray-600 hidden sm:block">{hoveredState}</span>
            )}
            {selectedState && (
              <button
                onClick={() => {
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
            <div className="border-t-4 border-[#423DF9]">
              <DemographicsSection stateName={selectedState} data={demographics} />
            </div>
          )}

          {selectedState && !demographics && (
            <div className="border-t-4 border-gray-200 py-16">
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1D0652] mb-1">{selectedState}</h3>
                <p className="text-sm text-gray-500">Demographics data coming soon.</p>
                <p className="text-xs text-gray-400 mt-1">Currently available: Texas, California, Florida, New York, Illinois</p>
              </div>
            </div>
          )}

          {!selectedState && (
            <div className="py-12 text-center">
              <p className="text-gray-400 text-sm">Select a state on the map above to view detailed demographics</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {Object.keys(DEMOGRAPHICS).map(state => (
                  <button
                    key={state}
                    onClick={() => setSelectedState(state)}
                    className="px-3 py-1.5 bg-white border border-gray-200 text-sm text-gray-600 rounded-full hover:border-[#423DF9] hover:text-[#423DF9] transition-colors"
                  >
                    {state}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer accent */}
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #1D0652, #423DF9, #08D9C4)' }} />
      </div>
    </div>
  );
}
