import { user, Link } from '../api/sdk.js';
import { useState, useEffect, useRef } from 'react';

export default function Header({ showBackLink = false }) {
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

  // Full header with user dropdown (for Home page)
  if (!showBackLink) {
    return (
      <header className="border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 bg-white">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img 
              src="https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-03-13%2FMiniMax-M2.5%2F1928270917536846329%2F13d462df23deb3f5078793ad5bd37e73b9a7d0e931c32e1aeaf945e414c1397e..png?Expires=1773484016&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=N2CcNxSprBJdlCsi1nusC4ZPEvI%3D" 
              alt="AYRO" 
              className="h-16 w-auto" 
            />
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
    );
  }

  // Simple header with Back link (for other pages)
  return (
    <header className="flex items-center gap-4 px-6 py-3 bg-white border-b border-gray-200">
      <img 
        src="https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-03-13%2FMiniMax-M2.5%2F1928270917536846329%2F13d462df23deb3f5078793ad5bd37e73b9a7d0e931c32e1aeaf945e414c1397e..png?Expires=1773484016&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=N2CcNxSprBJdlCsi1nusC4ZPEvI%3D" 
        alt="AYRO" 
        className="h-16 w-auto" 
      />
      <Link to="/" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
      </Link>
    </header>
  );
}