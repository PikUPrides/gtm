
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

function StarRating({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < n ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, role, city, rating, type, initials, color }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{ backgroundColor: color }}>
          {initials}
        </div>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${type === 'rider' ? 'bg-[#423DF9]/10 text-[#423DF9]' : 'bg-[#10B981]/10 text-[#10B981]'}`}>
          {type === 'rider' ? 'Rider' : 'Driver'}
        </span>
      </div>
      <StarRating n={rating} />
      <p className="text-gray-700 text-sm leading-relaxed italic">"{quote}"</p>
      <div className="mt-auto pt-2 border-t border-gray-100">
        <div className="text-sm font-bold text-gray-800">{name}</div>
        <div className="text-xs text-gray-400">{role} · {city}</div>
      </div>
    </div>
  );
}

const riderTestimonials = [
  { quote: 'Testimonial content will appear here once riders submit their feedback through the in-app survey.', name: 'Rider Name', role: 'Regular Rider', city: 'City, State', rating: 5, type: 'rider', initials: 'R1', color: BRAND.primary },
  { quote: 'Share your AYRO experience and help us improve the platform for everyone.', name: 'Rider Name', role: 'Frequent User', city: 'City, State', rating: 5, type: 'rider', initials: 'R2', color: '#7742F1' },
  { quote: 'Real testimonials coming soon — invite riders to share their stories.', name: 'Rider Name', role: 'New Rider', city: 'City, State', rating: 5, type: 'rider', initials: 'R3', color: BRAND.teal },
];

const driverTestimonials = [
  { quote: 'Driver feedback and testimonials will be collected through the driver onboarding and weekly check-in flows.', name: 'Driver Name', role: 'Full-Time Driver', city: 'City, State', rating: 5, type: 'driver', initials: 'D1', color: BRAND.green },
  { quote: 'Partner with AYRO and share your experience — driver stories build trust with new recruits.', name: 'Driver Name', role: 'Part-Time Driver', city: 'City, State', rating: 5, type: 'driver', initials: 'D2', color: BRAND.amber },
  { quote: 'Authentic driver voices help us recruit better and improve the platform faster.', name: 'Driver Name', role: 'Fleet Partner', city: 'City, State', rating: 5, type: 'driver', initials: 'D3', color: '#F97316' },
];

const stats = [
  { label: 'Total Testimonials', value: '—', sub: 'Riders + Drivers' },
  { label: 'Avg. Rider Rating', value: '—', sub: 'Out of 5 stars' },
  { label: 'Avg. Driver Rating', value: '—', sub: 'Out of 5 stars' },
  { label: 'NPS Score', value: '—', sub: 'Net Promoter Score' },
];

export default function CustomerTestimonials() {
  const [activeTab, setActiveTab] = useState('riders');

  return (
    <div className="min-h-screen bg-[#fafafe]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Header />

      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12 relative z-10">
          <p className="text-[#08D9C4] text-xs font-bold uppercase tracking-[0.2em] mb-2">GTM · Social Proof</p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">Customer Testimonials</h1>
          <p className="text-white/70 text-base max-w-xl">Real voices from AYRO drivers and riders — social proof that powers growth, trust, and recruitment.</p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-3xl font-extrabold mb-1" style={{ color: BRAND.dark }}>{s.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{s.label}</div>
              <div className="text-xs text-gray-400">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          {[['riders', 'Rider Stories'], ['drivers', 'Driver Stories'], ['all', 'All Testimonials']].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-4 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors ${activeTab === id ? 'border-[#423DF9] text-[#423DF9]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {(activeTab === 'riders' || activeTab === 'all') && (
          <div className="mb-10">
            <SectionHeader eyebrow="01 · Riders" title="Rider Testimonials" description="Experiences from AYRO riders — what keeps them coming back." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {riderTestimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
            </div>
          </div>
        )}

        {(activeTab === 'drivers' || activeTab === 'all') && (
          <div className="mb-10">
            <SectionHeader eyebrow="02 · Drivers" title="Driver Testimonials" description="Stories from AYRO drivers — why they choose to partner with us." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {driverTestimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
            </div>
          </div>
        )}

        {/* Collect CTA */}
        <div className="rounded-2xl border-2 border-dashed border-[#423DF9]/30 bg-[#423DF9]/5 p-10 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white border border-[#423DF9]/20 flex items-center justify-center">
            <svg className="w-5 h-5" style={{ color: BRAND.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="text-base font-bold mb-1" style={{ color: BRAND.dark }}>Collect more testimonials</div>
          <div className="text-sm text-gray-500 max-w-md mx-auto">Set up in-app feedback flows and post-ride surveys to automatically collect and display real driver and rider testimonials here.</div>
        </div>
      </div>
    </div>
  );
}
