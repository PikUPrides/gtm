import React from 'react';
import { Link } from '../api/sdk.js';
import Header from '../components/Header.jsx';

const compare = [['Capital Source','Personal wealth','Pooled fund / LPs'],['Check Size','$10K-$500K','$1M-$20M+'],['Decision Driver','Founder + problem belief','Metrics, scale, exit path'],['Traction Required','MVP, waitlist, early validation','MRR, ARR, growth rates'],['Speed to Close','Weeks','Months'],['Deck Tone','Story-driven, founder-first','Data-heavy, investment memo']];

const evaluate = [
  {label:'Founder-Market Fit',desc:'Why YOU are the right person. Domain knowledge, personal experience with the pain, or a technical edge.'},
  {label:'Problem Is Real & Urgent',desc:'They want to feel urgency. If they can\'t grasp why it matters NOW, they won\'t move forward.'},
  {label:'Early Validation',desc:'Not revenue \u2014 proof. MVP with users, waitlist signups, pilot customers, letters of intent.'},
  {label:'Team Quality',desc:'Angels invest in people, not products. Relevant domain expertise, complementary skills, prior startup experience.'},
  {label:'Big Enough Market',desc:'Even a small slice should be meaningful. Show the TAM is large enough to justify the investment.'},
  {label:'Clarity & Conviction',desc:'Angels spend 2\u20135 minutes reviewing a deck. Clarity is respect for their time \u2014 and a signal you can sell.'},
];

const slides = [
  {num:1,name:'Title / Cover',tip:'Company name, one-line description, your name, contact. No clutter.'},
  {num:2,name:'Problem',tip:'Make the pain vivid and personal. Use a real scenario or data point.'},
  {num:3,name:'Solution',tip:'How your product solves the problem. Keep it simple \u2014 one core value proposition.'},
  {num:4,name:'Why Now',tip:'Market timing, regulatory changes, tech shifts that make this possible today.'},
  {num:5,name:'Market Size',tip:'TAM/SAM/SOM. For angels, focus on SAM \u2014 the realistic addressable market.'},
  {num:6,name:'Product / Demo',tip:'Screenshots, mockups, or a quick demo. Show, don\'t just tell.'},
  {num:7,name:'Traction',tip:'Users, revenue, waitlist, partnerships, LOIs. Any proof of momentum.'},
  {num:8,name:'Business Model',tip:'How you make money. Keep it to 1\u20132 revenue streams max.'},
  {num:9,name:'Team',tip:'Founder photos, titles, relevant experience. Why THIS team wins.'},
  {num:10,name:'The Ask',tip:'How much you\'re raising, what it funds, milestones it unlocks.'},
];

const mistakes = ['Sending the same deck to angels and VCs','Overloading with financial projections at seed stage','No clear ask amount or use of funds','Too many slides (keep it under 15)','Walls of text instead of visual storytelling','Ignoring the competitive landscape entirely','Generic TAM numbers without SAM focus','Missing the "Why Now" narrative'];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto p-6 pt-48">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{background:'#f3eeff',color:'#6b21a8',border:'1px solid #d8ccf5'}}>Full Research Guide</div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">How to Craft a Pitch Deck for Angel Investors & Seed Funding</h2>
          <p className="text-gray-500 text-base">A complete, research-backed playbook for early-stage founders raising pre-seed or seed capital &mdash; not VC.</p>
        </div>

        <div className="mb-8 rounded-xl p-6 bg-white border border-gray-200" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
          <div className="flex items-center gap-2.5 mb-4"><div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black" style={{background:'#6b21a8'}}>1</div><h3 className="text-gray-900 font-bold text-xl">Angel vs. VC &mdash; Why Your Deck Must Be Different</h3></div>
          <p className="text-gray-600 text-base mb-5 leading-relaxed">Angels invest personal money with higher risk appetite and faster decisions. VCs manage pooled funds requiring outsized returns. An angel deck is story-driven and founder-first; a VC deck is data-heavy and metric-driven.</p>
          <div className="overflow-x-auto"><table className="w-full"><thead><tr><th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm border-b border-gray-100">Factor</th><th className="text-left py-3 px-4 font-semibold text-sm border-b border-gray-100" style={{color:'#6b21a8'}}>Angel / Seed</th><th className="text-left py-3 px-4 font-semibold text-sm border-b border-gray-100" style={{color:'#007aff'}}>VC (Later Stage)</th></tr></thead>
          <tbody>{compare.map((r,i)=>(<tr key={i} className="border-b border-gray-50"><td className="py-3 px-4 text-gray-800 font-medium text-sm">{r[0]}</td><td className="py-3 px-4 text-gray-600 text-sm">{r[1]}</td><td className="py-3 px-4 text-gray-600 text-sm">{r[2]}</td></tr>))}</tbody></table></div>
        </div>

        <div className="mb-8 rounded-xl p-6 bg-white border border-gray-200" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
          <div className="flex items-center gap-2.5 mb-4"><div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black" style={{background:'#6b21a8'}}>2</div><h3 className="text-gray-900 font-bold text-xl">What Angel Investors Actually Evaluate</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{evaluate.map((e,i)=>(<div key={i} className="rounded-lg p-4 bg-gray-50 border border-gray-100"><div className="text-gray-900 font-semibold text-base mb-1">{e.label}</div><div className="text-gray-600 text-sm leading-relaxed">{e.desc}</div></div>))}</div>
        </div>

        <div className="mb-8 rounded-xl p-6 bg-white border border-gray-200" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
          <div className="flex items-center gap-2.5 mb-4"><div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black" style={{background:'#6b21a8'}}>3</div><h3 className="text-gray-900 font-bold text-xl">Slide-by-Slide Breakdown (10&ndash;12 Slides)</h3></div>
          <div className="space-y-3">{slides.map(s=>(<div key={s.num} className="flex items-start gap-3 rounded-lg p-4 bg-gray-50 border border-gray-100"><div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{background:'#f3eeff',color:'#6b21a8'}}>{s.num}</div><div><div className="text-gray-900 font-semibold text-base">{s.name}</div><div className="text-gray-600 text-sm leading-relaxed">{s.tip}</div></div></div>))}</div>
        </div>

        <div className="mb-8 rounded-xl p-6 bg-white border border-gray-200" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
          <div className="flex items-center gap-2.5 mb-4"><div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black" style={{background:'#6b21a8'}}>4</div><h3 className="text-gray-900 font-bold text-xl">Common Mistakes to Avoid</h3></div>
          <div className="space-y-3">{mistakes.map((m,i)=>(<div key={i} className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-sm font-bold flex-shrink-0">&times;</span><span className="text-gray-600 text-base">{m}</span></div>))}</div>
        </div>

        {/* EMPOWER INSURANCE SECTION */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 p-6 md:p-8" style={{boxShadow:'0 4px 12px rgba(220,38,38,0.1)'}}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-700 text-xs font-bold mb-4">
              ⚠️ INVESTOR ALERT: The "Empower" Competitor Does NOT Provide Insurance
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-5">Emprove's Insurance Time Bomb — Why AYRO Is Different</h3>
            
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="text-red-600 font-semibold">Empower's own FAQ:</span> "Empower does not currently provide insurance to drivers; however, we are working on establishing relationships with insurance carriers..."
                  </p>
                  <p className="text-gray-400 text-xs mt-1 italic">Source: faq.driveempower.com</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="text-red-600 font-semibold">Class action (Dec 2022):</span> "Empower neither supplies auto insurance to its drivers nor requires them to maintain any coverage, and conducts no background checks."
                  </p>
                  <p className="text-gray-400 text-xs mt-1 italic">Source: ClassAction.org</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="text-red-600 font-semibold">DC shutdown (Oct 2025):</span> Empower agreed to suspend ride operations in Washington D.C. after legal pressure.
                  </p>
                  <p className="text-gray-400 text-xs mt-1 italic">Source: Substack</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="text-orange-600 font-semibold">Insurance gap:</span> Uber/Lyft carry $1M liability coverage. Empower carries ZERO.
                  </p>
                  <p className="text-gray-400 text-xs mt-1 italic">Source: Blaszkow Legal</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="text-orange-600 font-semibold">Penalties:</span> Drivers face $500 fines, vehicle owners up to $10,000 in NYC.
                  </p>
                  <p className="text-gray-400 text-xs mt-1 italic">Source: NYC TLC</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="text-red-600 font-semibold">Business model:</span> "Entire business model designed to evade insurance requirements."
                  </p>
                  <p className="text-gray-400 text-xs mt-1 italic">Source: ClassAction.org</p>
                </div>
              </div>
            </div>

            {/* Summary Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-red-50 to-orange-50">
                    <th className="text-left py-3 px-4 text-gray-600 font-bold">Question</th>
                    <th className="text-left py-3 px-4 text-red-600 font-bold">Answer</th>
                    <th className="text-left py-3 px-4 text-gray-500 font-bold">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 text-gray-600">TNC commercial policy?</td>
                    <td className="py-2 px-4 text-red-600 font-semibold">NO</td>
                    <td className="py-2 px-4 text-gray-400">Empower FAQ</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 text-gray-600">Requires rideshare insurance?</td>
                    <td className="py-2 px-4 text-red-600 font-semibold">NO</td>
                    <td className="py-2 px-4 text-gray-400">Class action</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 text-gray-600">Background checks?</td>
                    <td className="py-2 px-4 text-red-600 font-semibold">NO</td>
                    <td className="py-2 px-4 text-gray-400">Class action</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 text-gray-600">Legal trouble?</td>
                    <td className="py-2 px-4 text-red-600 font-semibold">YES — class action, DC shut down</td>
                    <td className="py-2 px-4 text-gray-400">Multiple</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* AYRO Positioning */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200">
              <h4 className="text-lg font-bold text-gray-900 mb-2">📍 What This Means for AYRO</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="text-red-600 font-semibold">100% confirmed:</span> Empower's low prices are partly because they skip insurance entirely. That's a <span className="text-red-600 font-bold">ticking time bomb</span> — one fatal accident with no coverage = company-ending litigation.
              </p>
              <div className="p-3 rounded-lg bg-white border border-cyan-200">
                <p className="text-gray-800 font-medium">
                  "Empower proved the demand for half-price rides. But they did it by skipping insurance — no coverage, no background checks, and they got shut down in DC. <span className="text-cyan-600 font-bold">AYRO delivers the same pricing but with full TNC insurance, full transparency, and full compliance. We're Empower's economics done legally.</span>"
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}