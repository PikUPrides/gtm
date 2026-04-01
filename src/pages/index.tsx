
import { Link } from '../api/sdk.js';
import Header from '../components/Header.jsx';

const items = [
  { title: 'Rider Marketing', desc: '45+ marketing channels to acquire riders — social, paid ads, influencers, community, and more.', path: '/rider-marketing', tag: 'Growth', color: '#F59E0B', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { title: 'Driver Marketing', desc: 'Driver acquisition channels — recruitment ads, referral programs, fleet partnerships, and incentives.', path: '/driver-marketing', tag: 'Growth', color: '#10B981', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { title: 'US Market Data', desc: 'Interactive US demographic map for GTM targeting — population, age, income by state.', path: '/data', tag: 'Data', color: '#08D9C4', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  { title: 'Go-to-Market Strategy', desc: '55+ channels across paid, organic, hyperlocal, community, CRM, and partnerships.', path: '/gtm', tag: 'Strategy', color: '#423DF9', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'The AYRO Orbit', desc: 'A self-reinforcing mobility ecosystem where drivers, riders, and platform growth continuously strengthen each other.', path: '/ayro-orbit', tag: 'Strategy', color: '#7742F1', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { title: '1 Million Downloads in 90 Days', desc: '3-month phased playbook from soft launch to viral Orbit.', path: '/downloads', tag: 'Growth', color: '#08D9C4', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { title: 'Ed Kang Pitch Deck Template', desc: 'Ultimate guide for early-stage founders on crafting seed-stage pitch decks.', path: '/ed-kang-pitch-deck', tag: 'Fundraising', color: '#3a0ca3', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { title: 'How To Pitch Deck', desc: 'Research-backed playbook for crafting seed-stage pitch decks.', path: '/pitch-deck', tag: 'Fundraising', color: '#120E78', icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z' },
  { title: "Uber's Moat", desc: 'Analysis of Uber competitive moat and market positioning strategies.', path: '/documents/ubers-moat', tag: 'Competitors', color: '#F97316', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { title: 'How Lyft Survived', desc: 'Case study of Lyft competitive strategy and market survival tactics.', path: '/documents/how-lyft-survived', tag: 'Competitors', color: '#EC4899', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Counter-Strategy', desc: 'Competitive response strategies and counter-positioning frameworks.', path: '/documents/counter-strategy', tag: 'Competitors', color: '#EF4444', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { title: 'Empower NYC Validation', desc: 'NYC market validation data and hyperlocal strategy analysis.', path: '/documents/empower-nyc-validation', tag: 'Competitors', color: '#14B8A6', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  { title: 'Sword', desc: 'Strategic framework and competitive intelligence playbook.', path: '/documents/sword', tag: 'Strategy', color: '#6366F1', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Slide', desc: 'Presentation frameworks and visual storytelling for pitch decks.', path: '/documents/slides', tag: 'Fundraising', color: '#8B5CF6', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
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
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">AYRO Marketing Hub</h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl">Strategy assets, market intelligence, and GTM playbooks for the AYRO team.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(item => (
            <Link key={item.path} to={item.path} className="group block rounded-xl bg-white border border-gray-200/80 hover:shadow-lg hover:shadow-[#423DF9]/8 hover:-translate-y-1 transition-all duration-200 overflow-hidden">
              <div className="h-1 w-full" style={{ background: item.color }} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ color: item.color, backgroundColor: item.color + '15', border: `1px solid ${item.color}30` }}>{item.tag}</span>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: item.color + '10' }}>
                    <svg className="w-4.5 h-4.5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[#1D0652] text-base font-bold mb-2 group-hover:text-[#423DF9] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: item.color }}>
                  Explore
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer accent */}
      <div className="h-1" style={{ background: 'linear-gradient(90deg, #1D0652, #423DF9, #08D9C4)' }} />
    </div>
  );
}
