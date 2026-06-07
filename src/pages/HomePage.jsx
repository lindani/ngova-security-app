import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'

const BENTO_GALLERY_ITEMS = [
  { i: 1, url: '/images/homepage/gallery-4.jpg?w=1600&h=600&fit=crop', title: 'Security Operations' },
  { i: 2, url: '/images/homepage/gallery-1.jpg?w=800&h=600&fit=crop', title: 'Control Center' },
  { i: 3, url: '/images/homepage/gallery-3.jpg?w=800&h=600&fit=crop', title: 'Team Coordination' },
  { i: 4, url: '/images/homepage/gallery-5.jpg?w=1600&h=600&fit=crop', title: 'Field Deployment' }
]

const SCROLL_CAROUSEL_ITEMS = [
  { i: 5, url: '/images/homepage/perimeter-security.jpg?w=800&h=600&fit=crop', title: 'Perimeter Security' },
  { i: 6, url: '/images/homepage/infrastructure-guard.jpg?w=800&h=600&fit=crop', title: 'Infrastructure Guard' },
  { i: 7, url: '/images/homepage/asset-protection.jpg?w=800&h=600&fit=crop', title: 'Asset Protection' },
  { i: 8, url: '/images/homepage/gallery-2.jpg?w=800&h=600&fit=crop', title: 'Retail Security' },
  { i: 9, url: '/images/homepage/executive-security.jpg?w=800&h=600&fit=crop', title: 'Executive Security' },
  { i: 10, url: '/images/homepage/access-systems.jpg?w=800&h=600&fit=crop', title: 'Access Systems' }
]

const TESTIMONIALS = [
  {
    initials: 'EP',
    name: 'Esmerelda Pietersen',
    role: 'Verified Client',
    quote: '"Amazing service as usual"',
  },
  {
    initials: 'AM',
    name: 'Abongile Mali',
    role: 'Verified Client',
    quote: '"We have gone through our fair share of security companies over the last decade but Ngova stands out. Always ready to assist"',
  },
  {
    initials: 'MN',
    name: 'Mahadi Nkosi',
    role: 'Verified Client',
    quote: '"Their eye for perfection and customer satisfaction is top-notch"',
  },
  {
    initials: 'JF',
    name: 'James Flynn',
    role: 'Verified Client',
    quote: '"If you need a well-run, well organised security firm for your business, these are the guys."',
  },
  {
    initials: 'SK',
    name: 'Sipho Khumalo',
    role: 'Verified Client',
    quote: '"Exceptional response times and tactical accuracy during perimeter configurations."',
  },
  {
    initials: 'LN',
    name: 'Lerato Nhlapo',
    role: 'Verified Client',
    quote: '"Highly professional control center dispatch operations. Flawless execution."',
  }
]

export default function HomePage() {
  const containerRef   = useRef(null)
  const carouselRef    = useRef(null)
  const testimonialCarouselRef = useRef(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  useRevealAll(containerRef, '.reveal-hidden')

  // ── Gallery carousel ─────────────────────────────────────────────────────
  const carouselIntervalRef = useRef(null)

  const startCarousel = () => {
    stopCarousel()
    carouselIntervalRef.current = setInterval(() => {
      const c = carouselRef.current
      if (!c) return
      const atEnd = c.scrollLeft >= c.scrollWidth - c.clientWidth - 10
      c.scrollTo({ left: atEnd ? 0 : c.scrollLeft + c.clientWidth * 0.75, behavior: 'smooth' })
    }, 3200)
  }

  const stopCarousel = () => clearInterval(carouselIntervalRef.current)

  useEffect(() => { startCarousel(); return stopCarousel }, [])

  const scrollCarousel = (dir) => {
    const c = carouselRef.current
    if (!c) return
    stopCarousel()
    setIsAutoScrolling(false)
    c.scrollBy({ left: dir === 'left' ? -(c.clientWidth * 0.75) : c.clientWidth * 0.75, behavior: 'smooth' })
  }

  // ── Testimonials Carousel ────────────────────────────────────────────────
  const testimonialIntervalRef = useRef(null)

  const startTestimonialCarousel = () => {
    stopTestimonialCarousel()
    testimonialIntervalRef.current = setInterval(() => {
      const t = testimonialCarouselRef.current
      if (!t) return
      const atEnd = t.scrollLeft >= t.scrollWidth - t.clientWidth - 10
      t.scrollTo({ left: atEnd ? 0 : t.scrollLeft + t.clientWidth, behavior: 'smooth' })
    }, 5000)
  }

  const stopTestimonialCarousel = () => clearInterval(testimonialIntervalRef.current)

  useEffect(() => { 
    startTestimonialCarousel()
    return stopTestimonialCarousel 
  }, [])

  const scrollTestimonials = (dir) => {
    const t = testimonialCarouselRef.current
    if (!t) return
    stopTestimonialCarousel()
    t.scrollBy({ left: dir === 'left' ? -t.clientWidth : t.clientWidth, behavior: 'smooth' })
  }

  return (
    <main ref={containerRef}>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.00); }
          to   { transform: scale(1.10); }
        }
        .hero-zoom {
          animation: heroZoom 7.5s ease-out forwards;
        }
      `}</style>

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-28 md:pt-36 pb-16 lg:pb-24 overflow-hidden bg-fortress-black">
        
        {/* Video Background with Poster Fallback */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-fortress-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero/hero-1.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ transformOrigin: 'center center' }}
          >
            <source src="/videos/security_heroes.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-10 hero-gradient pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full reveal-hidden" id="hero-content">
          <div className="max-w-3xl lg:max-w-4xl">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
              <span className="font-label-caps text-xs sm:text-label-caps text-primary uppercase tracking-widest font-bold">PREMIUM PROTECTION</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display-lg text-white mb-6 tracking-tight drop-shadow-xl leading-[1.1]">
              Security Done Right.
            </h1>
            <p className="text-base sm:text-body-lg md:text-xl font-body-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
              Impenetrable asset and infrastructure protection. We combine elite tactical personnel
              with intelligent monitoring technology to secure what matters most.
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

        {/* Bottom Stats */}
        <div className="absolute bottom-12 right-gutter hidden lg:block reveal-hidden" id="hero-stats">
          <div className="glass-card p-6 flex gap-12 rounded-xl border border-white/10 backdrop-blur-md">
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1 tracking-widest uppercase text-[10px]">NETWORK STATUS</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-security-emerald animate-pulse" />
                <span className="font-data-mono text-data-mono text-security-emerald uppercase text-xs font-bold">Operational</span>
              </div>
            </div>
            <div className="border-l border-subtle pl-12">
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1 tracking-widest uppercase text-[10px]">ACTIVE GUARDS</p>
              <p className="font-data-mono text-data-mono text-white text-xs font-semibold">1,402 Units</p>
            </div>
          </div>
        </div>

        {/* Simple indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          <div className="w-6 h-1.5 bg-primary rounded-full" />
        </div>
      </section>

      {/* ─── Expertise Gallery ────────────────────────────────────────────── */}
      <section className="py-section-gap max-w-container-max mx-auto px-gutter" id="gallery">
        <div className="mb-12 sm:mb-16 reveal-hidden text-center">
          <p className="font-label-caps text-label-caps text-primary mb-2 tracking-widest uppercase">Visual Proof</p>
          <h2 className="text-3xl sm:text-headline-md font-display-lg text-white">Our Expertise in Action</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] sm:auto-rows-[300px] mb-12">
          {BENTO_GALLERY_ITEMS.map((item) => (
            <div key={item.i} className={`relative rounded-xl overflow-hidden group glass-card reveal-hidden ${item.i === 1 || item.i === 4 ? 'md:col-span-2' : ''}`}>
              <img src={item.url} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter md:grayscale-[80%] md:group-hover:grayscale-0 md:group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-fortress-black/90 via-fortress-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white text-lg sm:text-headline-md font-headline-md mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-on-surface-variant text-xs sm:text-body-md">Field-proven tactical execution.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative group w-full" onMouseEnter={stopCarousel} onMouseLeave={startCarousel}>
          <div ref={carouselRef} className="overflow-x-auto scrollbar-hide scroll-smooth w-full">
            <div className="flex gap-4 sm:gap-6 pb-4 px-0 sm:px-4">
              {SCROLL_CAROUSEL_ITEMS.map((item) => (
                <div key={item.i} className="relative rounded-xl overflow-hidden group glass-card reveal-hidden flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                  <img src={item.url} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter md:grayscale-[80%] md:group-hover:grayscale-0 md:group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-fortress-black/90 via-fortress-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-white font-headline-md mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-on-surface-variant font-body-md text-xs sm:text-sm">Field-proven tactical execution.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => scrollCarousel('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 -ml-4 sm:-ml-8" aria-label="Scroll left">
            <span className="material-symbols-outlined text-lg sm:text-2xl">chevron_left</span>
          </button>
          <button onClick={() => scrollCarousel('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-r from-primary/80 to-primary text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 -mr-4 sm:-mr-8" aria-label="Scroll right">
            <span className="material-symbols-outlined text-lg sm:text-2xl">chevron_right</span>
          </button>
        </div>
      </section>

      {/* ─── Testimonials carousel ────────────────────────────────────────── */}
      <section className="py-section-gap px-gutter bg-neutral-950/40 border-y border-white/5 overflow-hidden" id="testimonials">
        <div className="max-w-container-max mx-auto">
          
          <div className="mb-12 sm:mb-16 reveal-hidden text-center">
            <span className="font-label-caps text-xs text-primary mb-2 block tracking-widest uppercase font-semibold">OPERATIONAL VALIDATION</span>
            <h2 className="text-3xl sm:text-headline-md font-display-lg text-white font-bold">Trusted by Our Clients</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mt-3 text-sm sm:text-base">
              Direct performance assessments from corporate facilities and high-end security stakeholders.
            </p>
          </div>

          <div className="relative group w-full" onMouseEnter={stopTestimonialCarousel} onMouseLeave={startTestimonialCarousel}>
            <div ref={testimonialCarouselRef} className="overflow-x-auto scrollbar-hide scroll-smooth w-full">
              <div className="flex gap-4 sm:gap-6 pb-4 px-0 sm:px-4">
                {TESTIMONIALS.map(({ initials, name, role, quote }) => (
                  <div 
                    key={initials} 
                    className="relative rounded-xl group glass-card reveal-hidden flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border border-white/5 bg-white/[0.01] p-6 sm:p-8 flex flex-col justify-between hover:border-primary/20 transition-all duration-300"
                  >
                    <div>
                      <div className="flex text-primary mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-sm sm:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-6">{quote}</p>
                    </div>
                    <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold font-mono border border-primary/20 flex-shrink-0">{initials}</div>
                      <div className="text-left">
                        <h4 className="text-xs sm:text-sm font-bold text-white">{name}</h4>
                        <p className="text-[11px] text-on-surface-variant">{role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => scrollTestimonials('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 -ml-4 sm:-ml-8" aria-label="Scroll left">
              <span className="material-symbols-outlined text-lg sm:text-2xl">chevron_left</span>
            </button>
            <button onClick={() => scrollTestimonials('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-r from-primary/80 to-primary text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 -mr-4 sm:-mr-8" aria-label="Scroll right">
              <span className="material-symbols-outlined text-lg sm:text-2xl">chevron_right</span>
            </button>
          </div>

        </div>
      </section>

      {/* ─── Strategic Partnerships ───────────────────────────────────────── */}
      <section className="py-section-gap bg-surface-container-low border-b border-white/5" id="clients">
        <div className="max-w-container-max mx-auto px-gutter reveal-hidden">
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-label-caps text-label-caps text-primary mb-2 tracking-widest uppercase">NETWORK INFRASTRUCTURE</p>
            <h2 className="text-3xl sm:text-headline-md font-display-lg text-white">Strategic Partnerships</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { name: 'CHRONOS', sub: 'TIMELINE TECH' },
              { name: 'AXON',    sub: 'BIOMETRIC INC.' },
              { name: 'SPECTRA', sub: 'OPTICAL SYSTEMS' },
              { name: 'VANGUARD',sub: 'TACTICAL GEAR' },
            ].map(({ name, sub }) => (
              <div key={name} className="flex flex-col items-center justify-center p-6 sm:p-8 border border-white/5 bg-surface-container-highest/20 rounded-xl hover:bg-surface-container-highest/50 hover:border-primary/20 transition-all group">
                <div className="text-lg sm:text-headline-md font-display-lg font-bold text-on-surface-variant group-hover:text-white transition-colors mb-2">{name}</div>
                <span className="text-[10px] tracking-widest font-data-mono text-on-surface-variant/50">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-section-gap relative overflow-hidden bg-fortress-black">
        <div className="max-w-4xl mx-auto px-gutter text-center relative z-10 reveal-hidden">
          <h2 className="text-3xl sm:text-display-lg font-display-lg text-white mb-6 sm:mb-8 tracking-tight">Ready to secure your business?</h2>
          <p className="text-base sm:text-body-lg text-on-surface-variant mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join the premium operations networks who trust Ngova Security for total field safety and elite protection deployments.
          </p>
          <Link
            className="shimmer-btn inline-block px-10 py-4 sm:px-12 sm:py-5 font-bold text-base sm:text-lg rounded-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,179,172,0.15)]"
            to="/quote"
          >
            Begin Onboarding
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-primary/5 blur-[80px] sm:blur-[120px] rounded-full -z-10 pointer-events-none" />
      </section>

    </main>
  )
}