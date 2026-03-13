import { Link, user } from '../api/sdk.js';
import { useState, useEffect, useRef } from 'react';

const items = [
  { title: 'Go-to-Market Strategy', desc: '55+ channels across paid, organic, hyperlocal, community, CRM, and partnerships.', path: '/gtm', tag: 'Strategy', color: '#423DF9' },
  { title: 'The AYRO Orbit', desc: 'A self-reinforcing mobility ecosystem where drivers, riders, and platform growth continuously strengthen each other.', path: '/ayro-orbit', tag: 'Strategy', color: '#7742F1' },
  { title: '1 Million Downloads in 90 Days', desc: '3-month phased playbook from soft launch to viral Orbit.', path: '/downloads', tag: 'Growth', color: '#08D9C4' },
  { title: 'Ed Kang Pitch Deck Template', desc: 'Ultimate guide for early-stage founders on crafting seed-stage pitch decks. 10-slide format, black & white outline, proven framework.', path: '/ed-kang-pitch-deck', tag: 'Fundraising', color: '#7c3aed' },
  { title: 'Angel Pitch Deck Guide', desc: 'Research-backed playbook for crafting seed-stage pitch decks.', path: '/pitch-deck', tag: 'Fundraising', color: '#3a0ca3' },
];

export default function Page() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const u = await user.me();
        setCurrentUser(u);
      } catch (e) {
        // Not logged in
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await user.logout();
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 bg-white">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #423DF9 0%, #7742F1 100%)', borderRadius: '10px' }}>
              <span className="text-white font-bold" style={{ fontSize: '20px' }}>A</span>
            </div>
            <span className="text-gray-900 font-bold text-xl" style={{ letterSpacing: '3px' }}>AYRO</span>
          </div>
        </div>
        {currentUser && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-xs text-gray-500">Signed in as</p>
                  <p className="text-sm font-medium text-gray-900 truncate">{currentUser.email}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        )}
      </header>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-gray-900 text-xl font-bold mb-1">Marketing Assets</h2>
        <p className="text-gray-500 text-sm mb-8">Browse strategy decks and marketing materials.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(item => (
            <Link key={item.path} to={item.path} className="block rounded-xl p-5 bg-white border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all">
              <span className="text-xs font-bold uppercase tracking-wider" style={{color:item.color}}>{item.tag}</span>
              <h3 className="text-gray-900 text-lg font-bold mt-2 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}