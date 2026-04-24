
import React from 'react';
import Header from '../components/Header.jsx';

const points = [
  { num: 1, title: "Wall Street won't let them.", body: "Uber just hit its first-ever annual profit in Feb 2024. Uber's free cash flow for 2025 hit $9.8 billion, up 42% from prior year. They announced a $7B stock buyback. If they drop take rate to 5%, they instantly wipe out billions in revenue. Wall Street sent the stock price up 12% to an all-time high when they announced profits. Going backwards on margins would crash the stock.", color: '#EF4444' },
  { num: 2, title: "They're RAISING take rates, not lowering.", body: "From 2019 to end of 2024, Uber increased its commission rate from 20.7% to 27.1% (that's their own reported number — real driver-experienced rate is 40%+). From 2019 to mid-2022, the average fare jumped by 63%. They're moving in the opposite direction.", color: '#F97316' },
  { num: 3, title: "They have $52B in annual revenue dependent on high take rates.", body: "Revenue rose 18% to $52.0 billion in 2025. Cutting take rate from 40% to 5% across the US would eliminate most of that. They literally can't — it's a publicly traded company with shareholders to answer to.", color: '#F59E0B' },
  { num: 4, title: "They're fighting AGAINST transparency.", body: "In January 2025, Uber filed an injunction against a Colorado law requiring them to disclose the portion of fare going to drivers. Uber stopped disclosing its global rideshare take rates as of Q1 2025. They're hiding, not competing.", color: '#423DF9' },
  { num: 5, title: "The Innovator's Dilemma.", body: "This is textbook Clayton Christensen. Uber can't disrupt itself. Dropping to 5% in DFW to compete with AYRO means explaining to Wall Street why they're destroying margin in a single market, which then spreads to every market as drivers and riders demand the same rate nationally.", color: '#10B981' },
];

export default function UbersMoat() {
  return (
    <div className="min-h-screen bg-[#fafafe]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Header />

      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12 relative z-10">
          <p className="text-[#08D9C4] text-xs font-bold uppercase tracking-[0.2em] mb-2">Competitors · Moat Analysis</p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">Uber's Margin Trap</h1>
          <p className="text-white/70 text-base max-w-xl">Why Uber can't drop to 5% — your unfair advantage.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="space-y-5 mb-10">
          {points.map((p) => (
            <div key={p.num} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-1 w-full" style={{ background: p.color }} />
              <div className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-extrabold text-base" style={{ backgroundColor: p.color }}>
                  {p.num}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#1D0652] mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #423DF9 0%, #08D9C4 100%)' }}>
          <div className="p-8 text-center">
            <h3 className="text-xl font-extrabold text-white mb-2">Your Moat is Real</h3>
            <p className="text-white/80 text-sm max-w-md mx-auto">Uber cannot compete on price without destroying their business model. This is your window.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
