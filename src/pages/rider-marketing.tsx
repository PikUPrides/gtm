import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { user } from '../api/sdk';

const channels = [
  // Organic/Paid Social Media Channels (1-15)
  { name: 'YouTube', type: 'Organic/Paid', color: '#FF0000', status: 'WIP', budget: '$100', dimensions: { thumbnail: '1280×720 px', video: '1920×1080 px', shorts: '1080×1920 px' }, contacts: [{ name: 'Nishant', role: 'Video Editor', email: 'nishant@skillsvital.com', phone: '+977 981-6630434' }], vendors: [{ name: 'Feedbird', email: 'support@feedbird.com' }, { name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.youtube.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'TikTok', type: 'Organic/Paid', color: '#00f2ea', status: 'WIP', budget: '$100', dimensions: { image: '1080×1920 px', video: '1080×1920 px' }, contacts: [{ name: 'Nishant', role: 'Video Editor', email: 'nishant@skillsvital.com', phone: '+977 981-6630434' }], vendors: [{ name: 'Feedbird', email: 'support@feedbird.com' }, { name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.tiktok.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Facebook', type: 'Organic/Paid', color: '#1877F2', status: 'NO', budget: '$100', dimensions: { feed: '1080×1080 px', landscape: '1200×630 px', story: '1080×1920 px', video: '1080×1080 px' }, contacts: [{ name: 'Nishant', role: 'Video Editor', email: 'nishant@skillsvital.com', phone: '+977 981-6630434' }], vendors: [{ name: 'Feedbird', email: 'support@feedbird.com' }, { name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.facebook.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Instagram', type: 'Organic/Paid', color: '#E1306C', status: 'NO', budget: '$100', dimensions: { feedSquare: '1080×1080 px', feedPortrait: '1080×1350 px', stories: '1080×1920 px', reels: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }, { name: 'MANI', email: 'rmv1108m@gmail.com' }], website: 'https://www.instagram.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Threads', type: 'Organic/Paid', color: '#000000', status: 'NO', budget: '$100', dimensions: { image: '1080×1080 px or 1080×1350 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.threads.net', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Snapchat', type: 'Organic/Paid', color: '#FFFC00', status: 'NO', budget: '$100', dimensions: { image: '1080×1920 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.snapchat.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Twitter/X', type: 'Organic/Paid', color: '#000000', status: 'NO', budget: '$100', dimensions: { singleImage: '1200×675 px', squareImage: '1080×1080 px', landscapeVideo: '1280×720 px', vertical: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://x.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'LinkedIn', type: 'Organic/Paid', color: '#0A66C2', status: 'NO', budget: '$100', dimensions: { feedImage: '1200×1200 px', landscape: '1200×627 px', squareVideo: '1080×1080 px', verticalVideo: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.linkedin.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Reddit', type: 'Organic/Paid', color: '#FF4500', status: 'NO', budget: '$100', dimensions: { image: '1080×1080 px or 1200×1200 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.reddit.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Pinterest', type: 'Organic/Paid', color: '#E60023', status: 'Ready', budget: '$100', dimensions: { standard: '1000×1500 px', long: '1000×1800 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.pinterest.com', goLive: '15-Jan', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Quora', type: 'Organic/Paid', color: '#B92B27', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.quora.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Medium Blog', type: 'Organic', color: '#00AB6B', status: 'TBD', budget: '$0', dimensions: {}, contacts: [{ name: 'GravityWriter', role: 'Tool', email: 'tool@' }], vendors: [{ name: 'Draftss', contact: 'Aditi' }], website: 'https://medium.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'AYRO Blogs', type: 'Organic', color: '#423DF9', status: 'TBD', budget: '$0', dimensions: {}, contacts: [{ name: 'GravityWriter', role: 'Tool', email: 'tool@gravitywrite.com' }], vendors: [{ name: 'Draftss', contact: 'Aditi' }], website: 'https://ayrorides.com/blog', checklist: 'Blog writing' },
  { name: 'Google My Business', type: 'Organic', color: '#4285F4', status: 'TBD', budget: '$0', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.google.com/business', goLive: '15-Jan', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Discord', type: 'Organic', color: '#5865F2', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://discord.com', goLive: '15-Jan', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  
  // Paid Advertising Channels (16-28)
  { name: 'Quora Ads', type: 'Paid', color: '#B92B27', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.quora.com/business', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Google Ads', type: 'Paid', color: '#4285F4', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://ads.google.com', checklist: 'Account Creation, Profile setup' },
  { name: 'Vibe Co', type: 'Paid', color: '#FF6B6B', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'All TV Channels in Texas', role: 'Vendor', email: '' }], vendors: [], website: 'https://advertising.roku.com/', checklist: 'Need inputs from JP' },
  { name: 'Audiogo (Radio)', type: 'Paid', color: '#8B5CF6', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'All FM Channels in Texas', role: 'Vendor', email: '' }], vendors: [], website: 'https://app.audiogo.com/us/login', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Spotify', type: 'Paid', color: '#1DB954', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Ads Managers', role: 'Team', email: '' }], vendors: [], website: 'https://ads.spotify.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Whatsapp Marketing', type: 'Paid', color: '#25D366', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.whatsapp.com', checklist: 'Account Creation' },
  { name: 'Telegram', type: 'Organic/Paid', color: '#0088CC', status: 'TBD', budget: '$0', dimensions: {}, contacts: [], vendors: [], website: 'https://telegram.org', checklist: 'Account Creation' },
  { name: 'Facebook DM', type: 'Paid', color: '#1877F2', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Len Woods', role: 'Owner', email: 'lenwoods@gmail.com', phone: '+1 318-278-7525' }], vendors: [{ name: 'Abhay Singh', contact: 'ROI Hunt Pvt Ltd' }], website: 'https://www.facebook.com', checklist: 'Account Creation' },
  { name: 'Manychat', type: 'Paid', color: '#6C5CE7', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Mani', role: 'Manager', email: '' }], vendors: [], website: 'https://manychat.com', checklist: 'Account Creation' },
  { name: 'SMS Marketing', type: 'Paid', color: '#00B894', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Referral Hero', role: 'Vendor', email: '' }], vendors: [], checklist: '6 Million+ Mobile Nos' },
  { name: 'Email Marketing', type: 'Paid', color: '#E17055', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Zoho Mail', role: 'Tool', email: 'avinash.vaghela@aequitasinfotech.com' }], vendors: [], checklist: '9 Million+ Emails' },
  { name: 'Email Newsletters', type: 'Paid', color: '#FD79A8', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'UTM / GA Tracking', role: 'Tracking', email: '' }, { name: 'Emily', role: 'Contact', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'Account Creation' },
  { name: 'Email Oversight', type: 'Paid', color: '#74B9FF', status: 'TBD', budget: '$0', dimensions: {}, contacts: [{ name: 'Bryan Jenkins', role: 'Vendor', email: 'bryan@emailoversight.com' }], vendors: [], checklist: 'Email Testing' },
  
  // Influencer, Advocacy & Referral Growth (29-31)
  { name: 'Influencer Marketing', type: 'Paid', color: '#A29BFE', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'HookPoint', role: 'Platform', email: 'debc@hookpoint.com' }, { name: 'Emily', role: 'Contact', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'Account Creation' },
  { name: 'Referral Program', type: 'Paid', color: '#00CEC9', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Referral Hero', role: 'Platform', email: 'julian@referralhero.com' }], vendors: [], website: 'https://referralhero.com', goLive: '15-Jan', checklist: 'Not Needed' },
  { name: 'Student Ambassador', type: 'Paid', color: '#FDCB6E', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Austin UT & Texas AM', role: 'Universities', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'OWN PROGRAM' },
  
  // Community & Grassroots Marketing (32-35)
  { name: 'Nextdoor', type: 'Organic/Paid', color: '#00B894', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.nextdoor.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Community Reach', type: 'Organic/Paid', color: '#6C5CE7', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Tamil, Telugu, Malayalam Associations', role: 'Groups', email: '' }], vendors: [], checklist: 'Need inputs from JP' },
  { name: 'Indian Diaspora', type: 'Organic/Paid', color: '#FF7675', status: 'TBD', budget: '$100', dimensions: {}, contacts: [], vendors: [], checklist: 'Email, SMS, WhatsApp, Facebook Groups' },
  { name: 'Campus Radio', type: 'Paid', color: '#FFEAA7', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Austin Uni & Texas AM', role: 'Universities', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'VARIES' },
  
  // Offline, OOH & Experiential Marketing (36-39)
  { name: 'Airport Ads', type: 'Paid', color: '#81ECEC', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Offline Billboard', role: 'Vendor', email: '' }], vendors: [], website: 'https://www.audiogo.com', checklist: 'In phase 2 after awareness campaign' },
  { name: 'Billboards', type: 'Paid', color: '#DFE6E9', status: 'TBD', budget: '$100', dimensions: {}, contacts: [], vendors: [], checklist: 'Outdoor Billboards' },
  { name: 'Hotels', type: 'Others', color: '#E17055', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Marriott Partnerships', role: 'Vendor', email: '' }], vendors: [], checklist: 'Need inputs from JP' },
  { name: 'Car Dealership', type: 'Organic', color: '#2D3436', status: 'TBD', budget: '$100', dimensions: {}, contacts: [], vendors: [], checklist: '1200+ Car Dealerships in Texas' },
  
  // Press, PR & Authority Building (40-41)
  { name: 'Press & Media', type: 'Paid', color: '#636E72', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Press Ranger, EIN Presswire, Baden Bower, Austin Uni', role: 'Vendors', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'Need inputs from JP', note: '350+ Digital Media, Forbes, Inc Magazine' },
  { name: 'Magazines', type: 'Paid', color: '#B2BEC3', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Austin Uni', role: 'Contact', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'VARIES' },
  
  // Geo-Based & Hyperlocal Targeting (42)
  { name: 'GeoFencing', type: 'Paid', color: '#00CEC9', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Geofence Pro', role: 'Platform', email: 'rishabh@bldsindia.com' }], vendors: [{ name: 'Ground Truth', contact: 'USA' }], checklist: 'Account Creation', goLive: '15-Jan' },
  
  // Events, Innovation & Brand Activation (43)
  { name: 'Hackathon', type: 'Paid', color: '#FD79A8', status: 'TBD', budget: '$100', dimensions: {}, contacts: [], vendors: [], checklist: 'All Hackathons' },
  
  // App Growth & Platform Optimization (44)
  { name: 'ASO', type: 'Paid', color: '#74B9FF', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'App Guardians', role: 'Vendor', email: '' }], vendors: [], checklist: 'After launching the app' },
  
  // Website (45)
  { name: 'Website', type: 'Organic', color: '#423DF9', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Len Woods', role: 'Owner', email: 'lenwoods@gmail.com', phone: '+1 318-278-7525' }], vendors: [{ name: 'Draftss', contact: 'Aditi' }, { name: 'Ankit and Deepanshi', contact: 'Team' }], website: 'https://ayrorides.com' },
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

  const groupByType = (channels) => {
    const groups = {};
    channels.forEach(ch => {
      const type = ch.type.includes('/') ? ch.type.split('/')[0] : ch.type;
      if (!groups[type]) groups[type] = [];
      groups[type].push(ch);
    });
    return groups;
  };

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
            Marketing Channels
          </div>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">Rider Marketing Playbook</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            {channels.length} marketing channels including social media, paid advertising, influencer, and offline channels.
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
            <h2 className="text-xl font-bold" style={{ color: '#1D0652' }}>All Marketing Channels</h2>
            <p className="text-gray-500 text-sm mt-1">Social media, paid ads, influencer, and offline channels</p>
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
                    channel.status === 'NO' ? 'bg-red-100 text-red-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {channel.status}
                  </span>
                </div>

                {/* Budget */}
                <div className="flex items-center justify-between mb-4 p-3 rounded-lg" style={{ background: '#423DF908' }}>
                  <span className="text-xs text-gray-500">Monthly Budget</span>
                  <span className="font-bold" style={{ color: '#423DF9' }}>{channel.budget}</span>
                </div>

                {/* Contact Info */}
                {channel.contacts && channel.contacts.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Contacts</p>
                    {channel.contacts.map((c, i) => (
                      <div key={i} className="text-xs text-gray-600">
                        {c.name} {c.role && <span className="text-gray-400">- {c.role}</span>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Website */}
                {channel.website && (
                  <div className="text-xs">
                    <span className="text-gray-500">Website: </span>
                    <a href={channel.website} target="_blank" rel="noopener noreferrer" className="text-[#423DF9] hover:underline">
                      {channel.website.replace('https://', '').slice(0, 25)}...
                    </a>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}