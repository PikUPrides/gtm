import React from 'react';
import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 pt-32">
        <h2 className="text-2xl font-bold mb-4">UBER/LYFT COUNTER-STRATEGY ANALYSIS</h2>
        <h3 className="text-lg text-gray-600 mb-6">How they've killed competitors before, how they'd try to kill AYRO, why they'll struggle, and how AYRO survives.</h3>
        
        <hr className="my-6" />
        
        <h3 className="text-xl font-bold mb-3">COUNTER #1: PREDATORY PRICING</h3>
        <p className="mb-2"><strong>What they'd do:</strong> Drop fares in DFW specifically to undercut AYRO.</p>
        <p className="mb-2"><strong>Historical precedent:</strong> Uber used "predatory pricing" to drive Sidecar and competitors out.</p>
        <p className="mb-2"><strong>Why it's harder now:</strong> Uber is a PUBLIC company now. Wall Street punishes margin compression.</p>
        <p className="mb-4"><strong>How AYRO survives:</strong> AYRO's 5% take rate means our low prices are SUSTAINABLE, not subsidized.</p>
        
        <h3 className="text-xl font-bold mb-3">COUNTER #2: DRIVER POACHING</h3>
        <p className="mb-2"><strong>What they'd do:</strong> Offer AYRO drivers massive sign-up bonuses to switch back.</p>
        <p className="mb-2"><strong>Why it's harder now:</strong> AYRO drivers keep 95%. The math is the moat.</p>
        <p className="mb-4"><strong>How AYRO survives:</strong> A driver doing 20 rides/day at $17 keeps ~$16.15/ride = $323/day.</p>
        
        <h3 className="text-xl font-bold mb-3">COUNTER #3: REGULATORY ATTACK</h3>
        <p className="mb-2"><strong>What they'd do:</strong> Use lobbyist army to push licensing barriers.</p>
        <p className="mb-2"><strong>Why AYRO can handle this:</strong> Texas is more business-friendly than NYC.</p>
        <p className="mb-4"><strong>Threat level:</strong> HIGH - This is the #1 realistic threat.</p>
        
        <h3 className="text-xl font-bold mb-3">COUNTER #4: COPY THE MODEL</h3>
        <p className="mb-2"><strong>What they'd do:</strong> Launch "Uber Lite" with lower take rates.</p>
        <p className="mb-2"><strong>Why they won't:</strong> Creating a cheap sub-brand cannibalizes their own premium product.</p>
        <p className="mb-4"><strong>Threat level:</strong> LOW.</p>
        
        <hr className="my-6" />
        
        <h2 className="text-xl font-bold mb-3">THE BOTTOM LINE FOR INVESTORS</h2>
        <p className="mb-2"><strong>The #1 real threat is regulatory.</strong> AYRO must launch fully licensed from day one.</p>
        <p className="mb-2"><strong>The #1 structural moat:</strong> AYRO's low prices are SUSTAINABLE, not subsidized.</p>
        <p>Empower proved this works: $28 vs $68 for the same ride in NYC.</p>
      </div>
    </div>
  );
}