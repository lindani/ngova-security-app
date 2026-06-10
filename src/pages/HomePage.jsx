import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'

const BENTO_GALLERY_ITEMS = [
  { i: 1, url: '/images/homepage/gallery-4.jpg?w=1600&h=600&fit=crop', title: 'Security Operations', size: 'md:col-span-2' },
  { i: 2, url: '/images/homepage/gallery-1.jpg?w=800&h=600&fit=crop', title: 'Control Center',      size: 'md:col-span-1' },
  { i: 3, url: '/images/homepage/gallery-3.jpg?w=800&h=600&fit=crop', title: 'Team Coordination',   size: 'md:col-span-1' },
  { i: 4, url: '/images/homepage/gallery-6.jpg?w=1600&h=600&fit=crop', title: 'Field Deployment',    size: 'md:col-span-2' },
]

const SCROLL_CAROUSEL_ITEMS = [
  { i: 5,  url: '/images/homepage/gallery-10.jpg?w=800&h=600&fit=crop', title: 'Perimeter Security',   sub: 'Boundary-layer threat detection and response.' },
  { i: 6,  url: '/images/homepage/gallery-9.jpg?w=800&h=600&fit=crop', title: 'Infrastructure Guard', sub: 'Critical facility hardening and monitoring.' },
  { i: 7,  url: '/images/homepage/gallery-8.jpg?w=800&h=600&fit=crop', title: 'Asset Protection',     sub: 'High-value asset containment systems.' },
  { i: 8,  url: '/images/homepage/gallery-2.jpg?w=800&h=600&fit=crop', title: 'Retail Security',       sub: 'Loss prevention and store safety networks.' },
  { i: 9,  url: '/images/homepage/gallery-7.jpg?w=800&h=600&fit=crop', title: 'Executive Security',   sub: 'Close-protection and escort operations.' },
  { i: 10, url: '/images/homepage/gallery-11.jpg?w=800&h=600&fit=crop', title: 'Access Systems',       sub: 'Biometric and credential control systems.' },
]

const TESTIMONIALS = [
  {
    initials: 'EP',
    name: 'Esmerelda Pietersen',
    role: 'Verified Client',
    quote: 'Amazing service as usual.',
  },
  {
    initials: 'AM',
    name: 'Abongile Mali',
    role: 'Verified Client',
    quote: 'We have gone through our fair share of security companies over the last decade but Ngova stands out. Always ready to assist.',
  },
  {
    initials: 'MN',
    name: 'Mahadi Nkosi',
    role: 'Verified Client',
    quote: 'Their eye for perfection and customer satisfaction is top-notch.',
  },
  {
    initials: 'JF',
    name: 'James Flynn',
    role: 'Verified Client',
    quote: 'If you need a well-run, well organised security firm for your business, these are the guys.',
  },
  {
    initials: 'SK',
    name: 'Sipho Khumalo',
    role: 'Verified Client',
    quote: 'Exceptional response times and tactical accuracy during perimeter configurations.',
  },
  {
    initials: 'LN',
    name: 'Lerato Nhlapo',
    role: 'Verified Client',
    quote: 'Highly professional control center dispatch operations. Flawless execution.',
  },
]

const PARTNERS = [
  { name: 'CHRONOS', sub: 'TIMELINE TECH' },
  { name: 'AXON',    sub: 'BIOMETRIC INC.' },
  { name: 'SPECTRA', sub: 'OPTICAL SYSTEMS' },
  { name: 'VANGUARD',sub: 'TACTICAL GEAR' },
]

// Reusable hook: auto-scrolling carousel with pause-on-interaction + active index tracking
function useAutoCarousel(ref, count, interval = 4000) {
  const timerRef  = useRef(null)
  const resumeRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const stop  = () => clearInterval(timerRef.current)
  const start = () => {
    stop()
    timerRef.current = setInterval(() => {
      const el = ref.current
      if (!el) return
      const itemEl = el.firstElementChild
      const step = itemEl ? itemEl.offsetWidth + 20 : 320 // Dynamically pull spacing card step value + gap
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 5
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: 'smooth' })
    }, interval)
  }

  const nudge = (dir) => {
    const el = ref.current
    if (!el) return
    stop()
    clearTimeout(resumeRef.current)
    const itemEl = el.firstElementChild
    const step = itemEl ? itemEl.offsetWidth + 20 : 320
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' })
    resumeRef.current = setTimeout(start, 8000)
  }

  const scrollToIndex = (i) => {
    const el = ref.current
    if (!el) return
    stop()
    clearTimeout(resumeRef.current)
    const itemEl = el.firstElementChild
    const step = itemEl ? itemEl.offsetWidth + 20 : el.scrollWidth / count
    el.scrollTo({ left: step * i, behavior: 'smooth' })
    resumeRef.current = setTimeout(start, 8000)
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const itemEl = el.firstElementChild
      const step = itemEl ? itemEl.offsetWidth + 20 : el.scrollWidth / count
      const idx = Math.round(el.scrollLeft / step)
      setActiveIndex(Math.min(idx, count - 1))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [count])

  useEffect(() => {
    start()
    return () => { stop(); clearTimeout(resumeRef.current) }
  }, [])

  return { nudge, stop, start, scrollToIndex, activeIndex }
}

export default function HomePage() {
  const containerRef        = useRef(null)
  const galleryCarouselRef  = useRef(null)
  const testimonialRef      = useRef(null)

  useRevealAll(containerRef, '.reveal-hidden')

  const gallery      = useAutoCarousel(galleryCarouselRef, SCROLL_CAROUSEL_ITEMS.length, 3800)
  const testimonials = useAutoCarousel(testimonialRef, TESTIMONIALS.length, 5000)

  return (
    <main ref={containerRef} className="overflow-x-hidden bg-background text-on-background">

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">

        {/* Background video / poster */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay loop muted playsInline
            poster="/images/hero/hero-1.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/security_heroes.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        </div>

        {/* Content - Fixed with standard max-width, centering, and gutter padding to sit inline */}
        <div className="relative z-10 flex flex-col flex-1 justify-end w-full max-w-container-max mx-auto px-gutter pt-40 sm:pt-0 pb-12 sm:pb-16 reveal-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-caps text-xs text-primary uppercase tracking-widest font-semibold">
                Premium Protection
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display-lg text-white leading-[1.08] tracking-tight mb-3 sm:mb-5">
              Security Done Right.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Elite tactical personnel and intelligent monitoring. 
              Impenetrable protection for your critical assets and infrastructure - securing what matters most.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Link
                className="bg-primary text-on-primary px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base text-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                to="/services"
              >
                Our Services
              </Link>
              <Link
                className="border border-white/20 text-white px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base text-center hover:bg-white/5 transition-all backdrop-blur-sm"
                to="/quote"
              >
                Speak with an Expert
              </Link>
            </div>
          </div>
        </div>

        {/* Status chip — desktop only */}
        <div className="absolute bottom-8 right-gutter hidden lg:flex reveal-hidden">
          <div className="glass-card px-5 py-3.5 rounded-xl border border-white/10 backdrop-blur-md flex items-center gap-8">
            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant mb-1 tracking-widest uppercase">Network Status</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-security-emerald animate-pulse" />
                <span className="font-data-mono text-xs text-security-emerald uppercase font-bold">Operational</span>
              </div>
            </div>
            <div className="border-l border-white/10 pl-8">
              <p className="font-label-caps text-[10px] text-on-surface-variant mb-1 tracking-widest uppercase">Active Guards</p>
              <p className="font-data-mono text-xs text-white font-semibold">1,402 Units</p>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <div className="w-5 h-1 bg-primary/60 rounded-full" />
        </div>
      </section>

      {/* ─── Expertise Gallery ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-section-gap max-w-container-max mx-auto px-gutter overflow-hidden" id="gallery">

        <div className="mb-10 sm:mb-14 reveal-hidden">
          <p className="font-label-caps text-xs text-primary mb-2 tracking-widest uppercase">Visual Proof</p>
          <h2 className="text-2xl sm:text-3xl font-display-lg text-white">Our Expertise in Action</h2>
          <div className="mt-3 w-16 h-px bg-primary" />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {BENTO_GALLERY_ITEMS.map((item) => (
            <div
              key={item.i}
              className={`${item.size} relative rounded-xl overflow-hidden group glass-card reveal-hidden aspect-[16/9] md:aspect-auto md:min-h-[280px] md:h-full`}
            >
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-base sm:text-lg mb-0.5">{item.title}</h3>
                <p className="text-on-surface-variant text-xs">Field-proven tactical execution.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll carousel */}
        <div
          className="relative group overflow-visible"
          onMouseEnter={gallery.stop}
          onMouseLeave={gallery.start}
        >
          <p className="text-sm text-on-surface-variant mb-5 reveal-hidden">Service Capabilities</p>

          <div
            ref={galleryCarouselRef}
            onTouchStart={gallery.stop}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {SCROLL_CAROUSEL_ITEMS.map((item) => (
              <div
                key={item.i}
                className="flex-shrink-0 w-[calc(100vw-48px)] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] snap-start"
              >
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden glass-card border border-white/5 group/card">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-on-surface-variant text-xs leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot navigation for mobile to indicate more items */}
          <div className="flex items-center justify-center gap-1.5 md:hidden">
            {SCROLL_CAROUSEL_ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => gallery.scrollToIndex(i)}
                aria-label={`Go to service ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  gallery.activeIndex === i
                    ? 'w-4 h-1.5 bg-primary'
                    : 'w-1.5 h-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => gallery.nudge('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Scroll left"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group/btn">
              <span className="material-symbols-outlined text-white text-lg group-hover/btn:text-neutral-950">chevron_left</span>
            </div>
          </button>
          <button
            onClick={() => gallery.nudge('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Scroll right"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group/btn">
              <span className="material-symbols-outlined text-white text-lg group-hover/btn:text-neutral-950">chevron_right</span>
            </div>
          </button>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-section-gap border-y border-white/5 bg-neutral-950/40"
        id="testimonials"
      >
        <div className="max-w-container-max mx-auto px-gutter">

          <div className="mb-10 sm:mb-14 reveal-hidden">
            <p className="font-label-caps text-xs text-primary mb-2 tracking-widest uppercase">Operational Validation</p>
            <h2 className="text-2xl sm:text-3xl font-display-lg text-white">Trusted by Our Clients</h2>
            <div className="mt-3 w-16 h-px bg-primary" />
          </div>

          <div
            className="relative group"
            onMouseEnter={testimonials.stop}
            onMouseLeave={testimonials.start}
          >
            {/* Cards */}
            <div
              ref={testimonialRef}
              onTouchStart={testimonials.stop}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory scrollbar-hide"
            >
              {TESTIMONIALS.map(({ initials, name, role, quote }) => (
                <div
                  key={initials}
                  className="flex-shrink-0 w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] snap-start glass-card border border-white/5 bg-white/[0.02] rounded-xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[200px] hover:border-primary/20 transition-all duration-300"
                >
                  <div>
                    <div className="flex text-primary mb-4 gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >star</span>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-6">
                      "{quote}"
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold font-mono flex-shrink-0">
                      {initials}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white">{name}</p>
                      <p className="text-[11px] text-on-surface-variant">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow controls */}
            <button
              onClick={() => testimonials.nudge('left')}
              className="hidden md:flex absolute -left-4 top-[calc(50%-20px)] -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-200"
              aria-label="Scroll left"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-900/90 border border-white/8 backdrop-blur-sm hover:border-primary/40 hover:bg-neutral-800 transition-all duration-200 shadow-lg shadow-black/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-white/70 text-base" style={{ fontVariationSettings: "'wght' 300" }}>arrow_back</span>
              </div>
            </button>
            <button
              onClick={() => testimonials.nudge('right')}
              className="hidden md:flex absolute -right-4 top-[calc(50%-20px)] -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-200"
              aria-label="Scroll right"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-900/90 border border-white/8 backdrop-blur-sm hover:border-primary/40 hover:bg-neutral-800 transition-all duration-200 shadow-lg shadow-black/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-white/70 text-base" style={{ fontVariationSettings: "'wght' 300" }}>arrow_forward</span>
              </div>
            </button>
          </div>

          {/* Dot navigation */}
          <div className="flex items-center justify-center gap-1.5 mt-5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => testimonials.scrollToIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  testimonials.activeIndex === i
                    ? 'w-3.5 sm:w-4 h-1 sm:h-1.5 bg-primary'
                    : 'w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ─── Strategic Partnerships ───────────────────────────────────────── */}
      <section className="py-16 sm:py-section-gap bg-surface-container-low border-b border-white/5" id="clients">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-10 sm:mb-14 reveal-hidden">
            <p className="font-label-caps text-xs text-primary mb-2 tracking-widest uppercase">Network Infrastructure</p>
            <h2 className="text-2xl sm:text-3xl font-display-lg text-white">Strategic Partnerships</h2>
            <div className="mt-3 w-16 h-px bg-primary" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 reveal-hidden">
            {PARTNERS.map(({ name, sub }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center p-5 sm:p-8 border border-white/5 bg-surface-container-highest/20 rounded-xl hover:bg-surface-container-highest/40 hover:border-primary/20 transition-all group"
              >
                <div className="text-base sm:text-xl font-display-lg font-bold text-on-surface-variant group-hover:text-white transition-colors mb-1.5">
                  {name}
                </div>
                <span className="text-[9px] sm:text-[10px] tracking-widest font-data-mono text-on-surface-variant/50">
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-section-gap relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-gutter text-center relative z-10 reveal-hidden">
          <h2 className="text-2xl sm:text-4xl md:text-display-lg font-display-lg text-white mb-4 sm:mb-6 tracking-tight">
            Ready to secure your business?
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the premium operations networks who trust Ngova Security for total field safety
            and elite protection deployments.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link
              className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-bold text-sm sm:text-base text-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/10"
              to="/quote"
            >
              Begin Onboarding
            </Link>
            <Link
              className="border border-white/10 hover:bg-white/5 px-8 py-3.5 rounded-lg text-sm sm:text-base text-center text-white transition-all"
              to="/services"
            >
              View Service Catalog
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-primary/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
      </section>

    </main>
  )
}