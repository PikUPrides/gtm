
import Header from '../components/Header.jsx';

export default function WhyWeWin() {
  const advantages = [
    {
      num: '01',
      title: 'Half the price',
      description: "Our competitive pricing model ensures customers pay significantly less than traditional alternatives.",
      color: '#423DF9',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      num: '02',
      title: 'No surge pricing',
      description: "Consistent, predictable pricing with no unexpected spikes during high-demand periods.",
      color: '#08D9C4',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
    {
      num: '03',
      title: 'Transparency',
      description: "Clear, upfront pricing with no hidden fees or surprise charges ever.",
      color: '#10B981',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    },
    {
      num: '04',
      title: 'Low margin, high volume',
      description: "Efficient operations allow us to maintain low margins while serving more customers.",
      color: '#7742F1',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
  ];

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12 relative z-10">
          <p className="text-[#08D9C4] text-xs font-bold uppercase tracking-[0.2em] mb-2">Competitive Advantage</p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">Why We WIN</h1>
          <p className="text-white/70 text-base max-w-xl">AYRO's four pillars of competitive advantage that set us apart in the market.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {advantages.map((item) => (
            <div key={item.num} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:shadow-[#423DF9]/8 hover:-translate-y-1 transition-all duration-200">
              <div className="h-1 w-full" style={{ background: item.color }} />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color + '15' }}>
                    <svg className="w-5 h-5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>{item.num}</div>
                    <h3 className="text-lg font-extrabold text-[#1D0652] mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-gray-400 text-sm flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-gray-200" />
          Four pillars. One mission.
          <span className="w-12 h-px bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
