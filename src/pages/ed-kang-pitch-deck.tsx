import React from 'react';
import { Link } from '../api/sdk.js';
import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto p-4 sm:p-6 pt-40">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Ultimate Guide to Your First Pitch Deck</h2>
          <p className="text-gray-500 text-base">Ed Kang's proven 10-slide framework for early-stage founders</p>
        </div>

        <div className="mb-6 rounded-xl p-5 bg-gray-50 border border-gray-200">
          <h3 className="text-gray-900 font-bold text-lg mb-2">The 10 Slide Format</h3>
          <p className="text-gray-600 text-sm mb-3">Ed Kang, 7-time funded founder and CSO of Startups.com, outlines the exact structure you need:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">1</span><span className="text-gray-700">Cover Slide</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">2</span><span className="text-gray-700">Problem</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">3</span><span className="text-gray-700">Solution</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">4</span><span className="text-gray-700">Market</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">5</span><span className="text-gray-700">How It Works</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">6</span><span className="text-gray-700">Business Model</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">7</span><span className="text-gray-700">Go-to-Market</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">8</span><span className="text-gray-700">Competition</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">9</span><span className="text-gray-700">Team</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">10</span><span className="text-gray-700">Traction</span></div>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p><strong>What is a "Screener Deck"?</strong> This is the deck attached to your outreach email. It doesn't get you an investment—it gets you a meeting. Think of it like a sample at Costco: it draws them in, then they decide to learn more.</p>
          
          <p><strong>Rules for Every Slide:</strong></p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Talk to the investor, not the customer</li>
            <li>No inside language or marketing jargon</li>
            <li>Mark each section in small font (not the main headline)</li>
            <li>One slide maximum per section</li>
            <li>One headline + three bullets per slide</li>
            <li>Black and white for the outline</li>
          </ul>

          <h4 className="text-gray-900 font-bold mt-4">Slide 1: Cover Slide</h4>
          <p>Your logo and one-liner explaining what your company does. Be clear, not clever. Investors must understand immediately what they're looking at.</p>

          <h4 className="text-gray-900 font-bold mt-4">Slide 2: Problem</h4>
          <p>Clear problem statement (30 characters max for headline). Include size, scope, and severity: Who has this problem? Exactly how many? What's it costing them?</p>

          <h4 className="text-gray-900 font-bold mt-4">Slide 3: Solution</h4>
          <p>Clear solution that directly solves the problem. Include what exactly you're building. Differentiate—don't be generic.</p>

          <h4 className="text-gray-900 font-bold mt-4">Slide 4: Market</h4>
          <p>Bottom-up analysis (not lazy top-down). Show TAM, SAM, SOM with specific numbers. Must be in billions for investor interest.</p>

          <h4 className="text-gray-900 font-bold mt-4">Slide 5: How It Works</h4>
          <p>One sentence explaining the process to user happiness. 3-5 steps max. Show your special sauce—don't just say "AI."</p>

          <h4 className="text-gray-900 font-bold mt-4">Slide 6: Business Model</h4>
          <p>How you make money in one sentence. Exact pricing if possible. Focus on your beach head first.</p>

          <h4 className="text-gray-900 font-bold mt-4">Slide 7: Go-to-Market</h4>
          <p>One overarching strategy for customer acquisition. Not a laundry list—pick one strategy and explain how it evolves.</p>

          <h4 className="text-gray-900 font-bold mt-4">Slide 8: Competition</h4>
          <p>Why users will pick you in one sentence. Use a benefits matrix or magic quadrant. Research your competition—don't throw them "under the bus."</p>

          <h4 className="text-gray-900 font-bold mt-4">Slide 9: Team</h4>
          <p>Why your team will win with evidence. Include: industry experience, past funding/exits, world-class achievements. Show how well you work together.</p>

          <h4 className="text-gray-900 font-bold mt-4">Slide 10: Traction</h4>
          <p>Best traction summary: users, revenue, waitlist, growth metrics. Show momentum—month over month growth. Get some traction before pitching.</p>

          <h4 className="text-gray-900 font-bold mt-4">Funding Slide</h4>
          <p>Format: "We are raising $X to reach Y milestone in Z time frame." Simple use of funds breakdown.</p>
        </div>

        <div className="mt-8 p-5 rounded-xl bg-purple-50 border border-purple-200">
          <h4 className="text-purple-900 font-bold mb-2">Key Takeaways</h4>
          <ul className="list-disc pl-5 space-y-1 text-purple-800 text-sm">
            <li>Start with black and white outline—design comes later</li>
            <li>Keep it to 10 slides maximum</li>
            <li>One headline + three bullets per slide</li>
            <li>Talk to investors, not customers</li>
            <li>Be concise—clarity equals confidence</li>
            <li>Focus on your beach head first</li>
            <li>Show momentum in traction</li>
          </ul>
        </div>
      </div>
    </div>
  );
}