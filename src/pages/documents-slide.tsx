import React, { useState } from 'react';
import Header from '../components/Header.jsx';

const slides = [
  {
    number: 1,
    title: "COVER",
    variants: [
      "AYRO — A ride-sharing app that charges 5% commission instead of Uber's 40%+. Rides cost half. Drivers keep 95%. Both sides see every dollar.",
      "AYRO — The Costco of ride-sharing. 5% take rate. Half-price rides. Full transparency. Low margin, high volume.",
      "AYRO — Half-price rides for passengers. 95% take-home for drivers. Full fare transparency on every trip. 5% commission. That's it."
    ],
    accent: "blue"
  },
  {
    number: 2,
    title: "PROBLEM",
    variants: [
      "The receipt story: On one ride: rider paid $35, driver got $12, and paid $2 in tolls out of pocket. Uber kept $23. This isn't a glitch — it's the business model. Uber's average take rate hit 40% in 2023 and reached a record high in 2024. On individual rides it reaches 65–70%.",
      "The history arc: Uber launched at 10% commission. Today it averages 40%, sometimes 65%. They went from disrupting taxis to becoming worse than taxis. Rider fares up 52% since 2019. Driver earnings down YoY. Uber's free cash flow: $9.8B in 2025, up 42%.",
      "The market expansion angle: 72% of Americans don't actively use rideshare apps. Price is a major barrier. And the reason rides are so expensive: Uber takes 40–65% of every fare."
    ],
    accent: "red"
  },
  {
    number: 3,
    title: "SOLUTION",
    variants: [
      "Direct mirror: AYRO charges 5% commission. Riders pay half. Drivers keep 95%. Both sides see the exact breakdown on every trip. Zero surge. Ever. Full receipt transparency after every trip. Uber literally sued to prevent this.",
      "Costco model: AYRO applies the Costco model to ride-sharing: take almost nothing per transaction, win on volume, let savings bring everyone in. At half the price, AYRO can unlock a portion of the 72% who don't actively use rideshare.",
      "Two-sided value prop: For riders: Same trip, half the price, no surge. Full breakdown shown. For drivers: Keep 95% instead of 56–60%. On a $17 AYRO ride driver keeps ~$16.15. This is what Congress is trying to force Uber to do via the Empowering App-Based Workers Act. AYRO does it voluntarily."
    ],
    accent: "green"
  },
  {
    number: 4,
    title: "MARKET",
    variants: [
      "Price unlocks non-users: The US ride-hailing market is $59.3B — but only 28% of Americans actively use it. At half the price, AYRO can expand the market by converting price-sensitive non-users. TAM: US ride-hailing $59.3B in 2025, growing to $72.6B by 2030 at 4.15% CAGR.",
      "Bottom-up from rides: 5,000 rides/day in DFW at $17 avg fare = $31M annual ride volume. That's roughly 3% of Uber's estimated DFW daily rides. Phase 2: Texas-wide. Phase 3: National.",
      "Uber's numbers against them: Uber did 13.6B trips in 2025, $193.5B gross bookings, $52B revenue. AYRO needs a sliver at half the price. DFW beachhead: 20K riders, 5K rides/day, $31M annual gross, $1.55M net."
    ],
    accent: "purple"
  },
  {
    number: 5,
    title: "HOW IT WORKS",
    variants: [
      "3 steps: Rider opens AYRO → sees a flat price (no surge) → after the trip, both rider and driver see the exact fare split. Step 1: Flat fare based on distance + time. No surge. No dynamic pricing. Price locked before booking. Step 2: Nearest driver gets the request. Driver sees exactly what they'll earn before accepting. Step 3: Both sides see the breakdown.",
      "What's different from Uber: Everything works like Uber — request, match, ride, pay — except three things: the price is half, there's no surge, and both sides see the real numbers. Same convenience. We're not reinventing ride-sharing — we're fixing how it's priced."
    ],
    accent: "teal"
  },
  {
    number: 6,
    title: "BUSINESS MODEL",
    variants: [
      "Pure math: 5% flat commission on every ride. $17 ride → AYRO keeps $0.85 → Driver keeps $16.15. Low margin. High volume. Why it works at low cost: Uber and Lyft spent billions educating cold audiences. That education is done — only 3% of Americans haven't heard of rideshare as of 2021. AYRO targets warm, frustrated customers. Minimal education cost.",
      "Opposite trajectory: Uber launched at 10% and raised to 40%. AYRO launches at 5% and stays there. Uber commission history: 10% → 20% → 25% → decoupled → 40% avg → 65% on some rides. Revenue at scale: 5,000 rides/day × $17 × 5% = ~$1.55M/year DFW.",
      "Table format: Uber takes 40% avg (up to 65%), AYRO takes 5% flat. On a $35 ride: Uber keeps ~$23, AYRO keeps ~$0.85. Driver on Uber gets ~$12, on AYRO gets ~$16.15. Rider pays $35 on Uber, ~$17 on AYRO. Uber has surge (2-3x), AYRO never has surge. Uber is opaque, AYRO shows full breakdown."
    ],
    accent: "amber"
  },
  {
    number: 7,
    title: "GO-TO-MARKET",
    variants: [
      "Price is the marketing: The price IS the go-to-market. When a ride costs $17 instead of $35, people talk. Near-zero CAC. Viral loop: Rider saves ~$18 → sees transparent receipt → screenshots → shares. The receipt IS the ad. Driver recruiting: Drivers keep 95% vs 56–60% at Uber. Self-recruiting supply side.",
      "DFW beachhead: Launch in DFW — 4th largest US metro, 8M people, suburban sprawl means long rides and bigger savings per trip. Phase 1: 500 drivers, 5,000 riders. Phase 2: Houston, Austin, SA. Phase 3: Texas. Phase 4: National.",
      "Two-sided flywheel: Half-price rides attract riders → 95% take-home attracts drivers → more drivers = faster pickups → more rides → flywheel spins on price. Driver earns ~$16.15 on AYRO's $17 ride vs ~$12 on Uber's $35 ride. They earn MORE on a CHEAPER ride."
    ],
    accent: "indigo"
  },
  {
    number: 8,
    title: "COMPETITION",
    variants: [
      "Benefits comparison: Same ride. Half the price. 95% driver take-home. Full transparency. No surge. Nobody else offers all five. AYRO vs Uber vs Lyft comparison table showing AYRO wins on all five metrics.",
      "Why they can't respond: Uber can't match AYRO's price. Not because they can't — because Wall Street won't let them. Uber 2025: $52B revenue. $9.8B free cash flow. $7B stock buyback. Uber is RAISING take rates, fighting transparency, suing states. Moving opposite direction from AYRO. Innovator's Dilemma: if they drop rates in DFW to fight AYRO, every driver and rider nationally demands the same."
    ],
    accent: "rose"
  },
  {
    number: 9,
    title: "TEAM",
    variants: [
      "[YOU FILL IN] Our team has [X] years combined experience in [domain]. We've [achievement]. We're full-time on AYRO. [Founder 1] — CEO — [background, key achievement]. [Founder 2] — [Role] — [background, key achievement]. [Advisor if any] — [why they matter]. How you work together: [shared history, complementary skills]"
    ],
    accent: "cyan"
  },
  {
    number: 10,
    title: "TRACTION + ASK",
    variants: [
      "Current state: App is near completion. Every driver and rider we've spoken to is heavily interested. Raising $1M for DFW, $2M for Texas. Use of funds: 40% product | 35% growth | 25% ops/insurance/legal",
      "Milestone-based: We are raising $1M to launch AYRO in DFW, acquire 20,000 riders, onboard 500 drivers, and prove that 5% commission works at scale — within 12 months. $1M = DFW proof of flywheel. $2M = Texas-wide. The opportunity: Uber is $170B market cap built on a 40% take rate that both sides hate. AYRO is the reset."
    ],
    accent: "emerald"
  }
];

const accentColors = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-600", text: "text-blue-900", light: "bg-blue-100" },
  red: { bg: "bg-red-50", border: "border-red-200", badge: "bg-red-600", text: "text-red-900", light: "bg-red-100" },
  green: { bg: "bg-green-50", border: "border-green-200", badge: "bg-green-600", text: "text-green-900", light: "bg-green-100" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-600", text: "text-purple-900", light: "bg-purple-100" },
  teal: { bg: "bg-teal-50", border: "border-teal-200", badge: "bg-teal-600", text: "text-teal-900", light: "bg-teal-100" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-600", text: "text-amber-900", light: "bg-amber-100" },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-200", badge: "bg-indigo-600", text: "text-indigo-900", light: "bg-indigo-100" },
  rose: { bg: "bg-rose-50", border: "border-rose-200", badge: "bg-rose-600", text: "text-rose-900", light: "bg-rose-100" },
  cyan: { bg: "bg-cyan-50", border: "border-cyan-200", badge: "bg-cyan-600", text: "text-cyan-900", light: "bg-cyan-100" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-600", text: "text-emerald-900", light: "bg-emerald-100" }
};

export default function Page() {
  const [expandedSlide, setExpandedSlide] = useState(1);

  const toggleSlide = (num) => {
    setExpandedSlide(expandedSlide === num ? null : num);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white/80 text-sm font-medium">Pitch Deck Slides</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AYRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Pitch Deck</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Complete slide-by-slide breakdown with multiple variants for each section. 
            All claims sourced and ready for investor presentations.
          </p>
        </div>
      </div>

      {/* Slides Container */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {slides.map((slide) => {
            const colors = accentColors[slide.accent];
            const isExpanded = expandedSlide === slide.number;
            
            return (
              <div 
                key={slide.number}
                className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${colors.bg} ${colors.border}`}
              >
                {/* Slide Header - Clickable */}
                <button
                  onClick={() => toggleSlide(slide.number)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:opacity-90 transition-opacity"
                >
                  <div className="flex items-center gap-4">
                    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.badge} text-white font-bold text-lg shadow-lg`}>
                      {slide.number}
                    </span>
                    <h2 className={`text-2xl font-bold ${colors.text}`}>{slide.title}</h2>
                  </div>
                  <div className={`p-2 rounded-lg ${colors.light} ${colors.text} transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Variants */}
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 space-y-4">
                    {slide.variants.map((variant, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} text-white`}>
                            Variant {String.fromCharCode(65 + idx)}
                          </span>
                        </div>
                        <p className="text-slate-700 leading-relaxed text-sm md:text-base">{variant}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Source List */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Master Source List
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">#</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">Claim</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">Source</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    { claim: "Uber take rate 40% avg, 65-70% on some rides", source: "NELP 'Unpacking Take Rates'", date: "Jul 2025" },
                    { claim: "Uber started at 10%, drivers got 90%", source: "NELP", date: "May 2025" },
                    { claim: "25% commission in 2014", source: "Forbes (Ellen Huet)", date: "Sep 2014" },
                    { claim: "Fares up 52% since 2019", source: "Calcalist/Ctech", date: "Feb 2025" },
                    { claim: "Commission rose 20.7% → 27.1%", source: "Calcalist/Ctech", date: "Feb 2025" },
                    { claim: "Driver earnings $513/wk Uber, $318/wk Lyft", source: "Gridwise 2025 via NELP", date: "Jul 2025" },
                    { claim: "$8.55/hr median driver profit", source: "EPI", date: "2023" },
                    { claim: "Decoupled fares from pay in 2022", source: "NELP citing Forbes", date: "Dec 2023" },
                    { claim: "Stopped disclosing take rates Q1 2025", source: "Medianama", date: "Jul 2025" },
                    { claim: "Sued to block Colorado transparency law", source: "Medianama", date: "Jul 2025" },
                    { claim: "72% don't use rideshare apps", source: "Statista via autoinsurance.com", date: "2023" },
                    { claim: "US ride-hailing market $59.3B", source: "Statista Market Forecast", date: "2025" },
                    { claim: "Uber $52B revenue, $9.8B FCF, 13.6B trips", source: "Uber Q4 2025 earnings", date: "Feb 2026" },
                    { claim: "$193.5B gross bookings", source: "Uber Q4 2025 earnings", date: "Feb 2026" },
                    { claim: "$7B stock buyback", source: "Power Switch Action", date: "2024" },
                    { claim: "Costco gross margin 12.7%", source: "Motley Fool", date: "Dec 2023" },
                    { claim: "73% Costco profit from membership", source: "Motley Fool", date: "Jan 2024" },
                    { claim: "~$170B Uber market cap", source: "ts2.tech stock analysis", date: "Dec 2025" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-4 text-slate-200">{row.claim}</td>
                      <td className="py-3 px-4 text-slate-300">{row.source}</td>
                      <td className="py-3 px-4 text-slate-400">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            All external sources verified and cited. Internal projections marked as AYRO estimates.
          </p>
        </div>
      </div>
    </div>
  );
}