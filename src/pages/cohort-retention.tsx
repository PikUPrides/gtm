
import { useState } from 'react';
import Header from '../components/Header.jsx';

const BRAND = { primary: '#423DF9', dark: '#1D0652', teal: '#08D9C4', green: '#10B981', amber: '#F59E0B' };

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: BRAND.primary }}>{eyebrow}</div>
      <h2 className="text-2xl font-extrabold mb-1" style={{ color: BRAND.dark }}>{title}</h2>
      {description && <p className="text-gray-500 text-sm">{description}</p>}
    </div>
  );
}

function RetentionCell({ value }) {
  if (value === null) return <td className="px-3 py-2.5 text-center text-gray-300 text-sm">—</td>;
  const pct = parseFloat(value);
  const bg = pct >= 70 ? '#10B981' : pct >= 50 ? '#F59E0B' : pct >= 30 ? '#F97316' : '#EF4444';
  const opacity = Math.max(0.1, pct / 100);
  return (
    <td className="px-3 py-2.5 text-center text-sm font-semibold" style={{ backgroundColor: bg + Math.round(opacity * 255).toString(16).padStart(2, '0'), color: pct >= 50 ? '#1D0652' : '#374151' }}>
      {value}%
    </td>
  );
}

const cohortWeeks = ['W0', 'W1', 'W2', 'W3', 'W4', 'W8', 'W12'];
const riderCohorts = [
  { cohort: 'Jan 2025', size: '—', retention: [100, null, null, null, null, null, null] },
  { cohort: 'Feb 2025', size: '—', retention: [100, null, null, null, null, null, null] },
  { cohort: 'Mar 2025', size: '—', retention: [100, null, null, null, null, null, null] },
  { cohort: 'Apr 2025', size: '—', retention: [100, null, null, null, null, null, null] },
  { cohort: 'May 2025', size: '—', retention: [100, null, null, null, null, null, null] },
  { cohort: 'Jun 2025', size: '—', retention: [100, null, null, null, null, null, null] },
];
const driverCohorts = [
  { cohort: 'Jan 2025', size: '—', retention: [100, null, null, null, null, null, null] },
  { cohort: 'Feb 2025', size: '—', retention: [100, null, null, null, null, null, null] },
  { cohort: 'Mar 2025', size: '—', retention: [100, null, null, null, null, null, null] },
  { cohort: 'Apr 2025', size: '—', retention: [100, null, null, null, null, null, null] },
  { cohort: 'May 2025', size: '—', retention: [100, null, null, null, null, null, null] },
  { cohort: 'Jun 2025', size: '—', retention: [100, null, null, null, null, null, null] },
];

const insightCards = [
  { label: 'Avg. Rider W4 Retention', value: '—', desc: 'Benchmark: 35–45%', color: BRAND.primary },
  { label: 'Avg. Driver W4 Retention', value: '—', desc: 'Benchmark: 50–60%', color: BRAND.teal },
  { label: 'Best Rider Cohort', value: '—', desc: 'Highest W4 retention', color: BRAND.green },
  { label: 'Best Driver Cohort', value: '—', desc: 'Highest W4 retention', color: BRAND.amber },
];

export default function CohortRetention() {
  const [activeTab, setActiveTab] = useState('riders');
  const cohorts = activeTab === 'riders' ? riderCohorts : driverCohorts;

  return (
    <div className="min-h-screen bg-[#fafafe]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Header />

      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12 relative z-10">
          <p className="text-[#08D9C4] text-xs font-bold uppercase tracking-[0.2em] mb-2">GTM · Retention</p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">Cohort Retention Analysis</h1>
          <p className="text-white/70 text-base max-w-xl">Week-over-week retention heatmaps for driver and rider cohorts — understand who sticks and when churn happens.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Summary cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {insightCards.map(c => (
            <div key={c.label} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{c.label}</div>
              <div className="text-2xl font-extrabold mb-1" style={{ color: BRAND.dark }}>{c.value}</div>
              <div className="text-xs text-gray-400">{c.desc}</div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <span className="text-xs font-semibold text-gray-500">Retention rate:</span>
          {[['≥70%', '#10B981'], ['50–69%', '#F59E0B'], ['30–49%', '#F97316'], ['<30%', '#EF4444']].map(([label, color]) => (
            <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
              <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: color + '60' }} />{label}
            </span>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          {['riders', 'drivers'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-semibold capitalize border-b-2 -mb-px transition-colors ${activeTab === tab ? 'border-[#423DF9] text-[#423DF9]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              {tab === 'riders' ? 'Rider Cohorts' : 'Driver Cohorts'}
            </button>
          ))}
        </div>

        <SectionHeader
          eyebrow={activeTab === 'riders' ? '01 · Riders' : '02 · Drivers'}
          title={activeTab === 'riders' ? 'Rider Retention by Cohort' : 'Driver Retention by Cohort'}
          description="Each row is a signup cohort. Columns show % still active at that week. Populate data to activate heatmap."
        />

        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Cohort</th>
                <th className="text-right px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Size</th>
                {cohortWeeks.map(w => (
                  <th key={w} className="text-center px-3 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">{w}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cohorts.map((row, i) => (
                <tr key={row.cohort} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}>
                  <td className="px-5 py-2.5 font-semibold text-gray-700">{row.cohort}</td>
                  <td className="px-4 py-2.5 text-right text-gray-500">{row.size}</td>
                  {row.retention.map((v, j) => <RetentionCell key={j} value={v} />)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Churn analysis */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div>
            <SectionHeader eyebrow="03 · Churn" title="Churn by Week" description="When do users drop off most?" />
            <div className="h-56 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2">
              <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              <span className="text-sm font-medium text-gray-400">Churn Curve Chart</span>
              <span className="text-xs text-gray-300">Connect data source to populate</span>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="04 · Recovery" title="Win-back Rate" description="Churned users who re-activated." />
            <div className="h-56 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2">
              <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm font-medium text-gray-400">Win-back Rate Chart</span>
              <span className="text-xs text-gray-300">Connect data source to populate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
