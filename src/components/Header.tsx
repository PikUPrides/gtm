import { user, Link } from '../api/sdk.js';
import { useState, useEffect, useRef } from 'react';

// Logo text - used in header (login page uses image logo)
const LOGO_TEXT = "AYRO";

export default function Header({ showBackLink = false }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [showStrategyDropdown, setShowStrategyDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const strategyDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

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
      if (strategyDropdownRef.current && !strategyDropdownRef.current.contains(event.target)) {
        setShowStrategyDropdown(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await user.logout();
    window.location.href = '/login';
  };

  // Navigation links
  const navLinks = [
  ];

  // Strategy dropdown items
  const strategyItems = [
    { href: '/gtm', label: 'GTM Strategy' },
    { href: '/ayro-orbit', label: 'AYRO Orbit' },
    { href: '/pitch-deck', label: 'Pitch Deck' },
    { href: '/ed-kang-pitch-deck', label: 'Ed Kang Pitch Deck' },
    { href: '/downloads', label: 'Downloads Strategy' },
  ];

  // Full header with navigation (for main pages)
  if (!showBackLink) {
    return (
      <header className="border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 bg-white">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold" style={{color: '#423DF9'}}>{LOGO_TEXT}</span>
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setShowStrategyDropdown(!showStrategyDropdown)}
            className="sm:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-1 ml-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* Strategy Dropdown */}
          <div className="relative" ref={strategyDropdownRef}>
            <button
              onClick={() => setShowStrategyDropdown(!showStrategyDropdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
            >
              Strategy
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${showStrategyDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showStrategyDropdown && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {strategyItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setShowStrategyDropdown(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {showStrategyDropdown && (
          <nav className="sm:hidden flex flex-col gap-1 pb-2 border-t border-gray-100 pt-3">
            {strategyItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setShowStrategyDropdown(false)}
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {currentUser && (
          <div className="relative sm:self-auto self-end" ref={userDropdownRef}>
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform ${showUserDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showUserDropdown && (
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
    <header className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold" style={{color: '#423DF9'}}>{LOGO_TEXT}</span>
        <Link to="/" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Link>
      </div>
    </header>
  );
}