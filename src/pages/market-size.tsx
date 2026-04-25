import Header from '../components/Header.jsx';
import { useState } from 'react';

const ElephantSVG = ({ size = 200, color = '#1D0652', label }) => (
  <div className="flex flex-col items-center gap-3">
    <svg width={size} height={size * 0.75} viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="110" cy="85" rx="55" ry="40" fill={color} />
      {/* Head */}
      <circle cx="55" cy="65" r="30" fill={color} />
      {/* Ear */}
      <ellipse cx="35" cy="55" rx="18" ry="25" fill={color} opacity="0.7" />
      {/* Trunk */}
      <path d="M35 80 Q25 110 35 130 Q40 135 45 128 Q38 110 45 85" fill={color} />
      {/* Eye */}
      <circle cx="50" cy="58" r="3" fill="white" />
      <circle cx="51" cy="57" r="1.5" fill="#333" />
      {/* Tusk */}
      <path d="M55 82 Q50 95 55 100" stroke="ivory" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <rect x="80" y="110" width="14" height="30" rx="5" fill={color} />
      <rect x="100" y="110" width="14" height="30" rx="5" fill={color} />
      <rect x="130" y="110" width="14" height="30" rx="5" fill={color} />
      <rect x="148" y="110" width="14" height="30" rx="5" fill={color} />
      {/* Tail */}
      <path d="M165 80 Q175 75 178 85" stroke={color} strokeWidth="2.5" fill="none" />
      <circle cx="178" cy="87" r="3" fill={color} />
    </svg>
    {label && <span className="text-sm font-semibold text-gray-700 text-center">{label}</span>}
  </div>
);

const BabyElephantSVG = ({ size = 100, color = '#423DF9', label }) => (
  <div className="flex flex-col items-center gap-3">
    <svg width={size} height={size * 0.75} viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="110" cy="85" rx="55" ry="40" fill={color} />
      {/* Head */}
      <circle cx="55" cy="60" r="32" fill={color} />
      {/* Ear */}
      <ellipse cx="33" cy="50" rx="20" ry="27" fill={color} opacity="0.7" />
      {/* Trunk - shorter, cuter */}
      <path d="M38 78 Q30 100 38 112 Q42 116 46 110 Q40 98 47 82" fill={color} />
      {/* Eye - bigger for baby look */}
      <circle cx="52" cy="52" r="5" fill="white" />
      <circle cx="53" cy="51" r="2.5" fill="#333" />
      {/* Small tusk */}
      <path d="M55 78 Q52 86 55 90" stroke="ivory" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Legs - stubbier */}
      <rect x="80" y="112" width="14" height="26" rx="6" fill={color} />
      <rect x="100" y="112" width="14" height="26" rx="6" fill={color} />
      <rect x="130" y="112" width="14" height="26" rx="6" fill={color} />
      <rect x="148" y="112" width="14" height="26" rx="6" fill={color} />
      {/* Tail */}
      <path d="M165 80 Q175 75 176 83" stroke={color} strokeWidth="2" fill="none" />
      <circle cx="176" cy="85" r="2.5" fill={color} />
    </svg>
    {label && <span className="text-sm font-semibold text-center" style={{ color }}>{label}</span>}
  </div>
);

const AntSVG = ({ size = 30, color = '#08D9C4', label }) => (
  <div className="flex flex-col items-center gap-2">
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="12" cy="20" r="5" fill={color} />
      {/* Thorax */}
      <ellipse cx="22" cy="20" rx="4" ry="3.5" fill={color} />
      {/* Abdomen */}
      <ellipse cx="32" cy="20" rx="6" ry="5" fill={color} />
      {/* Eye */}
      <circle cx="10" cy="18" r="1" fill="white" />
      {/* Antennae */}
      <path d="M9 16 Q5 8 3 6" stroke={color} strokeWidth="1" fill="none" />
      <path d="M12 15 Q10 8 8 5" stroke={color} strokeWidth="1" fill="none" />
      {/* Legs */}
      <line x1="18" y1="23" x2="15" y2="30" stroke={color} strokeWidth="1" />
      <line x1="22" y1="23" x2="22" y2="31" stroke={color} strokeWidth="1" />
      <line x1="26" y1="23" x2="29" y2="30" stroke={color} strokeWidth="1" />
      <line x1="18" y1="17" x2="15" y2="10" stroke={color} strokeWidth="1" />
      <line x1="22" y1="17" x2="22" y2="10" stroke={color} strokeWidth="1" />
      <line x1="26" y1="17" x2="29" y2="10" stroke={color} strokeWidth="1" />
    </svg>
    {label && <span className="text-xs font-semibold text-center" style={{ color }}>{label}</span>}
  </div>
);

export default function MarketSizeAnalogy() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: 'The Perceived Problem',
      subtitle: '"You\'re just one city competing against a giant"',
      description: 'When investors see AYRO launching in Austin, the initial reaction is scale anxiety — an ant next to an elephant.',
    },
    {
      id: 1,
      title: 'The Real Picture',
      subtitle: '"We\'re not an ant — we\'re a baby elephant"',
      description: 'Texas is the 2nd largest state by population (30M+) and economy. Launching in Texas isn\'t small — it\'s building a regional powerhouse. Baby elephants grow up.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1D0652] mb-3">Market Size Analogy</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Why launching in Texas is a feature, not a limitation</p>
        </div>

        {/* Slide Selector */}
        <div className="flex justify-center gap-3 mb-10">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(slide.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeSlide === slide.id
                  ? 'bg-[#423DF9] text-white shadow-lg shadow-[#423DF9]/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#423DF9]/40 hover:text-[#423DF9]'
              }`}
            >
              {slide.id === 0 ? 'Perception' : 'Reality'}
            </button>
          ))}
        </div>

        {/* Slide Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="px-6 sm:px-10 pt-8 pb-4 border-b border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D0652]">{slides[activeSlide].title}</h2>
            <p className="text-[#423DF9] text-lg mt-1 italic">{slides[activeSlide].subtitle}</p>
          </div>

          {/* Visual */}
          <div className="px-6 sm:px-10 py-12">
            {activeSlide === 0 ? (
              /* Slide 1: Elephant vs Ant */
              <div className="flex flex-col items-center">
                <div className="flex items-end justify-center gap-8 sm:gap-16 mb-10">
                  {/* Elephant */}
                  <div className="flex flex-col items-center">
                    <ElephantSVG size={220} color="#1D0652" />
                    <div className="mt-4 text-center">
                      <div className="text-xl font-bold text-[#1D0652]">Uber</div>
                      <div className="text-sm text-gray-500">US Market</div>
                      <div className="text-xs text-gray-400 mt-1">$100B+ valuation</div>
                    </div>
                  </div>
                  {/* VS */}
                  <div className="text-2xl font-bold text-gray-300 mb-20">vs</div>
                  {/* Ant */}
                  <div className="flex flex-col items-center mb-2">
                    <AntSVG size={35} color="#08D9C4" />
                    <div className="mt-4 text-center">
                      <div className="text-base font-bold text-[#08D9C4]">AYRO</div>
                      <div className="text-sm text-gray-500">Austin Market</div>
                      <div className="text-xs text-gray-400 mt-1">Single city</div>
                    </div>
                  </div>
                </div>

                {/* Perception callout */}
                <div className="bg-red-50 border border-red-200 rounded-xl px-6 py-4 max-w-lg text-center">
                  <p className="text-red-700 text-sm font-medium">
                    &#x26A0; Investor Concern: "How can you compete with a giant when you're just in one city?"
                  </p>
                </div>
              </div>
            ) : (
              /* Slide 2: Elephant vs Baby Elephant */
              <div className="flex flex-col items-center">
                <div className="flex items-end justify-center gap-8 sm:gap-16 mb-10">
                  {/* Elephant */}
                  <div className="flex flex-col items-center">
                    <ElephantSVG size={220} color="#1D0652" />
                    <div className="mt-4 text-center">
                      <div className="text-xl font-bold text-[#1D0652]">Uber</div>
                      <div className="text-sm text-gray-500">US Market</div>
                      <div className="text-xs text-gray-400 mt-1">330M people &bull; 50 states</div>
                    </div>
                  </div>
                  {/* VS */}
                  <div className="text-2xl font-bold text-gray-300 mb-24">vs</div>
                  {/* Baby Elephant */}
                  <div className="flex flex-col items-center">
                    <BabyElephantSVG size={130} color="#423DF9" />
                    <div className="mt-4 text-center">
                      <div className="text-xl font-bold text-[#423DF9]">AYRO</div>
                      <div className="text-sm text-gray-500">Texas Market</div>
                      <div className="text-xs text-gray-400 mt-1">30M+ people &bull; 2nd largest state</div>
                    </div>
                  </div>
                </div>

                {/* Reality callout */}
                <div className="bg-[#423DF9]/5 border border-[#423DF9]/20 rounded-xl px-6 py-4 max-w-xl text-center">
                  <p className="text-[#1D0652] text-sm font-medium">
                    &#x1F4A1; Texas alone is a <strong>$2.2T economy</strong> — larger than most countries. Baby elephants grow up.
                  </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full max-w-2xl">
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-[#423DF9]">30M+</div>
                    <div className="text-xs text-gray-500 mt-1">Texas Population</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-[#423DF9]">$2.2T</div>
                    <div className="text-xs text-gray-500 mt-1">Texas GDP</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-[#423DF9]">#8</div>
                    <div className="text-xs text-gray-500 mt-1">World Economy (if a country)</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom description */}
          <div className="px-6 sm:px-10 py-6 bg-gray-50 border-t border-gray-100">
            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">{slides[activeSlide].description}</p>
          </div>
        </div>

        {/* Bottom narrative */}
        <div className="mt-10 bg-gradient-to-r from-[#1D0652] to-[#423DF9] rounded-2xl px-6 sm:px-10 py-8 text-white">
          <h3 className="text-xl font-bold mb-3">The Strategy: Own Texas, Then Go National</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
              <div>
                <div className="font-semibold">Launch in Texas</div>
                <div className="text-white/70 mt-1">Austin, Houston, Dallas, San Antonio — a 30M+ person market from day one</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
              <div>
                <div className="font-semibold">Dominate the State</div>
                <div className="text-white/70 mt-1">Build density, prove unit economics, become the Texas rideshare brand</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
              <div>
                <div className="font-semibold">Go National</div>
                <div className="text-white/70 mt-1">The baby elephant becomes the elephant</div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
