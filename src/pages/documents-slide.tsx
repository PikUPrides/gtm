import React from 'react';
import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 pt-32">
        <h2 className="text-2xl font-bold mb-4">PITCH DECK SLIDES</h2>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold mb-2">SLIDE 1 — COVER</h3>
            <p>AYRO — A ride-sharing app that charges 5% commission instead of Uber's 40%+. Rides cost half. Drivers keep 95%.</p>
          </section>
          
          <hr />
          
          <section>
            <h3 className="text-xl font-bold mb-2">SLIDE 2 — PROBLEM</h3>
            <p className="mb-2">On one ride: rider paid $35, driver got $12. Uber kept $23. This isn't a glitch — it's the business model.</p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Uber's average take rate hit 40% in 2024. On some rides it reaches 65–70%.</li>
              <li>Fares up 52% since 2019. Driver earnings dropped to $513/week.</li>
              <li>Uber decoupled rider fares from driver pay in 2022 — neither side sees the split.</li>
            </ul>
          </section>
          
          <hr />
          
          <section>
            <h3 className="text-xl font-bold mb-2">SLIDE 3 — SOLUTION</h3>
            <p>AYRO charges 5% commission. Riders pay half. Drivers keep 95%. Zero surge. Ever.</p>
          </section>
          
          <hr />
          
          <section>
            <h3 className="text-xl font-bold mb-2">SLIDE 4 — MARKET</h3>
            <p>US ride-hailing market is $59.3B. Only 28% actively use it. At half price, AYRO expands the market.</p>
          </section>
          
          <hr />
          
          <section>
            <h3 className="text-xl font-bold mb-2">SLIDE 6 — BUSINESS MODEL</h3>
            <p className="mb-2">5% flat commission on every ride. $17 ride → AYRO keeps $0.85 → Driver keeps $16.15.</p>
            <p className="text-gray-600">Low margin + high volume = sustainable growth.</p>
          </section>
          
          <hr />
          
          <section>
            <h3 className="text-xl font-bold mb-2">SLIDE 10 — ASK</h3>
            <p>Raising $1M to launch AYRO in DFW, acquire 20,000 riders, onboard 500 drivers — within 12 months.</p>
          </section>
        </div>
      </div>
    </div>
  );
}