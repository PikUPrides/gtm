
import { useState } from 'react';
import Header from '../components/Header.jsx';

const BRAND = { primary: '#423DF9', dark: '#1D0652', teal: '#08D9C4', green: '#10B981', amber: '#F59E0B', red: '#EF4444' };

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: BRAND.primary }}>{eyebrow}</div>
      <h2 className="text-2xl font-extrabold mb-1" style={{ color: BRAND.dark }}>{title}</h2>
      {description && <p className="text-gray-500 text-sm">{description}</p>}
    </div>
  );
}

function MetricRow({ label, current, target, note, positive }) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="px-5 py-3 text-sm font-semibold text-gray-700">{label}</td>
      <td className="px-4 py-3 text-sm text-right font-bold" style={{ color: BRAND.dark }}>{current}</td>
      <td className="px-4 py-3 text-sm text-right text-gray-400">{target}</td>
      <td className="px-5 py-3 text-xs text-gray-400 hidden sm:table-cell">{note}</td>
    </tr>
  );
}

const perRideMetrics = [
  { label: 'Gross Ride Fare', current: '—', target: '$12.00', note: 'Avg. fare per completed ride' },
  { label: 'Driver Payout (70%)', current: '—', target: '$8.40', note: 'Platform take-rate 30%' },
  { label: 'Platform Revenue', current: '—', target: '$3.60', note: 'Before variable costs' },
  { label: 'Payment Processing', current: '—', target: '$0.35', note: '~2.9% + $0.30' },
  { label: 'Insurance (per ride)', current: '—', target: '$0.40', note: 'Per-mile underwritten cost' },
  { label: 'Infra / Tech Cost', current: '—', target: '$0.15', note: 'Maps, SMS, server cost' },
  { label: 'Contribution Margin', current: '—', target: '$2.70', note: 'Platform revenue − variable costs' },
];

const cacLtvRows = [
  { channel: 'Paid Social (Riders)', cac: '—', ltv: '—', ltvCac: '—', payback: '—' },
  { channel: 'Referral (Riders)', cac: '—', ltv: '—', ltvCac: '—', payback: '—' },
  { channel: 'Organic / ASO', cac: '—', ltv: '—', ltvCac: '—', payback: '—' },
  { channel: 'Paid Search', cac: '—', ltv: '—', ltvCac: '—', payback: '—' },
  { channel: 'Driver Recruitment Ads', cac: '—', ltv: '—', ltvCac: '—', payback: '—' },
  { channel: 'Driver Referral', cac: '—', ltv: '—', ltvCac: '—', payback: '—' },
];

const summaryCards = [
  { label: 'Contribution Margin / Ride', value: '—', target: '$2.70 target', color: BRAND.primary },
  { label: 'Blended Rider CAC', value: '—', target: 'Target: <$8', color: BRAND.teal },
  { label: 'Blended Rider LTV', value: '—', target: 'Target: >$40', color: BRAND.green },
  { label: 'LTV / CAC Ratio', value: '—', target: 'Target: >5x', color: BRAND.amber },
];

export default function UnitEconomics() {
  const [activeTab, setActiveTab] = useState('per-ride');

  return (
    <div className="min-h-screen bg-[#fafafe]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Header />

      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12 relative z-10">
          <p className="text-[#08D9C4] text-xs font-bold uppercase tracking-[0.2em] mb-2">GTM · Financials</p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">Unit Economics</h1>
          <p className="text-white/70 text-base max-w-xl">Per-ride P&L, CAC/LTV by channel, and contribution margin — current actuals vs targets.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {summaryCards.map(c => (
            <div key={c.label} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{c.label}</div>
              <div className="text-2xl font-extrabold mb-1" style={{ color: BRAND.dark }}>{c.value}</div>
              <div className="text-xs text-gray-400">{c.target}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          {[['per-ride', 'Per-Ride P&L'], ['cac-ltv', 'CAC / LTV by Channel'], ['margin', 'Margin Breakdown']].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-4 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors ${activeTab === id ? 'border-[#423DF9] text-[#423DF9]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'per-ride' && (
          <div className="mb-10">
            <SectionHeader eyebrow="01 · Per Ride" title="Per-Ride Economics" description="Revenue and cost breakdown per completed ride. Current = actuals, Target = model." />
            <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Line Item</th>
                    <th className="text-right px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Current</th>
                    <th className="text-right px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Target</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {perRideMetrics.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <MetricRow {...row} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'cac-ltv' && (
          <div className="mb-10">
            <SectionHeader eyebrow="02 · CAC / LTV" title="CAC & LTV by Channel" description="Customer acquisition cost vs lifetime value per channel. Payback period in months." />
            <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    {['Channel', 'CAC ($)', 'LTV ($)', 'LTV/CAC', 'Payback (mo)'].map(h => (
                      <th key={h} className={`py-3 text-xs font-bold text-gray-500 uppercase tracking-wider ${h === 'Channel' ? 'text-left px-5' : 'text-right px-4'}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cacLtvRows.map((row, i) => (
                    <tr key={row.channel} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="px-5 py-3 font-semibold text-gray-700">{row.channel}</td>
                      <td className="px-4 py-3 text-right text-gray-500">{row.cac}</td>
                      <td className="px-4 py-3 text-right text-gray-500">{row.ltv}</td>
                      <td className="px-4 py-3 text-right text-gray-500">{row.ltvCac}</td>
                      <td className="px-4 py-3 text-right text-gray-500">{row.payback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'margin' && (
          <div className="mb-10">
            <SectionHeader eyebrow="03 · Margin" title="Contribution Margin Over Time" description="Platform contribution margin trend as volume scales." />
            <div className="h-64 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2">
              <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm font-medium text-gray-400">Margin Trend Chart</span>
              <span className="text-xs text-gray-300">Connect data source to populate</span>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[['Break-even Rides/Month', '—', 'Volume needed to cover fixed costs'], ['Fixed Cost Base / Mo', '—', 'Team, infra, licenses'], ['Gross Margin at 10k Rides', '—', 'Projected at scale']].map(([label, val, note]) => (
                <div key={label} className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{label}</div>
                  <div className="text-2xl font-extrabold mb-1" style={{ color: BRAND.dark }}>{val}</div>
                  <div className="text-xs text-gray-400">{note}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
