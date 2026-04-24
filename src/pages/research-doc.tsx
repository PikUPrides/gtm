import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';

// ═══════════════════════════════════════════════════════════════════════════
//  AYRO — Market Research Doc
//  Source: Market Research.docx (Oct 28, 2025) + April 2026 Market Pulse update
// ═══════════════════════════════════════════════════════════════════════════

const SECTIONS = [
  { id: 'exec', label: 'Executive Summary', group: 'Overview' },
  { id: 'pulse-2026', label: '2026 Market Pulse', group: 'Overview', hot: true },
  { id: 'industry', label: 'US Industry Overview', group: 'Market' },
  { id: 'texas', label: 'Texas Market Overview', group: 'Market' },
  { id: 'transit-gap', label: 'Public Transit Gap Analysis', group: 'Market' },
  { id: 'riders', label: 'Rider Behaviour', group: 'Customers' },
  { id: 'drivers', label: 'Driver Behaviour', group: 'Customers' },
  { id: 'demand', label: 'Demand Forecast 2025–2030', group: 'Forecast' },
  { id: 'price-bench', label: 'Price Benchmarking', group: 'Competition' },
  { id: 'fuel', label: 'Fuel Price Impact', group: 'Operations' },
  { id: 'urb-sub', label: 'Suburban vs Urban', group: 'Operations' },
  { id: 'safety', label: 'Safety Perception', group: 'Operations' },
  { id: 'earnings', label: 'Driver Earnings', group: 'Operations' },
  { id: 'ev', label: 'EV & Hybrid Adoption', group: 'Operations' },
  { id: 'insurance', label: 'Insurance Cost Trends', group: 'Operations' },
  { id: 'gig', label: 'Gig Economy Labor', group: 'Operations' },
  { id: 'regulatory', label: 'Regulatory & Compliance', group: 'Compliance' },
  { id: 'recommendations', label: 'Strategic Recommendations', group: 'Action' },
];

function SectionHeader({ num, eyebrow, title, description, hot }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        {num && (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#423DF9] to-[#7742F1] text-white text-sm font-extrabold shadow-sm">
            {num}
          </span>
        )}
        <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#423DF9]">{eyebrow}</div>
        {hot && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            New · 2026
          </span>
        )}
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D0652] mb-3 tracking-tight">{title}</h2>
      {description && <p className="text-gray-600 text-sm sm:text-base max-w-3xl leading-relaxed">{description}</p>}
    </div>
  );
}

function Stat({ value, label, sub, tone = 'primary' }) {
  const tones = {
    primary: 'from-[#423DF9] to-[#7742F1]',
    green: 'from-emerald-500 to-teal-500',
    red: 'from-red-500 to-rose-500',
    amber: 'from-amber-500 to-orange-500',
    indigo: 'from-indigo-600 to-[#1D0652]',
  };
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow">
      <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${tones[tone]} bg-clip-text text-transparent tracking-tight`}>
        {value}
      </div>
      <div className="text-sm font-semibold text-gray-800 mt-2">{label}</div>
      {sub && <div className="text-xs text-gray-500 mt-1 leading-relaxed">{sub}</div>}
    </div>
  );
}

function Card({ children, className = '', accent = false }) {
  return (
    <div className={`rounded-xl border ${accent ? 'border-[#423DF9]/30 bg-gradient-to-br from-[#423DF9]/5 to-white' : 'border-gray-200 bg-white'} p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

function Callout({ tone = 'primary', title, children }) {
  const tones = {
    primary: 'border-[#423DF9]/40 bg-[#423DF9]/5 text-[#1D0652]',
    warn: 'border-amber-300 bg-amber-50 text-amber-900',
    danger: 'border-red-300 bg-red-50 text-red-900',
    success: 'border-emerald-300 bg-emerald-50 text-emerald-900',
  };
  const dots = {
    primary: 'bg-[#423DF9]',
    warn: 'bg-amber-500',
    danger: 'bg-red-500',
    success: 'bg-emerald-500',
  };
  return (
    <div className={`rounded-xl border-l-4 ${tones[tone]} px-5 py-4 my-4`}>
      {title && (
        <div className="flex items-center gap-2 mb-2">
          <span className={`w-2 h-2 rounded-full ${dots[tone]}`} />
          <div className="font-bold text-sm uppercase tracking-wider">{title}</div>
        </div>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-3 py-1.5">
      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function XItem({ children }) {
  return (
    <div className="flex items-start gap-3 py-1.5">
      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function BulletList({ items, tone = 'primary' }) {
  const dotColor = tone === 'primary' ? 'bg-[#423DF9]' : tone === 'red' ? 'bg-red-500' : 'bg-emerald-500';
  return (
    <ul className="space-y-2 text-sm text-gray-700">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-2 flex-shrink-0`} />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ComparisonTable({ headers, rows, highlight = 3 }) {
  return (
    <div className="overflow-x-auto -mx-2 sm:mx-0 my-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className={`text-left px-4 py-3 font-bold border-b-2 ${i === highlight ? 'text-[#423DF9] border-[#423DF9] bg-[#423DF9]/5' : 'text-gray-700 border-gray-200'}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-gray-50 transition-colors">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 border-b border-gray-100 align-top ${ci === 0 ? 'font-semibold text-gray-800' : ''} ${ci === highlight ? 'text-[#1D0652] font-semibold bg-[#423DF9]/5' : 'text-gray-600'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PersonaCard({ icon, name, title, traits, fit }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 hover:border-[#423DF9]/40 hover:shadow-md transition-all">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-11 h-11 rounded-lg bg-[#423DF9]/10 flex items-center justify-center text-2xl flex-shrink-0">
          {icon}
        </div>
        <div>
          <div className="font-bold text-[#1D0652]">{name}</div>
          <div className="text-xs text-gray-500 font-medium">{title}</div>
        </div>
      </div>
      <ul className="space-y-1.5 text-xs text-gray-600 mb-3">
        {traits.map((t, i) => (
          <li key={i} className="flex items-start gap-1.5">
            <span className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      {fit && (
        <div className="mt-3 pt-3 border-t border-gray-100 text-xs">
          <span className="text-[#423DF9] font-bold">AYRO fit:</span> <span className="text-gray-700">{fit}</span>
        </div>
      )}
    </div>
  );
}

function CityCard({ rank, name, tag, stats, highlights, color }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
      <div className="p-5 relative" style={{ background: `linear-gradient(135deg, ${color}15, white)` }}>
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider" style={{ color }}>{rank}</div>
            <div className="text-xl font-extrabold text-[#1D0652]">{name}</div>
            <div className="text-sm text-gray-600 mt-1">{tag}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4 mb-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/80 backdrop-blur rounded-lg px-3 py-2 border border-gray-100">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{s.label}</div>
              <div className="text-sm font-bold text-[#1D0652]">{s.value}</div>
            </div>
          ))}
        </div>
        <ul className="space-y-1.5 text-xs text-gray-700">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GrowthBar({ label, pct, max = 20, color = '#423DF9' }) {
  const width = Math.min(100, (pct / max) * 100);
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold" style={{ color }}>+{pct}% CAGR</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${width}%`, background: `linear-gradient(90deg, ${color}, ${color}DD)` }}
        />
      </div>
    </div>
  );
}

function SidebarNav({ active, onJump }) {
  const grouped = SECTIONS.reduce((acc, s) => {
    if (!acc[s.group]) acc[s.group] = [];
    acc[s.group].push(s);
    return acc;
  }, {});

  return (
    <nav className="space-y-5">
      {Object.entries(grouped).map(([group, items]) => (
        <div key={group}>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2 px-2">{group}</div>
          <div className="space-y-0.5">
            {items.map((s) => {
              const num = SECTIONS.findIndex(x => x.id === s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => onJump(s.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-2 ${
                    active === s.id
                      ? 'bg-[#423DF9]/10 text-[#423DF9]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-[#1D0652]'
                  }`}
                >
                  <span className={`w-4 text-[10px] font-bold ${active === s.id ? 'text-[#423DF9]' : 'text-gray-400'}`}>
                    {String(num + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 truncate">{s.label}</span>
                  {s.hot && <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

export default function ResearchDocPage() {
  const [active, setActive] = useState('exec');
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      let current = 'exec';
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollY) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setShowMobileNav(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white">
      <Header />

      {/* HERO */}
      <section className="pt-32 sm:pt-28 pb-12 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#423DF9]/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#7742F1]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#423DF9]/10 border border-[#423DF9]/20 text-[#423DF9] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#423DF9]" />
              Market Research
            </span>
            <span className="text-xs text-gray-500">Updated April 24, 2026 · 19 sections · ~40 min read</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D0652] mb-5 tracking-tight leading-[1.05]">
            The AYRO Market<br />
            <span className="bg-gradient-to-r from-[#423DF9] to-[#7742F1] bg-clip-text text-transparent">Research Doc</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            The complete market intelligence brief behind AYRO's TNC licensing, investor decks, and go-to-market
            strategy — refreshed with 2026 data and the robotaxi threat. Built for operators, investors, and regulators.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <Stat value="$100B+" label="US rideshare GMV" sub="2025 run-rate" tone="primary" />
            <Stat value="76 / 24" label="Uber vs Lyft US share" sub="Bloomberg, Mar 2024" tone="indigo" />
            <Stat value="$9–12B" label="Texas market / yr" sub="10–12% CAGR" tone="green" />
            <Stat value="~$15.60" label="Uber driver / hr" sub="After expenses — drivers squeezed" tone="red" />
          </div>
        </div>
      </section>

      {/* MOBILE TOC */}
      <div className="lg:hidden sticky top-[68px] z-40 bg-white/90 backdrop-blur border-b border-gray-200 px-4 py-2.5">
        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className="w-full flex items-center justify-between text-sm font-semibold text-[#1D0652]"
        >
          <span>📑 Jump to section</span>
          <svg className={`w-4 h-4 transition-transform ${showMobileNav ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {showMobileNav && (
          <div className="mt-3 max-h-[60vh] overflow-y-auto pr-2">
            <SidebarNav active={active} onJump={jump} />
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-20">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 pb-8">
              <SidebarNav active={active} onJump={jump} />
            </div>
          </aside>

          <article className="flex-1 min-w-0 max-w-3xl">

            {/* 01. Exec Summary */}
            <section id="exec" className="mb-20 scroll-mt-32">
              <SectionHeader num="01" eyebrow="Overview" title="Executive Summary" />
              <p className="text-gray-700 leading-relaxed mb-4">
                AYRO is building a driver-first rideshare platform that fixes the three systemic failures of the U.S.
                rideshare market — unfair commissions, inconsistent safety accountability, and unpredictable pricing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The U.S. rideshare industry is strong (~$100B GMV, ~7.7B rides in 2024), but weakened by deep driver
                dissatisfaction, high churn, and inconsistent service quality. AYRO's subscription model, mandatory
                dashcam safety framework, and transparent no-surge pricing create a differentiated, scalable alternative.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong className="text-[#1D0652]">Texas is the launch state.</strong> 30M+ people, 4 of the top 11 U.S.
                cities, four major airports, booming suburbs, stable statewide TNC regulation, and growing driver anger
                at Uber/Lyft commissions make it the ideal beachhead.
              </p>
              <Callout tone="primary" title="What's new in this April 2026 revision">
                This edition folds in the <strong>2026 Market Pulse</strong> (updated Uber/Lyft share, pricing, trip volumes)
                and a sharper view of the <strong>driver economics crisis</strong> compounding at Uber/Lyft — rate cuts,
                opaque deactivations, Prop 22 lawsuits, and rising insurance. The disaffected driver pool is larger and
                more recruitable than at any point in the last five years. That's AYRO's single biggest tailwind.
              </Callout>
            </section>

            {/* 02. 2026 Pulse */}
            <section id="pulse-2026" className="mb-20 scroll-mt-32">
              <SectionHeader
                num="02"
                eyebrow="New · Live Update"
                title="2026 Market Pulse"
                description="What changed between the October 2025 base document and today. These numbers supersede older figures elsewhere in this doc."
                hot
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <Stat value="11.3B" label="Uber global trips (2024)" sub="$162.8B gross bookings" tone="primary" />
                <Stat value="828M" label="Lyft rides (2024)" sub="44M annual riders — ATH" tone="indigo" />
                <Stat value="+7.5%" label="Median ride price YoY" sub="Now ~$15.99 per Uber/Lyft ride" tone="amber" />
                <Stat value="76 / 24" label="US spend share" sub="Uber / Lyft — Bloomberg Second Measure" tone="primary" />
                <Stat value="~$15.60" label="Uber driver /hr after expenses" sub="Pre-tax, pre-benefits" tone="red" />
                <Stat value="72%" label="of Americans don't use rideshare" sub="Untapped TAM" tone="green" />
              </div>
              <Callout tone="success" title="Tailwinds for AYRO">
                <ul className="space-y-1.5">
                  <li>• Rising rider prices (+7.5% YoY) make AYRO's no-surge transparent-fare pitch sharper than ever.</li>
                  <li>• Driver churn is accelerating as rate cuts, opaque deactivations, and rising fuel / insurance compound frustration.</li>
                  <li>• 72% of Americans still don't use rideshare at all — the category has massive headroom.</li>
                  <li>• Regulatory momentum is shifting toward gig-worker protection (EU Platform Worker Directive, Dec 2026; CA Prop 22 lawsuits, April 2026) — validating AYRO's fair-treatment positioning.</li>
                </ul>
              </Callout>
              <Callout tone="danger" title="Headwinds AYRO must plan for">
                <ul className="space-y-1.5">
                  <li>• <strong>Trust deficit across the category.</strong> Uber/Lyft safety and surge scandals have eroded rider goodwill — AYRO must earn trust, not assume it.</li>
                  <li>• <strong>Insurance costs rising 12–16% per year.</strong> TNC-specific coverage is a material P&L line; dashcam-led claim defensibility is essential.</li>
                  <li>• <strong>Driver operational squeeze.</strong> Fuel is 30–45% of driver cost; when gas spikes, marginal drivers go offline on every platform — AYRO needs fuel partnerships and EV incentives ready at launch.</li>
                  <li>• <strong>Incumbent discounting.</strong> Uber/Lyft will respond to an AYRO launch with rider promo pushes. AYRO's defense is driver loyalty (they don't churn) and transparent pricing (riders don't get tricked back).</li>
                </ul>
              </Callout>
            </section>

            {/* 03. US Industry */}
            <section id="industry" className="mb-20 scroll-mt-32">
              <SectionHeader
                num="03"
                eyebrow="Market"
                title="U.S. Rideshare Industry Overview"
                description="The category is large, concentrated, and structurally vulnerable."
              />
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <Stat value="~$100B" label="US rideshare GMV" sub="2025 run-rate" tone="primary" />
                <Stat value="7.7B+" label="2024 US trips" sub="Uber + Lyft combined" tone="indigo" />
                <Stat value="~1.7M" label="US rideshare drivers" sub="Primarily Uber + Lyft" tone="green" />
              </div>
              <h3 className="text-lg font-bold text-[#1D0652] mb-3">Market share & structure</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Two players dominate U.S. rideshare spend: <strong>Uber (~76%)</strong> and <strong>Lyft (~24%)</strong> per
                Bloomberg Second Measure (March 2024). This concentration is the source of AYRO's opportunity — it creates
                a single narrative (duopoly exploitation of drivers and riders) that the entire market already believes.
              </p>
              <h3 className="text-lg font-bold text-[#1D0652] mb-3 mt-8">Structural weaknesses we exploit</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <XItem>Driver commissions of 25–45% create a permanent pool of angry drivers</XItem>
                <XItem>Unpredictable daily earnings destroy driver retention</XItem>
                <XItem>Rider surge pricing drives ~30% of switching intent</XItem>
                <XItem>Weak safety accountability — dashcams not mandatory</XItem>
                <XItem>No real driver-benefit features beyond cosmetic tiering</XItem>
                <XItem>Discount-based rider acquisition = brittle loyalty</XItem>
              </div>
              <h3 className="text-lg font-bold text-[#1D0652] mb-3 mt-8">Macro trends supporting AYRO</h3>
              <ComparisonTable
                headers={['Macro Trend', 'Impact on AYRO']}
                rows={[
                  ['Shift to driver empowerment platforms', 'AYRO subscription model is future-aligned'],
                  ['Riders demand pricing transparency', 'AYRO eliminates hidden fees and surge'],
                  ['Regulatory push for safety & compliance', 'Mandatory dashcams → category leadership'],
                  ['Rise of suburban mobility demand', 'Supply-driven subscription fits low-density zones'],
                  ['EU & state gig-worker protections', "Validates AYRO's fair-treatment brand"],
                ]}
                highlight={1}
              />
            </section>

            {/* 04. Texas */}
            <section id="texas" className="mb-20 scroll-mt-32">
              <SectionHeader
                num="04"
                eyebrow="Market"
                title="Texas Rideshare Market"
                description="Why Texas is the right beachhead — population, airports, suburbs, regulation, and a disaffected driver base."
              />
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <Stat value="30M+" label="Texas population" tone="primary" />
                <Stat value="$9–12B" label="TX rideshare / yr" sub="2024 est." tone="indigo" />
                <Stat value="10–12%" label="TX CAGR 2025–2030" tone="green" />
              </div>
              <h3 className="text-lg font-bold text-[#1D0652] mb-4">Airport ecosystem</h3>
              <ComparisonTable
                headers={['Airport', '2024 Passengers', 'AYRO Opportunity']}
                rows={[
                  ['DFW', '81M', 'One of the busiest in the U.S.'],
                  ['IAH (Houston)', '46M', 'Major domestic + international'],
                  ['AUS (Austin)', '21M', 'Fastest-growing, tech travelers'],
                  ['SAT (San Antonio)', '10M', 'Tourism + military'],
                ]}
                highlight={2}
              />
              <h3 className="text-lg font-bold text-[#1D0652] mb-4 mt-10">City-by-city analysis</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <CityCard
                  rank="Phase 1"
                  name="Houston"
                  tag="Highest-opportunity launch city"
                  color="#423DF9"
                  stats={[
                    { label: 'Airports', value: 'IAH + Hobby' },
                    { label: 'Rank', value: '#4 US city' },
                    { label: 'Suburbs', value: 'Under-served' },
                    { label: 'Demand', value: 'Oil & gas corp' },
                  ]}
                  highlights={[
                    'Huge airport + oil & gas corporate mobility demand',
                    'Katy / Sugar Land / Pearland / Cypress: Uber/Lyft struggle off-peak',
                    'Active rider demand for dashcam-equipped safety',
                  ]}
                />
                <CityCard
                  rank="Phase 2"
                  name="Dallas–Fort Worth"
                  tag="High-income rider market"
                  color="#7742F1"
                  stats={[
                    { label: 'Airport', value: '#2 US busiest' },
                    { label: 'Fortune 500', value: 'Many HQs' },
                    { label: 'Suburbs', value: 'Dense, affluent' },
                    { label: 'Events', value: 'Heavy surge pain' },
                  ]}
                  highlights={[
                    'Plano / Frisco / Irving / McKinney high-frequency suburban usage',
                    'Sports / Cowboys / Mavs → stable pricing wins',
                    'Corporate travel + expense-friendly receipts',
                  ]}
                />
                <CityCard
                  rank="Phase 3"
                  name="Austin"
                  tag="Tech & tourism capital"
                  color="#08D9C4"
                  stats={[
                    { label: 'Passengers', value: '21M / yr' },
                    { label: 'Events', value: 'SXSW / ACL / F1' },
                    { label: 'Demo', value: 'App-first young' },
                    { label: 'Nightlife', value: 'Major demand' },
                  ]}
                  highlights={[
                    'Top-3 US tech city, app-first consumer base',
                    'High alcohol-related incidents → safe-ride demand',
                    'SXSW / ACL / F1 surge pricing is a perennial rider complaint',
                  ]}
                />
                <CityCard
                  rank="Phase 4"
                  name="San Antonio"
                  tag="Underserved rideshare market"
                  color="#EF4444"
                  stats={[
                    { label: 'Tourism', value: 'Riverwalk / Alamo' },
                    { label: 'Military', value: 'Large base' },
                    { label: 'Seniors', value: 'Aging demographic' },
                    { label: 'Airport', value: '10M / yr' },
                  ]}
                  highlights={[
                    'Year-round tourism anchors baseline demand',
                    'Military families need reliable transport',
                    'Senior mobility is a blue-ocean segment',
                  ]}
                />
              </div>
              <h3 className="text-lg font-bold text-[#1D0652] mb-4 mt-10">Competitive landscape in Texas</h3>
              <ComparisonTable
                headers={['Factor', 'Uber', 'Lyft', 'AYRO Opportunity']}
                rows={[
                  ['Driver commissions', 'Very high (25–45%)', 'High (25–40%)', '$5/day subscription, 100% fare'],
                  ['Safety', 'Mixed', 'Mixed', 'Mandatory dashcams'],
                  ['Rider pricing', 'Expensive, surge', 'Surge', 'Transparent, no surge'],
                  ['Suburban ETAs', 'Often long', 'Long', 'Predictable supply (subscription)'],
                  ['Trust', 'Moderate', 'Moderate', 'Tech + fairness + compliance'],
                ]}
                highlight={3}
              />
            </section>

            {/* 05. Transit Gap */}
            <section id="transit-gap" className="mb-20 scroll-mt-32">
              <SectionHeader
                num="05"
                eyebrow="Market"
                title="Public Transportation Gap Analysis"
                description="Where, when, and for whom Texas public transit fails — and how AYRO fills the gap."
              />
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                Texas has a patchwork of public transportation: buses, light rail, and limited metro in big cities, with
                weak or non-existent options in suburbs and exurbs. Minimal night-time coverage, poor airport connectivity
                for early/late flights, and low perceived safety during off-peak hours create huge, durable demand for AYRO.
              </p>
              <h3 className="text-lg font-bold text-[#1D0652] mb-4">Six gap categories</h3>
              <div className="space-y-3 mb-8">
                {[
                  { icon: '🌙', title: 'Temporal gaps', desc: 'Most TX transit shuts down 10 PM–5 AM and reduces on weekends. Night-shift workers, nightlife, and early airport passengers are stranded.' },
                  { icon: '🏡', title: 'Geographic gaps', desc: 'Katy, Sugar Land, Cypress, Pearland, Plano, Frisco, Round Rock, Schertz — routes are sparse, indirect, and slow.' },
                  { icon: '⏱️', title: 'Frequency & reliability', desc: 'Buses/trains often run every 20–40+ min off-peak. Delays, breakdowns, and skipped trips are common.' },
                  { icon: '🛡️', title: 'Safety & comfort', desc: 'Women, seniors, and students feel unsafe at remote stops at night, leading to rideshare preference.' },
                  { icon: '♿', title: 'Accessibility', desc: 'Wheelchair-accessible transit is limited. Low-income night-shift workers have no reliable option.' },
                  { icon: '📱', title: 'Digital & experience', desc: 'Multi-leg journey planning is confusing; many transit systems lack modern apps.' },
                ].map((g, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 flex items-start gap-4 hover:border-[#423DF9]/30 transition-colors">
                    <div className="text-2xl flex-shrink-0">{g.icon}</div>
                    <div>
                      <div className="font-bold text-[#1D0652] text-sm mb-1">{g.title}</div>
                      <div className="text-xs text-gray-600 leading-relaxed">{g.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Callout tone="primary" title="Positioning lines these gaps unlock">
                <div className="space-y-2 font-semibold italic">
                  <div>"Where buses don't reach, AYRO does."</div>
                  <div>"When the last train is gone, AYRO is still there."</div>
                  <div>"Your safe ride, when public transport isn't enough."</div>
                </div>
              </Callout>
            </section>

            {/* 06. Riders */}
            <section id="riders" className="mb-20 scroll-mt-32">
              <SectionHeader
                num="06"
                eyebrow="Customers"
                title="Rider Behaviour Analysis"
                description="Motivations, pain points, personas, and adoption triggers for riders."
              />
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
                {[
                  { icon: '⚡', label: 'Convenience' },
                  { icon: '🛡️', label: 'Safety' },
                  { icon: '💰', label: 'Predictable Price' },
                  { icon: '⏱️', label: 'Reliability' },
                  { icon: '🎩', label: 'Pro Experience' },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 text-center hover:border-[#423DF9]/30 transition-colors">
                    <div className="text-3xl mb-2">{m.icon}</div>
                    <div className="text-xs font-bold text-[#1D0652]">{m.label}</div>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-bold text-[#1D0652] mb-4">Top rider pain points (ranked)</h3>
              <div className="space-y-2 mb-8">
                {[
                  { num: '01', title: 'Surge pricing', detail: 'Prices jumping 2–6× at peak; #1 switching trigger' },
                  { num: '02', title: 'Driver cancellations', detail: '20–30% cancellation rate in TX on short / suburban / night / low-price rides' },
                  { num: '03', title: 'Long suburban ETAs', detail: '12–20 min in Katy, Pearland, Frisco, Round Rock' },
                  { num: '04', title: 'Safety concerns', detail: 'Unverified drivers, no dashcams, night pickups' },
                  { num: '05', title: 'Hidden fees', detail: 'Marketplace / booking / service fees can exceed 30–40% of fare' },
                  { num: '06', title: 'App inconsistencies', detail: 'Wrong ETAs, GPS misrouting, card declines, promo failures' },
                ].map((p, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 bg-white p-4 flex items-start gap-4 hover:border-red-300 transition-colors">
                    <div className="text-xs font-extrabold text-red-500 bg-red-50 rounded-md w-9 h-9 flex items-center justify-center flex-shrink-0">{p.num}</div>
                    <div>
                      <div className="font-bold text-[#1D0652] text-sm mb-0.5">{p.title}</div>
                      <div className="text-xs text-gray-600 leading-relaxed">{p.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-bold text-[#1D0652] mb-4">Rider personas</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <PersonaCard icon="🏢" name="Daily Commuter" title="Weekday 7–10a / 4–7p" traits={['Needs reliable & affordable', 'Hates surge pricing', 'Wants predictable fare']} fit="Predictable pricing, future AYRO Pass" />
                <PersonaCard icon="✈️" name="Airport Traveller" title="4a–10p" traits={['Values punctuality', 'Pre-booking is critical', 'Early morning demand']} fit="Pre-booked ride + no surge for airports" />
                <PersonaCard icon="🌃" name="Late-Night Rider" title="10p–3a" traits={['Safety is primary', 'Trust-driven', 'Driver professionalism']} fit="Dashcams, verified drivers, share-trip" />
                <PersonaCard icon="🎓" name="Student Rider" title="Nightlife + campus" traits={['Price-sensitive', 'App simplicity', 'Peer referrals matter']} fit="Student promos, campus-to-suburb routes" />
                <PersonaCard icon="👵" name="Senior Citizen" title="Medical + errands" traits={['Needs patient drivers', 'Trust-driven', 'Prefers booked rides']} fit="Future ElderCare category" />
                <PersonaCard icon="💼" name="Business Traveller" title="Corp accounts" traits={['Expense-able receipts', 'Consistent quality', 'Airport-heavy']} fit="Hotel / corporate partnerships" />
              </div>
            </section>

            {/* 07. Drivers */}
            <section id="drivers" className="mb-20 scroll-mt-32">
              <SectionHeader
                num="07"
                eyebrow="Customers"
                title="Driver Behaviour Analysis"
                description="The most important analysis in this doc — AYRO lives or dies on driver supply."
              />
              <Callout tone="primary" title="Why driver behaviour matters most for AYRO">
                Unlike Uber/Lyft, AYRO's model depends on <strong>loyal drivers</strong>, <strong>high retention</strong>,
                {' '}<strong>predictable availability</strong>, <strong>low cancellations</strong>, and <strong>high-quality service</strong>.
                If drivers don't stay, the flywheel never starts.
              </Callout>
              <h3 className="text-lg font-bold text-[#1D0652] mb-4 mt-8">Driver motivations (in order)</h3>
              <BulletList items={[
                'Stable, predictable earnings — know what today / this month will be',
                'Low operational deductions — the single biggest Uber/Lyft complaint',
                'Flexible hours — online/offline at will',
                'Safety & protection from false accusations, rider misconduct, accidents',
                'Respectful, clear communication — treated as partners, not contractors',
                'Low platform control — no surprise deactivations or unfair penalties',
              ]} />
              <h3 className="text-lg font-bold text-[#1D0652] mb-4 mt-10">Top 7 pain points on Uber/Lyft (TX)</h3>
              <div className="space-y-2 mb-6">
                {[
                  { num: '01', title: '25–45% commission cuts', detail: 'Driver sees rider paid $25 → driver gets $12 → resentment → churn' },
                  { num: '02', title: 'Unpredictable daily earnings', detail: 'Cannot budget or plan monthly expenses' },
                  { num: '03', title: 'Surge pricing abuse', detail: 'Drivers rarely see the full surge — the platform captures most of it' },
                  { num: '04', title: 'False allegations', detail: 'Platform almost always sides with the rider; one bad rating damages earnings' },
                  { num: '05', title: 'Sudden deactivation', detail: 'Loss of livelihood with no explanation; no appeal process' },
                  { num: '06', title: 'Out-of-pocket costs', detail: 'Fuel, maintenance, insurance all on the driver; earnings fluctuate wildly' },
                  { num: '07', title: 'Unsafe situations', detail: 'Drunk/aggressive passengers, late-night pickups, no recording' },
                ].map((p, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 bg-white p-4 flex items-start gap-4 hover:border-red-300 transition-colors">
                    <div className="text-xs font-extrabold text-red-500 bg-red-50 rounded-md w-9 h-9 flex items-center justify-center flex-shrink-0">{p.num}</div>
                    <div>
                      <div className="font-bold text-[#1D0652] text-sm mb-0.5">{p.title}</div>
                      <div className="text-xs text-gray-600 leading-relaxed">{p.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-bold text-[#1D0652] mb-4 mt-10">Why drivers will choose AYRO</h3>
              <ComparisonTable
                headers={['Feature', 'Uber', 'Lyft', 'AYRO']}
                rows={[
                  ['Commission', '25–45%', '25–40%', '$5/day subscription'],
                  ['Earnings', 'Unpredictable', 'Medium', '100% fare kept by driver'],
                  ['Dashcam', 'Optional', 'Optional', 'Mandatory — driver protection'],
                  ['Support', 'Slow', 'Moderate', 'Fast, human-first'],
                  ['Cancellations', 'Penalized unfairly', 'Penalized', 'Fair policy'],
                  ['Driver treatment', 'Low', 'Medium', 'High respect, transparency'],
                ]}
                highlight={3}
              />
              <h3 className="text-lg font-bold text-[#1D0652] mb-4 mt-10">Driver personas</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <PersonaCard icon="🛡️" name='"The Provider"' title="Full-time driver" traits={['Drives 8–12 hrs/day', 'Primary income', 'Needs stability']} fit="Perfect subscription fit" />
                <PersonaCard icon="🪄" name='"Flex Driver"' title="Part-time" traits={['Evenings / weekends', 'Second income', 'Simple app required']} fit="Low-friction onboarding" />
                <PersonaCard icon="🌙" name='"Safety-Seeker"' title="Night driver" traits={['Works late shifts', 'Safety-conscious', 'Loves dashcams']} fit="Mandatory dashcams = loyalty" />
                <PersonaCard icon="🏡" name='"Low-Demand Zone"' title="Suburban driver" traits={['Hates long empty waits', 'Wants predictable zones', 'Frustrated on Uber/Lyft']} fit="Subscription model solves this" />
                <PersonaCard icon="🎓" name='"Freedom Driver"' title="Student" traits={['Between classes', 'Flexibility first', 'Low-cost model']} fit="AYRO gives freedom" />
                <PersonaCard icon="⚡" name='"Earnings-Crunched"' title="Disaffected Uber/Lyft driver" traits={['Earnings down vs 2 yrs ago', 'Fed up with opaque deactivations', 'Actively seeking alternatives']} fit="Biggest recruiting pool in 2026" />
              </div>
            </section>

            {/* 08. Demand Forecast */}
            <section id="demand" className="mb-20 scroll-mt-32">
              <SectionHeader
                num="08"
                eyebrow="Forecast"
                title="Rideshare Demand Forecast (2025–2030)"
                description="Texas focus. Growth by use case, city, and AYRO scenario."
              />
              <h3 className="text-lg font-bold text-[#1D0652] mb-4">Total Texas demand growth (all platforms)</h3>
              <Card className="mb-6">
                <div className="space-y-1">
                  <GrowthBar label="2025 → 2026" pct={9} color="#423DF9" />
                  <GrowthBar label="2026 → 2027" pct={10} color="#423DF9" />
                  <GrowthBar label="2027 → 2028" pct={11} color="#7742F1" />
                  <GrowthBar label="2028 → 2029" pct={11.5} color="#7742F1" />
                  <GrowthBar label="2029 → 2030" pct={11} color="#7742F1" />
                </div>
              </Card>
              <h3 className="text-lg font-bold text-[#1D0652] mb-4 mt-8">Growth by use case (annual)</h3>
              <Card className="mb-8">
                <GrowthBar label="Airport rides" pct={12} color="#423DF9" />
                <GrowthBar label="Nightlife / late-night" pct={12.5} color="#7742F1" />
                <GrowthBar label="Suburban mobility" pct={14} color="#EF4444" />
                <GrowthBar label="Commute / daily" pct={7.5} color="#08D9C4" />
                <GrowthBar label="Medical / elder / student" pct={7} color="#10B981" />
                <div className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
                  Suburbs and nightlife are the two fastest-growing segments — they also happen to be where Uber/Lyft
                  are structurally weakest. These are AYRO's must-win use cases.
                </div>
              </Card>
              <h3 className="text-lg font-bold text-[#1D0652] mb-4">AYRO share scenarios by Year 5</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border-2 border-gray-200 p-5 bg-white">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">🟦 Conservative</div>
                  <div className="text-3xl font-extrabold text-gray-700 mb-1">1–2%</div>
                  <div className="text-xs text-gray-600">Slower adoption, limited marketing, riders switch slowly</div>
                </div>
                <div className="rounded-xl border-2 border-[#423DF9] p-5 bg-[#423DF9]/5 relative">
                  <div className="absolute -top-2 right-3 text-[10px] font-bold uppercase tracking-wider bg-[#423DF9] text-white px-2 py-0.5 rounded-full">Target</div>
                  <div className="text-xs font-bold text-[#423DF9] uppercase tracking-wider mb-2">🟩 Base Case</div>
                  <div className="text-3xl font-extrabold text-[#1D0652] mb-1">3–4%</div>
                  <div className="text-xs text-gray-700">Focus on airport + suburbs, strong driver VP, solid partnerships</div>
                </div>
                <div className="rounded-xl border-2 border-emerald-300 p-5 bg-emerald-50">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">🟥 Aggressive</div>
                  <div className="text-3xl font-extrabold text-emerald-800 mb-1">5–7%</div>
                  <div className="text-xs text-gray-700">Viral driver acquisition, strong funding, clear differentiation</div>
                </div>
              </div>
              <Callout tone="primary">
                Even <strong>2–3% share</strong> of a multi-billion TX market is huge for a properly structured startup.
                AYRO does not need the whole market — it needs to dominate <strong>specific niches</strong>: airport corridors,
                underserved suburbs, and the safety-first rider segment.
              </Callout>
            </section>

            {/* 09. Price Bench */}
            <section id="price-bench" className="mb-20 scroll-mt-32">
              <SectionHeader num="09" eyebrow="Competition" title="Competitive Price Benchmarking" description="Side-by-side comparison and AYRO's unique pricing advantage." />
              <ComparisonTable
                headers={['Factor', 'Uber', 'Lyft', 'AYRO']}
                rows={[
                  ['Commission', '25–45%', '25–40%', '$5/day subscription'],
                  ['Surge pricing', 'Yes', 'Yes', 'No surge'],
                  ['Safety', 'Medium', 'Medium', 'High (dashcam mandatory)'],
                  ['Driver satisfaction', 'Low', 'Medium', 'High (projected)'],
                  ['Rider pricing stability', 'Low', 'Medium', 'High (transparent fare)'],
                  ['Median ride price (2024)', '~$15.99', '~$15.99', 'Target 5–10% below, same quality'],
                ]}
                highlight={3}
              />
              <Callout tone="success" title="AYRO unique proposition">
                Same or lower rider prices than Uber/Lyft, and drivers keep <strong>100% of fare</strong> after a small fixed subscription.
                More driver loyalty → more drivers online → shorter ETAs → happier riders → repeat.
              </Callout>
            </section>

            {/* 11. Fuel */}
            <section id="fuel" className="mb-20 scroll-mt-32">
              <SectionHeader num="10" eyebrow="Operations" title="Fuel Price Impact Analysis" />
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <Stat value="30–45%" label="of driver operational cost" sub="Fuel alone" tone="amber" />
                <Stat value="$0.99 → $0.68" label="Uber mileage rate cut" sub="While fuel rose — drivers squeezed" tone="red" />
                <Stat value="Direct" label="fuel → rider fare linkage" sub="Uber/Lyft pass hikes via surge" tone="primary" />
              </div>
              <h4 className="text-base font-bold text-[#1D0652] mb-3">AYRO mitigation strategy</h4>
              <div className="space-y-1">
                <CheckItem>Fuel vendor partnership (discounted cards for subscribed drivers)</CheckItem>
                <CheckItem>Hybrid/EV driver incentives lower cost-per-mile</CheckItem>
                <CheckItem>Subscription model insulates rider fares from fuel volatility</CheckItem>
                <CheckItem>Fixed platform cost lets AYRO hold pricing even when competitors surge</CheckItem>
              </div>
            </section>

            {/* 12. Suburban vs Urban */}
            <section id="urb-sub" className="mb-20 scroll-mt-32">
              <SectionHeader num="11" eyebrow="Operations" title="Suburban vs Urban Mobility Study" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <div className="text-xs font-bold text-[#423DF9] uppercase tracking-wider mb-2">Urban Rider Patterns</div>
                  <BulletList items={[
                    'Short-distance rides',
                    'High peak-time demand',
                    'Dense driver supply',
                    'Competitive on price alone',
                  ]} />
                </Card>
                <Card accent>
                  <div className="text-xs font-bold text-[#423DF9] uppercase tracking-wider mb-2">Suburban Rider Patterns</div>
                  <BulletList items={[
                    'Longer rides (higher fare per trip)',
                    'Far fewer drivers available',
                    'Higher cancellation rate',
                    'Limited Uber/Lyft reliability',
                    'AV-immune for years',
                  ]} />
                </Card>
              </div>
              <Callout tone="success" title="AYRO's structural advantage">
                Subscription drivers remain active in lower-demand zones because their daily cost is already paid.
                Better suburban availability = major differentiation vs Uber/Lyft. This advantage <em>widens</em> as
                competitors divert attention to AV corridors.
              </Callout>
            </section>

            {/* 13. Safety */}
            <section id="safety" className="mb-20 scroll-mt-32">
              <SectionHeader num="12" eyebrow="Operations" title="Safety Perception Report" />
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <Card>
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">Rider safety concerns</div>
                  <div className="space-y-1">
                    <XItem>Fake accounts</XItem>
                    <XItem>Non-traceable drivers</XItem>
                    <XItem>No dashcam footage</XItem>
                    <XItem>Fear at night</XItem>
                    <XItem>Weak incident resolution</XItem>
                  </div>
                </Card>
                <Card accent>
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">AYRO safety architecture</div>
                  <div className="space-y-1">
                    <CheckItem>Dashcam in every vehicle (front + cabin)</CheckItem>
                    <CheckItem>Driver identity verified via Yardstik</CheckItem>
                    <CheckItem>Live location sharing</CheckItem>
                    <CheckItem>24/7 support</CheckItem>
                    <CheckItem>SOS button + emergency response flow</CheckItem>
                  </div>
                </Card>
              </div>
              <Callout tone="primary">
                AYRO operates at a higher safety tier than Uber/Lyft, and against robotaxis the <em>human accountability</em>
                narrative (a real driver you can identify, rate, and who can help during an emergency) is an asset that
                compounds over time.
              </Callout>
            </section>

            {/* 14. Earnings */}
            <section id="earnings" className="mb-20 scroll-mt-32">
              <SectionHeader num="13" eyebrow="Operations" title="Driver Earnings Comparison" />
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <Stat value="$15.60" label="Uber driver /hr" sub="After expenses, pre-tax" tone="red" />
                <Stat value="~$21.74" label="Gross /hr" sub="Before expenses" tone="amber" />
                <Stat value="100%" label="Fare kept on AYRO" sub="After $5/day subscription" tone="green" />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                On a typical $17 fare, an Uber driver nets about $10.56 after booking fees and 25% commission.
                On AYRO, that same $17 fare is the driver's — $17 minus a prorated ~$0.60 from the daily subscription.
                Over 20 trips, the daily difference is dramatic.
              </p>
              <Callout tone="success">
                "Keep 100% of your earnings" is not a marketing line — it's the core product. This message alone is expected
                to be the single most effective driver-acquisition hook in Texas in 2026.
              </Callout>
            </section>

            {/* 15. EV */}
            <section id="ev" className="mb-20 scroll-mt-32">
              <SectionHeader num="15" eyebrow="Operations" title="EV & Hybrid Adoption Trends" />
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <Stat value="+38%" label="EV rise in rideshare" tone="green" />
                <Stat value="Lower" label="cost per mile" sub="vs ICE" tone="primary" />
                <Stat value="TX rebates" label="EV purchase incentives" tone="indigo" />
              </div>
              <h4 className="text-base font-bold text-[#1D0652] mb-3">AYRO strategy</h4>
              <div className="space-y-1">
                <CheckItem>"Green Ride" category badge in the app</CheckItem>
                <CheckItem>EV driver bonuses and priority dispatch</CheckItem>
                <CheckItem>Fast-charging partnerships (ChargePoint, EVgo, Tesla Supercharger)</CheckItem>
                <CheckItem>Promote eco-friendly ride option to ESG-conscious corporate accounts</CheckItem>
              </div>
            </section>

            {/* 16. Insurance */}
            <section id="insurance" className="mb-20 scroll-mt-32">
              <SectionHeader num="16" eyebrow="Operations" title="Insurance Cost Trends" />
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <Stat value="12–16%" label="annual cost rise" sub="Persistent trend" tone="red" />
                <Stat value="Multi-period" label="TNC coverage required" sub="P1 / P2 / P3" tone="primary" />
                <Stat value="Dashcam =" label="lower premiums" sub="Via claim defensibility" tone="green" />
              </div>
              <h4 className="text-base font-bold text-[#1D0652] mb-3">AYRO strategy</h4>
              <div className="space-y-1">
                <CheckItem>Work with specialist TNC insurers (not general auto)</CheckItem>
                <CheckItem>Mandatory dashcams reduce liability exposure</CheckItem>
                <CheckItem>High safety score → better insurance negotiations at scale</CheckItem>
                <CheckItem>Driver safety training modules reduce claim frequency</CheckItem>
              </div>
            </section>

            {/* 17. Gig */}
            <section id="gig" className="mb-20 scroll-mt-32">
              <SectionHeader num="17" eyebrow="Operations" title="Gig Economy Labor Market" />
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <Stat value="57M" label="Americans in gig economy" tone="primary" />
                <Stat value="Top 3" label="Rideshare among gig categories" tone="indigo" />
                <Stat value="54%" label="of rideshare drivers" sub="Have another job" tone="amber" />
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Most gig workers want <strong>flexibility</strong>, but also want <strong>payment transparency</strong> — the single
                largest driver complaint is opaque fares and inconsistent earnings. AYRO's subscription model solves both.
              </p>
              <Callout tone="warn" title="Regulatory tailwind">
                EU's Platform Worker Directive (Dec 2026) will standardize gig-worker benefits, and California Prop 22
                lawsuits (April 2026) are challenging arbitrary deactivations. The regulatory wind is blowing toward
                AYRO's "drivers are partners" positioning globally.
              </Callout>
            </section>

            {/* 18. Regulatory */}
            <section id="regulatory" className="mb-20 scroll-mt-32">
              <SectionHeader
                num="18"
                eyebrow="Compliance"
                title="Regulatory Environment & AYRO Compliance"
                description="Texas Occupations Code Chapter 2402 — AYRO's compliance posture against the five core requirements."
              />
              <Callout tone="primary">
                Under TX Ch. 2402, TNCs must meet strict operational, safety, insurance, and documentation requirements.
                AYRO meets or <strong>exceeds</strong> all five — detailed below.
              </Callout>
              <div className="space-y-4 mt-6">
                {[
                  {
                    num: '01',
                    title: 'Driver Background Checks',
                    req: 'Comprehensive screening (criminal, sex-offender, terrorist watchlist, identity, MVR covering DUIs / reckless driving / suspensions for 7 yrs). Annual re-screening.',
                    ayro: [
                      'Yardstik — federally recognized background check vendor',
                      'Multi-level criminal + SSN + nationwide sex offender registry',
                      'MVR covering 7 years',
                      'Continuous monitoring alerts',
                      'Re-verification every 6 months (stricter than annual)',
                      'Automated lockouts for expired documents',
                    ],
                  },
                  {
                    num: '02',
                    title: 'Vehicle Safety Inspections',
                    req: 'Annual inspection at certified station. Brakes, lights, tires, seatbelts, horn, windshield, airbags, emissions.',
                    ayro: [
                      'Valid TX inspection report upload required at onboarding',
                      'Annual renewal reminders',
                      'Automated expiry tracking',
                      'In-app notifications for document updates',
                      'Mandatory dashcam installation (front + cabin) above baseline',
                    ],
                  },
                  {
                    num: '03',
                    title: 'Zero-Tolerance Drug/Alcohol Policy',
                    req: 'Public, enforced policy. Rider reporting. Immediate investigation, temporary suspension, permanent removal on confirmation.',
                    ayro: [
                      'Written policy in app + website',
                      'One-tap driver intoxication report button',
                      'Auto-suspension pending investigation',
                      '24/7 incident response',
                      'Real-time event logs via dashcam',
                      'Tiered disciplinary system with re-education track',
                    ],
                  },
                  {
                    num: '04',
                    title: 'Insurance Compliance',
                    req: 'Period 1: $50k/$100k/$25k. Periods 2–3: $1M primary liability. Comprehensive, collision, UM/UIM.',
                    ayro: [
                      'Full Period 1 compliance ($50k/$100k/$25k)',
                      'Full Periods 2–3 compliance ($1M liability)',
                      'Contingent comprehensive + collision',
                      'Cyber liability insurance for data protection',
                      'Dashcams reduce false claims → better long-term rates',
                      'Incident footage stored securely for legal defense',
                    ],
                  },
                  {
                    num: '05',
                    title: 'Fare Transparency',
                    req: 'Upfront fare / range, no hidden fees, clear receipts, no unannounced surge.',
                    ayro: [
                      'Transparent upfront pricing, no surge, ever',
                      'Simple fare breakdown: distance + time + platform fee',
                      'Rider receipts include driver name, car, plate, exact fare',
                      '"Estimate vs Actual" comparison on every receipt',
                      'Pricing explanation tooltip in app',
                      'Fare algorithm version control for audit',
                    ],
                  },
                ].map(r => (
                  <div key={r.num} className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                    <div className="px-5 py-4 bg-gradient-to-r from-emerald-50 to-white border-b border-gray-100 flex items-center gap-3">
                      <div className="text-xs font-extrabold bg-emerald-500 text-white rounded-md w-9 h-9 flex items-center justify-center flex-shrink-0">✓</div>
                      <div>
                        <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Section {r.num} · Fully Compliant</div>
                        <div className="font-bold text-[#1D0652]">{r.title}</div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">TX Requirement</div>
                      <p className="text-sm text-gray-700 mb-4 leading-relaxed">{r.req}</p>
                      <div className="text-xs font-bold text-[#423DF9] uppercase tracking-wider mb-2">AYRO compliance & enhancements</div>
                      <div className="space-y-1">
                        {r.ayro.map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-bold text-[#1D0652] mb-4 mt-10">Why AYRO is stronger than competitors on compliance</h3>
              <ComparisonTable
                headers={['Requirement', 'Uber', 'Lyft', 'AYRO']}
                rows={[
                  ['Background checks', 'Annual', 'Annual', 'Semi-annual + enhanced'],
                  ['Mandatory dashcam', 'No', 'No', 'Yes — required'],
                  ['Fare transparency', 'Surge pricing', 'Surge pricing', 'No surge'],
                  ['Safety recordings', 'Not mandatory', 'Not mandatory', 'Front + cabin dashcam'],
                  ['Driver income model', 'Commission', 'Commission', 'Subscription (fair)'],
                ]}
                highlight={3}
              />
            </section>

            {/* 19. Recommendations */}
            <section id="recommendations" className="mb-12 scroll-mt-32">
              <SectionHeader
                num="19"
                eyebrow="Action"
                title="Strategic Recommendations for AYRO"
                description="The 10 things AYRO should do based on this research. Ranked by impact and urgency."
              />
              <div className="space-y-3">
                {[
                  { rank: '01', priority: 'URGENT', title: 'Launch in Houston first — not Austin', detail: 'Austin is now an AV battleground (Waymo + Tesla). Houston has bigger rideshare demand, worse transit, stronger suburbs, and no robotaxis yet. De-risk the launch.' },
                  { rank: '02', priority: 'URGENT', title: 'Run "AV-displaced driver" recruiting in Austin', detail: 'Drivers being squeezed by robotaxis today are the fastest-converting pool. Direct-response ads, driver-to-driver referrals, partner with driver communities. 12–18 month window.' },
                  { rank: '03', priority: 'HIGH', title: 'Anchor brand on "Suburban Mobility Partner"', detail: 'AV-immune. Uber/Lyft weak here. Real TX suburbs (Katy, Sugar Land, Frisco, Plano, Cypress, Round Rock) are the growth engine. Flat-fare suburban-to-metro corridors.' },
                  { rank: '04', priority: 'HIGH', title: 'Own airport reliability in DFW + IAH + AUS', detail: 'Pre-booked airport rides with buffer ETAs. "Never miss your flight" brand promise. Partner with airports and hotels for curbside pickup privileges.' },
                  { rank: '05', priority: 'HIGH', title: 'Make "Keep 100% of your earnings" the #1 driver message', detail: 'Nothing else cuts through like this. Testimonials, income examples, TikTok content from real drivers. This is the entire hiring campaign.' },
                  { rank: '06', priority: 'HIGH', title: 'Launch a women-safety ride category', detail: 'Huge unmet demand in TX. Dashcam + verified drivers + female-preferred option. Enormous emotional pull for parents of teens.' },
                  { rank: '07', priority: 'MEDIUM', title: 'Refresh investor deck with 2026 numbers and AV strategy', detail: 'The October 2025 doc had 72/28 Uber:Lyft — current is 76/24. Update all stats, add the AV threat slide, position AYRO as the human+suburban moat.' },
                  { rank: '08', priority: 'MEDIUM', title: 'Build driver loyalty flywheel early', detail: 'Weekly badges, clean-car bonus, "Pro Driver" tier, micro-loans, family medical plans. Uber/Lyft cannot copy this fast.' },
                  { rank: '09', priority: 'MEDIUM', title: 'Pre-negotiate specialist TNC insurance', detail: 'Insurance costs rising 12–16% annually. Dashcam data + safety narrative should lock in better rates before launch scale.' },
                  { rank: '10', priority: 'LONG-TERM', title: 'Design the hybrid AV future', detail: "Don't fight AVs forever. Build optionality for AYRO to onboard fleet operators once brand + user base are established (Year 3–5)." },
                ].map(r => (
                  <div key={r.rank} className="rounded-xl border border-gray-200 bg-white p-5 hover:border-[#423DF9]/30 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-xs font-extrabold bg-gradient-to-br from-[#423DF9] to-[#7742F1] text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">{r.rank}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className="font-bold text-[#1D0652] text-sm">{r.title}</div>
                          <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            r.priority === 'URGENT' ? 'bg-red-100 text-red-700' :
                            r.priority === 'HIGH' ? 'bg-amber-100 text-amber-700' :
                            r.priority === 'MEDIUM' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {r.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700 leading-relaxed" style={{ paddingLeft: '3.25rem' }}>{r.detail}</div>
                  </div>
                ))}
              </div>
              <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#423DF9] to-[#1D0652] p-8 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3">Bottom line</div>
                <h3 className="text-xl sm:text-2xl font-extrabold mb-3 leading-tight">
                  AYRO wins if it moves <em>now</em>, in Houston first, with an unambiguous pro-driver brand.
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
                  The market is bigger, pricier, and more vulnerable than the October 2025 snapshot suggested. The driver
                  pool is more recruitable than ever. The suburbs are still wide open. The AV threat is real in Austin
                  but a tailwind elsewhere. The window is open — it won't stay open past 2027.
                </p>
              </div>
              <div className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-500 leading-relaxed">
                <div className="font-bold text-gray-700 mb-1">About this document</div>
                <p>
                  Base source: <em>Market Research.docx</em>, AYRO Inc., October 28, 2025.
                  April 2026 update adds: 2026 Market Pulse (Section 02), AV / Robotaxi Threat (Section 09), refreshed
                  market-share / pricing / driver-earnings figures throughout, and a restructured Strategic Recommendations list (Section 19).
                  Data sources referenced inline (Bloomberg Second Measure, Uber/Lyft FY 2024 earnings, Mordor Intelligence,
                  TechCrunch, Fast Company, Insurance Journal, TX Occupations Code Ch. 2402).
                </p>
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}
