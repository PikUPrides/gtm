
import React from 'react';
import Header from '../components/Header.jsx';

const BRAND = { primary: '#423DF9', dark: '#1D0652', teal: '#08D9C4', green: '#10B981', amber: '#F59E0B' };

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: BRAND.primary }}>{eyebrow}</div>
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: BRAND.dark }}>{title}</h2>
      {description && <p className="text-gray-500 text-sm">{description}</p>}
    </div>
  );
}

const attacks = [
  { num: '1', title: 'Predatory pricing', desc: "Uber subsidized below-cost rides to steal Lyft's riders.", color: '#EF4444' },
  { num: '2', title: 'Driver poaching', desc: "Uber employees offering cash to Lyft drivers to switch. They canceled hundreds of rides on Gett and thousands on Lyft.", color: '#F97316' },
  { num: '3', title: 'Executive poaching', desc: "Uber poached Lyft's COO (Travis VanderZanden) and VP of Operations. VanderZanden allegedly downloaded 98,000 confidential Lyft documents before leaving.", color: '#F59E0B' },
  { num: '4', title: 'Fake ride attacks', desc: "Uber engaged in 'clandestine campaigns' with names like 'Project Hell' and 'SLOG' — submitting fraudulent ride requests and cancelling before drivers arrived.", color: '#423DF9' },
  { num: '5', title: 'Capital suffocation', desc: "Uber raised $9 billion in equity and another $1.6 billion in debt over 15 rounds in a 6-year period.", color: '#7742F1' },
  { num: '6', title: 'Acquisition attempt', desc: "Travis Kalanick tried to buy Lyft. Lyft's co-founders turned down the offer.", color: '#10B981' },
];

const survived = [
  { title: 'They nearly died', desc: "In early 2015, Lyft had only about four months' cash left. Uber had just raised over $2.5B. One investor advised founders to shut down.", color: '#EF4444' },
  { title: 'Built a BRAND identity', desc: "Lyft marketed a friendly, whimsical take — 'fist bump,' front seat, conversational driver. Uber was corporate and cold.", color: '#F97316' },
  { title: "Exploited Uber's scandals", desc: "In 2017, Uber imploded: sexual harassment, #DeleteUber, data breach coverup. Lyft's market share jumped from ~20% to ~35%.", color: '#423DF9' },
  { title: 'Formed strategic alliances', desc: "Lyft established alliance with GrabTaxi, Ola, and Didi — Uber's biggest international competitors. GM invested $500M in 2016.", color: '#7742F1' },
  { title: 'Raised just enough capital', desc: "Lyft couldn't outspend Uber, but raised enough to not die. In March 2019, Lyft went public via IPO, raising $2.34B.", color: '#08D9C4' },
  { title: 'Accepted being #2, US-only', desc: "Let Uber fight regulators globally. Focused exclusively on US + Canada while Uber burned cash in 70 countries.", color: '#10B981' },
  { title: 'Network effect has a ceiling', desc: "Once ETAs hit ~4 minutes, adding more drivers doesn't improve rider experience much. Lyft only needed 'good enough' density.", color: '#F59E0B' },
];

const savedFactors = [
  { factor: 'Brand differentiation', action: '"Friend with a car" vs Uber\'s corporate cold image' },
  { factor: "Exploited Uber's mistakes", action: '#DeleteUber (2017) drove millions of riders to Lyft' },
  { factor: 'Strategic alliances', action: 'GM ($500M), Grab, Ola, Didi coalition' },
  { factor: 'US-only focus', action: "Didn't burn cash globally like Uber" },
  { factor: 'Network effect ceiling', action: '4-minute ETA is "good enough" — didn\'t need Uber-scale density' },
  { factor: 'Sheer persistence', action: '4 months cash left in 2015, investors told them to shut down, they refused' },
  { factor: 'IPO before Uber', action: 'Went public first, told their own story before Uber could define them' },
];

const ayroAdvantages = [
  { lyft: 'Differentiated on BRAND (fuzzy pink mustache, friendly vibes)', ayro: 'Differentiates on PRICE AND TRANSPARENCY — much harder to copy, much more tangible' },
  { lyft: 'Charged similar prices to Uber (competed on experience, not cost)', ayro: 'Charges HALF. Price is a 10x stronger switching motivator than brand feelings' },
  { lyft: 'Needed billions to survive the cash war', ayro: "Model is sustainable at 5% — doesn't need to burn cash to offer low prices" },
  { lyft: 'Needed Uber to make mistakes (#DeleteUber) to grow', ayro: "Doesn't need Uber to screw up — the price difference alone drives switching" },
  { lyft: 'Moat was brand + capital + alliances', ayro: "Moat is structural — 5% take rate is built into cost model, not funded by VC subsidies" },
  { lyft: 'Still takes 20-30% commission (same model as Uber)', ayro: 'Takes 5% — fundamentally different business model, like Costco vs traditional retail' },
];

const keyInsights = [
  { num: 1, text: 'Every Uber competitor that died (Sidecar, Juno, Hailo) tried to compete on the SAME business model — high take rate, subsidized prices, burn cash to grow. Uber just had more cash.', color: '#EF4444' },
  { num: 2, text: "Lyft survived by being 'good enough' on the same model + having great brand timing when Uber imploded.", color: '#F59E0B' },
  { num: 3, text: "AYRO is doing something NONE of them did — competing on a fundamentally different COST STRUCTURE.", color: '#10B981', bold: true },
  { num: 4, text: "5% take rate vs 40% isn't a pricing promotion. It's a different business model. You can't out-subsidize a company that doesn't need subsidies.", color: '#423DF9' },
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12 relative z-10">
          <p className="text-[#08D9C4] text-xs font-bold uppercase tracking-[0.2em] mb-2">Competitors · Case Study</p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">How Lyft Survived Uber</h1>
          <p className="text-white/70 text-base max-w-2xl">And what AYRO can learn — Lyft is the ONLY US competitor that survived Uber's full assault. Every other one — Sidecar, Juno, Hailo, Gett, Via — either died, pivoted, or sold.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-16">

        {/* Attacks */}
        <section>
          <SectionHeader eyebrow="01 · The Assault" title="What Uber Threw at Lyft" description="6 attacks that killed every other competitor." />
          <div className="space-y-4">
            {attacks.map((a) => (
              <div key={a.num} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 w-full" style={{ background: a.color }} />
                <div className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-extrabold" style={{ backgroundColor: a.color }}>{a.num}</div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#1D0652] mb-1">{a.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How they survived */}
        <section>
          <SectionHeader eyebrow="02 · The Survival" title="How Lyft Survived Each Attack" description="7 strategies that made the difference." />
          <div className="grid md:grid-cols-2 gap-5">
            {survived.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: s.color }}>{s.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Summary table */}
        <section>
          <SectionHeader eyebrow="03 · Summary" title="What Ultimately Saved Lyft" />
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Survival Factor</th>
                  <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">What Lyft Did</th>
                </tr>
              </thead>
              <tbody>
                {savedFactors.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-5 py-3 font-semibold" style={{ color: BRAND.primary }}>{r.factor}</td>
                    <td className="px-5 py-3 text-gray-600">{r.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AYRO comparison */}
        <section>
          <SectionHeader eyebrow="04 · AYRO's Edge" title="What AYRO Can Learn" description="— And where AYRO is actually stronger." />
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Lyft's Approach</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wider" style={{ color: BRAND.teal }}>AYRO's Advantage</th>
                </tr>
              </thead>
              <tbody>
                {ayroAdvantages.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-5 py-3 text-gray-500">{r.lyft}</td>
                    <td className="px-5 py-3 font-semibold text-[#1D0652]">{r.ayro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key insights */}
        <section>
          <SectionHeader eyebrow="05 · Key Insight" title="The Key Insight for Investors" />
          <div className="space-y-4 mb-8">
            {keyInsights.map((k) => (
              <div key={k.num} className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style={{ backgroundColor: k.color }}>{k.num}</div>
                <p className={`text-sm leading-relaxed ${k.bold ? 'font-extrabold text-[#1D0652]' : 'text-gray-600'}`}>{k.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-500 text-sm italic mb-3">"There was never any hope of competing with Uber or Lyft because those companies simply have more money." — VICE</p>
            <p className="text-sm font-semibold text-[#1D0652]">This was true for Sidecar and Juno because they had the SAME model. It's NOT true for AYRO because AYRO has a DIFFERENT model. You can't burn your way to victory against someone who doesn't need to burn.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #423DF9 0%, #08D9C4 100%)' }}>
          <div className="p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-extrabold text-white mb-3">The Costco Difference</h3>
            <p className="text-white/80 text-sm max-w-2xl mx-auto mb-4">Costco didn't beat retailers by having more money. They beat them by needing LESS margin. AYRO doesn't beat Uber by having more cash. AYRO beats Uber by needing LESS take rate.</p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 text-white text-sm font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              AYRO: Sustainable Low Prices, Not Subsidized
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
