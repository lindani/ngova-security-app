import { useState, useEffect } from 'react'
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
    icon: 'mail'
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
  { title: 'Contact', path: '/quote', keywords: ['contact', 'quote', 'request', 'inquiry'] },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false)
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
    setMobileSubmenuOpen(false)
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-2 ${
        scrolled || mobileOpen || searchOpen
          ? 'bg-fortress-black/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] border-b border-primary/15'
          : 'bg-fortress-black/5 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center px-gutter max-w-container-max mx-auto w-full gap-4">
        <Link to="/" className="flex-shrink-0 transition-all duration-300 hover:scale-[1.02] relative group py-0.5 block">
          <div className="absolute inset-0 bg-fortress-black/40 blur-md rounded-lg opacity-100 group-hover:bg-fortress-black/60 transition-colors pointer-events-none -inset-x-2"></div>
          <img alt="Ngova Security Logo" className="h-12 lg:h-14 w-auto object-contain relative z-10 filter brightness-110" src={LOGO_URL} />
        </Link>

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
                  className={`flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-primary bg-primary/15 border border-primary/30' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg opacity-85">{link.icon}</span>
                  {link.label}
                  {hasSubmenu && <span className={`material-symbols-outlined text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>}
                </Link>

                {hasSubmenu && (
                  <div onMouseEnter={() => setOpenDropdown(link.to)} onMouseLeave={() => setOpenDropdown(null)}
                    className={`absolute left-0 top-full mt-1.5 w-80 bg-fortress-black/95 backdrop-blur-3xl border border-primary/20 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 ${
                      isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="p-1">
                      {link.submenu.map((item, idx) => (
                        <button key={idx} onClick={() => navigate(item.to)}
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

        <div className="flex items-center gap-3 flex-shrink-0">
          <Link to="/quote" className="bg-primary text-on-primary px-5 lg:px-6 py-2 font-bold hover:bg-primary/90 transition-all rounded-md text-sm shadow-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">mail</span> Get Quote
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar Header */}
      <nav className="md:hidden flex justify-between items-center px-gutter w-full max-w-container-max mx-auto">
        <button className="text-white h-9 w-9 hover:bg-white/5 rounded-lg flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="material-symbols-outlined text-[28px]">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
        <Link to="/" className="flex-shrink-0 py-1 h-11 flex items-center">
          <img alt="Ngova Security Logo" className="h-8 w-auto object-contain" src={LOGO_URL} />
        </Link>
        <button onClick={() => setSearchOpen(!searchOpen)} className="text-white h-9 w-9 hover:bg-white/5 rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-[28px]">{searchOpen ? 'close' : 'search'}</span>
        </button>
      </nav>

      {/* Mobile Dropdown Drop Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-8 h-[calc(100vh-60px)] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="mt-4 bg-fortress-black/95 backdrop-blur-3xl border border-primary/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="p-2 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to
                const hasSubmenu = link.submenu && link.submenu.length > 0

                if (hasSubmenu) {
                  return (
                    <div key={link.to} className="space-y-1">
                      <button
                        onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                        className={`w-full text-left px-4 py-4 rounded-xl transition-all border border-transparent ${
                          isActive || mobileSubmenuOpen ? 'bg-primary/15 border-primary/20' : 'hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className={`material-symbols-outlined text-2xl ${isActive || mobileSubmenuOpen ? 'text-primary' : 'text-white/70'}`}>{link.icon}</span>
                            <div>
                              <p className={`font-semibold ${isActive || mobileSubmenuOpen ? 'text-primary' : 'text-white'}`}>{link.label}</p>
                              <p className="text-xs text-white/50 mt-0.5">{link.description}</p>
                            </div>
                          </div>
                          <span className={`material-symbols-outlined transition-transform duration-200 ${mobileSubmenuOpen ? 'rotate-180 text-primary' : 'text-white/40'}`}>
                            expand_more
                          </span>
                        </div>
                      </button>
                      
                      {mobileSubmenuOpen && (
                        <div className="mx-2 mb-2 p-1 space-y-1 bg-black/40 rounded-xl border border-white/5">
                          {link.submenu.map((item, idx) => (
                            <button key={idx} onClick={() => navigate(item.to)}
                              className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors block border-b border-white/5 last:border-none"
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
                  <Link key={link.to} to={link.to}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all border border-transparent ${
                      isActive ? 'bg-primary/15 border-primary/20' : 'hover:bg-white/5'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-2xl ${isActive ? 'text-primary' : 'text-white/70'}`}>{link.icon}</span>
                    <div>
                      <p className={`font-semibold ${isActive ? 'text-primary' : 'text-white'}`}>{link.label}</p>
                      <p className="text-xs text-white/50 mt-0.5">{link.description}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
            
            <div className="p-4 bg-white/[0.02] border-t border-white/5">
              <Link to="/quote" className="w-full flex items-center justify-center gap-2 bg-primary text-black py-3.5 font-bold rounded-xl shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">mail</span>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}