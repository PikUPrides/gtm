import Header from '../components/Header.jsx';
import { useState, useEffect, useRef } from 'react';

const ElephantSVG = ({ size = 200, color = '#1D0652' }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 240 192" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="140" cy="100" rx="65" ry="48" fill={color} />
    <circle cx="72" cy="76" r="36" fill={color} />
    <ellipse cx="46" cy="62" rx="22" ry="32" fill={color} opacity="0.65" />
    <path d="M46 96 Q32 132 44 158 Q50 164 56 155 Q46 134 56 100" fill={color} />
    <circle cx="64" cy="66" r="4" fill="white" />
    <circle cx="65.5" cy="65" r="2" fill="#222" />
    <path d="M72 98 Q66 114 72 120" stroke="#FFFFF0" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <rect x="100" y="132" width="16" height="38" rx="6" fill={color} />
    <rect x="122" y="132" width="16" height="38" rx="6" fill={color} />
    <rect x="160" y="132" width="16" height="38" rx="6" fill={color} />
    <rect x="182" y="132" width="16" height="38" rx="6" fill={color} />
    <path d="M205 94 Q218 88 222 100" stroke={color} strokeWidth="3" fill="none" />
    <circle cx="223" cy="103" r="3.5" fill={color} />
  </svg>
);

const BabyElephantSVG = ({ size = 130, color = '#423DF9' }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 240 192" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="140" cy="105" rx="60" ry="44" fill={color} />
    <circle cx="78" cy="72" r="38" fill={color} />
    <ellipse cx="50" cy="56" rx="24" ry="30" fill={color} opacity="0.6" />
    <path d="M52 92 Q42 114 52 130 Q56 134 60 126 Q52 112 60 96" fill={color} />
    <circle cx="72" cy="60" r="6.5" fill="white" />
    <circle cx="73.5" cy="59" r="3.2" fill="#222" />
    <ellipse cx="64" cy="54" r="1.5" ry="2" fill="white" opacity="0.5" />
    <path d="M78 92 Q74 102 78 106" stroke="#FFFFF0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <rect x="105" y="136" width="15" height="32" rx="7" fill={color} />
    <rect x="126" y="136" width="15" height="32" rx="7" fill={color} />
    <rect x="158" y="136" width="15" height="32" rx="7" fill={color} />
    <rect x="178" y="136" width="15" height="32" rx="7" fill={color} />
    <path d="M200 98 Q210 93 212 102" stroke={color} strokeWidth="2.5" fill="none" />
    <circle cx="213" cy="104" r="3" fill={color} />
  </svg>
);

const AntSVG = ({ size = 36, color = '#94A3B8' }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="22" r="5.5" fill={color} />
    <ellipse cx="23" cy="22" rx="4.5" ry="4" fill={color} />
    <ellipse cx="35" cy="22" rx="7" ry="5.5" fill={color} />
    <circle cx="10" cy="20" r="1.2" fill="white" />
    <path d="M9 17 Q4 8 2 5" stroke={color} strokeWidth="1.2" fill="none" />
    <path d="M13 16 Q10 7 7 4" stroke={color} strokeWidth="1.2" fill="none" />
    <line x1="19" y1="26" x2="15" y2="34" stroke={color} strokeWidth="1.2" />
    <line x1="23" y1="26" x2="23" y2="35" stroke={color} strokeWidth="1.2" />
    <line x1="27" y1="26" x2="31" y2="34" stroke={color} strokeWidth="1.2" />
    <line x1="19" y1="18" x2="15" y2="10" stroke={color} strokeWidth="1.2" />
    <line x1="23" y1="18" x2="23" y2="10" stroke={color} strokeWidth="1.2" />
    <line x1="27" y1="18" x2="31" y2="10" stroke={color} strokeWidth="1.2" />
  </svg>
);

const TEXAS_METROS = [
  { name: 'Dallas-Fort Worth', lat: 32.7767, lng: -96.7970, pop: '8.1M' },
  { name: 'Houston', lat: 29.7604, lng: -95.3698, pop: '7.5M' },
  { name: 'San Antonio', lat: 29.4241, lng: -98.4936, pop: '2.8M' },
  { name: 'Austin', lat: 30.2672, lng: -97.7431, pop: '2.6M' },
];

const TEXAS_GEOJSON_URL = 'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json';

function TexasMap() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

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
        center: [31.0, -97.5],
        zoom: 6,
        minZoom: 5,
        maxZoom: 9,
        zoomControl: false,
        scrollWheelZoom: false,
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      fetch(TEXAS_GEOJSON_URL)
        .then(r => r.json())
        .then(geojson => {
          const texas = geojson.features.find(f => f.properties.name === 'Texas');
          if (texas) {
            L.geoJSON(texas, {
              style: {
                fillColor: '#423DF9',
                fillOpacity: 0.08,
                weight: 2.5,
                color: '#423DF9',
                opacity: 0.5,
              },
            }).addTo(map);
          }
        });

      const routes = [];
      for (let i = 0; i < TEXAS_METROS.length; i++) {
        for (let j = i + 1; j < TEXAS_METROS.length; j++) {
          routes.push([
            [TEXAS_METROS[i].lat, TEXAS_METROS[i].lng],
            [TEXAS_METROS[j].lat, TEXAS_METROS[j].lng],
          ]);
        }
      }
      routes.forEach(coords => {
        L.polyline(coords, {
          color: '#423DF9',
          weight: 2,
          opacity: 0.3,
          dashArray: '8 6',
        }).addTo(map);
      });

      TEXAS_METROS.forEach(metro => {
        const popNum = parseFloat(metro.pop);
        const radius = Math.max(12, popNum * 4);

        L.circleMarker([metro.lat, metro.lng], {
          radius: radius,
          fillColor: '#423DF9',
          fillOpacity: 0.2,
          color: '#423DF9',
          weight: 2,
          opacity: 0.6,
        }).addTo(map);

        L.circleMarker([metro.lat, metro.lng], {
          radius: 5,
          fillColor: '#423DF9',
          fillOpacity: 1,
          color: '#fff',
          weight: 2,
        }).addTo(map);

        const icon = L.divIcon({
          className: 'texas-metro-label',
          html: '<div style="background:white;border:1.5px solid #423DF9;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;color:#1D0652;white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,0.12);">' + metro.name + ' <span style="color:#423DF9;">' + metro.pop + '</span></div>',
          iconSize: [0, 0],
          iconAnchor: [-10, 12],
        });
        L.marker([metro.lat, metro.lng], { icon }).addTo(map);
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

  return (
    <div>
      <style>{'.texas-metro-label { background: none !important; border: none !important; box-shadow: none !important; }'}</style>
      <div ref={mapRef} style={{ width: '100%', height: '360px', borderRadius: '12px' }} />
    </div>
  );
}

const StatCard = ({ value, label, sublabel, accent = false }) => (
  <div className={`rounded-xl p-5 text-center ${accent ? 'bg-[#423DF9]/5 border border-[#423DF9]/15' : 'bg-gray-50'}`}>
    <div className={`text-2xl sm:text-3xl font-bold ${accent ? 'text-[#423DF9]' : 'text-[#1D0652]'}`}>{value}</div>
    <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
    {sublabel && <div className="text-[10px] text-gray-400 mt-0.5">{sublabel}</div>}
  </div>
);

const RouteRow = ({ from, to, distance, drive, type, note }) => (
  <div className={`flex items-center gap-3 py-3 px-4 rounded-lg ${type === 'cross' ? 'bg-[#423DF9]/5' : 'bg-gray-50'}`}>
    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${type === 'cross' ? 'bg-[#423DF9]' : 'bg-gray-400'}`} />
    <div className="flex-1 min-w-0">
      <div className="text-sm font-semibold text-[#1D0652]">{from} → {to}</div>
      {note && <div className="text-[10px] text-gray-400">{note}</div>}
    </div>
    <div className="text-right flex-shrink-0">
      <div className={`text-sm font-bold ${type === 'cross' ? 'text-[#423DF9]' : 'text-gray-600'}`}>{distance}</div>
      <div className="text-[10px] text-gray-400">{drive}</div>
    </div>
  </div>
);

export default function MarketSizeAnalogy() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1D0652] mb-3">Why Texas, Not Just a City</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">The market size analogy that reframes the conversation</p>
        </div>

        {/* Slide Toggle */}
        <div className="flex justify-center gap-3 mb-10">
          {['Perception', 'Reality'].map((label, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeSlide === i
                  ? 'bg-[#423DF9] text-white shadow-lg shadow-[#423DF9]/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#423DF9]/40 hover:text-[#423DF9]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ===== SLIDE 1: PERCEPTION ===== */}
        {activeSlide === 0 && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="px-6 sm:px-10 pt-8 pb-4 border-b border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D0652]">The Investor's Suggestion</h2>
              <p className="text-[#423DF9] text-lg mt-1 italic">"Just start with one city — prove it there first"</p>
            </div>

            <div className="px-6 sm:px-10 py-12">
              <div className="flex items-end justify-center gap-6 sm:gap-16 mb-10">
                <div className="flex flex-col items-center">
                  <ElephantSVG size={200} color="#1D0652" />
                  <div className="mt-4 text-center">
                    <div className="text-xl font-bold text-[#1D0652]">Uber</div>
                    <div className="text-sm text-gray-500">US Market &bull; 330M people</div>
                    <div className="text-xs text-gray-400 mt-1">76% market share &bull; $28.5B market</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-300 mb-20 sm:mb-24">vs</div>
                <div className="flex flex-col items-center mb-4">
                  <AntSVG size={32} color="#94A3B8" />
                  <div className="mt-4 text-center">
                    <div className="text-base font-bold text-gray-400">AYRO</div>
                    <div className="text-sm text-gray-400">Austin only</div>
                    <div className="text-xs text-gray-300 mt-1">~2.6M people</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl px-6 py-4 max-w-lg mx-auto text-center">
                <p className="text-red-700 text-sm font-medium">
                  Launching in one city makes AYRO an ant competing against an elephant. Why limit ourselves when Texas gives us a much bigger play?
                </p>
              </div>
            </div>

            {/* What Could Go Wrong */}
            <div className="px-6 sm:px-10 py-8 border-t border-gray-100">
              <h3 className="text-lg font-bold text-[#1D0652] mb-1">What Happens When You Launch in One City?</h3>
              <p className="text-xs text-gray-500 mb-6">Every single-city rideshare competitor in the US has failed. Here's why.</p>

              {/* Graveyard */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">The Single-City Graveyard</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: 'Ride Austin', city: 'Austin', years: '2016–2020', detail: 'Nonprofit launched after Uber/Lyft left. Delivered nearly 3M rides. Volume dropped 62% in the first week after Uber/Lyft returned (May 2017). Permanently shut down June 2020.' },
                    { name: 'Fasten', city: 'Boston & Austin', years: '2015–2018', detail: 'Charged drivers flat $0.99/ride. Expanded to Austin during Uber/Lyft absence. Couldn\'t compete after their return — acquired by Russian firm Vezet, US ops ceased March 2018.' },
                    { name: 'Juno', city: 'NYC', years: '2016–2019', detail: 'Raised ~$30M, acquired by Gett for $200M in 2017. Even in the biggest US city, it was losing ~$1M/day. Filed Chapter 11 bankruptcy Nov 2019.' },
                    { name: 'Bridj', city: 'Boston, KC & others', years: '2014–2017', detail: 'Raised $11M for microtransit. Kansas City pilot got only ~1,480 riders in a year vs. projected 200/day. Shut down April 2017 when Toyota deal fell through.' },
                  ].map((c) => (
                    <div key={c.name} className="bg-red-50/50 border border-red-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm font-bold text-[#1D0652]">{c.name}</div>
                        <div className="text-[10px] text-red-400 font-medium">{c.years}</div>
                      </div>
                      <div className="text-[10px] text-red-500 font-medium mb-1.5">{c.city}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{c.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  {
                    icon: '⚔️',
                    title: 'Uber Will Crush You',
                    desc: 'Uber has a proven playbook: surge driver bonuses, rider discounts, below-cost pricing. They can sustain losses in one city indefinitely — offsetting with revenue from hundreds of others. A single-city startup cannot match this.',
                  },
                  {
                    icon: '🔄',
                    title: 'Driver Churn Death Spiral',
                    desc: 'A Stanford/Uber study found 68% of drivers quit within 6 months. Austin\'s labor pool (~2.6M) is 12x smaller than Texas (~31.7M). You\'re constantly replacing most of your drivers from a tiny pool.',
                  },
                  {
                    icon: '⏱️',
                    title: 'Network Density Trap',
                    desc: 'Riders need ETAs under 5 minutes. Austin is 300+ sq miles. With a limited driver fleet, wait times in South Austin, East Austin, and suburbs will be too long. Bad ETAs → riders leave → fewer rides → drivers leave.',
                  },
                  {
                    icon: '⚖️',
                    title: 'One Regulation Away from Death',
                    desc: 'Austin Prop 1 (2016) forced Uber/Lyft out overnight. One city council vote, one unfavorable ruling = your entire business is threatened. No fallback markets.',
                  },
                  {
                    icon: '💸',
                    title: 'Fixed Costs Don\'t Scale Down',
                    desc: 'Engineering, product, support, insurance, legal, compliance — these costs stay the same whether you\'re in 1 city or 20. Austin\'s revenue ceiling is too low to cover them profitably.',
                  },
                  {
                    icon: '📉',
                    title: 'Austin-Specific Macro Risk',
                    desc: 'Austin\'s tech boom slowed in 2023-2024. Dell, Meta, Google, Amazon all cut Austin jobs. Growth is moderating. All eggs in one basket with no hedge against a local downturn.',
                  },
                ].map((risk) => (
                  <div key={risk.title} className="flex gap-3 py-1">
                    <span className="text-lg flex-shrink-0">{risk.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-[#1D0652]">{risk.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{risk.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Austin Prop 1 callout */}
              <div className="mt-6 bg-gradient-to-r from-red-900 to-red-700 rounded-xl px-5 py-4 text-white">
                <div className="text-sm font-semibold mb-1">The Austin Cautionary Tale</div>
                <div className="text-xs text-white/80 leading-relaxed">
                  In December 2015, Austin City Council mandated fingerprint-based background checks for rideshare drivers. On May 7, 2016, voters rejected Prop 1 (Uber/Lyft's repeal attempt, despite their $9M campaign). <strong>Both left Austin on May 9.</strong> Local startups rushed in — Ride Austin, Fasten, GetMe, Fare, Arcade City, InstaRyde. Then Governor Abbott signed HB 100 on May 29, 2017. <strong>Lyft went live at 10:40 AM that day. Uber followed at noon.</strong> Ride Austin's volume dropped 62% in the first week. Fasten sold to a Russian firm. Every local competitor was marginalized or destroyed.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== SLIDE 2: REALITY ===== */}
        {activeSlide === 1 && (
          <div className="space-y-6">
            {/* Main visual */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="px-6 sm:px-10 pt-8 pb-4 border-b border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D0652]">The Real Picture</h2>
                <p className="text-[#423DF9] text-lg mt-1 italic">"We're not an ant — we're a baby elephant"</p>
              </div>

              <div className="px-6 sm:px-10 py-12">
                <div className="flex items-end justify-center gap-6 sm:gap-12 mb-10">
                  <div className="flex flex-col items-center">
                    <ElephantSVG size={200} color="#1D0652" />
                    <div className="mt-4 text-center">
                      <div className="text-xl font-bold text-[#1D0652]">Uber</div>
                      <div className="text-sm text-gray-500">US Market &bull; 330M people</div>
                      <div className="text-xs text-gray-400 mt-1">$28.5B total US rideshare</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-300 mb-20 sm:mb-24">vs</div>
                  <div className="flex flex-col items-center">
                    <BabyElephantSVG size={130} color="#423DF9" />
                    <div className="mt-4 text-center">
                      <div className="text-xl font-bold text-[#423DF9]">AYRO</div>
                      <div className="text-sm text-gray-500">Texas Market &bull; 31.7M people</div>
                      <div className="text-xs text-gray-400 mt-1">$3–4B Texas rideshare TAM</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#423DF9]/5 border border-[#423DF9]/20 rounded-xl px-6 py-4 max-w-xl mx-auto text-center">
                  <p className="text-[#1D0652] text-sm font-medium">
                    Texas is a <strong>$2.9 trillion economy</strong> — the 8th largest in the world. Baby elephants grow up.
                  </p>
                </div>
              </div>
            </div>

            {/* Texas Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard value="31.7M" label="Population" sublabel="2nd largest US state" accent />
              <StatCard value="$2.9T" label="GDP" sublabel="8th largest world economy" accent />
              <StatCard value="#1" label="Population Growth" sublabel="+390K/year, 3 years running" />
              <StatCard value="$3-4B" label="Texas Rideshare TAM" sublabel="~12% of US market" accent />
            </div>

            {/* Texas Metro Map + Details */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="px-6 sm:px-10 pt-8 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-[#1D0652]">Four Mega-Metros, One State Permit</h2>
                <p className="text-gray-500 text-sm mt-1">Texas HB 100 gives one $5K statewide permit — zero reason to go city-by-city</p>
              </div>
              <div className="px-6 sm:px-10 py-8">
                <div className="space-y-6">
                  <TexasMap />
                  <div className="space-y-4">
                    {[
                      { city: 'Dallas-Fort Worth', pop: '8.1M', growth: '+123K/yr', gdp: '$650B+', note: 'Larger economy than Colombia' },
                      { city: 'Houston', pop: '7.5M', growth: '+90K/yr', gdp: '$620B+', note: 'Comparable to Argentina' },
                      { city: 'San Antonio', pop: '2.8M', growth: '+38K/yr', gdp: '', note: '7th largest US city' },
                      { city: 'Austin', pop: '2.6M', growth: '+45K/yr', gdp: '', note: 'Top-5 US tech hub' },
                    ].map((m) => (
                      <div key={m.city} className="flex items-start gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#423DF9] mt-1.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-[#1D0652]">{m.city} <span className="text-gray-400 font-normal">— {m.pop}</span></div>
                          <div className="text-xs text-gray-500">{m.growth} growth{m.gdp ? ` • ${m.gdp} GDP` : ''} • {m.note}</div>
                        </div>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-gray-100">
                      <div className="text-sm font-bold text-[#423DF9]">Combined: 21M+ people in 4 metros</div>
                      <div className="text-xs text-gray-500">All under one single regulatory permit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cross-City vs Within-City Drives */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="px-6 sm:px-10 pt-8 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-[#1D0652]">Cross-City vs Within-City Drives</h2>
                <p className="text-gray-500 text-sm mt-1">Texas metros are close enough for intercity rides — a network advantage city-only players can't capture</p>
              </div>
              <div className="px-6 sm:px-10 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Cross-city routes */}
                  <div>
                    <div className="text-xs font-semibold text-[#423DF9] uppercase tracking-wider mb-3">Cross-City Routes (Intercity Revenue)</div>
                    <div className="space-y-2">
                      <RouteRow from="Austin" to="San Antonio" distance="80 mi" drive="~1h 15m" type="cross" note="I-35 corridor — high commuter & event traffic" />
                      <RouteRow from="Austin" to="Houston" distance="165 mi" drive="~2h 30m" type="cross" note="Airport transfers, business travel" />
                      <RouteRow from="Dallas" to="Houston" distance="240 mi" drive="~3h 30m" type="cross" note="Busiest Texas corridor — $50-80+ fares" />
                      <RouteRow from="Dallas" to="Austin" distance="195 mi" drive="~3h" type="cross" note="Tech corridor — frequent business travel" />
                      <RouteRow from="San Antonio" to="Houston" distance="200 mi" drive="~3h" type="cross" note="Medical & military travel corridor" />
                      <RouteRow from="Dallas" to="San Antonio" distance="275 mi" drive="~4h" type="cross" note="Event & family travel" />
                    </div>
                  </div>

                  {/* Within-city context */}
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Within-City Drives (Comparison)</div>
                    <div className="space-y-2">
                      <RouteRow from="North Dallas" to="South Dallas" distance="30 mi" drive="~40m" type="within" note="Typical cross-metro ride" />
                      <RouteRow from="Katy" to="Downtown Houston" distance="28 mi" drive="~35m" type="within" note="Suburb to downtown" />
                      <RouteRow from="Round Rock" to="Downtown Austin" distance="20 mi" drive="~25m" type="within" note="Tech corridor commute" />
                      <RouteRow from="Avg within-city ride" to="" distance="5-8 mi" drive="~15m" type="within" note="$12-18 avg fare" />
                    </div>

                    <div className="mt-4 bg-[#423DF9]/5 border border-[#423DF9]/15 rounded-lg px-4 py-3">
                      <div className="text-xs font-semibold text-[#1D0652] mb-1">The math:</div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>Avg within-city ride: <strong>$15</strong></div>
                        <div>Cross-city ride (Austin→SA): <strong>$80-120</strong></div>
                        <div>Cross-city ride (DFW→Houston): <strong>$200-300</strong></div>
                      </div>
                      <div className="text-[10px] text-[#423DF9] font-medium mt-2">One cross-city ride = revenue of 5-20 within-city rides</div>
                    </div>
                  </div>
                </div>

                {/* Key insight */}
                <div className="mt-6 bg-gradient-to-r from-[#1D0652] to-[#423DF9] rounded-xl px-5 py-4 text-white">
                  <div className="text-sm font-semibold mb-1">Why this matters for AYRO:</div>
                  <div className="text-xs text-white/80 leading-relaxed">
                    A city-only rideshare app can't serve the Austin→San Antonio rider. AYRO can — because one Texas permit covers every city. Cross-city rides are <strong>higher fare, higher margin</strong>, and create network lock-in: once a rider knows AYRO works between cities, they use it within cities too.
                  </div>
                </div>
              </div>
            </div>

            {/* Why State-Level */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="px-6 sm:px-10 pt-8 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-[#1D0652]">Why State-Level Beats City-by-City</h2>
              </div>
              <div className="px-6 sm:px-10 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                  {[
                    {
                      title: 'One Permit, Total Coverage',
                      desc: 'Texas HB 100 created a single statewide TNC permit through TDLR for $5K/year. It preempts all local regulation. No city-by-city licensing.',
                      icon: '📋',
                    },
                    {
                      title: 'No State Income Tax',
                      desc: 'Drivers keep every dollar. Compare: California takes up to 13.3%, New York up to 10.9%. Texas drivers earn more from the same fare.',
                      icon: '💰',
                    },
                    {
                      title: 'Cross-City Network Effects',
                      desc: 'Austin↔San Antonio (80mi), DFW↔Houston corridor. Drivers follow demand: SXSW in March, Rodeo in February, Cowboys on Sundays.',
                      icon: '🔗',
                    },
                    {
                      title: 'Car-Dependent Sprawl',
                      desc: 'Texas metros rank among America\'s most car-dependent. Limited public transit makes rideshare a necessity, not a luxury.',
                      icon: '🚗',
                    },
                    {
                      title: '"Texas\'s Rideshare" Brand',
                      desc: 'One statewide brand campaign vs. four separate city launches. Texas regional identity is exceptionally strong — Texans buy Texas.',
                      icon: '⭐',
                    },
                    {
                      title: 'Massive Event Economy',
                      desc: 'SXSW, Formula 1, 2026 FIFA World Cup (Dallas + Houston), NFL/NBA/MLB teams, Houston Rodeo — built-in surge demand year-round.',
                      icon: '🏟️',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 py-2">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-[#1D0652]">{item.title}</div>
                        <div className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Precedents */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="px-6 sm:px-10 pt-8 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-[#1D0652]">Companies That Won by Dominating Texas First</h2>
                <p className="text-gray-500 text-sm mt-1">The playbook: own Texas, build fanatical loyalty, then expand nationally</p>
              </div>
              <div className="px-6 sm:px-10 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'H-E-B', detail: '400+ stores, #1 grocer in Texas. Stayed in-state for decades. Competitors avoid Texas because of H-E-B dominance. 92% favorability.' },
                    { name: 'Whataburger', detail: 'Founded in Corpus Christi (1950). Saturated Texas before expanding. Synonymous with Texas identity.' },
                    { name: "Buc-ee's", detail: 'Founded in Clute, TX (1982). Built cult status across Texas highways. Now in 11 states — Texas-first was the strategy.' },
                    { name: 'Dr Pepper', detail: 'Born in Waco. Dominated Texas and the South before becoming a national brand.' },
                  ].map((c) => (
                    <div key={c.name} className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm font-bold text-[#1D0652] mb-2">{c.name}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{c.detail}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-[#423DF9]/5 border border-[#423DF9]/15 rounded-lg px-4 py-3 text-center">
                  <p className="text-xs text-[#1D0652] font-medium">Waymo is also expanding across Texas — validating the multi-city state approach.</p>
                </div>
              </div>
            </div>

            {/* Strategy */}
            <div className="bg-gradient-to-r from-[#1D0652] to-[#423DF9] rounded-2xl px-6 sm:px-10 py-8 text-white">
              <h3 className="text-xl font-bold mb-4">The Strategy: Own Texas, Then Go National</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                  <div>
                    <div className="font-semibold">Launch in Texas</div>
                    <div className="text-white/70 mt-1">Austin, Houston, Dallas, San Antonio — 21M+ people across 4 metros, one permit</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                  <div>
                    <div className="font-semibold">Dominate the State</div>
                    <div className="text-white/70 mt-1">Build density, prove unit economics, become the Texas rideshare brand</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                  <div>
                    <div className="font-semibold">Go National</div>
                    <div className="text-white/70 mt-1">The baby elephant becomes the elephant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
