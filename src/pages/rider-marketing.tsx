import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { user } from '../api/sdk';

const channels = [
  { name: 'YouTube', type: 'Organic/Paid', color: '#FF0000', status: 'WIP', approved: 'No', budget: '$100', contacts: [{ name: 'Nishant', role: 'Video Editor', email: 'nishant@skillsvital.com', phone: '+977 981-6630434' }], vendors: [{ name: 'Feedbird', email: 'support@feedbird.com' }, { name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], dimensions: { thumbnail: '1280×720 px (16:9)', video: '1920×1080 px (16:9)', shorts: '1080×1920 px (9:16)' } },
  { name: 'TikTok', type: 'Organic/Paid', color: '#00f2ea', status: 'WIP', approved: 'No', budget: '$100', contacts: [{ name: 'Nishant', role: 'Video Editor', email: 'nishant@skillsvital.com', phone: '+977 981-6630434' }], vendors: [{ name: 'Feedbird', email: 'support@feedbird.com' }, { name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], dimensions: { image: '1080×1920 px (9:16)', video: '1080×1920 px (9:16)' } },
  { name: 'Facebook', type: 'Organic/Paid', color: '#1877F2', status: 'NO', approved: 'No', budget: '$100', contacts: [{ name: 'Nishant', role: 'Video Editor', email: 'nishant@skillsvital.com', phone: '+977 981-6630434' }], vendors: [{ name: 'Feedbird', email: 'support@feedbird.com' }, { name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], dimensions: { feed: '1080×1080 px (1:1)', landscape: '1200×630 px (1.91:1)', story: '1080×1920 px (9:16)', video: '1080×1080 px or 1920×1080 px' } },
  { name: 'Instagram', type: 'Organic/Paid', color: '#E1306C', status: 'NO', approved: 'No', budget: '$100', contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }, { name: 'MANI', email: 'rmv1108m@gmail.com' }], dimensions: { feedSquare: '1080×1080 px (1:1)', feedPortrait: '1080×1350 px (4:5)', stories: '1080×1920 px (9:16)', reels: '1080×1920 px (9:16)' } },
  { name: 'Threads', type: 'Organic/Paid', color: '#000000', status: 'NO', approved: 'No', budget: '$100', contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], dimensions: { image: '1080×1080 px or 1080×1350 px', video: '1080×1920 px (9:16)' }, notes: 'Account disabled on 9th January 2026' },
  { name: 'Snapchat', type: 'Organic/Paid', color: '#FFFC00', status: 'NO', approved: 'No', budget: '$100', contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], dimensions: { image: '1080×1920 px (9:16)', video: '1080×1920 px (9:16)' } },
  { name: 'Twitter/X', type: 'Organic/Paid', color: '#000000', status: 'NO', approved: 'No', budget: '$100', contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], dimensions: { singleImage: '1200×675 px (16:9)', squareImage: '1080×1080 px', landscapeVideo: '1280×720 px (16:9)', vertical: '1080×1920 px (9:16)' }, notes: 'Wrong password' },
  { name: 'LinkedIn', type: 'Organic/Paid', color: '#0A66C2', status: 'NO', approved: 'No', budget: '$100', contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], dimensions: { feedImage: '1200×1200 px (1:1)', landscape: '1200×627 px (1.91:1)', squareVideo: '1080×1080 px', verticalVideo: '1080×1920 px', landscapeVideo: '1920×1080 px' } },
  { name: 'Reddit', type: 'Organic/Paid', color: '#FF4500', status: 'NO', approved: 'No', budget: '$100', contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], dimensions: { image: '1080×1080 px or 1200×1200 px', video: '1080×1920 px or 1920×1080 px' } },
  { name: 'Pinterest', type: 'Organic/Paid', color: '#E60023', status: 'Ready', approved: 'No', budget: '$100', contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], dimensions: { standard: '1000×1500 px (2:3)', long: '1000×1800 px', video: '1080×1920 px (9:16)' }, goLive: '15-Jan' },
];

export default function RiderMarketing() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const me = await user.me();
        setCurrentUser(me);
      } catch (e) {
        setCurrentUser(null);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: '#fafafe' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2" style={{ background: 'linear-gradient(135deg, #423DF9 0%, #08D9C4 100%)' }}>
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold" style={{ color: '#1D0652' }}>AYRO</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-gray-500 hover:text-[#423DF9] transition-colors">Home</Link>
              <div className="relative group">
                <button className="text-sm font-medium text-gray-500 hover:text-[#423DF9] transition-colors flex items-center gap-1">
                  Strategy
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link to="/gtm" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#423DF9] rounded-t-xl">Go-to-Market</Link>
                  <Link to="/ayro-orbit" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#423DF9]">Orbit Strategy</Link>
                  <Link to="/downloads" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#423DF9] rounded-b-xl">1M Downloads</Link>
                </div>
              </div>
              <Link to="/documents/slides" className="text-sm font-medium text-gray-500 hover:text-[#423DF9] transition-colors">Slides</Link>
              <Link to="/data" className="text-sm font-medium text-gray-500 hover:text-[#423DF9] transition-colors">Data</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {currentUser ? (
              <button onClick={() => { user.logout(); navigate('/login'); }} className="text-sm font-medium text-gray-500 hover:text-[#423DF9] transition-colors">Logout</button>
            ) : (
              <Link to="/login" className="text-sm font-medium" style={{ color: '#423DF9' }}>Login</Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, #7742F1 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ background: 'rgba(255,255,255,0.15)', color: '#08D9C4', border: '1px solid rgba(255,255,255,0.2)' }}>
            Social Media Channels
          </div>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">Rider Marketing Playbook</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            10 social media channels with complete specs, vendor contacts, and content creation workflows.
          </p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      {/* Stats Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#423DF915' }}>
              <svg className="w-5 h-5" style={{ color: '#423DF9' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: '#1D0652' }}>{channels.length}</p>
              <p className="text-xs text-gray-500">Channels</p>
            </div>
          </div>
        </div>
      </div>

      {/* Channels Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold" style={{ color: '#1D0652' }}>Social Media Channels</h2>
            <p className="text-gray-500 text-sm mt-1">Dimensions, contacts, and setup status</p>
          </div>
          <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ background: '#423DF915', color: '#423DF9' }}>{channels.length} channels</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map(channel => (
            <div key={channel.name} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <div className="h-2" style={{ background: channel.color }} />
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: channel.color + '15' }}>
                      <svg className="w-6 h-6" style={{ color: channel.color }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{channel.name}</h3>
                      <p className="text-xs text-gray-400">{channel.type}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    channel.status === 'Ready' ? 'bg-green-100 text-green-700' :
                    channel.status === 'WIP' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {channel.status}
                  </span>
                </div>

                {/* Dimensions */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Dimensions</p>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.entries(channel.dimensions).slice(0, 4).map(([key, val]) => (
                      <span key={key} className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded">
                        {val.split(' px')[0]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div className="flex items-center justify-between mb-4 p-3 rounded-lg" style={{ background: '#423DF908' }}>
                  <span className="text-xs text-gray-500">Monthly Budget</span>
                  <span className="font-bold" style={{ color: '#423DF9' }}>{channel.budget}</span>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}