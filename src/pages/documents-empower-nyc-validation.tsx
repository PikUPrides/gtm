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

        {/* INSURANCE SECTION */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">⚠️</span>
              <h3 className="text-2xl md:text-3xl font-bold text-red-800">CONFIRMED: Empower Does NOT Provide Insurance</h3>
            </div>
            
            <p className="text-red-700 mb-6 text-lg">From Empower's own FAQ page: "Empower does not currently provide insurance to drivers; however, we are working on establishing relationships with insurance carriers to help provide drivers with the most affordable options."</p>
            
            {/* Source Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border-l-4 border-red-500 p-4 rounded-r-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📄</span>
                  <span className="font-bold text-red-800">Empower FAQ</span>
                </div>
                <p className="text-gray-600 text-sm">"Empower does not currently provide insurance to drivers; however, we are working on establishing relationships with insurance carriers..."</p>
              </div>
              
              <div className="bg-white border-l-4 border-red-600 p-4 rounded-r-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⚖️</span>
                  <span className="font-bold text-red-800">Class Action Lawsuit (Dec 2022)</span>
                </div>
                <p className="text-gray-600 text-sm">"The suit claims that Empower neither supplies auto insurance to its drivers nor requires them to maintain any coverage of their own, and purportedly conducts no background checks of any kind on its drivers."</p>
              </div>
              
              <div className="bg-white border-l-4 border-red-700 p-4 rounded-r-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🏛️</span>
                  <span className="font-bold text-red-800">DC City Council</span>
                </div>
                <p className="text-gray-600 text-sm">Empower agreed to suspend ride operations in Washington, D.C. after regulatory pressure.</p>
              </div>
              
              <div className="bg-white border-l-4 border-orange-500 p-4 rounded-r-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🚕</span>
                  <span className="font-bold text-red-800">NYC TLC Warning</span>
                </div>
                <p className="text-gray-600 text-sm">NYC TLC set up a dedicated warning website. Drivers face $500 fines, vehicle owners up to $10,000.</p>
              </div>
              
              <div className="bg-white border-l-4 border-orange-600 p-4 rounded-r-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">💼</span>
                  <span className="font-bold text-red-800">Injury Law Firms</span>
                </div>
                <p className="text-gray-600 text-sm">"Uber and Lyft carry $1 million in bodily injury and property damage liability coverage when a driver is picking up or transporting a passenger. Empower carries none of this."</p>
              </div>
              
              <div className="bg-white border-l-4 border-orange-700 p-4 rounded-r-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📱</span>
                  <span className="font-bold text-red-800">Rideshare Guy Review</span>
                </div>
                <p className="text-gray-600 text-sm">"Empower does not provide insurance to drivers (you'll have to find your own rideshare insurance for now)."</p>
              </div>
            </div>
            
            {/* Summary Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="bg-red-100 px-4 py-3 border-b border-red-200">
                <h4 className="font-bold text-red-800">Summary: How Empower's Insurance (Non-)Model Works</h4>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 border-b">Question</th>
                    <th className="text-left p-3 border-b">Answer</th>
                    <th className="text-left p-3 border-b">Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Does Empower carry a TNC commercial policy?</td>
                    <td className="p-3 font-bold text-red-600">No</td>
                    <td className="p-3 text-gray-500">Empower FAQ, Class action lawsuit</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Does Empower require drivers to have rideshare insurance?</td>
                    <td className="p-3 font-bold text-red-600">No — doesn't require OR verify</td>
                    <td className="p-3 text-gray-500">Class action: "neither supplies nor requires"</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Does Empower do background checks?</td>
                    <td className="p-3 font-bold text-red-600">No</td>
                    <td className="p-3 text-gray-500">Class action lawsuit</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">What happens in an accident?</td>
                    <td className="p-3 font-bold text-red-600">Rider and driver are on their own</td>
                    <td className="p-3 text-gray-500">TLC, injury attorneys, class action</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Has this caused legal trouble?</td>
                    <td className="p-3 font-bold text-red-600">Yes — class action in DC, shut down in DC, fighting NYC TLC</td>
                    <td className="p-3 text-gray-500">Multiple sources</td>
                  </tr>
                  <tr>
                    <td className="p-3">Is Empower working on adding insurance?</td>
                    <td className="p-3 font-bold text-orange-600">They say they're "working on it"</td>
                    <td className="p-3 text-gray-500">Empower FAQ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* What This Means for AYRO */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
              <h4 className="text-xl font-bold text-green-800 mb-3">🎯 What This Means for AYRO</h4>
              <p className="text-green-700 text-lg leading-relaxed mb-4">
                This is 100% confirmed. Empower's low prices are partly because they skip insurance entirely. That's a ticking time bomb — one fatal accident with no coverage and it's company-ending litigation.
              </p>
              <div className="bg-white border border-green-400 rounded-lg p-4">
                <p className="text-lg font-semibold text-green-900">
                  <span className="text-green-600">AYRO's positioning:</span> "Empower proved the demand for half-price rides. But they did it by skipping insurance — no coverage, no background checks, and they got shut down in DC and sued in a class action. AYRO delivers the same pricing but with full TNC insurance, full transparency, and full compliance. We're Empower's economics done legally."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}