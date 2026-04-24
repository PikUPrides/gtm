
import React from 'react';
import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fafafe]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Header />

      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12 relative z-10">
          <p className="text-[#08D9C4] text-xs font-bold uppercase tracking-[0.2em] mb-2">Competitors · Validation</p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">Empower NYC Validation</h1>
          <p className="text-white/70 text-base max-w-xl">What's happening right now in NYC — and what it proves for AYRO.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

        {/* What Empower Is */}
        <div className="mb-8">
          <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1 text-[#423DF9]">01 · What It Is</div>
          <h2 className="text-2xl font-extrabold text-[#1D0652] mb-3">What Empower Is</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-gray-600 text-sm mb-3">A rideshare app where drivers keep 100% of fares, set their own prices, pay $50–$350/month subscription instead of per-ride commission.</p>
            <div className="space-y-1.5 text-sm text-gray-600">
              <p>• Ride from Bushwick to SoHo: <strong className="text-[#1D0652]">$28</strong> via Empower vs <strong className="text-red-500">$68</strong> Uber vs <strong className="text-red-500">$60</strong> Lyft</p>
              <p>• Tens of thousands of rides per week in NYC</p>
              <p>• Drivers set their own rates, get 100%</p>
              <p>• 25-60% cheaper than Uber</p>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div className="mb-8">
          <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1 text-[#EF4444]">02 · The Big Problem</div>
          <h2 className="text-2xl font-extrabold text-[#1D0652] mb-3">NYC Officials Say It's Illegal</h2>
          <div className="bg-white rounded-xl border border-red-200 p-5">
            <div className="space-y-1.5 text-sm text-gray-700">
              <p>• TLC warns trips may not be insured</p>
              <p>• Dedicated website warning New Yorkers</p>
              <p>• Drivers face fines up to $500</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mb-8">
          <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1 text-[#423DF9]">03 · Comparison</div>
          <h2 className="text-2xl font-extrabold text-[#1D0652] mb-3">Empower vs AYRO</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Empower</th>
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#08D9C4]">AYRO</th>
                </tr>
              </thead>
              <tbody>
                {[['Driver Commission', '0%', '5%'], ['Who Sets Price', 'Driver', 'AYRO (flat rate)'], ['Regulatory', '❌ Illegal', '✅ Licensed'], ['Insurance', '⚠️ May not be', '✅ Handled']].map(([label, emp, ayro], i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-5 py-3 font-semibold text-gray-700">{label}</td>
                    <td className="px-4 py-3 text-gray-500">{emp}</td>
                    <td className="px-4 py-3 font-semibold text-[#1D0652]">{ayro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What AYRO Learns */}
        <div className="mb-8">
          <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1 text-[#423DF9]">04 · Lessons</div>
          <h2 className="text-2xl font-extrabold text-[#1D0652] mb-3">What AYRO Learns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-xs font-bold uppercase tracking-widest mb-2 text-[#10B981]">✅ Proves</div>
              <div className="space-y-1.5 text-sm text-gray-600">
                <p>• Demand is massive</p>
                <p>• Drivers switch immediately</p>
                <p>• Price goes viral ($28 vs $68)</p>
                <p>• Uber IS scared</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-xs font-bold uppercase tracking-widest mb-2 text-[#EF4444]">❌ Got Wrong</div>
              <div className="space-y-1.5 text-sm text-gray-600">
                <p>• Launched without license</p>
                <p>• Drivers set own prices</p>
                <p>• Subscription punishes low-volume</p>
                <p>• Insurance gap</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investor pitch */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 text-[#423DF9]">Pitch for Investors</div>
          <p className="text-sm text-[#1D0652] font-semibold">"Empower proved our thesis in NYC — tens of thousands of rides at 50-60% less than Uber, despite being illegal. AYRO is the same economics with three fixes: full compliance, consistent pricing, and insurance. We're Empower done right."</p>
        </div>

        {/* Insurance deep-dive */}
        <div className="mb-8">
          <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1 text-[#EF4444]">05 · Insurance</div>
          <h2 className="text-2xl font-extrabold text-[#1D0652] mb-3">Confirmed: Empower Does NOT Provide Insurance</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
            <p className="text-gray-600 text-sm italic">"Empower does not currently provide insurance to drivers; however, we are working on establishing relationships with insurance carriers to help provide drivers with the most affordable options."</p>
            <p className="text-xs text-gray-400 mt-2">— Empower FAQ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              ['Empower FAQ', '"Empower does not currently provide insurance to drivers..."'],
              ['Class Action Lawsuit (Dec 2022)', '"The suit claims Empower neither supplies auto insurance nor requires drivers to maintain coverage, and conducts no background checks."'],
              ['DC City Council', 'Empower agreed to suspend ride operations in Washington, D.C. after regulatory pressure.'],
              ['NYC TLC Warning', 'NYC TLC set up a dedicated warning website. Drivers face $500 fines, vehicle owners up to $10,000.'],
              ['Injury Law Firms', '"Uber and Lyft carry $1 million in bodily injury and property damage liability coverage. Empower carries none of this."'],
              ['Rideshare Guy Review', '"Empower does not provide insurance to drivers (you\'ll have to find your own rideshare insurance for now)."'],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="h-1 w-full bg-red-400" />
                <div className="p-4">
                  <div className="text-xs font-bold text-red-500 mb-1">{title}</div>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Question</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Answer</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Source</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Does Empower carry a TNC commercial policy?', 'No', 'Empower FAQ, Class action lawsuit'],
                  ['Does Empower require drivers to have rideshare insurance?', 'No — doesn\'t require OR verify', 'Class action'],
                  ['Does Empower do background checks?', 'No', 'Class action lawsuit'],
                  ['What happens in an accident?', 'Rider and driver are on their own', 'TLC, injury attorneys'],
                  ['Has this caused legal trouble?', 'Yes — class action in DC, shut down in DC, fighting NYC TLC', 'Multiple sources'],
                  ['Is Empower working on adding insurance?', 'They say they\'re "working on it"', 'Empower FAQ'],
                ].map(([q, a, s], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-5 py-3 text-gray-700">{q}</td>
                    <td className="px-4 py-3 font-semibold text-red-500">{a}</td>
                    <td className="px-4 py-3 text-gray-400">{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AYRO positioning */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 text-[#10B981]">What This Means for AYRO</div>
          <p className="text-gray-600 text-sm mb-3">Empower's low prices are partly because they skip insurance entirely. That's a ticking time bomb — one fatal accident with no coverage and it's company-ending litigation.</p>
          <p className="text-sm font-semibold text-[#1D0652]">"Empower proved the demand for half-price rides. But they did it by skipping insurance. AYRO delivers the same pricing but with full TNC insurance, full transparency, and full compliance. We're Empower's economics done legally."</p>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #423DF9 0%, #08D9C4 100%)' }}>
          <div className="p-8 text-center">
            <h3 className="text-xl font-extrabold text-white mb-2">Empower Done Right</h3>
            <p className="text-white/80 text-sm">Same economics. Full compliance. Full insurance. That's AYRO.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
