import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'

// Setup to read locally from your project's public directory (e.g., public/logos/*)
const clients = [
  {
    id: 'asla-civils',
    name: 'ASLA Civils',
    category: 'CIVIL ENGINEERING',
    description: 'Securing machinery and critical infrastructure development projects across the Western Cape with 24/7 tactical monitoring.',
    logo: '/logos/Asla-Logo.png',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    website: 'https://www.asla.co.za',
    featured: true,
    featured_size: 'md:col-span-8'
  },
  {
    id: 'fairvest',
    name: 'Fairvest Property Holdings',
    category: 'REIT / PROPERTY',
    short_description: 'Property Protection',
    description: 'Comprehensive perimeter security and automated access control for high-traffic retail centers and commercial assets.',
    logo: '/logos/fairvest.png',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop',
    website: 'https://www.fairvest.co.za',
    stat: '42+ Properties',
    stat_label: 'UNDER PROTECTION',
    featured_size: 'md:col-span-4'
  },
  {
    id: 'old-mutual',
    name: 'Old Mutual',
    category: 'FINANCIAL SERVICES',
    short_description: 'Executive Protection',
    description: 'Advanced biometric access structures and tactical corporate defense frameworks across regional headquarters.',
    image: 'https://images.unsplash.com/photo-1554224311-beee415c15c7?w=800&h=600&fit=crop',
    logo: '/logos/old-mutual.jpg',
    website: 'https://www.oldmutual.com',
    tags: ['BIOMETRICS', 'MONITORING'],
    featured_size: 'md:col-span-4',
    carousel: true
  },
  {
    id: 'khayelitsha-community',
    name: 'Khayelitsha Community Trust',
    category: 'COMMUNITY DEVELOPMENTS',
    short_description: 'Community Security',
    description: 'Integrated visible patrols and collaborative precinct safety networks safeguarding civic infrastructure centers.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    logo: '/logos/khayelitsha-community-trust.jpg',
    website: 'https://www.khayelitshatrust.org.za',
    featured_size: 'md:col-span-4',
    carousel: true
  },
  {
    id: 'boxer-stores',
    name: 'Boxer Superstores',
    category: 'RETAIL LOGISTICS',
    short_description: 'Retail Loss Prevention',
    description: 'Asset containment, loss prevention vectors, and fast deployment networks for nationwide supply depots.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
    logo: '/logos/boxer.jpg',
    website: 'https://www.boxerstores.com',
    featured_size: 'md:col-span-4',
    carousel: true
  },
  {
    id: 'broadway-business-center',
    name: 'Broadway Business Center',
    category: 'RETAIL LOGISTICS',
    short_description: 'Retail Loss Prevention',
    description: 'Asset containment, loss prevention vectors, and fast deployment networks for nationwide supply depots.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
    logo: '/logos/Broadway-Business-Centre.jpg',
    website: 'https://www.broadwaybusinesscenter.com',
    featured_size: 'md:col-span-4',
    carousel: true
  }
]

export default function ClientsPage() {
  const containerRef = useRef(null)
  const carouselRef = useRef(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollIntervalRef = useRef(null)
  useRevealAll(containerRef, '.reveal-on-scroll')

  useEffect(() => {
    if (!isAutoScrolling || !carouselRef.current) return

    autoScrollIntervalRef.current = setInterval(() => {
      const carousel = carouselRef.current
      if (!carousel) return
      
      const scrollAmount = 320
      const maxScroll = carousel.scrollWidth - carousel.clientWidth
      // FIX: Dynamically read live scroll positions to keep manual touch interactions in sync
      let newScroll = carousel.scrollLeft + scrollAmount
      
      if (newScroll >= maxScroll - 5) {
        newScroll = 0
      }
      
      carousel.scrollTo({ left: newScroll, behavior: 'smooth' })
    }, 4500)

    return () => clearInterval(autoScrollIntervalRef.current)
  }, [isAutoScrolling])

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return
    
    setIsAutoScrolling(false)
    const scrollAmount = 320
    const newScroll = direction === 'left' 
      ? Math.max(0, carousel.scrollLeft - scrollAmount)
      : Math.min(carousel.scrollWidth - carousel.clientWidth, carousel.scrollLeft + scrollAmount)
      
    carousel.scrollTo({ left: newScroll, behavior: 'smooth' })
  }

  const carouselClients = clients.filter(c => c.carousel)

  return (
    <div ref={containerRef} className="pt-16 sm:pt-24 overflow-x-hidden text-on-background bg-background selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative min-h-[460px] sm:h-[650px] flex items-end pb-12 sm:pb-20 px-gutter max-w-container-max mx-auto overflow-hidden rounded-xl mt-4 sm:mt-8">
        <div className="absolute inset-0 z-0">
          <img alt="Professional Security Fleet and Personnel" className="w-full h-full object-cover opacity-40 sm:opacity-60 saturate-50" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"/>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-3xl w-full">
          <span className="font-label-caps text-xs sm:text-label-caps text-primary tracking-widest uppercase mb-3 sm:mb-4 block">Obsidian Sentinel Protection</span>
          <h1 className="text-3xl sm:text-5xl md:text-display-lg font-display-lg mb-4 sm:mb-6 leading-tight text-white">
            Securing the Icons of <span className="text-primary text-glow">African Industry.</span>
          </h1>
          <p className="text-sm sm:text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
            From industrial engineering sites to high-value retail complexes, we supply the tactical response teams and tracking systems that defend South Africa's enterprise assets.
          </p>
        </div>
      </section>

      {/* Clients Grid - Bento Layout + Carousel */}
      <section className="py-16 sm:py-section-gap px-gutter max-w-container-max mx-auto">
        <div className="mb-10 sm:mb-16 reveal-on-scroll">
          <h2 className="text-2xl sm:text-headline-md font-headline-md mb-3 sm:mb-4 text-white">Strategic Partnerships</h2>
          <div className="w-16 sm:w-24 h-1 bg-primary"></div>
        </div>
        
        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {clients.slice(0, 2).map((client) => {
            if (client.featured) {
              return (
                <div key={client.id} className={`${client.featured_size} glass-card border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden group reveal-on-scroll flex flex-col`}>
                  <div className="h-56 sm:h-72 relative overflow-hidden flex items-center justify-center bg-neutral-900/40">
                    <img alt={client.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-45" src={client.image}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white w-36 h-16 sm:w-44 sm:h-20 p-3 sm:p-4 rounded-xl z-10 flex items-center justify-center shadow-2xl ring-1 ring-white/20">
                      <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain drop-shadow-sm" />
                    </div>
                  </div>
                  <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-label-caps text-[10px] sm:text-xs text-secondary-fixed-dim mb-2 block tracking-wider">{client.category}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{client.name}</h3>
                      <p className="text-sm sm:text-body-md font-body-md text-on-surface-variant mb-6">{client.description}</p>
                    </div>
                    <a href={client.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-bold text-sm gap-2 group/link mt-auto w-fit">
                      Visit Website <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                    </a>
                  </div>
                </div>
              )
            }

            if (client.stat) {
              return (
                <div key={client.id} className={`${client.featured_size} glass-card border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden relative group reveal-on-scroll min-h-[420px] sm:min-h-[auto]`}>
                  <img alt={client.name} className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale group-hover:grayscale-0 transition-all duration-700" src={client.image}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 md:via-background/70 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white w-36 h-16 sm:w-44 sm:h-20 p-3 sm:p-4 rounded-xl z-10 flex items-center justify-center shadow-2xl ring-1 ring-white/20">
                    <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain drop-shadow-sm" />
                  </div>

                  <div className="relative p-5 sm:p-8 h-full flex flex-col justify-end z-10 pt-32">
                    <span className="font-label-caps text-[10px] sm:text-xs text-secondary-fixed-dim mb-1 sm:mb-2 block tracking-wider">{client.category}</span>
                    <h3 className="text-xl sm:text-headline-md font-headline-md text-white mb-2">{client.short_description}</h3>
                    <p className="text-sm sm:text-body-md font-body-md text-on-surface-variant mb-5 sm:mb-6">{client.description}</p>
                    
                    <div className="flex items-center gap-3 py-4 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">domain</span>
                      </div>
                      <div>
                        <div className="font-data-mono text-sm sm:text-base text-white font-bold">{client.stat}</div>
                        <div className="font-label-caps text-[9px] sm:text-[10px] text-on-surface-variant tracking-wider">{client.stat_label}</div>
                      </div>
                    </div>
                    <a href={client.website} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center text-primary font-bold text-xs sm:text-sm gap-2 group/link w-fit">
                      Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                    </a>
                  </div>
                </div>
              )
            }

            return null
          })}
        </div>

        {/* Carousel Section - Extended Enterprise Roster */}
        {carouselClients.length > 0 && (
          <div className="relative group">
            <div className="mb-6 sm:mb-8 reveal-on-scroll">
              <h3 className="text-base sm:text-body-lg font-body-lg text-on-surface-variant tracking-wide">Enterprise Roster</h3>
            </div>
            
            <div
              ref={carouselRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory hide-scrollbar animate-fade-in"
            >
              {carouselClients.map((client) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 w-[290px] sm:w-80 lg:w-92 snap-start reveal-on-scroll"
                >
                  <a href={client.website} target="_blank" rel="noopener noreferrer" className="group/card block">
                    <div className="relative h-[400px] sm:h-[440px] rounded-xl overflow-hidden glass-card border border-white/5 bg-neutral-900/40 cursor-pointer flex flex-col justify-between p-6">
                      
                      <div className="h-20 sm:h-24 w-full flex items-center justify-center bg-white rounded-xl p-4 z-10 transition-all duration-300 group-hover/card:shadow-[0_0_24px_rgba(255,255,255,0.15)] group-hover/card:scale-[1.02] shadow-md">
                        {client.logo && (
                          <img 
                            src={client.logo} 
                            alt={`${client.name} logo`} 
                            className="max-w-full max-h-full object-contain group-hover/card:scale-105 transition-transform duration-300" 
                          />
                        )}
                      </div>

                      {/* Textures and Backdrops */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/70 to-background z-0"></div>
                      <img src={client.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none group-hover/card:scale-105 transition-transform duration-700" />
                      
                      {/* Client Copy Details */}
                      <div className="z-10 pt-6">
                        <span className="font-label-caps text-[9px] sm:text-[10px] text-secondary-fixed-dim mb-1 block tracking-widest">{client.category}</span>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{client.name}</h4>
                        <p className="text-xs sm:text-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">{client.description}</p>
                        <div className="flex items-center text-primary font-bold text-xs sm:text-sm gap-1.5 group-hover/card:gap-3 transition-all">
                          Secure Link <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Carousel Arrow Controls */}
            <button
              onClick={() => scrollCarousel('left')}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Scroll left"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group/btn">
                <span className="material-symbols-outlined text-white text-lg group-hover/btn:text-neutral-950">chevron_left</span>
              </div>
            </button>

            <button
              onClick={() => scrollCarousel('right')}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Scroll right"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group/btn">
                <span className="material-symbols-outlined text-white text-lg group-hover/btn:text-neutral-950">chevron_right</span>
              </div>
            </button>
          </div>
        )}
      </section>

      {/* Testimonial Section */}
      <section className="bg-surface-container-lowest py-16 sm:py-section-gap relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="relative reveal-on-scroll order-2 md:order-1">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 glass-card p-1 rounded-xl max-w-md mx-auto md:max-w-none">
              <img alt="Senior Operations Director" className="rounded-lg w-full grayscale contrast-125 aspect-[4/3] md:aspect-auto object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"/>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-card p-4 sm:p-5 rounded-lg border border-primary/20 bg-neutral-950">
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            </div>
          </div>
          <div className="reveal-on-scroll order-1 md:order-2">
            <span className="font-label-caps text-xs sm:text-label-caps text-primary tracking-widest uppercase mb-3 block">Executive Perspective</span>
            <blockquote className="text-xl sm:text-2xl md:text-headline-md font-display-lg italic mb-6 sm:mb-8 text-on-surface leading-relaxed text-white">
              "Ngova Security doesn't just provide guards; they deploy managed clarity. Their alignment of regional tactical systems and automated biometric access is exactly what our network required."
            </blockquote>
            <div>
              <div className="text-base sm:text-body-lg font-bold text-white">Jameson K. Mbeki</div>
              <div className="text-xs sm:text-body-md text-on-surface-variant">Director of Asset Operations, Fairvest REIT</div>
            </div>
            <div className="mt-8 sm:mt-12 flex gap-8 sm:gap-12 border-t border-white/5 pt-6">
              <div>
                <div className="text-3xl sm:text-display-lg font-display-lg text-primary font-bold">99%</div>
                <div className="font-label-caps text-[9px] sm:text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl sm:text-display-lg font-display-lg text-primary font-bold">12m</div>
                <div className="font-label-caps text-[9px] sm:text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Response Speed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-section-gap px-gutter text-center max-w-4xl mx-auto reveal-on-scroll">
        <h2 className="text-2xl sm:text-4xl md:text-display-lg font-display-lg mb-4 sm:mb-6 text-white">Ready to fortify your assets?</h2>
        <p className="text-sm sm:text-body-lg font-body-lg text-on-surface-variant mb-8 sm:mb-10 max-w-2xl mx-auto">
          Join our network of protected infrastructure setups. Let us design a custom protection plan configured directly to your operating environment profile.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
          <Link className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-body-md font-bold text-sm text-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/10" to="/quote">
            Consult with an Expert
          </Link>
          {/* FIXED: Catalog link now properly routes via Link to /services */}
          <Link className="border border-white/10 hover:bg-white/5 px-8 py-3.5 rounded-lg font-body-md text-sm text-center text-white transition-all flex items-center justify-center" to="/services">
            View Service Catalog
          </Link>
        </div>
      </section>
    </div>
  )
}