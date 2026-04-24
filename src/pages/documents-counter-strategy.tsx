
import React from 'react';
import Header from '../components/Header.jsx';

const BRAND = { primary: '#423DF9', dark: '#1D0652', teal: '#08D9C4', green: '#10B981', amber: '#F59E0B', red: '#EF4444' };

const cardColors = ['#EF4444','#F97316','#DC2626','#10B981','#08D9C4','#423DF9','#7742F1','#10B981'];

export default function Page() {
  const counters = [
    { num: 1, title: "Predatory Pricing", subtitle: "Temporarily slash prices in DFW to starve AYRO", whatTheyDo: "Drop fares in DFW specifically to undercut AYRO. Subsidize rides below cost to make AYRO's half-price advantage disappear.", precedent: "This is Uber's #1 weapon. Uber subsidized rides and driver payments to drive Sidecar and competitors out of the market. Sidecar had $43M in funding. Uber had $20B.", whyHarder: "Uber is a PUBLIC company now. Wall Street punishes margin compression. They just hit $52B revenue and $9.8B free cash flow. Burning cash in DFW to fight a startup would need to be explained to shareholders.", extra: "They've already been SUED for predatory pricing. Sidecar's lawsuit was allowed to continue in federal court in 2020. Doing it again, post-lawsuit, is legally riskier. If they drop prices in DFW, drivers and riders in EVERY other market will ask 'why not here too?'", survival: "AYRO's 5% take rate means our low prices aren't subsidized — they're SUSTAINABLE. We can outlast any temporary price war because we're not burning cash to be cheap — we ARE cheap.", narrative: "If Uber drops prices in DFW to fight us, that PROVES our thesis. It means our pricing is right and they're scared.", threat: "MEDIUM", threatBg: '#F59E0B' },
    { num: 2, title: "Driver Poaching", subtitle: "Recruit AYRO's drivers with bonuses", whatTheyDo: "Offer AYRO drivers massive sign-up bonuses to switch back. $500, $1,000, guaranteed minimums.", precedent: "Uber would recruit drivers from competitors by offering them high sign-up fees. They've done this with Lyft, Sidecar, and every competitor.", whyHarder: "AYRO drivers keep 95%. Even with a one-time $1,000 Uber bonus, the driver quickly earns more per ride on AYRO. Bonuses are temporary; 95% take-home is permanent.", extra: "Uber drivers are already deeply frustrated. In 2024, the average Uber driver earned less while working more. Poaching BACK a driver who just started earning more is a hard sell.", survival: "The math is the moat. A driver doing 20 rides/day at $17 keeps ~$16.15/ride on AYRO = $323/day. On Uber at $35/ride they might keep $12 = $240/day. Uber's offer is worse within 12 days.", narrative: "Make drivers AYRO evangelists. When a driver earns more AND sees the transparent receipt, they become emotionally invested.", threat: "LOW-MEDIUM", threatBg: '#10B981' },
    { num: 3, title: "Regulatory Attack", subtitle: "Lobby to create licensing barriers", whatTheyDo: "Use their lobbyist army to push regulations that make it harder for new rideshare platforms to operate.", precedent: "THIS IS HAPPENING RIGHT NOW. Empower launches in NYC but city officials say the rides are illegal. The NYC TLC set up a dedicated website warning against Empower.", whyHarder: null, extra: "Texas is more business-friendly than NYC. DFW doesn't have TLC-style regulatory chokepoints. AYRO handles insurance — removes the 'unsafe rides' argument.", survival: "AYRO should launch FULLY LICENSED from day one. This is the #1 lesson from Empower. Be legally bulletproof from launch.", narrative: "Position AYRO as the TRANSPARENT, COMPLIANT alternative. 'We're not trying to circumvent regulation — we're trying to give riders a fair price within the system.'", threat: "HIGH", threatBg: '#EF4444' },
    { num: 4, title: "Copy The Model", subtitle: "Launch an 'Uber Lite' with lower take rates", whatTheyDo: "Create a sub-brand or tier with lower prices and lower take rates in AYRO's markets specifically.", precedent: "Uber has launched market-specific products before (UberX was created to compete with Sidecar/Lyft's cheaper model).", whyHarder: "From late 2019 to end of 2024, Uber increased its commission rate from 20.7% to 27.1%. Their entire corporate trajectory is TOWARD higher take rates, not lower.", extra: "Creating a cheap sub-brand cannibalizes their own premium product. Wall Street would punish it. Uber's $8.7B adjusted EBITDA depends on high margins. Also: Uber CAN'T do transparency. Their entire algorithm depends on opacity.", survival: "If Uber launches 'Uber Lite' at 15% — AYRO is still at 5%. We're still cheaper. If they match 5% — they're doing it at a loss. We can sustain it; they can't.", narrative: null, threat: "LOW", threatBg: '#10B981' },
    { num: 5, title: "Fake Ride Attacks", subtitle: "Send fraudulent requests to AYRO", whatTheyDo: "Flood AYRO with fake ride requests that get cancelled, wasting driver time.", precedent: "Proven and documented. Uber engaged in 'clandestine campaigns' — submitting fraudulent requests for rides on competitors' platforms and cancelling before drivers arrived.", whyHarder: "This was exposed and Uber was sued for it. Doing it again as a public company post-lawsuit would be extremely risky.", extra: null, survival: "Technical fraud detection from day one. If caught, make it public. 'Uber is sending fake rides to sabotage a 5% commission startup' is a PR nightmare for Uber and a PR gift for AYRO.", narrative: null, threat: "LOW", threatBg: '#10B981' },
    { num: 6, title: "Acquisition Offer", subtitle: "Try to buy AYRO", whatTheyDo: "Offer to acquire AYRO to eliminate the threat.", precedent: "Standard playbook for big tech. Buy or kill.", whyHarder: "An acquisition offer validates AYRO's model. If the price is right, it's an exit for investors. If you decline, it's a signal to raise the next round.", extra: null, survival: "Don't sell cheap. Use any offer as fundraising leverage: 'Uber offered to buy us — that means our 5% model scares a $170B company.'", narrative: null, threat: "GOOD", threatBg: '#423DF9' },
    { num: 7, title: "Exclusive Driver Contracts", subtitle: "Lock drivers into Uber-only agreements", whatTheyDo: "Offer drivers bonuses or benefits contingent on driving EXCLUSIVELY for Uber.", precedent: "Uber had a clause in investment terms: 'invest in us but only if you don't invest in our rivals.' They've applied similar exclusivity pressure to drivers.", whyHarder: "Drivers are independent contractors — forcing exclusivity contradicts the 'independent' part and could trigger reclassification lawsuits. Most drivers already multi-app.", extra: null, survival: "AYRO doesn't need exclusive drivers. Drivers can drive for Uber, Lyft, AND AYRO. When they see 95% take-home vs 56–60% on Uber, they'll naturally shift volume.", narrative: "Encourage multi-apping: 'Keep your Uber account. Just try AYRO for one day and compare your receipts.'", threat: "LOW", threatBg: '#10B981' },
    { num: 8, title: "Surge The Zone", subtitle: "Artificially increase Uber prices in AYRO's markets", whatTheyDo: "Artificially increase Uber prices in DFW to show drivers higher Uber earnings.", whyHarder: "Wait — this actually HELPS AYRO. If Uber surges prices in DFW, AYRO's flat-rate no-surge model becomes even more attractive to riders.", extra: null, precedent: null, survival: "This backfires. Do nothing. Let them.", narrative: null, threat: "ZERO", threatBg: '#10B981' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafe]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Header />

      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12 relative z-10">
          <p className="text-[#08D9C4] text-xs font-bold uppercase tracking-[0.2em] mb-2">Competitors · Counter-Strategy</p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">Counter-Strategy Analysis</h1>
          <p className="text-white/70 text-base max-w-xl">How they've killed competitors before, how they'd try to kill AYRO, why they'll struggle, and how AYRO survives.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="space-y-6 mb-12">
          {counters.map((c, i) => (
            <div key={c.num} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="h-1 w-full" style={{ background: cardColors[i] }} />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-extrabold flex-shrink-0" style={{ backgroundColor: cardColors[i] }}>{c.num}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-extrabold text-[#1D0652]">{c.title}</h3>
                    <p className="text-gray-500 text-sm">{c.subtitle}</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white flex-shrink-0" style={{ backgroundColor: c.threatBg }}>{c.threat}</span>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600"><span className="font-semibold text-[#1D0652]">What they'd do:</span> {c.whatTheyDo}</p>
                  {c.precedent && <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 text-gray-600"><span className="font-semibold text-[#1D0652]">Historical precedent:</span> {c.precedent}</div>}
                  {c.whyHarder && <div className="p-3 rounded-lg bg-amber-50 border border-amber-100 text-gray-700"><span className="font-semibold text-amber-700">Why it's harder now:</span> {c.whyHarder}</div>}
                  {c.extra && <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 text-gray-600">{c.extra}</div>}
                  <div className="p-3 rounded-lg border" style={{ backgroundColor: '#10B98110', borderColor: '#10B98130' }}>
                    <span className="font-semibold" style={{ color: BRAND.green }}>How AYRO survives:</span> <span className="text-gray-700">{c.survival}</span>
                    {c.narrative && <p className="mt-2 italic text-[#1D0652] font-medium">"{c.narrative}"</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BRAND.red }}>#1 Real Threat: Regulatory</div>
            <p className="text-gray-600 text-sm">AYRO must launch fully licensed, fully insured, fully compliant from day one. Learn from Empower's mistake.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BRAND.primary }}>#1 Structural Moat: Sustainable Pricing</div>
            <p className="text-gray-600 text-sm">Every previous competitor was subsidizing rides with VC cash. AYRO's 5% model doesn't require subsidies — the low price IS the model.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#7742F1' }}>The Empower Lesson (Happening NOW)</div>
          <p className="text-gray-600 text-sm mb-2">A ride from Bushwick to SoHo cost <strong className="text-[#1D0652]">$28.18</strong> via Empower, compared to <strong className="text-red-500">$68</strong> and <strong className="text-red-500">$60</strong> from Uber and Lyft respectively. Empower is working — but NYC officials say the rides are illegal because Empower doesn't have a TLC base license.</p>
          <p className="text-sm font-semibold text-[#1D0652]">AYRO's lesson: be Empower's pricing with full regulatory compliance. That's the winning formula.</p>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #423DF9 0%, #08D9C4 100%)' }}>
          <div className="p-8 text-center">
            <h3 className="text-xl font-extrabold text-white mb-2">AYRO's 5% Take Rate Is The Answer</h3>
            <p className="text-white/80 text-sm">Low prices that are sustainable, not subsidized. Transparent receipts. Driver-first model. Regulatory-compliant from day one.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
