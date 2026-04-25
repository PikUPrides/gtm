import { user, Link } from '../api/sdk.js';
import { useState, useEffect, useRef } from 'react';

const LOGO_FILE_ID = "7d5a824eabbd50883c0fdbf89079d444";

export default function Header({ showBackLink = false }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [showGTMDropdown, setShowGTMDropdown] = useState(false);
  const [showCompetitorsDropdown, setShowCompetitorsDropdown] = useState(false);
  const [showWhyWeWinDropdown, setShowWhyWeWinDropdown] = useState(false);
  const [showMarketResearchDropdown, setShowMarketResearchDropdown] = useState(false);
  const [showBrandingDropdown, setShowBrandingDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const gtmDropdownRef = useRef(null);
  const competitorsDropdownRef = useRef(null);
  const whyWeWinDropdownRef = useRef(null);
  const marketResearchDropdownRef = useRef(null);
  const brandingDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const userButtonRef = useRef(null);
  const userButtonMobileRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const u = await user.me();
        setCurrentUser(u);
      } catch (e) {}
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (gtmDropdownRef.current && !gtmDropdownRef.current.contains(event.target)) setShowGTMDropdown(false);
      if (competitorsDropdownRef.current && !competitorsDropdownRef.current.contains(event.target)) setShowCompetitorsDropdown(false);
      if (whyWeWinDropdownRef.current && !whyWeWinDropdownRef.current.contains(event.target)) setShowWhyWeWinDropdown(false);
      if (marketResearchDropdownRef.current && !marketResearchDropdownRef.current.contains(event.target)) setShowMarketResearchDropdown(false);
      if (brandingDropdownRef.current && !brandingDropdownRef.current.contains(event.target)) setShowBrandingDropdown(false);
      const isUserButtonClick = userButtonRef.current?.contains(event.target) || userButtonMobileRef.current?.contains(event.target);
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target) && !isUserButtonClick) setShowUserDropdown(false);
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-btn')) setIsMobileMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await user.logout();
    window.location.href = '/login';
  };

  const closeAll = () => {
    setShowGTMDropdown(false);
    setShowCompetitorsDropdown(false);
    setShowWhyWeWinDropdown(false);
    setShowMarketResearchDropdown(false);
    setShowBrandingDropdown(false);
  };

  const gtmItems = [
    { href: '/gtm', label: 'GTM Strategy Doc' },
    { href: '/flywheel', label: 'The Flywheel' },
    { href: '/market-size', label: 'Market Size Analogy' },
    { href: '/metrics-dashboard', label: 'Metrics Dashboard' },
    { href: '/cohort-retention', label: 'Cohort Retention Analysis' },
    { href: '/unit-economics', label: 'Unit Economics' },
    { href: '/testimonials', label: 'Customer Testimonials' },
  ];

  const competitorsItems = [
    { href: '/documents/ubers-moat', label: "Uber's Margin Trap" },
    { href: '/documents/how-lyft-survived', label: 'How Lyft Survived' },
    { href: '/documents/empower-nyc-validation', label: 'Empower NYC Validation' },
    { href: '/documents/counter-strategy', label: 'Counter Strategy' },
  ];

  const marketResearchItems = [
    { href: '/data', label: 'US Market Data' },
    { href: '/research-doc', label: 'Research Doc' },
  ];

  const brandingItems = [
    { href: '/brand', label: 'Logo' },
    { href: '/brand', label: 'Brand Guideline' },
    { href: '/brand', label: 'Assets' },
    { href: '/brand', label: 'Banners' },
  ];

  const navItems = [
    {
      label: 'GTM',
      show: showGTMDropdown,
      setShow: setShowGTMDropdown,
      ref: gtmDropdownRef,
      items: gtmItems,
      width: 'w-64',
    },
    {
      label: 'Competitors',
      show: showCompetitorsDropdown,
      setShow: setShowCompetitorsDropdown,
      ref: competitorsDropdownRef,
      items: competitorsItems,
      width: 'w-56',
    },
    {
      label: 'Why we WIN',
      show: showWhyWeWinDropdown,
      setShow: setShowWhyWeWinDropdown,
      ref: whyWeWinDropdownRef,
      items: null,
      directHref: '/documents/sword',
      width: '',
    },
    {
      label: 'Market Research',
      show: showMarketResearchDropdown,
      setShow: setShowMarketResearchDropdown,
      ref: marketResearchDropdownRef,
      items: marketResearchItems,
      width: 'w-52',
    },
    {
      label: 'Branding',
      show: showBrandingDropdown,
      setShow: setShowBrandingDropdown,
      ref: brandingDropdownRef,
      items: null,
      directHref: '/brand',
      width: '',
    },
  ];

  if (!showBackLink) {
    return (
      <header className="fixed top-0 left-0 right-0 z-[10000] border-b-2 border-[#423DF9]/20 px-4 py-2 sm:px-6 sm:py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 bg-white shadow-sm">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={serenities.files.url(LOGO_FILE_ID)} alt="AYRO" className="h-16 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden sm:flex items-center gap-1">
              {navItems.map((nav) =>
                nav.directHref ? (
                  <Link
                    key={nav.label}
                    to={nav.directHref}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#1D0652] hover:text-[#423DF9] rounded-md hover:bg-[#423DF9]/5 transition-colors"
                  >
                    {nav.label}
                  </Link>
                ) : (
                  <div
                    key={nav.label}
                    className="relative"
                    ref={nav.ref}
                    onMouseEnter={() => { closeAll(); nav.setShow(true); }}
                    onMouseLeave={() => nav.setShow(false)}
                  >
                    <button
                      onClick={() => { closeAll(); nav.setShow(!nav.show); }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#1D0652] hover:text-[#423DF9] rounded-md hover:bg-[#423DF9]/5 transition-colors"
                    >
                      {nav.label}
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${nav.show ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {nav.show && nav.items && (
                      <div className={`absolute left-0 mt-0 pt-2 ${nav.width} z-[9999]`}>
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 border-t-2 border-t-[#423DF9] py-2">
                          {nav.items.map((item) => (
                            <Link
                              key={item.href + item.label}
                              to={item.href}
                              onClick={() => nav.setShow(false)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </nav>
          </div>

          {/* Mobile: hamburger + profile */}
          <div className="flex items-center gap-2 sm:hidden">
            {currentUser && (
              <div className="relative" ref={userDropdownRef}>
                <button
                  ref={userButtonMobileRef}
                  onClick={(e) => { e.stopPropagation(); setShowUserDropdown(!showUserDropdown); }}
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
                    <button onClick={handleSignOut} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">Sign out</button>
                  </div>
                )}
              </div>
            )}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md hover:bg-gray-100 mobile-menu-btn">
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav ref={mobileMenuRef} className="sm:hidden flex flex-col gap-1 pb-2 border-t border-gray-100 pt-3">
            {navItems.map((nav) => (
              <div key={nav.label}>
                <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2">{nav.label}</div>
                {nav.directHref ? (
                  <Link
                    to={nav.directHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors block"
                  >
                    {nav.label}
                  </Link>
                ) : (
                  nav.items?.map((item) => (
                    <Link
                      key={item.href + item.label}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors block"
                    >
                      {item.label}
                    </Link>
                  ))
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Desktop user dropdown */}
        {currentUser && (
          <div
            className="relative hidden sm:block"
            ref={userDropdownRef}
            onMouseEnter={() => setShowUserDropdown(true)}
            onMouseLeave={() => setShowUserDropdown(false)}
          >
            <button
              ref={userButtonRef}
              onClick={(e) => { e.stopPropagation(); setShowUserDropdown(!showUserDropdown); }}
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
                  <button onClick={handleSignOut} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">Sign out</button>
                </div>
              </div>
            )}
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        <img src={serenities.files.url(LOGO_FILE_ID)} alt="AYRO" className="h-10 w-auto" />
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
