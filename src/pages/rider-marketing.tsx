import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { user } from '../api/sdk';
import Header from '../components/Header';

export default function RiderMarketing() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('organic');

  useEffect(() => {
    user.me().then(setCurrentUser).catch(() => setCurrentUser(null));
  }, []);

  // Add padding-top to account for fixed header
  const channels = {
    organic: [
      { name: 'YouTube', icon: '▶️', status: 'WIP', budget: '$100', url: 'https://www.youtube.com/@AYRO_Inc', dimensions: 'Thumbnail: 1280×720px, Video: 1920×1080px', content: '4 Videos/month, 10 static images', contact: 'Nishant (Video Editor)', email: 'nishant@skillsvital.com' },
      { name: 'TikTok', icon: '🎵', status: 'WIP', budget: '$100', url: 'https://www.tiktok.com', dimensions: '1080×1920px (9:16)', contact: 'Nishant', email: 'nishant@skillsvital.com' },
      { name: 'Facebook', icon: '📘', status: 'NO', budget: '$100', url: 'https://www.facebook.com/profile.php?id=61583870717780', dimensions: '1080×1080px, 1200×630px', contact: 'Nishant', email: 'nishant@skillsvital.com' },
      { name: 'Instagram', icon: '📸', status: 'NO', budget: '$100', url: 'https://www.instagram.com/ayro.rideshare/', dimensions: '1080×1080px, 1080×1350px', contact: 'Feedbird - Dina', email: 'support@feedbird.com' },
      { name: 'Threads', icon: '🧵', status: 'NO', budget: '$100', url: '', dimensions: '1080×1080px', contact: 'Feedbird - Dina', note: 'Account disabled on 9th Jan 2026' },
      { name: 'Snapchat', icon: '👻', status: 'NO', budget: '$100', url: '', dimensions: '1080×1920px', contact: 'Feedbird - Dina' },
      { name: 'Twitter/X', icon: '🐦', status: 'NO', budget: '$100', url: '', dimensions: '1200×675px', contact: 'Feedbird - Dina', note: 'Wrong password' },
      { name: 'LinkedIn', icon: '💼', status: 'NO', budget: '$100', url: '', dimensions: '1200×1200px', contact: 'Feedbird - Dina' },
      { name: 'Reddit', icon: '🤖', status: 'NO', budget: '$100', url: 'https://www.reddit.com/user/pikupInc/', dimensions: '1080×1080px', contact: 'Feedbird - Dina' },
      { name: 'Pinterest', icon: '📌', status: 'Ready', budget: '$100', url: 'https://www.pinterest.com/ayro_inc/', dimensions: '1000×1500px', contact: 'Deepanshi', note: 'Created 15-Jan' },
      { name: 'Quora', icon: '❓', status: 'Ready', budget: '$100', url: 'https://www.quora.com/', dimensions: 'Various', contact: 'Priya', note: 'Created 15-Jan' },
      { name: 'Medium Blog', icon: '✍️', status: 'Ready', budget: '$0', url: 'https://medium.com/@ayro-inc', dimensions: 'N/A', contact: 'Priya, Ankit', note: 'Created 15-Jan' },
      { name: 'AYRO Blogs', icon: '🌐', status: 'Ready', budget: '$0', url: 'https://ayrorides.com/blog', dimensions: 'N/A', contact: 'Priya, Ankit', note: 'GravityWriter' },
      { name: 'Google My Business', icon: '📍', status: 'Pending', budget: '$0', url: '', dimensions: 'N/A', contact: 'Deepanshi', note: 'Verification pending from JP' },
      { name: 'Discord', icon: '💬', status: 'Ready', budget: '$100', url: 'https://discord.com/channels/@me', dimensions: 'N/A', contact: 'Deepanshi', note: 'Created 15-Jan' },
      { name: 'Telegram', icon: '✈️', status: 'Ready', budget: '$0', url: 'https://telegram.org', dimensions: 'N/A', contact: '', note: 'Created 15-Jan' },
    ],
    paid: [
      { name: 'Quora Ads', icon: '❓', budget: '$100', url: 'https://www.quora.com/', contact: 'Feedbird - Dina' },
      { name: 'Google Ads', icon: '🔍', budget: '$100', url: 'https://ads.google.com', contact: 'Rahul Ads, Deepanshi' },
      { name: 'Vibe Co (TV)', icon: '📺', budget: '$100', url: '', contact: 'Ankit', note: 'Need inputs from JP' },
      { name: 'Audiogo (Radio)', icon: '📻', budget: '$100', url: 'https://app.audiogo.com/us/login', contact: 'Priya, Ankit' },
      { name: 'Spotify', icon: '🎧', budget: '$100', url: 'https://open.spotify.com/user/31rhq5hq3va3gcwc5yezohh3rnxa', contact: 'Nishant, Ankit' },
      { name: 'WhatsApp Marketing', icon: '💼', budget: '$100', url: '', contact: 'Mani' },
      { name: 'Telegram', icon: '✈️', budget: '$0', url: 'https://telegram.org', contact: '' },
      { name: 'Facebook DM', icon: '💬', budget: '$100', url: '', contact: 'Len Woods', note: 'Abhay Singh (ROI Hunt)' },
      { name: 'Manychat', icon: '🤖', budget: '$100', url: 'https://manychat.com', contact: 'Mani' },
      { name: 'SMS Marketing', icon: '📱', budget: '$100', url: '', contact: '', note: 'Referral Hero (6M+ numbers)' },
      { name: 'Email Marketing', icon: '📧', budget: '$100', url: '', contact: 'Ankit', note: 'Zoho, 9M+ emails' },
      { name: 'Email Newsletters', icon: '📰', budget: '$100', url: '', contact: 'Ankit', note: 'Austin Uni, Zoho' },
    ],
    influencer: [
      { name: 'Influencer Marketing', icon: '⭐', budget: '$100', url: '', contact: 'Ankit; Len', note: 'HookPoint & Austin Uni' },
      { name: 'Referral Program', icon: '🎁', budget: '$100', url: 'https://referralhero.com', contact: 'Ankit', note: 'Julian from Referral Hero' },
      { name: 'Student Ambassador', icon: '🎓', budget: '$100', url: '', contact: 'Ankit', note: 'Austin UT & Texas AM' },
    ],
    community: [
      { name: 'Nextdoor', icon: '🏘️', budget: '$100', url: 'https://nextdoor.com/ads-management/', contact: 'Deepanshi', note: 'Account not set up' },
      { name: 'Community Reach', icon: '🤝', budget: '$100', url: '', contact: '', note: 'Tamil, Telugu, Malayalam associations - Need inputs' },
      { name: 'Indian Diaspora', icon: '🇮🇳', budget: '$100', url: '', contact: '', note: 'Email, SMS, WhatsApp, Facebook Groups' },
      { name: 'Campus Radio', icon: '📻', budget: '$100', url: '', contact: 'Emily (Austin Uni)', note: 'Austin UT & Texas AM' },
    ],
    offline: [
      { name: 'Airport Ads', icon: '✈️', budget: '$100', url: 'https://www.audiogo.com', contact: '', note: 'Phase 2 after awareness - Dallas + Houston' },
      { name: 'Billboards', icon: ' bill', budget: '$100', url: '', contact: '', note: 'Outdoor billboards needed' },
      { name: 'Hotels', icon: '🏨', budget: '$100', url: '', contact: '', note: 'Marriott Partnerships - TBD' },
      { name: 'Car Dealership', icon: '🚗', budget: '$100', url: '', contact: '', note: '1200+ dealerships in Texas' },
    ],
    pr: [
      { name: 'Press & Media', icon: '📰', budget: '$100', url: '', contact: '', note: 'Press Ranger, EIN Presswire, Forbes/Inc - Need inputs from JP' },
      { name: 'Magazines', icon: '📖', budget: '$100', url: '', contact: 'Emily (Austin Uni)' },
    ],
    other: [
      { name: 'GeoFencing', icon: '📍', budget: '$100', url: '', contact: 'Ankit', note: 'Geofence Pro - Rishabh (Mumbai)' },
      { name: 'Hackathon', icon: '🏆', budget: '$100', url: '', contact: '', note: 'All Hackathons' },
      { name: 'ASO', icon: '📲', budget: '$100', url: '', contact: '', note: 'After app launch - App Guardians' },
      { name: 'Website', icon: '🌐', budget: 'Included', url: 'https://ayrorides.com', contact: 'Len Woods', email: 'lenwoods@gmail.com' },
    ]
  };

  const tabs = [
    { id: 'organic', label: 'Organic Social', count: channels.organic.length, color: 'bg-green-500' },
    { id: 'paid', label: 'Paid Ads', count: channels.paid.length, color: 'bg-purple-500' },
    { id: 'influencer', label: 'Influencer', count: channels.influencer.length, color: 'bg-yellow-500' },
    { id: 'community', label: 'Community', count: channels.community.length, color: 'bg-orange-500' },
    { id: 'offline', label: 'Offline/OOH', count: channels.offline.length, color: 'bg-red-500' },
    { id: 'pr', label: 'PR & Media', count: channels.pr.length, color: 'bg-blue-500' },
    { id: 'other', label: 'Other', count: channels.other.length, color: 'bg-gray-500' },
  ];

  const totalBudget = 3200;

  return (
    <div>
      <Header />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
        <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Rider Marketing</h1>
            <p className="text-purple-300">AYRO RideShare - Marketing Channel Dashboard</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white">${totalBudget}</div>
            <div className="text-purple-200 text-sm">Monthly Budget</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id 
                  ? `${tab.color} text-white shadow-lg scale-105` 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-xs bg-black/20 px-2 py-0.5 rounded-full">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels[activeTab].map((channel, index) => (
            <div key={index} className="bg-slate-800/80 backdrop-blur rounded-xl p-5 border border-slate-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{channel.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{channel.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      channel.status === 'Ready' ? 'bg-green-500/20 text-green-400' :
                      channel.status === 'WIP' ? 'bg-yellow-500/20 text-yellow-400' :
                      channel.status === 'Pending' ? 'bg-orange-500/20 text-orange-400' :
                      channel.status === 'NO' ? 'bg-red-500/20 text-red-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {channel.status || 'N/A'}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-purple-400 font-bold">{channel.budget}</div>
                  <div className="text-slate-500 text-xs">/month</div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                {channel.dimensions && (
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500">📐</span>
                    <span className="text-slate-300">{channel.dimensions}</span>
                  </div>
                )}
                {channel.contact && (
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500">👤</span>
                    <span className="text-slate-300">{channel.contact}</span>
                  </div>
                )}
                {channel.email && (
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500">✉️</span>
                    <span className="text-purple-300 text-xs">{channel.email}</span>
                  </div>
                )}
                {channel.note && (
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500">📝</span>
                    <span className="text-slate-400 text-xs">{channel.note}</span>
                  </div>
                )}
              </div>

              {channel.url && (
                <a 
                  href={channel.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Visit Channel →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/60 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{channels.organic.filter(c => c.status === 'Ready').length}</div>
            <div className="text-slate-400 text-sm">Ready</div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{channels.organic.filter(c => c.status === 'WIP').length}</div>
            <div className="text-slate-400 text-sm">WIP</div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-400">{channels.organic.filter(c => c.status === 'NO').length}</div>
            <div className="text-slate-400 text-sm">Not Setup</div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{channels.organic.length + channels.paid.length}</div>
            <div className="text-slate-400 text-sm">Total Channels</div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">{channels.influencer.length + channels.community.length}</div>
            <div className="text-slate-400 text-sm">Growth Channels</div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{channels.offline.length}</div>
            <div className="text-slate-400 text-sm">Offline Channels</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
  );
}