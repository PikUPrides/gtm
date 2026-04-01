import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { user } from '../api/sdk';

export default function DriverMarketing() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    user.me().then(setCurrentUser).catch(() => setCurrentUser(null));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">🚙 Driver Marketing</h1>
            <p className="text-blue-300">AYRO DriveConnect - Marketing Channel Dashboard</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white">TBD</div>
            <div className="text-blue-200 text-sm">Monthly Budget</div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-12 border border-slate-700 text-center">
          <div className="text-6xl mb-6">🚗</div>
          <h2 className="text-3xl font-bold text-white mb-4">Driver Marketing Coming Soon</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            We're currently compiling the driver marketing channels and strategies. 
            This dashboard will include recruitment channels, driver incentives, partner programs, and more.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-slate-700/50 rounded-xl p-6">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-white font-bold mb-2">Driver Recruitment</h3>
              <p className="text-slate-400 text-sm">Job boards,Indeed, Craigslist, driver referral programs</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-6">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="text-white font-bold mb-2">Incentive Programs</h3>
              <p className="text-slate-400 text-sm">Sign-up bonuses, referral rewards, milestone bonuses</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-white font-bold mb-2">Fleet Partnerships</h3>
              <p className="text-slate-400 text-sm">Fleet companies, car rental agencies, driver associations</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-900/30 rounded-lg border border-blue-700">
            <p className="text-blue-300 text-sm">
              💡 Have driver marketing data to add? Contact the marketing team to update this dashboard.
            </p>
          </div>
        </div>

        {/* Quick Links to Rider Marketing */}
        <div className="mt-8 text-center">
          <Link 
            to="/rider-marketing"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            ← View Rider Marketing Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}