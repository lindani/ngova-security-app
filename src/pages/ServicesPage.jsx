import { useEffect, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'

export default function ServicesPage() {
  const containerRef = useRef(null)
  const location = useLocation()

  // Initialize unified scroll reveal hook
  useRevealAll(containerRef, '.reveal-on-scroll')

  // Smooth-scroll targeting logic for React Router hashes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    }
  }, [location])

  return (
    <div ref={containerRef} className="bg-background text-on-background font-body-md overflow-x-hidden pt-16 sm:pt-24 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] sm:min-h-[650px] sm:h-[650px] flex items-end pb-12 sm:pb-20 px-gutter max-w-container-max mx-auto overflow-hidden rounded-xl mt-0 sm:mt-8">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Elite Tactical Protection Operations" 
            className="w-full h-full object-cover opacity-40 sm:opacity-60 saturate-50" 
            src="https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&h=900&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl w-full">
          <div className="flex items-center space-x-2 mb-3 sm:mb-4 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-label-caps text-xs sm:text-label-caps text-primary tracking-widest uppercase">Elite Protection Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-display-lg font-display-lg mb-4 sm:mb-6 leading-tight text-white reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            Precision Security for <span className="text-primary text-glow">Absolute Risk Mitigation.</span>
          </h1>
          <p className="text-sm sm:text-body-lg font-body-lg text-on-surface-variant max-w-2xl reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            Specialized tactical operations and defensive frameworks engineered to safeguard industrial sectors, high-value corporate complexes, and critical infrastructure.
          </p>
        </div>
      </section>

      {/* Core Competencies (Bento Grid Area) */}
      <main className="px-gutter max-w-container-max mx-auto pb-section-gap pt-16 sm:pt-24" id="services">
        <div className="mb-12 sm:mb-16 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
          <h2 className="text-3xl sm:text-headline-md font-display-lg text-white mb-4">Core Competencies</h2>
          <div className="w-16 sm:w-24 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Service 1: Physical Guarding */}
          <div id="physical-guarding" className="md:col-span-8 group relative overflow-hidden rounded-xl border border-border-subtle card-hover reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <img alt="Physical Guarding Team" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 card-img brightness-[0.6] sm:brightness-[0.7] saturate-50" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop"/>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(12, 19, 34, 0.2) 20%, rgba(12, 19, 34, 0.95) 100%)' }}></div>
            <div className="relative h-[450px] sm:h-[500px] flex flex-col justify-end p-6 sm:p-10 md:p-12">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full text-base sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                <span className="font-label-caps text-xs sm:text-label-caps text-primary-fixed tracking-wider">01 / TACTICAL OPERATIONS</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-display-lg mb-3 sm:mb-4 text-white">Physical Guarding</h3>
              <p className="text-sm sm:text-body-md font-body-md text-on-surface-variant max-w-lg mb-6 sm:mb-8">
                Strict entry vetting, visible site deterrence, and regular dynamic patrolling across enterprise zones.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <span className="px-2.5 py-1 bg-surface-container-highest/80 border border-border-subtle rounded-full text-[10px] sm:text-xs font-label-caps text-white">UNIFORMED UNITS</span>
                <span className="px-2.5 py-1 bg-surface-container-highest/80 border border-border-subtle rounded-full text-[10px] sm:text-xs font-label-caps text-white">ACCESS CONTROL</span>
                <span className="px-2.5 py-1 bg-surface-container-highest/80 border border-border-subtle rounded-full text-[10px] sm:text-xs font-label-caps text-white">INCIDENT RESPONSE</span>
              </div>
            </div>
          </div>
          
          {/* Service 2: Risk Assessment */}
          <div id="risk-assessment" className="md:col-span-4 glass-card p-6 sm:p-10 rounded-xl flex flex-col justify-center border border-border-subtle hover:border-primary/50 transition-colors reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center mb-6 sm:mb-8 border border-white/5">
              <span className="material-symbols-outlined text-primary">analytics</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-headline-md font-headline-md text-white mb-2 sm:mb-4">Risk Assessment</h3>
              <p className="text-on-surface-variant text-sm sm:text-body-md">Advanced threat modeling and comprehensive site vulnerability calculations to minimize active infrastructure gaps.</p>
            </div>
          </div>
          
          {/* Service 3: Access Control */}
          <div id="access-control" className="md:col-span-4 group relative overflow-hidden rounded-xl border border-border-subtle card-hover reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <img alt="Biometric access control system interface" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 card-img brightness-50 sm:brightness-75" src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            <div className="relative h-[400px] sm:h-[500px] flex flex-col justify-end p-6 sm:p-10 md:p-12">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <span className="material-symbols-outlined text-secondary bg-secondary/10 p-2 rounded-full text-base sm:text-xl">fingerprint</span>
                <span className="font-label-caps text-xs sm:text-label-caps text-secondary-fixed tracking-wider">02 / SMART SYSTEMS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-headline-md mb-3 sm:mb-4 text-white">Access Control</h3>
              <p className="text-sm sm:text-body-md font-body-md text-on-surface-variant mb-6">
                Biometric verification checkpoints integrated with perimeter tracking arrays for total entrance governance.
              </p>
              <Link to="/services" className="w-full py-3 border border-border-subtle hover:bg-white/5 text-white transition-colors font-label-caps text-xs tracking-widest uppercase text-center block rounded-sm">View Technologies</Link>
            </div>
          </div>
          
          {/* Service 4: Monitoring Center */}
          <div id="monitoring" className="md:col-span-8 group relative overflow-hidden rounded-xl border border-border-subtle card-hover reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <img alt="Monitoring Center" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 card-img brightness-75 saturate-[0.8]" src="https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop"/>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(12, 19, 34, 0) 40%, rgba(12, 19, 34, 0.95) 100%)' }}></div>
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                <h3 className="text-xl sm:text-headline-md font-display-lg text-white">24/7 Monitoring</h3>
              </div>
              <p className="text-on-surface-variant max-w-md text-sm sm:text-body-md">Continuous surveillance arrays backed by real-time dispatch operations to intercept anomalies immediately.</p>
            </div>
          </div>
          
          {/* Service 5: Tactical Fleet */}
          <div id="tactical-deployment" className="md:col-span-12 group relative overflow-hidden rounded-xl border border-border-subtle card-hover reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <img alt="Security Fleet and Personnel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 card-img brightness-[0.5] sm:brightness-[0.6] saturate-50" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"/>
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/80 md:via-background/60 to-transparent"></div>
            <div className="relative min-h-[400px] md:min-h-[450px] flex items-center p-6 sm:p-10 md:p-12">
              <div className="max-w-xl w-full">
                <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                  <span className="material-symbols-outlined text-tertiary bg-tertiary/10 p-2 rounded-full text-base sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_police</span>
                  <span className="font-label-caps text-xs sm:text-label-caps text-tertiary tracking-wider">03 / INTELLIGENCE</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-display-lg mb-3 sm:mb-4 text-white">Tactical Deployment</h3>
                <p className="text-sm sm:text-body-md font-body-md text-on-surface-variant mb-6 sm:mb-8">
                  Highly responsive specialized patrol units and mobile fleets capable of executing deployment escalation protocols instantly.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  <div className="border-l-2 border-primary pl-3 sm:pl-4">
                    <p className="font-data-mono text-sm sm:text-data-mono text-primary font-bold uppercase">Proactive</p>
                    <p className="font-label-caps text-[9px] sm:text-[10px] text-on-surface-variant tracking-wider">THREAT DETECTION</p>
                  </div>
                  <div className="border-l-2 border-security-emerald pl-3 sm:pl-4">
                    <p className="font-data-mono text-sm sm:text-data-mono text-security-emerald font-bold uppercase">Dynamic</p>
                    <p className="font-label-caps text-[9px] sm:text-[10px] text-on-surface-variant tracking-wider">SECURITY POSTURE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Data Visualization Dashboard Section */}
      <section className="py-16 sm:py-section-gap px-gutter bg-surface-container-lowest overflow-hidden relative rounded-xl mx-auto max-w-container-max mb-8 sm:mb-16">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-24 items-center">
            
            <div className="reveal-on-scroll">
              <h2 className="text-2xl sm:text-3xl md:text-display-lg font-display-lg mb-8 sm:mb-12 text-white">The Fortress Framework</h2>
              <ul className="space-y-6 sm:space-y-10">
                <li className="flex items-start gap-4 sm:gap-6 group">
                  <span className="font-data-mono text-xl sm:text-headline-md text-primary opacity-20 group-hover:opacity-100 transition-opacity">01</span>
                  <div>
                    <h3 className="text-base sm:text-body-lg font-bold text-white mb-1 sm:mb-2">Perimeter Hardening</h3>
                    <p className="text-on-surface-variant text-sm sm:text-body-md">Physical barricades combined with high-tier technological systems for verified multi-layer zone protection.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 sm:gap-6 group">
                  <span className="font-data-mono text-xl sm:text-headline-md text-primary opacity-20 group-hover:opacity-100 transition-opacity">02</span>
                  <div>
                    <h3 className="text-base sm:text-body-lg font-bold text-white mb-1 sm:mb-2">Smart Monitoring</h3>
                    <p className="text-on-surface-variant text-sm sm:text-body-md">Real-time centralized asset surveillance ensuring swift automated handling of operational layout logs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 sm:gap-6 group">
                  <span className="font-data-mono text-xl sm:text-headline-md text-primary opacity-20 group-hover:opacity-100 transition-opacity">03</span>
                  <div>
                    <h3 className="text-base sm:text-body-lg font-bold text-white mb-1 sm:mb-2">Tactical Deployment</h3>
                    <p className="text-on-surface-variant text-sm sm:text-body-md">Rapid localized response assets equipped to execute tactical emergency countermeasures instantly.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Visual Dashboard Card */}
            <div className="glass-panel p-6 sm:p-10 rounded-2xl relative reveal-on-scroll border border-white/5 bg-white/[0.02]" style={{ transitionDelay: '0.3s' }}>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex justify-between items-center mb-8 sm:mb-12">
                <span className="font-label-caps text-xs sm:text-label-caps text-on-surface-variant tracking-wider">OPERATIONAL STATUS</span>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-security-emerald rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-security-emerald/30 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-security-emerald/30 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="h-12 sm:h-14 bg-white/5 rounded border border-white/5 w-full relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-primary/20 w-[94%]"></div>
                  <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-5">
                    <span className="font-data-mono text-[10px] sm:text-xs tracking-wider text-white">SYSTEM INTEGRITY</span>
                    <span className="font-data-mono text-[10px] sm:text-xs text-primary font-bold">OPTIMAL</span>
                  </div>
                </div>
                <div className="h-12 sm:h-14 bg-white/5 rounded border border-white/5 w-full relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-secondary/20 w-[87%]"></div>
                  <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-5">
                    <span className="font-data-mono text-[10px] sm:text-xs tracking-wider text-white">GUARD UPTIME</span>
                    <span className="font-data-mono text-[10px] sm:text-xs text-secondary font-bold">100%</span>
                  </div>
                </div>
                <div className="h-12 sm:h-14 bg-white/5 rounded border border-white/5 w-full relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-tertiary/20 w-[92%]"></div>
                  <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-5">
                    <span className="font-data-mono text-[10px] sm:text-xs tracking-wider text-white">RESPONSE SPEED</span>
                    <span className="font-data-mono text-[10px] sm:text-xs text-tertiary font-bold">MAXIMUM</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-border-subtle flex justify-between items-center">
                <span className="font-data-mono text-[9px] sm:text-[10px] text-on-surface-variant/70 tracking-widest uppercase">Secure_Access_V4.1</span>
                <span className="font-data-mono text-[9px] sm:text-[10px] text-security-emerald font-bold tracking-widest">LIVE_FEED</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}