import React from 'react';
import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-24 pt-40">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,slate-950_70%)]"></div>
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            Case Study
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            HOW <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">LYFT</span> SURVIVED UBER
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
            And What <span className="text-cyan-400 font-bold">AYRO</span> Can Learn — Lyft is the <span className="text-yellow-400 font-semibold">ONLY</span> US competitor that survived Uber's full assault. Every other one — Sidecar, Juno, Hailo, Gett, Via — either died, pivoted, or sold.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        
        {/* WHAT UBER THREW AT LYFT */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-lg shadow-red-500/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">WHAT UBER THREW AT LYFT</h2>
              <p className="text-slate-400 text-sm mt-1">6 attacks that killed every other competitor</p>
            </div>
          </div>
          
          <div className="grid gap-4">
            {[
              { num: "1", title: "Predatory pricing", desc: "Uber subsidized below-cost rides to steal Lyft's riders", color: "red", icon: "💰" },
              { num: "2", title: "Driver poaching", desc: "Uber employees offering cash to Lyft drivers to switch. They canceled hundreds of rides on Gett and thousands on Lyft.", color: "orange", icon: "👥" },
              { num: "3", title: "Executive poaching", desc: "Uber poached Lyft's COO (Travis VanderZanden) and VP of Operations. VanderZanden allegedly downloaded 98,000 confidential Lyft documents before leaving.", color: "amber", icon: "🎯" },
              { num: "4", title: "Fake ride attacks", desc: "Uber engaged in 'clandestine campaigns' with names like 'Project Hell' and 'SLOG' — submitting fraudulent ride requests and cancelling before drivers arrived.", color: "yellow", icon: "👻" },
              { num: "5", title: "Capital suffocation", desc: "Uber raised $9 billion in equity and another $1.6 billion in debt over 15 rounds in a 6-year period.", color: "lime", icon: "💎" },
              { num: "6", title: "Acquisition attempt", desc: "Travis Kalanick tried to buy Lyft. Lyft's co-founders turned down the offer.", color: "emerald", icon: "🤝" }
            ].map((item) => (
              <div key={item.num} className={`group relative overflow-hidden rounded-2xl bg-slate-900/60 border border-${item.color}-500/20 hover:border-${item.color}-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-${item.color}-500/10`}>
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-${item.color}-500 to-${item.color}-600`}></div>
                <div className="flex items-start gap-5 p-6 pl-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    <p className="text-slate-500 text-xs mt-3 italic">Sources: Inc., California Lawyers Association</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW LYFT SURVIVED */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">HOW LYFT SURVIVED EACH ATTACK</h2>
              <p className="text-slate-400 text-sm mt-1">7 strategies that made the difference</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "They nearly died", desc: "In early 2015, Lyft had only about four months' cash left. Uber had just raised over $2.5B. One investor advised founders to shut down. 'Most people were already counting us out.' — Zimmer", icon: "😰", color: "rose" },
              { title: "Built a BRAND identity", desc: "Lyft marketed a friendly, whimsical take — 'fist bump,' front seat, conversational driver. Uber was corporate and cold. Lyft was the 'friend with a car.' Riders who aligned with Lyft's values stayed even when Uber was cheaper.", icon: "🎨", color: "pink" },
              { title: "Exploited Uber's scandals", desc: "In 2017, Uber imploded: sexual harassment, #DeleteUber, data breach coverup. While Uber repaired its image, Lyft built its brand. Market share jumped from ~20% to ~35%.", icon: "📈", color: "purple" },
              { title: "Formed strategic alliances", desc: "Lyft established alliance with GrabTaxi, Ola, and Didi — Uber's biggest international competitors. GM invested $500M in 2016.", icon: "🌐", color: "indigo" },
              { title: "Raised just enough capital", desc: "Lyft couldn't outspend Uber, but raised enough to not die. In March 2019, Lyft went public via IPO, raising $2.34B.", icon: "🚀", color: "blue" },
              { title: "Accepted being #2, US-only", desc: "Lyft positioned as the 'nice guy.' Let Uber fight regulators globally. Focused exclusively on US + Canada while Uber burned cash in 70 countries.", icon: "🎯", color: "cyan" },
              { title: "Network effect has a ceiling", desc: "Once ETAs hit ~4 minutes, adding more drivers doesn't improve rider experience much. Uber's scale advantage has diminishing returns. Lyft only needed 'good enough' density.", icon: "⚡", color: "teal" }
            ].map((item, idx) => (
              <div key={idx} className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-slate-700/50 p-6 hover:border-${item.color}-500/30 hover:shadow-lg hover:shadow-${item.color}-500/10 transition-all duration-300`}>
                <div className={`absolute top-0 right-0 w-24 h-24 bg-${item.color}-500/10 rounded-full blur-2xl group-hover:bg-${item.color}-500/20 transition-all`}></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className={`text-xl font-bold text-${item.color}-400`}>{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SUMMARY TABLE */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/30 border border-slate-700/50 p-8 md:p-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-lg">✓</span>
              What Ultimately Saved Lyft
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-700/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-800/80 to-slate-700/50">
                    <th className="text-left py-4 px-6 text-slate-400 font-bold">Survival Factor</th>
                    <th className="text-left py-4 px-6 text-slate-400 font-bold">What Lyft Did</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {[
                    { factor: "Brand differentiation", action: "\"Friend with a car\" vs Uber's corporate cold image" },
                    { factor: "Exploited Uber's mistakes", action: "#DeleteUber (2017) drove millions of riders to Lyft" },
                    { factor: "Strategic alliances", action: "GM ($500M), Grab, Ola, Didi coalition" },
                    { factor: "US-only focus", action: "Didn't burn cash globally like Uber" },
                    { factor: "Network effect ceiling", action: "4-minute ETA is \"good enough\" — didn't need Uber-scale density" },
                    { factor: "Sheer persistence", action: "4 months cash left in 2015, investors told them to shut down, they refused" },
                    { factor: "IPO before Uber", action: "Went public first, told their own story before Uber could define them" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-6 text-cyan-400 font-medium">{row.factor}</td>
                      <td className="py-4 px-6 text-slate-300">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHAT AYRO CAN LEARN */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">WHAT AYRO CAN LEARN</h2>
              <p className="text-slate-400 text-sm mt-1">— And Where AYRO Is Actually Stronger</p>
            </div>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-slate-700/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-slate-800/80 to-slate-700/50">
                  <th className="text-left py-5 px-6 text-slate-400 font-bold">Lyft's Approach</th>
                  <th className="text-left py-5 px-6 text-cyan-400 font-bold">AYRO's Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {[
                  { lyft: "Differentiated on BRAND (fuzzy pink mustache, friendly vibes)", ayro: "Differentiates on PRICE AND TRANSPARENCY — much harder to copy, much more tangible" },
                  { lyft: "Charged similar prices to Uber (competed on experience, not cost)", ayro: "Charges HALF. Price is a 10x stronger switching motivator than brand feelings" },
                  { lyft: "Needed billions to survive the cash war", ayro: "Model is sustainable at 5% — doesn't need to burn cash to offer low prices" },
                  { lyft: "Needed Uber to make mistakes (#DeleteUber) to grow", ayro: "Doesn't need Uber to screw up — the price difference alone drives switching" },
                  { lyft: "Moat was brand + capital + alliances", ayro: "Moat is structural — 5% take rate is built into cost model, not funded by VC subsidies" },
                  { lyft: "Still takes 20-30% commission (same model as Uber)", ayro: "Takes 5% — fundamentally different business model, like Costco vs traditional retail" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-5 px-6 text-slate-300">{row.lyft}</td>
                    <td className="py-5 px-6 text-white font-medium">
                      <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-3 py-1 rounded-lg">{row.ayro}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* KEY INSIGHT */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30 border border-purple-500/20 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              💡 Key Insight
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">THE KEY INSIGHT FOR INVESTORS</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0 mt-1">1</span>
                <span>Every Uber competitor that died (Sidecar, Juno, Hailo) tried to compete on the <span className="text-red-400 font-bold">SAME business model</span> — high take rate, subsidized prices, burn cash to grow. Uber just had more cash.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 mt-1">2</span>
                <span>Lyft survived by being "good enough" on the same model + having great brand timing when Uber imploded.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0 mt-1">3</span>
                <span className="text-xl text-white font-semibold">AYRO is doing something NONE of them did — competing on a fundamentally different COST STRUCTURE.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 flex-shrink-0 mt-1">4</span>
                <span>5% take rate vs 40% isn't a pricing promotion. It's a <span className="text-yellow-400 font-bold">different business model</span>. You can't out-subsidize a company that doesn't need subsidies.</span>
              </p>
            </div>
            <div className="mt-10 p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50">
              <p className="text-lg text-slate-400 italic">
                "There was never any hope of competing with Uber or Lyft because those companies simply have more money." — <span className="text-purple-400 font-semibold not-italic">VICE</span>
              </p>
              <p className="mt-4 text-white font-semibold">
                This was true for Sidecar and Juno because they had the <span className="text-red-400">SAME model</span>. It's <span className="text-green-400">NOT true for AYRO</span> because AYRO has a <span className="text-green-400">DIFFERENT model</span>. <span className="text-cyan-400">You can't burn your way to victory against someone who doesn't need to burn.</span>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 p-8 md:p-14 text-center">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoNHYyaDRWMzR6TTQwIDMwaDF2MWgxVjMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">The Costco Difference</h3>
            <p className="text-cyan-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Costco didn't beat retailers by having more money. They beat them by needing LESS margin. AYRO doesn't beat Uber by having more cash. AYRO beats Uber by needing LESS take rate.
            </p>
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/30 transition-all cursor-pointer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              AYRO: Sustainable Low Prices, Not Subsidized
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}