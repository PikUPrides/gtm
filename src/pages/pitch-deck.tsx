import React from 'react';
import { Link } from '../api/sdk.js';

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
      <header className="flex items-center gap-4 px-6 py-3 bg-white border-b border-gray-200"><img src="https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-03-13%2FMiniMax-M2.5%2F1928270917536846329%2F13d462df23deb3f5078793ad5bd37e73b9a7d0e931c32e1aeaf945e414c1397e..png?Expires=1773484016&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=N2CcNxSprBJdlCsi1nusC4ZPEvI%3D" alt="AYRO" className="h-12 w-auto" /><Link to="/" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Back</Link></header>
      <div className="max-w-4xl mx-auto p-6">
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
      </div>
    </div>
  );
}