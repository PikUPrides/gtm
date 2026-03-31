import React from 'react';
import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 pt-32">
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{__html:`<h2><strong>WHY UBER CAN'T DROP TO 5% — Your Moat</strong></h2><p><strong>1. Wall Street won't let them.</strong> Uber just hit its first-ever annual profit in Feb 2024. Uber's free cash flow for 2025 hit $9.8 billion, up 42% from prior year. They announced a $7B stock buyback. If they drop take rate to 5%, they instantly wipe out billions in revenue.</p><p><strong>2. They're RAISING take rates, not lowering.</strong> From 2019 to end of 2024, Uber increased its commission rate from 20.7% to 27.1% (that's their own reported number — real driver-experienced rate is 40%+). From 2019 to mid-2022, the average fare jumped by 63%. They're moving in the opposite direction.</p><p><strong>3. They have $52B in annual revenue dependent on high take rates.</strong> Revenue rose 18% to $52.0 billion in 2025. Cutting take rate from 40% to 5% across the US would eliminate most of that.</p><p><strong>4. They're fighting AGAINST transparency.</strong> In January 2025, Uber filed an injunction against a Colorado law requiring them to disclose the portion of fare going to drivers. Uber stopped disclosing its global rideshare take rates as of Q1 2025. They're hiding, not competing.</p><p><strong>5. The Innovator's Dilemma.</strong> Uber can't disrupt itself. Dropping to 5% in DFW to compete with AYRO means explaining to Wall Street why they're destroying margin in a single market, which then spreads to every market.</p>`}} />
      </div>
    </div>
  );
}