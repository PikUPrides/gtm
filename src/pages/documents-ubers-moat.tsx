import React from 'react';
import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 pt-32">
        <h2 className="text-2xl font-bold mb-4">WHY UBER CAN'T DROP TO 5% — Your Moat</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-2">1. Wall Street won't let them.</h3>
            <p className="text-gray-600">Uber's free cash flow hit $9.8B in 2025. They announced a $7B stock buyback. If they drop take rate to 5%, they wipe out billions in revenue.</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-2">2. They're RAISING take rates, not lowering.</h3>
            <p className="text-gray-600">From 2019 to 2024, Uber increased commission from 20.7% to 27.1%. Real driver-experienced rate is 40%+. Fares up 52% since 2019.</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-2">3. $52B revenue depends on high take rates.</h3>
            <p className="text-gray-600">Cutting take rate from 40% to 5% would eliminate most of that revenue.</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-2">4. Fighting AGAINST transparency.</h3>
            <p className="text-gray-600">Uber filed an injunction against Colorado's transparency law. Stopped disclosing take rates Q1 2025. They're hiding, not competing.</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-2">5. The Innovator's Dilemma.</h3>
            <p className="text-gray-600">Uber can't disrupt itself. Dropping to 5% in DFW spreads to every market. They can't contain it.</p>
          </div>
        </div>
      </div>
    </div>
  );
}