import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const LOGO_URL = 'https://ngovasecurity.co.za/wp/wp-content/uploads/2025/06/Site-Header-Logo.png'

const navLinks = [
  { 
    to: '/', 
    label: 'Home',
    description: 'Return to our main overview',
    icon: 'home'
  },
  { 
    to: '/services', 
    label: 'Services',
    description: 'Explore our security solutions',
    icon: 'security',
    submenu: [
      { title: 'Physical Guarding', description: 'Professional guarding & protection', to: '/services#physical-guarding' },
      { title: 'Risk Assessment', description: 'Advanced threat modeling & analysis', to: '/services#risk-assessment' },
      { title: 'Access Control', description: 'Biometric & identity entry workflows', to: '/services#access-control' },
      { title: '24/7 Monitoring', description: 'Continuous surveillance solutions', to: '/services#monitoring' },
      { title: 'Tactical Deployment', description: 'Agile rapid response & patrols', to: '/services#tactical-deployment' }
    ]
  },
  { 
    to: '/clients', 
    label: 'Clients',
    description: 'Trusted by industry leaders',
    icon: 'business'
  },
  { 
    to: '/careers', 
    label: 'Careers',
    description: 'Join the Ngova elite team',
    icon: 'work'
  },
  { 
    to: '/quote', 
    label: 'Contact',
    description: 'Get in touch for a consultation',
    icon: 'mail',
    mode: 'contact' 
  },
]

const searchableContent = [
  { title: 'Home', path: '/', keywords: ['home', 'main', 'hero'] },
  { title: 'Services', path: '/services', keywords: ['services', 'security', 'protection', 'guarding', 'monitoring'] },
  { title: 'Physical Guarding', path: '/services#physical-guarding', keywords: ['guarding', 'officers', 'on-site', 'physical'] },
  { title: 'Risk Assessment', path: '/services#risk-assessment', keywords: ['risk', 'assessment', 'audit', 'threat'] },
  { title: 'Access Control', path: '/services#access-control', keywords: ['access', 'control', 'biometric', 'identity'] },
  { title: '24/7 Monitoring', path: '/services#monitoring', keywords: ['monitoring', 'surveillance', 'cctv', 'operations'] },
  { title: 'Tactical Deployment', path: '/services#tactical-deployment', keywords: ['tactical', 'deployment', 'fleet', 'patrols', 'response'] },
  { title: 'Clients', path: '/clients', keywords: ['clients', 'partners', 'partnerships', 'trust'] },
  { title: 'Careers', path: '/careers', keywords: ['careers', 'jobs', 'work', 'employment'] },
  { title: 'Contact', path: '/quote', mode: 'contact', keywords: ['contact', 'quote', 'request', 'inquiry'] },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false)

  // Search state lives directly in the component — no custom hook
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const location = useLocation()
  const navigate = useNavigate()
  const desktopSearchRef = useRef(null)
  const mobileSearchInputRef = useRef(null)
  const desktopSearchInputRef = useRef(null)

  // Stable handlers via useCallback so effects don't re-run unnecessarily
  const clearSearch = useCallback(() => {
    setSearchQuery('')
    setSearchResults([])
  }, [])

  const closeSearch = useCallback(() => {
    setSearchOpen(false)
    setSearchQuery('')
    setSearchResults([])
  }, [])

  const handleSearch = useCallback((query) => {
    setSearchQuery(query)
    if (!query.trim()) {
      setSearchResults([])
      return
    }
    const q = query.toLowerCase()
    setSearchResults(
      searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.keywords.some((kw) => kw.toLowerCase().includes(q))
      )
    )
  }, [])

  const handleSearchSelect = useCallback((item) => {
    setSearchOpen(false)
    setSearchQuery('')
    setSearchResults([])
    setMobileOpen(false)
    navigate(item.path, { state: { mode: item.mode || 'quote' } })
  }, [navigate])

  const toggleSearch = useCallback(() => {
    setSearchOpen((prev) => {
      if (prev) {
        setSearchQuery('')
        setSearchResults([])
        return false
      }
      setMobileOpen(false)
      return true
    })
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileOpen((prev) => {
      if (!prev) {
        // Opening menu — close search
        setSearchOpen(false)
        setSearchQuery('')
        setSearchResults([])
      }
      return !prev
    })
  }, [])

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileSubmenuOpen(false)
    setSearchOpen(false)
    setSearchQuery('')
    setSearchResults([])
  }, [location.pathname])

  // Click-outside to close desktop search popover
  useEffect(() => {
    if (!searchOpen) return
    const handler = (e) => {
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(e.target)) {
        closeSearch()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [searchOpen, closeSearch])

  // Auto-focus the correct input when search opens
  useEffect(() => {
    if (!searchOpen) return
    const id = setTimeout(() => {
      if (window.innerWidth < 768) {
        mobileSearchInputRef.current?.focus()
      } else {
        desktopSearchInputRef.current?.focus()
      }
    }, 50)
    return () => clearTimeout(id)
  }, [searchOpen])

  const headerElevated = scrolled || mobileOpen || searchOpen

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-2 ${
        headerElevated
          ? 'bg-fortress-black/98 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-fortress-black/5 backdrop-blur-sm'
      }`}
    >
      {/* ── Desktop Navbar ── */}
      <nav className="hidden md:flex justify-between items-center px-gutter max-w-container-max mx-auto w-full gap-4">
        <Link to="/" className="flex-shrink-0 transition-all duration-300 hover:scale-[1.02] relative group py-0.5 block">
          <div className="absolute inset-0 bg-fortress-black/40 blur-md rounded-lg opacity-100 group-hover:bg-fortress-black/60 transition-colors pointer-events-none -inset-x-2"></div>
          <img alt="Ngova Security Logo" className="h-12 lg:h-14 w-auto object-contain relative z-10 filter brightness-110" src={LOGO_URL} />
        </Link>

        {/* Center links */}
        <div className="flex items-center justify-center gap-0.5 lg:gap-1 flex-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            const hasSubmenu = link.submenu && link.submenu.length > 0
            const isOpen = openDropdown === link.to
            return (
              <div key={link.to} className="relative group">
                <Link
                  to={link.to}
                  state={{ mode: link.mode || 'quote' }}
                  onMouseEnter={() => hasSubmenu && setOpenDropdown(link.to)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className={`flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-primary bg-primary/15 border border-primary/30' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg opacity-85">{link.icon}</span>
                  {link.label}
                  {hasSubmenu && (
                    <span className={`material-symbols-outlined text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  )}
                </Link>

                {hasSubmenu && (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.to)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={`absolute left-0 top-full mt-1.5 w-80 bg-fortress-black/95 backdrop-blur-3xl border border-primary/20 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 ${
                      isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="p-1">
                      {link.submenu.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => navigate(item.to)}
                          className="w-full text-left px-4 py-3 rounded-md hover:bg-primary/15 transition-colors group/item border border-transparent hover:border-primary/20"
                        >
                          <p className="text-white font-semibold group-hover/item:text-primary">{item.title}</p>
                          <p className="text-xs text-on-surface-variant/90 mt-1">{item.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Desktop action area */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Desktop search */}
          <div className="relative" ref={desktopSearchRef}>
            <button
              onClick={toggleSearch}
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              className="text-white/80 hover:text-white h-10 w-10 hover:bg-white/10 rounded-md flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">
                {searchOpen ? 'close' : 'search'}
              </span>
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-full mt-3 w-80 bg-fortress-black/98 border border-primary/20 rounded-xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                <div className="relative">
                  <input
                    ref={desktopSearchInputRef}
                    type="text"
                    placeholder="Search site assets..."
                    className="w-full bg-white/15 border border-white/30 rounded-lg py-2 pl-3 pr-10 text-sm text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-primary/70 transition-colors"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <span className="material-symbols-outlined absolute right-3 top-2.5 text-white/30 text-base pointer-events-none">
                    search
                  </span>
                </div>

                {searchResults.length > 0 && (
                  <div className="mt-2 bg-black/40 rounded-lg border border-white/5 max-h-48 overflow-y-auto">
                    {searchResults.map((result, idx) => (
                      <button
                        key={idx}
                        // onMouseDown + preventDefault prevents the click-outside handler
                        // from firing before this handler runs and closing the popover
                        onMouseDown={(e) => {
                          e.preventDefault()
                          handleSearchSelect(result)
                        }}
                        className="w-full text-left px-3 py-2.5 hover:bg-primary/15 transition-colors border-b border-white/5 last:border-none flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-white/40 text-xs">subdirectory_arrow_right</span>
                        <p className="text-white font-medium text-xs">{result.title}</p>
                      </button>
                    ))}
                  </div>
                )}

                {searchQuery.trim() !== '' && searchResults.length === 0 && (
                  <div className="mt-2 px-3 py-3 text-white/40 text-xs text-center bg-black/20 rounded-lg border border-white/5">
                    No results found.
                  </div>
                )}
              </div>
            )}
          </div>

          <Link
            to="/quote"
            state={{ mode: 'quote' }}
            className="bg-primary text-on-primary px-5 lg:px-6 py-2 font-bold hover:bg-primary/90 transition-all rounded-md text-sm shadow-lg flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">request_quote</span> Get Quote
          </Link>
        </div>
      </nav>

      {/* ── Mobile Navbar header ── */}
      <nav className="md:hidden flex justify-between items-center px-gutter w-full max-w-container-max mx-auto">
        <button
          className="text-white h-9 w-9 -ml-2 rounded-lg flex items-center justify-center"
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="material-symbols-outlined text-[28px]">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
        <Link to="/" className="flex-shrink-0 py-1 h-11 flex items-center">
          <img alt="Ngova Security Logo" className="h-8 w-auto object-contain" src={LOGO_URL} />
        </Link>
        <button
          onClick={toggleSearch}
          aria-label={searchOpen ? 'Close search' : 'Open search'}
          className="text-white h-9 w-9 -mr-2 rounded-lg flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-[28px]">{searchOpen ? 'close' : 'search'}</span>
        </button>
      </nav>

      {/* ── Mobile search overlay ── */}
      {searchOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-fortress-black/98 px-gutter py-4 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          <div className="relative">
            <input
              ref={mobileSearchInputRef}
              type="text"
              placeholder="Search security services..."
              className="w-full bg-white/15 border border-white/30 rounded-xl py-3 pl-4 pr-12 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-primary/70 transition-colors"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchQuery.trim() !== '' ? (
              <button
                onMouseDown={(e) => { e.preventDefault(); clearSearch() }}
                onTouchEnd={(e) => { e.preventDefault(); clearSearch() }}
                className="absolute right-4 top-3.5 text-white/60 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            ) : (
              <span className="material-symbols-outlined absolute right-4 top-3.5 text-white/50 pointer-events-none">search</span>
            )}
          </div>

          {searchResults.length > 0 && (
            <div className="mt-4 bg-white/5 rounded-xl border border-white/10 overflow-hidden max-h-60 overflow-y-auto">
              {searchResults.map((result, idx) => (
                <button
                  key={idx}
                  onMouseDown={(e) => { e.preventDefault(); handleSearchSelect(result) }}
                  onTouchEnd={(e) => { e.preventDefault(); handleSearchSelect(result) }}
                  className="w-full text-left px-4 py-3.5 hover:bg-primary/15 active:bg-primary/20 transition-colors border-b border-white/8 last:border-none flex items-center gap-3"
                >
                  <span className="material-symbols-outlined text-white/50 text-sm">subdirectory_arrow_right</span>
                  <p className="text-white font-medium text-sm">{result.title}</p>
                </button>
              ))}
            </div>
          )}

          {searchQuery.trim() !== '' && searchResults.length === 0 && (
            <div className="mt-4 px-4 py-4 text-white/50 text-sm text-center bg-white/5 rounded-xl border border-white/10">
              No matching assets or services found.
            </div>
          )}
        </div>
      )}

      {/* ── Mobile menu drawer ── */}
      {mobileOpen && (
        <div className="md:hidden px-gutter pb-8 h-[calc(100vh-60px)] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="mt-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              const hasSubmenu = link.submenu && link.submenu.length > 0

              if (hasSubmenu) {
                return (
                  <div key={link.to} className="space-y-1">
                    <button
                      onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                      className={`w-full text-left py-3.5 transition-all border-b border-white/5 ${
                        isActive || mobileSubmenuOpen ? 'text-primary' : 'text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="material-symbols-outlined text-2xl opacity-80">{link.icon}</span>
                          <div>
                            <p className="font-semibold">{link.label}</p>
                            <p className="text-xs text-white/50 mt-0.5">{link.description}</p>
                          </div>
                        </div>
                        <span className={`material-symbols-outlined transition-transform duration-200 ${mobileSubmenuOpen ? 'rotate-180 text-primary' : 'text-white/40'}`}>
                          expand_more
                        </span>
                      </div>
                    </button>

                    {mobileSubmenuOpen && (
                      <div className="my-1 pl-10 space-y-1 border-l border-white/10">
                        {link.submenu.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => navigate(item.to)}
                            className="w-full text-left py-3 transition-colors block border-b border-white/5 last:border-none"
                          >
                            <p className="font-semibold text-white text-sm">{item.title}</p>
                            <p className="text-[11px] text-white/50 mt-0.5">{item.description}</p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  state={{ mode: link.mode || 'quote' }}
                  className={`w-full flex items-center gap-4 py-3.5 transition-all border-b border-white/5 ${
                    isActive ? 'text-primary' : 'text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl opacity-80">{link.icon}</span>
                  <div>
                    <p className="font-semibold">{link.label}</p>
                    <p className="text-xs text-white/50 mt-0.5">{link.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="mt-6">
            <Link
              to="/quote"
              state={{ mode: 'quote' }}
              className="w-full flex items-center justify-center gap-2 bg-primary text-black py-4 font-bold rounded-xl shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined">request_quote</span>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}