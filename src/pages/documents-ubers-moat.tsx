import React from 'react';
import Header from '../components/Header.jsx';

export default function UbersMoat() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-16 pt-32">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/20 border border-red-500/50 rounded-full px-4 py-1.5 mb-6">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Competitive Moat Analysis</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            WHY UBER CAN'T DROP TO 5%
          </h1>
          <p className="text-xl text-slate-400">Your Unfair Advantage</p>
        </div>

        {/* Moat Points */}
        <div className="space-y-6">
          {/* Point 1 */}
          <div className="bg-gradient-to-r from-red-500/20 to-transparent border-l-4 border-red-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Wall Street won't let them.</h3>
                <p className="text-slate-300 mb-4">
                  Uber just hit its first-ever annual profit in Feb 2024. Uber's free cash flow for 2025 hit $9.8 billion, up 42% from prior year <span className="text-red-400">[Evrim Ağı]</span>. They announced a $7B stock buyback. If they drop take rate to 5%, they instantly wipe out billions in revenue. Wall Street responded by sending the stock price up 12% to an all-time high <span className="text-red-400">[Powerswitchaction]</span> when they announced profits. Going backwards on margins would crash the stock.
                </p>
              </div>
            </div>
          </div>

          {/* Point 2 */}
          <div className="bg-gradient-to-r from-orange-500/20 to-transparent border-l-4 border-orange-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">They're RAISING take rates, not lowering.</h3>
                <p className="text-slate-300 mb-4">
                  From 2019 to end of 2024, Uber increased its commission rate from 20.7% to 27.1% <span className="text-orange-400">[Calcali Tech]</span> (that's their own reported number — real driver-experienced rate is 40%+). From 2019 to mid-2022, the average fare jumped by 63% <span className="text-orange-400">[Calcali Tech]</span>. They're moving in the opposite direction.
                </p>
              </div>
            </div>
          </div>

          {/* Point 3 */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-transparent border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 text-slate-900 font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">They have $52B in annual revenue dependent on high take rates.</h3>
                <p className="text-slate-300 mb-4">
                  Revenue rose 18% to $52.0 billion in 2025 <span className="text-yellow-400">[Evrim Ağı]</span>. Cutting take rate from 40% to 5% across the US would eliminate most of that. They literally can't — it's a publicly traded company with shareholders to answer to.
                </p>
              </div>
            </div>
          </div>

          {/* Point 4 */}
          <div className="bg-gradient-to-r from-amber-500/20 to-transparent border-l-4 border-amber-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 text-slate-900 font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">They're fighting AGAINST transparency.</h3>
                <p className="text-slate-300 mb-4">
                  In January 2025, Uber filed an injunction against a Colorado law requiring them to disclose the portion of fare going to drivers <span className="text-amber-400">[MEDIANAMA]</span>. Uber stopped disclosing its global rideshare take rates as of Q1 2025 <span className="text-amber-400">[MEDIANAMA]</span>. They're hiding, not competing.
                </p>
              </div>
            </div>
          </div>

          {/* Point 5 */}
          <div className="bg-gradient-to-r from-emerald-500/20 to-transparent border-l-4 border-emerald-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-500 text-white font-black text-xl w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">The Innovator's Dilemma.</h3>
                <p className="text-slate-300 mb-4">
                  This is textbook Clayton Christensen. Uber can't disrupt itself. Dropping to 5% in DFW to compete with AYRO means explaining to Wall Street why they're destroying margin in a single market, which then spreads to every market as drivers and riders demand the same rate nationally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Your Moat is Real</h3>
          <p className="text-emerald-100">Uber cannot compete on price without destroying their business model. This is your window.</p>
        </div>
      </div>
    </div>
  );
}