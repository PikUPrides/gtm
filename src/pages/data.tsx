
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
          <span className="text-xs text-gray-500 w-28 text-right shrink-0">{item.label}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
            <div
              className="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-500"
              style={{ width: `${(item.pct / maxPct) * 100}%`, backgroundColor: color }}
            >
              <span className="text-[10px] font-semibold text-white">{item.pct}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DemographicsPanel({ stateName, data, onClose }) {
  if (!data) return null;
  return (
    <div className="absolute top-0 right-0 w-full sm:w-[420px] h-full bg-white border-l border-gray-200 shadow-2xl z-[1000] overflow-y-auto animate-slideIn">
      <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between z-10">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{stateName}</h2>
          <p className="text-xs text-gray-500">Demographic Overview for GTM</p>
        </div>
        <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      <div className="px-5 py-4 space-y-6">
        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Population', value: data.population, sub: `Rank: ${data.populationRank}` },
            { label: 'Median Age', value: data.medianAge, sub: 'years' },
            { label: 'Median Income', value: data.medianIncome, sub: 'household' },
            { label: 'Growth Rate', value: data.growthRate, sub: 'annual' },
            { label: 'Area', value: data.area, sub: '' },
            { label: 'Density', value: data.density, sub: '' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-xl p-3">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{stat.label}</p>
              <p className="text-base font-bold text-gray-900 mt-0.5">{stat.value}</p>
              {stat.sub && <p className="text-[10px] text-gray-400">{stat.sub}</p>}
            </div>
          ))}
        </div>

        {/* Gender Split */}
        <div>
          <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Gender Split</h3>
          <div className="flex rounded-full overflow-hidden h-6">
            <div className="flex items-center justify-center text-[10px] font-bold text-white" style={{ width: `${data.genderSplit.male}%`, backgroundColor: '#423DF9' }}>
              Male {data.genderSplit.male}%
            </div>
            <div className="flex items-center justify-center text-[10px] font-bold text-white" style={{ width: `${data.genderSplit.female}%`, backgroundColor: '#7742F1' }}>
              Female {data.genderSplit.female}%
            </div>
          </div>
        </div>

        {/* Age Distribution */}
        <div>
          <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Age Distribution</h3>
          <BarChart items={data.ageGroups} color="#423DF9" />
        </div>

        {/* Race & Ethnicity */}
        <div>
          <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Race & Ethnicity</h3>
          <BarChart items={data.raceEthnicity} color="#08D9C4" />
        </div>

        {/* Top Cities */}
        <div>
          <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Top Cities</h3>
          <div className="flex flex-wrap gap-2">
            {data.topCities.map((city, i) => (
              <span key={city} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                {i + 1}. {city}
              </span>
            ))}
          </div>
        </div>

        {/* Data Sources Note */}
        <p className="text-[10px] text-gray-400 pt-2 border-t border-gray-100">
          Sources: U.S. Census Bureau, World Population Review, Statista. Data approximate.
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (mapInstance.current) return;

    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Load Leaflet JS
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
        scrollWheelZoom: true,
      });

      L.control.zoom({ position: 'bottomleft' }).addTo(map);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Load GeoJSON
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
                },
                mouseout: (e) => {
                  geojsonLayer.resetStyle(e.target);
                },
                click: (e) => {
                  const stateName = feature.properties.name;
                  setSelectedState(stateName);
                  map.fitBounds(e.target.getBounds(), { padding: [50, 50], maxZoom: 6 });
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
    <div className="min-h-screen bg-white">
      <Header />
      <style>{`
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
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideIn { animation: slideIn 0.3s ease-out forwards; }
        .leaflet-control-zoom a {
          background: white !important;
          color: #374151 !important;
          border: 1px solid #E5E7EB !important;
          width: 32px !important;
          height: 32px !important;
          line-height: 32px !important;
          font-size: 16px !important;
        }
        .leaflet-control-zoom a:hover {
          background: #F3F4F6 !important;
        }
      `}</style>
      <div className="pt-[72px] flex flex-col h-screen">
        {/* Top Bar */}
        <div className="px-4 sm:px-6 py-3 border-b border-gray-100 flex items-center justify-between bg-white">
          <div>
            <h1 className="text-lg font-bold text-gray-900">US Market Data</h1>
            <p className="text-xs text-gray-500">Click any state to view demographics for GTM targeting</p>
          </div>
          <div className="flex items-center gap-3">
            {hoveredState && (
              <span className="text-sm text-gray-600 hidden sm:block">{hoveredState}</span>
            )}
            {selectedState && (
              <span className="px-3 py-1 bg-[#423DF9]/10 text-[#423DF9] text-xs font-semibold rounded-full">
                {selectedState}
              </span>
            )}
          </div>
        </div>

        {/* Map + Panel */}
        <div className="flex-1 relative overflow-hidden">
          <div ref={mapRef} className="w-full h-full" />

          {!mapReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-[#423DF9] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-gray-500">Loading map...</p>
              </div>
            </div>
          )}

          {selectedState && (
            <DemographicsPanel
              stateName={selectedState}
              data={demographics}
              onClose={() => {
                setSelectedState(null);
                if (mapInstance.current) {
                  mapInstance.current.flyTo([39.8, -98.5], 4, { duration: 0.5 });
                }
              }}
            />
          )}

          {/* No data message for states without demographics */}
          {selectedState && !demographics && (
            <div className="absolute top-0 right-0 w-full sm:w-[420px] h-full bg-white border-l border-gray-200 shadow-2xl z-[1000] flex flex-col items-center justify-center animate-slideIn">
              <button
                onClick={() => {
                  setSelectedState(null);
                  if (mapInstance.current) {
                    mapInstance.current.flyTo([39.8, -98.5], 4, { duration: 0.5 });
                  }
                }}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{selectedState}</h3>
                <p className="text-sm text-gray-500">Demographics data coming soon.</p>
                <p className="text-xs text-gray-400 mt-1">Currently available: Texas, California, Florida, New York, Illinois</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
