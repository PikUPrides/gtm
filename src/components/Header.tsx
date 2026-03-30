import { user, Link } from '../api/sdk.js';
import { useState, useEffect, useRef } from 'react';

// Logo image URL - using the uploaded AYRO logo file ID
const LOGO_FILE_ID = "34596756816d350738f724c7494aa95d"; // Ayro_Primary - 3.png

export default function Header({ showBackLink = false }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [showStrategyDropdown, setShowStrategyDropdown] = useState(false);
  const [showDataDropdown, setShowDataDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const strategyDropdownRef = useRef(null);
  const dataDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const userButtonRef = useRef(null);
  const userButtonMobileRef = useRef(null);
  const mobileMenuRef = useRef(null);

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
      if (dataDropdownRef.current && !dataDropdownRef.current.contains(event.target)) {
        setShowDataDropdown(false);
      }

      // Don't close user dropdown if clicking on either profile button
      const isUserButtonClick = 
        userButtonRef.current?.contains(event.target) || 
        userButtonMobileRef.current?.contains(event.target);
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target) && !isUserButtonClick) {
        setShowUserDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false);
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

  // Data dropdown items
  const dataItems = [
    { href: '/data', label: 'US Market Data' },
  ];

  // Full header with navigation (for main pages)
  if (!showBackLink) {
    return (
      <header className="fixed top-0 left-0 right-0 z-[10000] border-b-2 border-[#423DF9]/20 px-4 py-2 sm:px-6 sm:py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 bg-white shadow-sm">
        {/* Left side: Logo + Navigation */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img src={serenities.files.url(LOGO_FILE_ID)} alt="AYRO" className="h-16 w-auto object-contain" />
            </Link>
            {/* Desktop Navigation - aligned left */}
            <nav className="hidden sm:flex items-center gap-1">
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
              <div
                className="relative"
                ref={strategyDropdownRef}
                onMouseEnter={() => { setShowStrategyDropdown(true); setShowDataDropdown(false); }}
                onMouseLeave={() => setShowStrategyDropdown(false)}
              >
                <button
                  onClick={() => setShowStrategyDropdown(!showStrategyDropdown)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#1D0652] hover:text-[#423DF9] rounded-md hover:bg-[#423DF9]/5 transition-colors"
                >
                  Strategy
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${showStrategyDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showStrategyDropdown && (
                  <div className="absolute left-0 mt-0 pt-2 w-56 z-[9999]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 border-t-2 border-t-[#423DF9] py-2">
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
                  </div>
                )}
              </div>
              {/* Data Dropdown */}
              <div
                className="relative"
                ref={dataDropdownRef}
                onMouseEnter={() => { setShowDataDropdown(true); setShowStrategyDropdown(false); }}
                onMouseLeave={() => setShowDataDropdown(false)}
              >
                <button
                  onClick={() => setShowDataDropdown(!showDataDropdown)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#1D0652] hover:text-[#423DF9] rounded-md hover:bg-[#423DF9]/5 transition-colors"
                >
                  Data
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${showDataDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDataDropdown && (
                  <div className="absolute left-0 mt-0 pt-2 w-48 z-[9999]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 border-t-2 border-t-[#423DF9] py-2">
                      {dataItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setShowDataDropdown(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </nav>
          </div>
          {/* Mobile: hamburger + profile on same line */}
          <div className="flex items-center gap-2 sm:hidden">
            {currentUser && (
              <div className="relative" ref={userDropdownRef}>
                <button
                  ref={userButtonMobileRef}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowUserDropdown(!showUserDropdown);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
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
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 mobile-menu-btn"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav ref={mobileMenuRef} className="sm:hidden flex flex-col gap-1 pb-2 border-t border-gray-100 pt-3">
            <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Strategy</div>
            {strategyItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2">Data</div>
            {dataItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}

          </nav>
        )}

        {currentUser && (
          <div
            className="relative hidden sm:block"
            ref={userDropdownRef}
            onMouseEnter={() => setShowUserDropdown(true)}
            onMouseLeave={() => setShowUserDropdown(false)}
          >
            <button
              ref={userButtonRef}
              onClick={(e) => {
                e.stopPropagation();
                setShowUserDropdown(!showUserDropdown);
              }}
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
              <div className="absolute right-0 mt-0 pt-2 w-64 z-[9999]">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 border-t-2 border-t-[#423DF9] py-2">
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
              </div>
            )}
          </div>
        )}
      </header>
    );
  }

  // Simple header with Back link (for other pages)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        <img src={LOGO_URL} alt="AYRO" className="h-10 w-auto" />
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