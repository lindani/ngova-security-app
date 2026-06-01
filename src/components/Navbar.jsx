import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const LOGO_URL = 'https://ngovasecurity.co.za/wp/wp-content/uploads/2025/06/Site-Header-Logo.png'

const navLinks = [
  { 
    to: '/', 
    label: 'Home',
    icon: 'home'
  },
  { 
    to: '/services', 
    label: 'Services',
    icon: 'security',
    submenu: [
      { title: 'Security Services', description: 'Professional guarding & protection' },
      { title: 'Mobile Patrols', description: 'Rapid response teams' },
      { title: 'Monitoring', description: '24/7 surveillance solutions' },
      { title: 'Consulting', description: 'Risk assessment & planning' }
    ]
  },
  { 
    to: '/clients', 
    label: 'Clients',
    icon: 'business'
  },
  { 
    to: '/careers', 
    label: 'Careers',
    icon: 'work'
  },
  { 
    to: '/quote', 
    label: 'Contact',
    icon: 'mail'
  },
]

const searchableContent = [
  { title: 'Home', path: '/', keywords: ['home', 'main', 'hero'] },
  { title: 'Services', path: '/services', keywords: ['services', 'security', 'protection', 'guarding', 'monitoring'] },
  { title: 'Clients', path: '/clients', keywords: ['clients', 'partners', 'partnerships', 'trust'] },
  { title: 'Careers', path: '/careers', keywords: ['careers', 'jobs', 'work', 'employment'] },
  { title: 'Contact', path: '/quote', keywords: ['contact', 'quote', 'request', 'inquiry'] },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setSearchOpen(false)
  }, [location])

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setSearchResults([])
      return
    }

    const results = searchableContent.filter((item) =>
      item.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query.toLowerCase())
      ) || item.title.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
  }

  const handleSearchSelect = (path) => {
    navigate(path)
    setSearchQuery('')
    setSearchResults([])
    setSearchOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'py-2 bg-fortress-black/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] border-b border-primary/15'
          : 'py-4 bg-transparent border-b border-transparent'
      }`}
    >
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center px-gutter max-w-container-max mx-auto w-full gap-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex-shrink-0 transition-all duration-300 hover:scale-[1.02] relative group py-1 block"
        >
          <div className="absolute inset-0 bg-fortress-black/40 blur-md rounded-lg opacity-100 group-hover:bg-fortress-black/60 transition-colors pointer-events-none -inset-x-2"></div>
          <img 
            alt="Ngova Security Logo" 
            className="h-14 lg:h-18 w-auto object-contain relative z-10 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] filter brightness-110" 
            src={LOGO_URL} 
          />
        </Link>

        {/* Center Nav Links with Dropdowns */}
        <div className="flex items-center justify-center gap-0.5 lg:gap-1 flex-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            const hasSubmenu = link.submenu && link.submenu.length > 0
            const isOpen = openDropdown === link.to
            
            return (
              <div key={link.to} className="relative group">
                <Link
                  to={link.to}
                  onMouseEnter={() => hasSubmenu && setOpenDropdown(link.to)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className={`flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2.5 rounded-md text-sm font-500 transition-all duration-300 ${
                    isActive
                      ? 'text-primary bg-primary/15 border border-primary/30'
                      : 'text-on-surface-variant hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg opacity-70">{link.icon}</span>
                  {link.label}
                  {hasSubmenu && (
                    <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {hasSubmenu && (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.to)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={`absolute left-0 top-full mt-0 w-80 bg-gradient-to-b from-fortress-black/98 to-fortress-black/95 backdrop-blur-xl border border-primary/20 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
                      isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="p-1">
                      {link.submenu.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => navigate(link.to)}
                          className="w-full text-left px-4 py-3 rounded-md hover:bg-primary/15 transition-colors duration-200 group/item border border-transparent hover:border-primary/20"
                        >
                          <p className="text-white font-500 group-hover/item:text-primary transition-colors">{item.title}</p>
                          <p className="text-xs text-on-surface-variant mt-1">{item.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Right: Search & CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              className="bg-white/5 border border-primary/20 text-white placeholder-on-surface-variant px-3 lg:px-4 py-2.5 pr-10 rounded-lg w-44 lg:w-56 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-200 text-sm"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg pointer-events-none">
              search
            </span>

            {/* Search Results Dropdown */}
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-fortress-black border border-primary/30 rounded-lg shadow-xl z-10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {searchResults.map((result, idx) => (
                  <button
                    key={result.path}
                    onClick={() => handleSearchSelect(result.path)}
                    className={`w-full text-left px-4 py-3 hover:bg-primary/20 transition-all duration-200 ${
                      idx < searchResults.length - 1 ? 'border-b border-primary/10' : ''
                    }`}
                  >
                    <p className="text-white font-500 text-sm">{result.title}</p>
                    <p className="text-on-surface-variant text-xs mt-1">{result.keywords.slice(0, 2).join(' • ')}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/quote"
            className="bg-primary text-on-primary px-5 lg:px-6 py-2.5 font-bold hover:bg-primary/90 transition-all duration-200 rounded-md text-sm shadow-lg hover:shadow-xl hover:shadow-primary/30 flex items-center gap-2 whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-lg">mail</span>
            Get Quote
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex justify-between items-center px-gutter w-full max-w-container-max mx-auto">
        {/* Mobile Menu Toggle */}
        <button
          className="text-white h-10 w-10 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center"
          onClick={() => {
            setMobileOpen(!mobileOpen)
            if (searchOpen) setSearchOpen(false)
          }}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[32px] leading-none select-none">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Mobile Logo */}
        <Link to="/" className="flex-shrink-0 py-2 block h-14 flex items-center">
          <img alt="Ngova Security Logo" className="h-10 w-auto object-contain filter drop-shadow-md" src={LOGO_URL} />
        </Link>

        {/* Mobile Search Toggle */}
        <button
          onClick={() => {
            setSearchOpen(!searchOpen)
            if (mobileOpen) setMobileOpen(false)
          }}
          className="text-white h-10 w-10 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center"
          aria-label="Search"
        >
          <span className="material-symbols-outlined text-[32px] leading-none select-none">
            {searchOpen ? 'close' : 'search'}
          </span>
        </button>
      </nav>

      {/* Mobile Search Bar - Prevent Auto-Zoom */}
      {searchOpen && (
        <div className="md:hidden bg-fortress-black border-b border-primary/10 px-gutter py-3 animate-in fade-in slide-in-from-top duration-200 w-full">
          <div className="relative mb-2">
            <input
              type="text"
              placeholder="Search pages..."
              autoFocus
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-white/5 border border-primary/20 text-white placeholder-on-surface-variant px-4 py-2.5 text-base md:text-sm pr-10 rounded-lg focus:outline-none focus:border-primary/50"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-md">
              search
            </span>
          </div>

          {/* Mobile Search Results list */}
          {searchQuery.trim() !== '' && (
            <div className="space-y-1 max-h-60 overflow-y-auto mt-2">
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <button
                    key={result.path}
                    onClick={() => handleSearchSelect(result.path)}
                    className="w-full text-left px-3 py-2.5 bg-white/[0.02] hover:bg-primary/20 rounded-lg transition-all border border-white/5"
                  >
                    <p className="text-white font-medium text-sm">{result.title}</p>
                  </button>
                ))
              ) : (
                <p className="text-on-surface-variant text-xs text-center py-3">No results found</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Mobile Dropdown Menu Container */}
      {mobileOpen && (
        <div className="md:hidden bg-fortress-black/98 backdrop-blur-lg border-t border-white/5 shadow-2xl h-[calc(100vh-56px)] overflow-y-auto animate-in fade-in slide-in-from-top duration-300">
          <div className="px-gutter py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-4 px-3 py-3.5 rounded-lg text-sm font-medium transition-all border-l-2 ${
                    isActive
                      ? 'text-primary bg-primary/10 border-primary'
                      : 'text-on-surface-variant border-transparent hover:bg-white/5'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl opacity-75">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </div>
          
          <div className="mx-gutter py-4 border-t border-white/5">
            <Link
              to="/quote"
              className="w-full flex items-center justify-center gap-2 bg-primary text-black py-3 font-bold rounded-lg text-sm"
            >
              <span className="material-symbols-outlined text-md">mail</span>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}