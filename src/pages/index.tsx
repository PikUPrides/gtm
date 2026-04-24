
import { Link } from '../api/sdk.js';
import Header from '../components/Header.jsx';

const sections = [
  {
    eyebrow: 'Go-to-Market',
    title: 'GTM',
    desc: 'Strategy, metrics, unit economics, and customer proof — everything needed to scale AYRO.',
    color: '#423DF9',
    items: [
      { title: 'GTM Strategy Doc', desc: '55+ channels across paid, organic, hyperlocal, community, CRM, and partnerships.', path: '/gtm', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
      { title: 'Metrics Dashboard', desc: 'Current KPIs and trailing 4-week trends across riders, drivers, and platform health.', path: '/metrics-dashboard', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
      { title: 'Cohort Retention', desc: 'Week-over-week retention heatmaps for driver and rider cohorts.', path: '/cohort-retention', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
      { title: 'Unit Economics', desc: 'Per-ride P&L, CAC/LTV by channel, and contribution margin analysis.', path: '/unit-economics', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v1' },
      { title: 'Customer Testimonials', desc: 'Real voices from AYRO drivers and riders — social proof that powers growth.', path: '/testimonials', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    ],
  },
  {
    eyebrow: 'Competitive Intelligence',
    title: 'Competitors',
    desc: "Know the enemy — Uber's structural weaknesses, what killed other competitors, and how AYRO is different.",
    color: '#EF4444',
    items: [
      { title: "Uber's Margin Trap", desc: "Why Uber can't drop to 5% — 5 structural reasons they're trapped.", path: '/documents/ubers-moat', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
      { title: 'How Lyft Survived', desc: "The ONLY US competitor that survived Uber's full assault — and where AYRO is stronger.", path: '/documents/how-lyft-survived', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
      { title: 'Empower NYC Validation', desc: "Real-world proof from NYC — tens of thousands of rides at 50-60% less than Uber.", path: '/documents/empower-nyc-validation', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
      { title: 'Counter-Strategy', desc: '8 ways Uber/Lyft could attack AYRO — and the playbook to survive each one.', path: '/documents/counter-strategy', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
    ],
  },
  {
    eyebrow: 'Competitive Advantage',
    title: 'Why We WIN',
    desc: "AYRO's four structural pillars — half the price, no surge, transparency, and sustainable margins.",
    color: '#10B981',
    items: [
      { title: 'Why We WIN', desc: 'The four pillars of competitive advantage that set AYRO apart.', path: '/documents/sword', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    ],
  },
  {
    eyebrow: 'Data & Research',
    title: 'Market Research',
    desc: 'US demographic data and market intelligence to power targeting decisions.',
    color: '#08D9C4',
    items: [
      { title: 'US Market Data', desc: 'Interactive demographic map — population, age, income by state for GTM targeting.', path: '/data', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    ],
  },
  {
    eyebrow: 'Brand Identity',
    title: 'Branding',
    desc: 'Official brand guidelines, logo files, app icons, and marketing assets.',
    color: '#7742F1',
    items: [
      { title: 'Brand Assets', desc: 'Logos, guidelines PDF, app icon variants, and downloadable assets.', path: '/brand', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fafafe]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Header />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, #7742F1 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 relative z-10">
          <p className="text-[#08D9C4] text-xs font-bold uppercase tracking-[0.2em] mb-3">Internal Platform</p>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">AYRO Marketing Hub</h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl">GTM strategy, competitive intelligence, market data, and brand assets — everything the AYRO team needs in one place.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {sections.map((section, si) => (
          <div key={section.title} className={si > 0 ? 'mt-12' : ''}>
            <div className="mb-5">
              <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: section.color }}>{section.eyebrow}</div>
              <h2 className="text-2xl font-extrabold text-[#1D0652] mb-1">{section.title}</h2>
              <p className="text-gray-500 text-sm max-w-2xl">{section.desc}</p>
            </div>
            <div className={`grid grid-cols-1 ${section.items.length === 1 ? 'sm:grid-cols-1 max-w-lg' : section.items.length <= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-4`}>
              {section.items.map(item => (
                <Link key={item.path} to={item.path} className="group block rounded-xl bg-white border border-gray-200/80 hover:shadow-lg hover:shadow-[#423DF9]/8 hover:-translate-y-1 transition-all duration-200 overflow-hidden">
                  <div className="h-1 w-full" style={{ background: section.color }} />
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: section.color + '15' }}>
                        <svg className="w-4 h-4" style={{ color: section.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d={item.icon} />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-[#1D0652] text-base font-bold mb-1.5 group-hover:text-[#423DF9] transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: section.color }}>
                      Open
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
