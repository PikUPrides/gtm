import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { entities, user } from '../api/sdk';
import { serenities } from '../api/globals';

const channels = [
  { name: 'TikTok', category: 'Social', color: '#00f2ea' },
  { name: 'Instagram Reels', category: 'Social', color: '#E1306C' },
  { name: 'YouTube Shorts', category: 'Social', color: '#FF0000' },
  { name: 'Snapchat', category: 'Social', color: '#FFFC00' },
  { name: 'Google Performance Max', category: 'Paid', color: '#4285F4' },
  { name: 'Meta Ads', category: 'Paid', color: '#0081FB' },
  { name: 'TikTok Ads', category: 'Paid', color: '#00f2ea' },
  { name: 'Local SEO', category: 'Organic', color: '#34A853' },
  { name: 'App Store Optimization', category: 'Organic', color: '#5AC8FA' },
  { name: 'Influencer Partnerships', category: 'Partnerships', color: '#9B51E0' },
  { name: 'University Campus', category: 'Partnerships', color: '#FF6B00' },
  { name: 'Corporate Deals', category: 'Partnerships', color: '#00C853' },
  { name: 'Referral Program', category: 'Referral', color: '#423DF9' },
  { name: 'Cash Rewards', category: 'Referral', color: '#08D9C4' },
  { name: 'Community Events', category: 'Community', color: '#FF6B6B' },
  { name: 'Rider Loyalty', category: 'CRM', color: '#7742F1' },
];

export default function RiderMarketing() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    async function loadVideos() {
      try {
        const data = await entities.Videos.list();
        setVideos(data);
      } catch (e) {
        console.error('Error loading videos:', e);
      } finally {
        setLoading(false);
      }
    }
    loadVideos();
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
            Growth Channels
          </div>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">Rider Marketing Playbook</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            45+ acquisition channels across social, paid ads, influencers, community, and strategic partnerships.
          </p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      {/* Channels */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold" style={{ color: '#1D0652' }}>Acquisition Channels</h2>
            <p className="text-gray-500 text-sm mt-1">Tactical approaches for rider growth</p>
          </div>
          <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ background: '#423DF915', color: '#423DF9' }}>{channels.length} active</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {channels.map(channel => (
            <div key={channel.name} className="group bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl" style={{ background: channel.color }} />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: channel.color + '15' }}>
                  <svg className="w-5 h-5" style={{ color: channel.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{channel.name}</h3>
                  <p className="text-xs text-gray-400">{channel.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Library */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-xl font-bold" style={{ color: '#1D0652' }}>Video Library</h2>
          <p className="text-gray-500 text-sm mt-1">Campaign assets and creative references</p>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-[#423DF9] rounded-full animate-spin" />
          </div>
        ) : videos.length === 0 ? (
          <div className="bg-gray-50 rounded-xl p-12 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">No video library content yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map(video => (
              <div key={video.id} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  {video.Thumbnail ? (
                    <img src={serenities.files.url(video.Thumbnail)} alt={video.Title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <svg className="w-5 h-5 ml-0.5" style={{ color: '#1D0652' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1.5 line-clamp-1">{video.Title || 'Untitled'}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{video.Description || ''}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                    <span>{video.ChannelName || ''}</span>
                    <span>{video.Duration || ''}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}