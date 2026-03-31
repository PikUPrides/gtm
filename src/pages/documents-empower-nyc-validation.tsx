import React from 'react';
import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 pt-32">
        <h2 className="text-2xl font-bold mb-4">EMPOWER NYC VALIDATION</h2>
        <p className="text-gray-600 mb-6">What's happening right now in NYC.</p>
        
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3">What Empower Is</h3>
          <p className="mb-2">A rideshare app where drivers keep 100% of fares, set their own prices, pay $50–$350/month subscription instead of per-ride commission.</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Ride from Bushwick to SoHo: $28 via Empower vs $68 Uber vs $60 Lyft</li>
            <li>Tens of thousands of rides per week in NYC</li>
            <li>Drivers set their own rates, get 100%</li>
            <li>25-60% cheaper than Uber</li>
          </ul>
        </section>
        
        <hr className="my-6" />
        
        <section className="mb-6 bg-red-50 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-red-800">THE BIG PROBLEM</h3>
          <p className="mb-2">NYC officials say the rides are illegal.</p>
          <ul className="list-disc pl-5 text-red-700">
            <li>TLC warns trips may not be insured</li>
            <li>Dedicated website warning New Yorkers</li>
            <li>Drivers face fines up to $500</li>
          </ul>
        </section>
        
        <hr className="my-6" />
        
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3">EMPOWER vs AYRO</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-2 border"></th>
                  <th className="text-left p-2 border">Empower</th>
                  <th className="text-left p-2 border">AYRO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Driver Commission</td>
                  <td className="p-2 border">0%</td>
                  <td className="p-2 border">5%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Who Sets Price</td>
                  <td className="p-2 border">Driver</td>
                  <td className="p-2 border">AYRO (flat rate)</td>
                </tr>
                <tr>
                  <td className="p-2 border">Regulatory</td>
                  <td className="p-2 border">❌ Illegal</td>
                  <td className="p-2 border">✅ Licensed</td>
                </tr>
                <tr>
                  <td className="p-2 border">Insurance</td>
                  <td className="p-2 border">⚠️ May not be</td>
                  <td className="p-2 border">✅ Handled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <hr className="my-6" />
        
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-3">WHAT AYRO LEARNS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">✅ PROVES</h4>
              <ul className="list-disc pl-5 text-green-700">
                <li>Demand is massive</li>
                <li>Drivers switch immediately</li>
                <li>Price goes viral ($28 vs $68)</li>
                <li>Uber IS scared</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">❌ GOT WRONG</h4>
              <ul className="list-disc pl-5 text-red-700">
                <li>Launched without license</li>
                <li>Drivers set own prices</li>
                <li>Subscription punishes low-volume</li>
                <li>Insurance gap</li>
              </ul>
            </div>
          </div>
        </section>
        
        <hr className="my-6" />
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">PITCH FOR INVESTORS</h3>
          <p>"Empower proved our thesis in NYC — tens of thousands of rides at 50-60% less than Uber, despite being illegal. AYRO is the same economics with three fixes: full compliance, consistent pricing, and insurance. We're Empower done right."</p>
        </div>
      </div>
    </div>
  );
}