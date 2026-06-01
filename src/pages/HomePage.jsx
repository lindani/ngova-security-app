import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'

// Static Gallery Data
const BENTO_GALLERY_ITEMS = [
  { i: 1, url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=600&fit=crop', title: 'Security Operations' },
  { i: 2, url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop', title: 'Control Center' },
  { i: 3, url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop', title: 'Team Coordination' },
  { i: 4, url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=600&fit=crop', title: 'Field Deployment' }
]

const SCROLL_CAROUSEL_ITEMS = [
  { i: 5, url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop', title: 'Perimeter Security' },
  { i: 6, url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop', title: 'Infrastructure Guard' },
  { i: 7, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', title: 'Asset Protection' },
  { i: 8, url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop', title: 'Retail Security' },
  { i: 9, url: 'https://images.unsplash.com/photo-1554224311-beee415c15c7?w=800&h=600&fit=crop', title: 'Executive Security' },
  { i: 10, url: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop', title: 'Access Systems' }
]

const HERO_BACKGROUND_IMAGES = [
  'https://ngovasecurity.co.za/wp-content/uploads/2025/06/IMG_2073-scaled.jpg',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1557821552-17105176677c?w=1920&h=1080&fit=crop'
]

export default function HomePage() {
  const containerRef = useRef(null)
  const carouselRef = useRef(null)
  const [carouselScroll, setCarouselScroll] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollIntervalRef = useRef(null)
  
  // Hero Image Transition State
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  useRevealAll(containerRef, '.reveal-hidden')

  // Hero background transition cycle
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % HERO_BACKGROUND_IMAGES.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(imageInterval)
  }, [])

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoScrolling || !carouselRef.current) return

    autoScrollIntervalRef.current = setInterval(() => {
      const carousel = carouselRef.current
      if (!carousel) return
      
      const scrollAmount = 320
      const maxScroll = carousel.scrollWidth - carousel.clientWidth
      let newScroll = carousel.scrollLeft + scrollAmount
      
      if (newScroll > maxScroll) {
        newScroll = 0
      }
      
      carousel.scrollTo({ left: newScroll, behavior: 'smooth' })
      setCarouselScroll(newScroll)
    }, 4000)

    return () => clearInterval(autoScrollIntervalRef.current)
  }, [isAutoScrolling])

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return
    
    setIsAutoScrolling(false)
    const scrollAmount = 320
    const newScroll = direction === 'left' 
      ? Math.max(0, carouselScroll - scrollAmount)
      : carouselScroll + scrollAmount
    carousel.scrollTo({ left: newScroll, behavior: 'smooth' })
    setCarouselScroll(newScroll)
  }

  const handleCarouselInteraction = () => {
    setIsAutoScrolling(false)
    clearInterval(autoScrollIntervalRef.current)
  }

  const handleCarouselLeave = () => {
    setIsAutoScrolling(true)
  }

  return (
    <main ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-28 md:pt-36 pb-16 lg:pb-24 overflow-hidden bg-fortress-black">
        {/* Layered Cross-Fading Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {HERO_BACKGROUND_IMAGES.map((url, index) => (
            <img 
              key={url}
              alt={`Hero background frame ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out brightness-50 lg:brightness-[0.65] ${
                index === currentHeroIndex ? 'opacity-50 sm:opacity-60 animate-ambient-zoom' : 'opacity-0'
              }`}
              src={url}
            />
          ))}
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full reveal-hidden" id="hero-content">
          <div className="max-w-3xl lg:max-w-4xl">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
              <span className="font-label-caps text-xs sm:text-label-caps text-primary uppercase tracking-widest font-bold">PREMIUM PROTECTION</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display-lg text-white mb-6 tracking-tight drop-shadow-xl leading-[1.1]">
              Security Done Right.
            </h1>
            
            <p className="text-base sm:text-body-lg md:text-xl font-body-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
              Impenetrable asset and infrastructure protection. We combine elite tactical personnel with intelligent monitoring technology to secure what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link className="bg-primary-container text-on-primary-container px-6 py-3.5 sm:px-8 sm:py-4 font-bold text-base sm:text-lg rounded-sm hover:brightness-110 transition-all shadow-lg text-center min-w-[180px]" to="/services">
                Our Services
              </Link>
              <Link className="border border-white/20 text-white px-6 py-3.5 sm:px-8 sm:py-4 font-bold text-base sm:text-lg rounded-sm hover:bg-white/5 transition-all backdrop-blur-sm text-center min-w-[180px]" to="/quote">
                Speak with an Expert
              </Link>
            </div>
          </div>
        </div>
        
        {/* Quick Stats / Status */}
        <div className="absolute bottom-12 right-gutter hidden lg:block reveal-hidden" id="hero-stats">
          <div className="glass-card p-6 flex gap-12 rounded-xl border border-white/10 backdrop-blur-md">
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1 tracking-widest uppercase text-[10px]">NETWORK STATUS</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-security-emerald animate-pulse"></span>
                <span className="font-data-mono text-data-mono text-security-emerald uppercase text-xs font-bold">Operational</span>
              </div>
            </div>
            <div className="border-l border-subtle pl-12">
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1 tracking-widest uppercase text-[10px]">ACTIVE GUARDS</p>
              <p className="font-data-mono text-data-mono text-white text-xs font-semibold">1,402 Units</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies (Bento Grid) */}
      <section className="py-section-gap max-w-container-max mx-auto px-gutter bg-background" id="services">
        <div className="mb-12 sm:mb-16 reveal-hidden">
          <h2 className="text-3xl sm:text-headline-md font-display-lg text-white mb-4">Core Competencies</h2>
          <p className="text-on-surface-variant max-w-2xl text-base sm:text-body-lg">A sophisticated blend of physical protection and tactical field security for critical installations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Physical Guarding */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-[350px] sm:h-[450px] border border-border-subtle glass-card reveal-hidden">
            <img alt="Physical Guarding Team" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 saturate-50" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop"/>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(12, 19, 34, 0) 40%, rgba(12, 19, 34, 0.95) 100%)' }}></div>
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                <h3 className="text-xl sm:text-headline-md font-display-lg text-white">Physical Guarding</h3>
              </div>
              <p className="text-on-surface-variant max-w-md text-sm sm:text-body-md">Professional, specialized personnel deployment for corporate assets and elite facilities.</p>
            </div>
          </div>
          {/* Risk Assessment */}
          <div className="md:col-span-4 glass-card p-6 sm:p-10 rounded-xl flex flex-col justify-center border-subtle hover:border-primary/50 transition-colors reveal-hidden">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center mb-6 sm:mb-8 border border-white/5">
              <span className="material-symbols-outlined text-primary">analytics</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-headline-md font-headline-md text-white mb-2 sm:mb-4">Risk Assessment</h3>
              <p className="text-on-surface-variant text-sm sm:text-body-md">Advanced threat modeling and comprehensive vulnerability analysis for business networks.</p>
            </div>
          </div>
          {/* Access Control */}
          <div className="md:col-span-4 glass-card p-6 sm:p-10 rounded-xl flex flex-col justify-center border-subtle hover:border-primary/50 transition-colors reveal-hidden">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center mb-6 sm:mb-8 border border-white/5">
              <span className="material-symbols-outlined text-primary">key</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-headline-md font-headline-md text-white mb-2 sm:mb-4">Access Control</h3>
              <p className="text-on-surface-variant text-sm sm:text-body-md">Biometric and digital identity check systems unified into a smooth entry workflow.</p>
            </div>
          </div>
          {/* Monitoring Center */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-[350px] sm:h-[450px] border border-subtle glass-card reveal-hidden">
            <img alt="Monitoring Center" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 saturate-[0.8]" src="https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop"/>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(12, 19, 34, 0) 40%, rgba(12, 19, 34, 0.95) 100%)' }}></div>
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                <h3 className="text-xl sm:text-headline-md font-display-lg text-white">24/7 Monitoring</h3>
              </div>
              <p className="text-on-surface-variant max-w-md text-sm sm:text-body-md">Continuous surveillance and rapid-response dispatch through our high-tech operations rooms.</p>
            </div>
          </div>
          {/* Tactical Fleet */}
          <div className="md:col-span-12 group relative overflow-hidden rounded-xl h-[350px] sm:h-[500px] border border-subtle glass-card reveal-hidden">
            <img alt="Security Fleet and Personnel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.6] saturate-50" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"/>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(12, 19, 34, 0) 40%, rgba(12, 19, 34, 0.95) 100%)' }}></div>
            <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full" style={{ fontVariationSettings: "'FILL' 1" }}>local_police</span>
                <h3 className="text-2xl sm:text-display-lg font-display-lg text-white">Tactical Deployment</h3>
              </div>
              <p className="text-on-surface-variant max-w-2xl text-sm sm:text-body-lg">Active responsive units and perimeter patrols utilizing optimized tracking vehicle fleets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Gallery */}
      <section className="py-section-gap max-w-container-max mx-auto px-gutter" id="gallery">
        <div className="mb-12 sm:mb-16 reveal-hidden text-center">
          <p className="font-label-caps text-label-caps text-primary mb-2 tracking-widest uppercase">Visual Proof</p>
          <h2 className="text-3xl sm:text-headline-md font-display-lg text-white">Our Expertise in Action</h2>
        </div>
        
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] sm:auto-rows-[300px] mb-12">
          {BENTO_GALLERY_ITEMS.map((item) => (
            <div key={item.i} className={`relative rounded-xl overflow-hidden group glass-card reveal-hidden ${item.i === 1 || item.i === 4 ? 'md:col-span-2' : ''}`}>
              <img 
                src={item.url} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter md:grayscale-[80%] md:group-hover:grayscale-0 md:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fortress-black/90 via-fortress-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 opacity-100 transition-all duration-500">
                <h3 className="text-white text-lg sm:text-headline-md font-headline-md mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-on-surface-variant text-xs sm:text-body-md">Field-proven tactical execution.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div 
          className="relative group w-full"
          onMouseEnter={handleCarouselInteraction}
          onMouseLeave={handleCarouselLeave}
        >
          <div 
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth w-full"
            onScroll={(e) => setCarouselScroll(e.target.scrollLeft)}
          >
            <div className="flex gap-4 sm:gap-6 pb-4 px-0 sm:px-4">
              {SCROLL_CAROUSEL_ITEMS.map((item) => (
                <div key={item.i} className="relative rounded-xl overflow-hidden group glass-card reveal-hidden flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter md:grayscale-[80%] md:group-hover:grayscale-0 md:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fortress-black/90 via-fortress-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 opacity-100 transition-all duration-500">
                    <h3 className="text-white font-headline-md mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-on-surface-variant font-body-md text-xs sm:text-sm">Field-proven tactical execution.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Controls */}
          <button
            onClick={() => scrollCarousel('left')}
            onMouseEnter={handleCarouselInteraction}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:shadow-[0_0_30px_rgba(255,179,172,0.4)] hover:scale-110 -ml-4 sm:-ml-8"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined text-lg sm:text-2xl">chevron_left</span>
          </button>
          <button
            onClick={() => scrollCarousel('right')}
            onMouseEnter={handleCarouselInteraction}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/90 text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:shadow-[0_0_30px_rgba(255,179,172,0.4)] hover:scale-110 -mr-4 sm:-mr-8"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined text-lg sm:text-2xl">chevron_right</span>
          </button>
        </div>
      </section>

      {/* Strategic B2B Testimonials Section */}
      <section className="py-section-gap px-gutter bg-neutral-950/40 border-y border-white/5" id="testimonials">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 sm:mb-16 reveal-hidden">
            <span className="font-label-caps text-xs text-primary mb-2 block tracking-widest uppercase font-semibold">OPERATIONAL VALIDATION</span>
            <h2 className="text-3xl sm:text-headline-md font-display-lg text-white font-bold">Trusted by Asset & Property Managers</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mt-3 text-sm sm:text-base">
              Direct performance assessments from corporate facilities and high-end security stakeholders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="glass-card border border-white/5 bg-white/[0.01] p-6 sm:p-8 rounded-xl flex flex-col justify-between reveal-hidden hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm sm:text-base fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-6">
                  "Ngova Security handles our residential complex access control flawlessly. Their hands-on interaction and strict visitor verification frameworks keep our perimeter completely transparent and clear of risk."
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold font-mono border border-primary/20">
                  RE
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Residential Estate Board</h4>
                  <p className="text-[11px] text-on-surface-variant">Asset & Safety Committee</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass-card border border-white/5 bg-white/[0.01] p-6 sm:p-8 rounded-xl flex flex-col justify-between reveal-hidden hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm sm:text-base fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-6">
                  "The response division is remarkably professional. They secured our commercial construction zone during infrastructure updates, going the extra mile to maintain safe equipment logistics nests."
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold font-mono border border-primary/20">
                  SW
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Simon Williams</h4>
                  <p className="text-[11px] text-on-surface-variant">Director, Knockout Branding</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass-card border border-white/5 bg-white/[0.01] p-6 sm:p-8 rounded-xl flex flex-col justify-between md:col-span-2 lg:col-span-1 reveal-hidden hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm sm:text-base fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-6">
                  "We deploy their specialized tactical guards for enterprise installations and structural exhibitions. Attentive personnel who maintain perfect security compliance metrics with zero operational errors."
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold font-mono border border-primary/20">
                  JH
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Jade Haidlinger</h4>
                  <p className="text-[11px] text-on-surface-variant">Event Logistics Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-section-gap bg-surface-container-low border-b border-white/5" id="clients">
        <div className="max-w-container-max mx-auto px-gutter reveal-hidden">
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-label-caps text-label-caps text-primary mb-2 tracking-widest uppercase">NETWORK INFRASTRUCTURE</p>
            <h2 className="text-3xl sm:text-headline-md font-display-lg text-white">Strategic Partnerships</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="flex flex-col items-center justify-center p-6 sm:p-8 border border-white/5 bg-surface-container-highest/20 rounded-xl hover:bg-surface-container-highest/50 hover:border-primary/20 transition-all group">
              <div className="text-lg sm:text-headline-md font-display-lg font-bold text-on-surface-variant group-hover:text-white transition-colors mb-2">CHRONOS</div>
              <span className="text-[10px] tracking-widest font-data-mono text-on-surface-variant/50">TIMELINE TECH</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 sm:p-8 border border-white/5 bg-surface-container-highest/20 rounded-xl hover:bg-surface-container-highest/50 hover:border-primary/20 transition-all group">
              <div className="text-lg sm:text-headline-md font-display-lg font-bold text-on-surface-variant group-hover:text-white transition-colors mb-2">AXON</div>
              <span className="text-[10px] tracking-widest font-data-mono text-on-surface-variant/50">BIOMETRIC INC.</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 sm:p-8 border border-white/5 bg-surface-container-highest/20 rounded-xl hover:bg-surface-container-highest/50 hover:border-primary/20 transition-all group">
              <div className="text-lg sm:text-headline-md font-display-lg font-bold text-on-surface-variant group-hover:text-white transition-colors mb-2">SPECTRA</div>
              <span className="text-[10px] tracking-widest font-data-mono text-on-surface-variant/50">OPTICAL SYSTEMS</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 sm:p-8 border border-white/5 bg-surface-container-highest/20 rounded-xl hover:bg-surface-container-highest/50 hover:border-primary/20 transition-all group">
              <div className="text-lg sm:text-headline-md font-display-lg font-bold text-on-surface-variant group-hover:text-white transition-colors mb-2">VANGUARD</div>
              <span className="text-[10px] tracking-widest font-data-mono text-on-surface-variant/50">TACTICAL GEAR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-section-gap relative overflow-hidden bg-fortress-black">
        <div className="max-w-4xl mx-auto px-gutter text-center relative z-10 reveal-hidden">
          <h2 className="text-3xl sm:text-display-lg font-display-lg text-white mb-6 sm:mb-8 tracking-tight">Ready to secure your business?</h2>
          <p className="text-base sm:text-body-lg text-on-surface-variant mb-8 sm:mb-12 max-w-2xl mx-auto">Join the premium operations networks who trust Ngova Security for total field safety and elite protection deployments.</p>
          <Link className="shimmer-btn inline-block px-10 py-4 sm:px-12 sm:py-5 font-bold text-base sm:text-lg rounded-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,179,172,0.15)]" to="/quote">
            Begin Onboarding
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-primary/5 blur-[80px] sm:blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      </section>
    </main>
  )
}