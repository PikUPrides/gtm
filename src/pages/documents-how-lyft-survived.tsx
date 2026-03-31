import React from 'react';
import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 pt-32">
        <h2 className="text-2xl font-bold mb-4">HOW LYFT SURVIVED UBER</h2>
        <p className="text-gray-600 mb-6">Lyft is the ONLY US competitor that survived Uber's full assault.</p>
        
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3">WHAT UBER THREW AT LYFT</h3>
          <ul className="list-disc pl-5">
            <li>Predatory pricing — subsidized below-cost rides</li>
            <li>Driver poaching — cash to switch</li>
            <li>Executive poaching</li>
            <li>Fake ride attacks — "Project Hell" campaigns</li>
            <li>Capital suffocation — $9B raised</li>
            <li>Acquisition attempt</li>
          </ul>
        </section>
        
        <hr className="my-6" />
        
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3">HOW LYFT SURVIVED</h3>
          <ul className="list-disc pl-5">
            <li>Nearly died — survived on sheer will (4 months cash in 2015)</li>
            <li>Built a BRAND identity — "friend with a car" vs Uber's corporate cold</li>
            <li>Exploited Uber's scandals — #DeleteUber drove riders to Lyft</li>
            <li>Formed strategic alliances — GM $500M, Grab, Ola, Didi</li>
            <li>Focused on US only — didn't burn cash globally</li>
          </ul>
        </section>
        
        <hr className="my-6" />
        
        <section>
          <h3 className="text-xl font-bold mb-3">WHAT AYRO CAN LEARN</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-2 border">Lyft</th>
                  <th className="text-left p-2 border">AYRO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Brand differentiation</td>
                  <td className="p-2 border">Price + Transparency</td>
                </tr>
                <tr>
                  <td className="p-2 border">Similar prices to Uber</td>
                  <td className="p-2 border">HALF the price</td>
                </tr>
                <tr>
                  <td className="p-2 border">Needed billions</td>
                  <td className="p-2 border">Sustainable at 5%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Needed Uber to fail</td>
                  <td className="p-2 border">Price drives switching</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <hr className="my-6" />
        
        <h3 className="text-lg font-bold">KEY INSIGHT</h3>
        <p>Every Uber competitor died trying to compete on the SAME model. AYRO competes on a DIFFERENT cost structure. You can't out-subsidize someone who doesn't need subsidies.</p>
      </div>
    </div>
  );
}