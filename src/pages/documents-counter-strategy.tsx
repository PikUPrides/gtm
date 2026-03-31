import React from 'react';
import Header from '../components/Header.jsx';

export default function Page() {
  const counters = [
    {
      num: 1,
      title: "Predatory Pricing",
      subtitle: "Temporarily slash prices in DFW to starve AYRO",
      whatTheyDo: "Drop fares in DFW specifically to undercut AYRO. Subsidize rides below cost to make AYRO's half-price advantage disappear.",
      precedent: "This is Uber's #1 weapon. Uber used 'predatory pricing' — it means Uber subsidized rides and driver payments to drive Sidecar and competitors out of the market, so they could raise prices later. And it looks like their plan worked. Medium Sidecar had $43M in funding. Uber had $20B. There was never any hope of competing with Uber or Lyft because those companies simply have more money. Uber's business strategy is to literally burn piles of money until competitors are driven into the ground. VICE",
      whyHarder: "Uber is a PUBLIC company now — they weren't when they killed Sidecar. Wall Street punishes margin compression. They just hit $52B revenue and $9.8B free cash flow. Burning cash in DFW to fight a startup would need to be explained to shareholders. (Source: Uber Q4 2025 earnings)",
      lawsuit: "They've already been SUED for predatory pricing. Sidecar's lawsuit was allowed to continue in federal court in 2020. Sidecar contends that Uber sought to monopolize the ride-hailing market by interfering with its competitors, engaging in 'clandestine campaigns' with names like 'Project Hell' and 'SLOG'. California Lawyers Association Doing it again, post-lawsuit, is legally riskier.",
      containment: "If they drop prices in DFW, drivers and riders in EVERY other market will ask 'why not here too?' They can't contain a price drop to one city — it leaks nationally.",
      survival: "AYRO's 5% take rate means our low prices aren't subsidized — they're SUSTAINABLE. Uber's predatory prices are temporary and funded by losses. AYRO's prices are permanent because our cost structure supports them. We can outlast any temporary price war because we're not burning cash to be cheap — we ARE cheap.",
      narrative: "If Uber drops prices in DFW to fight us, that PROVES our thesis. It means our pricing is right and they're scared. And when they raise prices again (and they will — they always do), we'll still be here at $17.",
      threat: "MEDIUM",
      threatColor: "text-amber-400"
    },
    {
      num: 2,
      title: "Driver Poaching",
      subtitle: "Recruit AYRO's drivers with bonuses",
      whatTheyDo: "Offer AYRO drivers massive sign-up bonuses to switch back. $500, $1,000, guaranteed minimums.",
      precedent: "Uber would recruit drivers from competitors by offering them high sign-up fees and often employ other tactics to disrupt their services. Cascade They've done this with Lyft, Sidecar, and every competitor.",
      whyHarder: "AYRO drivers keep 95%. Even with a one-time $1,000 Uber bonus, the driver quickly earns more per ride on AYRO. Bonuses are temporary; 95% take-home is permanent.",
      frustration: "Uber drivers are already deeply frustrated. In 2024, the average Uber driver earned less than they had the prior year, while working more. National Employment Law Project Poaching BACK a driver who just started earning more is a hard sell.",
      survival: "The math is the moat. A driver doing 20 rides/day at $17 keeps ~$16.15/ride on AYRO = $323/day. On Uber at $35/ride they might keep $12 = $240/day. Even with a $1,000 bonus, Uber's offer is worse within 12 days.",
      narrative: "Make drivers AYRO evangelists. When a driver earns more AND sees the transparent receipt, they become emotionally invested. They're not just gig workers — they're part of the movement.",
      threat: "LOW-MEDIUM",
      threatColor: "text-green-400"
    },
    {
      num: 3,
      title: "Regulatory Attack",
      subtitle: "Lobby to create licensing barriers",
      whatTheyDo: "Use their lobbyist army to push regulations that make it harder for new rideshare platforms to operate. Licensing requirements, insurance mandates, special permits.",
      precedent: "THIS IS HAPPENING RIGHT NOW. Empower launches in NYC by recruiting TLC-licensed Uber and Lyft drivers, promising they can keep 100% of fares and set their own prices — but city officials say the rides are illegal. Fox 5 NY The NYC TLC set up a dedicated website warning against Empower. Empower's CEO said: 'This is an existential threat to their business, and they are going to do everything in their power, bribe every official they can, influence anyone, pull every lever they can to stop drivers from working for themselves.' Gothamist",
      whyHarder: null,
      survival: "AYRO should launch FULLY LICENSED from day one. This is the #1 lesson from Empower. Empower is fighting regulators AND Uber at the same time. AYRO should only fight Uber.",
      additional: "Texas is more business-friendly than NYC. DFW doesn't have TLC-style regulatory chokepoints. AYRO handles insurance (you confirmed this) — removes the 'unsafe rides' argument regulators use.",
      narrative: "Be legally bulletproof from launch. Get every license, carry full insurance, comply with everything. Don't give Uber's lobbyists ANY ammunition.",
      position: "Position AYRO as the TRANSPARENT, COMPLIANT alternative. 'We're not trying to circumvent regulation — we're trying to give riders a fair price within the system.'",
      threat: "HIGH",
      threatColor: "text-red-400"
    },
    {
      num: 4,
      title: "Copy The Model",
      subtitle: "Launch an 'Uber Lite' with lower take rates",
      whatTheyDo: "Create a sub-brand or tier with lower prices and lower take rates in AYRO's markets specifically.",
      precedent: "Uber has launched market-specific products before (UberX was created to compete with Sidecar/Lyft's cheaper model).",
      whyHarder: "From late 2019 to the end of 2024, Uber increased its commission rate from 20.7% to 27.1%. Calcali Tech Their entire corporate trajectory is TOWARD higher take rates, not lower.",
      cannibalization: "Creating a cheap sub-brand cannibalizes their own premium product. Every rider who switches to 'Uber Lite' is a rider paying less. That's revenue destruction.",
      wallStreet: "Wall Street would punish it. Uber's $8.7B adjusted EBITDA depends on high margins. A low-margin product dilutes the mix.",
      survival: "If Uber launches 'Uber Lite' at 15% take rate — AYRO is still at 5%. We're still cheaper. If they match 5% — they're doing it at a loss (they have massive overhead AYRO doesn't have). We can sustain it; they can't.",
      opacity: "Also: Uber CAN'T do transparency. Uber imposed measures to block third-party apps from offering drivers useful pricing and transparency tools. These included blocks to disable the app's functionality and legal actions like cease-and-desist orders. MEDIANAMA Their entire algorithm depends on opacity. Showing the real split would expose how much they take on every other ride.",
      threat: "LOW",
      threatColor: "text-green-400"
    },
    {
      num: 5,
      title: "Fake Ride Attacks",
      subtitle: "Send fraudulent requests to AYRO",
      whatTheyDo: "Flood AYRO with fake ride requests that get cancelled, wasting driver time and creating bad experience.",
      precedent: "Proven and documented. Uber engaged in 'clandestine campaigns' with names like 'Project Hell' and 'SLOG.' The campaigns included submitting fraudulent requests for rides on competitors' platforms and cancelling before the drivers arrived. California Lawyers Association",
      whyHarder: "This was exposed and Uber was sued for it. Doing it again as a public company post-lawsuit would be extremely risky.",
      survival: "Technical fraud detection from day one. If caught, make it public. 'Uber is sending fake rides to sabotage a 5% commission startup' is a PR nightmare for Uber and a PR gift for AYRO.",
      threat: "LOW",
      threatColor: "text-green-400"
    },
    {
      num: 6,
      title: "Acquisition Offer",
      subtitle: "Try to buy AYRO",
      whatTheyDo: "Offer to acquire AYRO to eliminate the threat.",
      precedent: "This is standard playbook for big tech. Buy or kill.",
      whyHarder: "An acquisition offer validates AYRO's model. If the price is right, it's an exit for investors. If you decline, it's a signal to raise the next round — 'Uber tried to buy us, we said no.'",
      survival: "Don't sell cheap. The whole point is that AYRO's model is worth more alive than dead. Use any offer as fundraising leverage: 'Uber offered to buy us — that means our 5% model scares a $170B company.'",
      threat: "GOOD",
      threatColor: "text-blue-400"
    },
    {
      num: 7,
      title: "Exclusive Driver Contracts",
      subtitle: "Lock drivers into Uber-only agreements",
      whatTheyDo: "Offer drivers bonuses or benefits contingent on driving EXCLUSIVELY for Uber.",
      precedent: "Uber's investment strength caused Hailo to ditch its US expansion plans. Uber had a clause in investment terms: 'You can invest in us but only if you don't invest in our rivals.' VentureBeat They've applied similar exclusivity pressure to drivers.",
      whyHarder: "Drivers are independent contractors — Uber has fought HARD to maintain that classification. Forcing exclusivity contradicts the 'independent' part and could trigger reclassification lawsuits.",
      norm: "Most drivers already multi-app (Uber + Lyft simultaneously). The norm is multi-platform. Uber can't undo that.",
      survival: "AYRO doesn't need exclusive drivers. Drivers can drive for Uber, Lyft, AND AYRO. When they see 95% take-home on AYRO vs 56–60% on Uber, they'll naturally shift volume. Encourage multi-apping: 'Keep your Uber account. Just try AYRO for one day and compare your receipts.'",
      threat: "LOW",
      threatColor: "text-green-400"
    },
    {
      num: 8,
      title: "Surge The Zone",
      subtitle: "Artificially increase Uber prices in AYRO's markets",
      whatTheyDo: "Artificially increase Uber prices in DFW to show drivers higher Uber earnings",
      whyHarder: "Wait — this actually HELPS AYRO. If Uber surges prices in DFW, AYRO's flat-rate no-surge model becomes even more attractive to riders.",
      survival: "This backfires. Do nothing. Let them.",
      threat: "ZERO",
      threatColor: "text-green-400"
    }
  ];

  const colors = [
    { from: 'from-rose-500', to: 'to-rose-900', badge: 'bg-rose-500' },
    { from: 'from-amber-500', to: 'to-amber-900', badge: 'bg-amber-500' },
    { from: 'from-red-500', to: 'to-red-900', badge: 'bg-red-500' },
    { from: 'from-emerald-500', to: 'to-emerald-900', badge: 'bg-emerald-500' },
    { from: 'from-cyan-500', to: 'to-cyan-900', badge: 'bg-cyan-500' },
    { from: 'from-blue-500', to: 'to-blue-900', badge: 'bg-blue-500' },
    { from: 'from-violet-500', to: 'to-violet-900', badge: 'bg-violet-500' },
    { from: 'from-teal-500', to: 'to-teal-900', badge: 'bg-teal-500' }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <div className="max-w-5xl mx-auto px-6 py-16 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">UBER/LYFT COUNTER-STRATEGY ANALYSIS</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            How they've killed competitors before, how they'd try to kill AYRO, why they'll struggle, and how AYRO survives.
          </p>
        </div>

        {/* Counters */}
        <div className="space-y-8">
          {counters.map((counter, index) => {
            const color = colors[index];
            return (
              <div key={counter.num} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
                {/* Colored accent bar */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${color.from} ${color.to}`} />
                
                <div className="p-8 pl-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`${color.badge} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {counter.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{counter.title}</h3>
                      <p className="text-slate-400">{counter.subtitle}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-full bg-slate-900 border border-slate-700`}>
                      <span className={`font-bold ${counter.threatColor}`}>{counter.threat}</span>
                    </div>
                  </div>

                  {/* What they'd do */}
                  <div className="mb-4">
                    <p className="text-slate-300">
                      <span className="text-white font-semibold">What they'd do:</span> {counter.whatTheyDo}
                    </p>
                  </div>

                  {/* Historical precedent */}
                  {counter.precedent && (
                    <div className="mb-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <p className="text-slate-300 text-sm">
                        <span className="text-white font-semibold">Historical precedent:</span> {counter.precedent}
                      </p>
                    </div>
                  )}

                  {/* Why harder / AYRO can handle */}
                  {(counter.whyHarder || counter.whyHarder === null || counter.additional || counter.norm || counter.wallStreet || counter.cannibalization) && (
                    <div className="mb-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                      <p className="text-amber-200 text-sm">
                        <span className="font-semibold">Why {counter.num === 3 ? "AYRO can handle this" : "it's harder now"}:</span> {counter.whyHarder} {counter.additional} {counter.norm} {counter.wallStreet} {counter.cannibalization}
                      </p>
                    </div>
                  )}

                  {/* Lawsuit / Containment / Frustration / Opacity */}
                  {(counter.lawsuit || counter.containment || counter.frustration || counter.opacity) && (
                    <div className="mb-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <p className="text-slate-300 text-sm">
                        {counter.lawsuit && <><span className="text-white font-semibold">Legal risk:</span> {counter.lawsuit} </>}
                        {counter.containment && <><span className="text-white font-semibold">Containment problem:</span> {counter.containration} </>}
                        {counter.frustration && <>{counter.frustration} </>}
                        {counter.opacity && <>{counter.opacity}</>}
                      </p>
                    </div>
                  )}

                  {/* How AYRO survives */}
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <p className="text-emerald-200 text-sm">
                      <span className="font-semibold">How AYRO survives:</span> {counter.survival}
                    </p>
                    {counter.narrative && (
                      <p className="text-white mt-3 italic">
                        "{counter.narrative}"
                      </p>
                    )}
                    {counter.position && (
                      <p className="text-white mt-3 italic">
                        "{counter.position}"
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Line Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8">
          <h2 className="text-3xl font-bold text-white mb-6">THE BOTTOM LINE FOR INVESTORS</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
              <h3 className="text-xl font-bold text-red-400 mb-3">#1 Real Threat: Regulatory</h3>
              <p className="text-slate-300 text-sm">
                AYRO must launch fully licensed, fully insured, fully compliant from day one. Learn from Empower's mistake — they're fighting NYC regulators AND Uber simultaneously. AYRO should only fight Uber.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-3">#1 Structural Moat: Sustainable Pricing</h3>
              <p className="text-slate-300 text-sm">
                Every previous Uber competitor (Sidecar, Juno, Hailo) was subsidizing rides with VC cash, hoping to reach scale before the money ran out. They all ran out. AYRO's 5% model doesn't require subsidies — the low price IS the model. That's the Costco difference.
              </p>
            </div>
          </div>

          {/* Empower Example */}
          <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <h3 className="text-xl font-bold text-purple-400 mb-3">The Real Empower Lesson (Happening RIGHT NOW, Feb 2026)</h3>
            <p className="text-slate-300">
              A ride from Bushwick to SoHo cost <span className="text-white font-bold">$28.18</span> via Empower, compared to <span className="text-red-400">$68</span> and <span className="text-red-400">$60</span> from Uber and Lyft respectively. <span className="text-cyan-400">Hoodline</span> Empower is working — riders love it, drivers love it. But NYC officials say the rides are illegal <span className="text-cyan-400">Fox 5 NY</span> because Empower doesn't have a TLC base license.
            </p>
            <p className="text-white font-semibold mt-3">
              AYRO's lesson: be Empower's pricing with full regulatory compliance. That's the winning formula.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600">
          <h3 className="text-2xl font-bold text-white mb-2">AYRO's 5% Take Rate Is The Answer</h3>
          <p className="text-cyan-100">
            Low prices that are sustainable, not subsidized. Transparent receipts. Driver-first model. Regulatory-compliant from day one.
          </p>
        </div>
      </div>
    </div>
  );
}