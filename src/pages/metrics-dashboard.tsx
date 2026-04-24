
import { useState } from 'react';
import Header from '../components/Header.jsx';

const BRAND = { primary: '#423DF9', dark: '#1D0652', teal: '#08D9C4', green: '#10B981', amber: '#F59E0B', red: '#EF4444' };

function StatCard({ label, value, change, changeLabel, color, icon }) {
  const positive = change >= 0;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</span>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: color + '15' }}>
          <svg className="w-4 h-4" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d={icon} /></svg>
        </div>
      </div>
      <div className="text-3xl font-extrabold" style={{ color: BRAND.dark }}>{value}</div>
      <div className="flex items-center gap-1.5">
        <span className={`inline-flex items-center gap-0.5 text-xs font-bold px-2 py-0.5 rounded-full ${positive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={positive ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
          </svg>
          {Math.abs(change)}%
        </span>
        <span className="text-xs text-gray-400">{changeLabel}</span>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: BRAND.primary }}>{eyebrow}</div>
      <h2 className="text-2xl font-extrabold mb-1" style={{ color: BRAND.dark }}>{title}</h2>
      {description && <p className="text-gray-500 text-sm">{description}</p>}
    </div>
  );
}

function ChartPlaceholder({ label, height = 'h-56' }) {
  return (
    <div className={`${height} rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2`}>
      <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
      <span className="text-sm font-medium text-gray-400">{label}</span>
      <span className="text-xs text-gray-300">Connect data source to populate</span>
    </div>
  );
}

const currentMetrics = [
  { label: 'Total Rides', value: '—', change: 0, changeLabel: 'vs last month', color: BRAND.primary, icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { label: 'Active Riders', value: '—', change: 0, changeLabel: 'vs last month', color: BRAND.teal, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Active Drivers', value: '—', change: 0, changeLabel: 'vs last month', color: BRAND.green, icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { label: 'Avg. Ride Value', value: '—', change: 0, changeLabel: 'vs last month', color: BRAND.amber, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'App Downloads', value: '—', change: 0, changeLabel: 'vs last month', color: '#7742F1', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
  { label: 'Driver Utilization', value: '—', change: 0, changeLabel: 'vs last week', color: BRAND.primary, icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
];

const trailingRows = [
  { metric: 'Total Rides', w1: '—', w2: '—', w3: '—', w4: '—', trend: 0 },
  { metric: 'New Rider Signups', w1: '—', w2: '—', w3: '—', w4: '—', trend: 0 },
  { metric: 'New Driver Signups', w1: '—', w2: '—', w3: '—', w4: '—', trend: 0 },
  { metric: 'Avg. Ride Value ($)', w1: '—', w2: '—', w3: '—', w4: '—', trend: 0 },
  { metric: 'App Downloads', w1: '—', w2: '—', w3: '—', w4: '—', trend: 0 },
  { metric: 'Driver Utilization (%)', w1: '—', w2: '—', w3: '—', w4: '—', trend: 0 },
  { metric: 'Cancellation Rate (%)', w1: '—', w2: '—', w3: '—', w4: '—', trend: 0 },
  { metric: 'Avg. Wait Time (min)', w1: '—', w2: '—', w3: '—', w4: '—', trend: 0 },
];

export default function MetricsDashboard() {
  const [activeTab, setActiveTab] = useState('current');
  return (
    <div className="min-h-screen bg-[#fafafe]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Header />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12 relative z-10">
          <p className="text-[#08D9C4] text-xs font-bold uppercase tracking-[0.2em] mb-2">GTM · Analytics</p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">Metrics Dashboard</h1>
          <p className="text-white/70 text-base max-w-xl">Current performance indicators and trailing 4-week trends across riders, drivers, and platform health.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          {['current', 'trailing'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-semibold capitalize border-b-2 -mb-px transition-colors ${activeTab === tab ? 'border-[#423DF9] text-[#423DF9]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              {tab === 'current' ? 'Current Metrics' : 'Trailing (4-Week)'}
            </button>
          ))}
        </div>

        {activeTab === 'current' && (
          <>
            <div className="mb-10">
              <SectionHeader eyebrow="01 · Now" title="Current Performance" description="Key metrics as of this period. Connect your data source to populate live figures." />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentMetrics.map(m => <StatCard key={m.label} {...m} />)}
              </div>
            </div>
            <div className="mb-10">
              <SectionHeader eyebrow="02 · Trends" title="Ride Volume" description="Weekly ride completions over the past 8 weeks." />
              <ChartPlaceholder label="Ride Volume Chart" height="h-64" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div>
                <SectionHeader eyebrow="03 · Growth" title="Rider vs Driver Growth" />
                <ChartPlaceholder label="Rider / Driver Growth Chart" />
              </div>
              <div>
                <SectionHeader eyebrow="04 · Revenue" title="Avg. Ride Value Trend" />
                <ChartPlaceholder label="Revenue Trend Chart" />
              </div>
            </div>
          </>
        )}

        {activeTab === 'trailing' && (
          <div className="mb-10">
            <SectionHeader eyebrow="Trailing" title="4-Week Rolling Metrics" description="Week-over-week comparison across all core platform metrics." />
            <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Metric</th>
                    {['Week -3', 'Week -2', 'Week -1', 'This Week'].map(w => (
                      <th key={w} className="text-right px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">{w}</th>
                    ))}
                    <th className="text-right px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {trailingRows.map((row, i) => (
                    <tr key={row.metric} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="px-5 py-3 font-semibold text-gray-700">{row.metric}</td>
                      {[row.w1, row.w2, row.w3, row.w4].map((v, j) => (
                        <td key={j} className="px-4 py-3 text-right text-gray-500">{v}</td>
                      ))}
                      <td className="px-5 py-3 text-right">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.trend > 0 ? 'bg-emerald-50 text-emerald-600' : row.trend < 0 ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-400'}`}>
                          {row.trend === 0 ? '—' : `${row.trend > 0 ? '+' : ''}${row.trend}%`}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
