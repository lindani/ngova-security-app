import { useState } from 'react'

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleTransition = (nextStep) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsTransitioning(false)
      setCurrentStep(nextStep)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 800)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        alert('Transmission Success. Initializing secure feedback loop...')
      }, 500)
    }, 1500)
  }

  return (
    <div className="pt-20 pb-12 lg:pt-32 lg:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative min-h-screen">
      {/* Ambient Atmospheric Decor */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none overflow-hidden">
        <img alt="Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600"/>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
        {/* Left Sidebar: Progress & Context */}
        <aside className="lg:col-span-4 space-y-8 lg:space-y-12 lg:sticky lg:top-32 h-fit">
          <div className="text-center lg:text-left">
            <span className="font-label-caps text-xs text-primary mb-2 lg:mb-4 block tracking-widest">TRANSACTION PORTAL</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight font-bold">
              Secure Your <br className="hidden lg:block"/>
              <span className="text-primary text-glow">Enterprise</span>
            </h1>
            <p className="font-body-lg text-sm sm:text-base text-on-surface-variant max-w-md mx-auto lg:mx-0">
              Initialize a comprehensive threat assessment and guarding protocol. Our specialists respond within 2 hours.
            </p>
          </div>

          {/* Responsive Progress Tracker: Horizontal on mobile, Vertical on Desktop */}
          <div className="flex flex-row lg:flex-col justify-between lg:justify-start lg:space-y-8 relative items-center lg:items-start border-y border-subtle/30 py-4 lg:py-0 lg:border-none">
            {/* Desktop Connective Line */}
            <div className="absolute left-[15px] top-6 bottom-6 w-px bg-border-subtle hidden lg:block"></div>
            
            {/* Step 1 */}
            <div className={`flex flex-col lg:flex-row items-center gap-2 lg:gap-6 group relative transition-all flex-1 lg:flex-initial ${currentStep < 1 ? 'opacity-40' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ring-4 ring-background text-xs lg:text-sm ${
                currentStep > 1 
                  ? 'bg-security-emerald text-fortress-black' 
                  : currentStep === 1 
                    ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(255,179,172,0.4)]'
                    : 'bg-surface-container-highest text-on-surface-variant border border-subtle'
              }`}>
                <span className="material-symbols-outlined text-sm">{currentStep > 1 ? 'check' : 'person'}</span>
              </div>
              <div className="text-center lg:text-left">
                <span className={`font-label-caps text-[9px] lg:text-[10px] tracking-widest block ${currentStep > 1 ? 'text-security-emerald' : currentStep === 1 ? 'text-primary' : 'text-on-surface-variant'}`}>STEP 01</span>
                <p className={`text-xs lg:text-base font-bold hidden sm:block ${currentStep >= 1 ? 'text-on-surface' : 'text-on-surface-variant'}`}>Details</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`flex flex-col lg:flex-row items-center gap-2 lg:gap-6 group relative transition-all flex-1 lg:flex-initial ${currentStep < 2 ? 'opacity-40' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ring-4 ring-background text-xs lg:text-sm ${
                currentStep > 2 
                  ? 'bg-security-emerald text-fortress-black' 
                  : currentStep === 2 
                    ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(255,179,172,0.4)]'
                    : 'bg-surface-container-highest text-on-surface-variant border border-subtle'
              }`}>
                <span className="material-symbols-outlined text-sm">{currentStep > 2 ? 'check' : 'visibility'}</span>
              </div>
              <div className="text-center lg:text-left">
                <span className={`font-label-caps text-[9px] lg:text-[10px] tracking-widest block ${currentStep > 2 ? 'text-security-emerald' : currentStep === 2 ? 'text-primary' : 'text-on-surface-variant'}`}>STEP 02</span>
                <p className={`text-xs lg:text-base font-bold hidden sm:block ${currentStep >= 2 ? 'text-on-surface' : 'text-on-surface-variant'}`}>Scope</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`flex flex-col lg:flex-row items-center gap-2 lg:gap-6 group relative transition-all flex-1 lg:flex-initial ${currentStep < 3 ? 'opacity-40' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ring-4 ring-background text-xs lg:text-sm ${
                currentStep > 3 
                  ? 'bg-security-emerald text-fortress-black' 
                  : currentStep === 3 
                    ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(255,179,172,0.4)]'
                    : 'bg-surface-container-highest text-on-surface-variant border border-subtle'
              }`}>
                <span className="material-symbols-outlined text-sm">{currentStep > 3 ? 'check' : 'verified_user'}</span>
              </div>
              <div className="text-center lg:text-left">
                <span className={`font-label-caps text-[9px] lg:text-[10px] tracking-widest block ${currentStep > 3 ? 'text-security-emerald' : currentStep === 3 ? 'text-primary' : 'text-on-surface-variant'}`}>STEP 03</span>
                <p className={`text-xs lg:text-base font-bold hidden sm:block ${currentStep >= 3 ? 'text-on-surface' : 'text-on-surface-variant'}`}>Review</p>
              </div>
            </div>
          </div>

          {/* Security Assurance Card */}
          <div className="p-5 lg:p-6 border border-subtle rounded-xl bg-surface-container-low/40 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-2 lg:mb-4">
              <span className="material-symbols-outlined text-security-emerald" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              <span className="font-label-caps text-xs text-security-emerald tracking-widest">END-TO-END ENCRYPTED</span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Your operational data is stored on air-gapped servers and handled exclusively by vetted personnel.
            </p>
          </div>
        </aside>

        {/* Right Content: Form Engine */}
        <div className="lg:col-span-8">
          <form className="space-y-8" onSubmit={currentStep === 3 ? handleSubmit : undefined}>
            
            {/* Section 01: Client Details */}
            {currentStep === 1 && (
              <section className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="p-5 sm:p-8 lg:p-10 border border-subtle rounded-2xl glass-panel-quote relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8">Identification & Contact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] sm:text-xs tracking-widest text-on-surface-variant block">FULL NAME</label>
                      <input className="w-full border border-subtle px-4 py-3 sm:px-5 sm:py-4 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm sm:text-base" placeholder="Johnathan Vane" required type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] sm:text-xs tracking-widest text-on-surface-variant block">ORGANIZATION</label>
                      <input className="w-full border border-subtle px-4 py-3 sm:px-5 sm:py-4 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm sm:text-base" placeholder="Nexus Dynamics Corp." required type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] sm:text-xs tracking-widest text-on-surface-variant block">CONTACT EMAIL</label>
                      <input className="w-full border border-subtle px-4 py-3 sm:px-5 sm:py-4 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm sm:text-base" placeholder="vane@nexus-dynamics.com" required type="email"/>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] sm:text-xs tracking-widest text-on-surface-variant block">PHONE SECURE LINE</label>
                      <input className="w-full border border-subtle px-4 py-3 sm:px-5 sm:py-4 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm sm:text-base" placeholder="+1 (555) 000-8888" required type="tel"/>
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row gap-4 justify-end">
                    <button 
                      className={`flex items-center justify-center gap-3 bg-primary text-on-primary px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 w-full sm:w-auto text-sm sm:text-base ${isTransitioning ? 'btn-loading' : 'hover:scale-[1.02] active:scale-[0.98]'}`} 
                      onClick={() => handleTransition(2)} 
                      type="button"
                    >
                      {isTransitioning ? (
                        <>
                          <span>Processing...</span>
                          <span className="material-symbols-outlined text-sm sm:text-base">sync</span>
                        </>
                      ) : (
                        <>
                          <span>Continue to Scope</span>
                          <span className="material-symbols-outlined text-sm sm:text-base">arrow_forward</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* Section 02: Operational Scope */}
            {currentStep === 2 && (
              <section className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="p-5 sm:p-8 lg:p-10 border border-subtle rounded-2xl glass-panel-quote relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8">Deployment & Asset Parameters</h2>
                  <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] sm:text-xs tracking-widest text-on-surface-variant block">SERVICE CATEGORY</label>
                      <div className="relative">
                        <select className="w-full border border-subtle px-4 py-3 sm:px-5 sm:py-4 text-on-surface rounded-lg focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-all cursor-pointer bg-surface-container-low/80 text-sm sm:text-base">
                          <option>Physical Static Guarding</option>
                          <option>Executive Protection (Close Guarding)</option>
                          <option>Electronic Surveillance (CCTV/Biometric)</option>
                          <option>Risk Assessment & Threat Intel</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                          <span className="material-symbols-outlined">expand_more</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] sm:text-xs tracking-widest text-on-surface-variant block">PRIMARY LOCATION</label>
                      <input className="w-full border border-subtle px-4 py-3 sm:px-5 sm:py-4 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm sm:text-base" placeholder="Global HQ / Regional Center Address" required type="text"/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                      <div className="space-y-2">
                        <label className="font-label-caps text-[10px] sm:text-xs tracking-widest text-on-surface-variant block">DEPLOYMENT DURATION</label>
                        <div className="flex items-center gap-4">
                          <input className="w-full border border-subtle px-4 py-3 sm:px-5 sm:py-4 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary text-sm sm:text-base" type="number" defaultValue="12"/>
                          <span className="text-on-surface-variant font-medium text-sm sm:text-base">Months</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-caps text-[10px] sm:text-xs tracking-widest text-on-surface-variant block">ESTIMATED ASSET VALUE</label>
                        <input className="w-full border border-subtle px-4 py-3 sm:px-5 sm:py-4 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm sm:text-base" placeholder="$10M - $50M" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-subtle flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                    <button className="font-medium text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base py-2" onClick={() => setCurrentStep(1)} type="button">
                      <span className="material-symbols-outlined text-sm">arrow_back</span> Previous Step
                    </button>
                    <button 
                      className={`flex items-center justify-center gap-3 bg-primary text-on-primary px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 w-full sm:w-auto text-sm sm:text-base ${isTransitioning ? 'btn-loading' : 'hover:scale-[1.02] active:scale-[0.98]'}`} 
                      onClick={() => handleTransition(3)} 
                      type="button"
                    >
                      {isTransitioning ? (
                        <>
                          <span>Processing...</span>
                          <span className="material-symbols-outlined text-sm sm:text-base">sync</span>
                        </>
                      ) : (
                        <>
                          <span>Finalize Assessment</span>
                          <span className="material-symbols-outlined text-sm sm:text-base">shield</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* Section 03: Review & Submit */}
            {currentStep === 3 && (
              <section className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="p-5 sm:p-8 lg:p-12 border border-subtle rounded-2xl glass-panel-quote text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_50%)]"></div>
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-security-emerald/10 text-security-emerald rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 ring-1 ring-security-emerald/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <span className="material-symbols-outlined text-3xl sm:text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 relative z-10">Request Verified & Ready</h2>
                  <p className="text-xs sm:text-sm md:text-base text-on-surface-variant mb-8 lg:mb-12 max-w-md mx-auto relative z-10">
                    All protocol parameters have been verified. Click below to transmit your quote request to our Command Center.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8 lg:mb-12 border-y border-subtle py-6 lg:py-8 relative z-10">
                    <div className="p-4 sm:p-5 bg-surface-container-low/50 rounded-xl border border-subtle/50">
                      <span className="font-label-caps text-[9px] sm:text-[10px] tracking-widest text-on-surface-variant block mb-1 sm:mb-2">SERVICE ID</span>
                      <p className="text-sm sm:text-base text-primary font-bold tracking-wider">SEC-REQ-9921</p>
                    </div>
                    <div className="p-4 sm:p-5 bg-surface-container-low/50 rounded-xl border border-subtle/50">
                      <span className="font-label-caps text-[9px] sm:text-[10px] tracking-widest text-on-surface-variant block mb-1 sm:mb-2">PRIORITY</span>
                      <p className="text-sm sm:text-base text-security-emerald font-bold tracking-wider">HIGH / CRITICAL</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4 sm:gap-6 relative z-10">
                    <button 
                      className={`w-full py-4 sm:py-5 rounded-lg text-base sm:text-lg font-bold transition-all flex items-center justify-center gap-3 ${
                        isSubmitting ? 'btn-loading bg-primary text-on-primary' : 
                        isSuccess ? 'bg-security-emerald text-fortress-black shadow-xl shadow-security-emerald/20' : 
                        'bg-primary text-on-primary hover:brightness-110 active:scale-[0.98] shadow-xl shadow-primary/20'
                      }`} 
                      type="submit"
                    >
                      {isSubmitting ? (
                        <>
                          <span>TRANSMITTING...</span>
                          <span className="material-symbols-outlined text-base sm:text-lg">sync</span>
                        </>
                      ) : isSuccess ? (
                        <>
                          <span className="material-symbols-outlined text-base sm:text-lg">check_circle</span>
                          <span>REQUEST SECURED</span>
                        </>
                      ) : (
                        <>
                          <span>EXECUTE REQUEST</span>
                          <span className="material-symbols-outlined text-base sm:text-lg">send</span>
                        </>
                      )}
                    </button>
                    {!isSuccess && (
                      <button className="font-medium text-sm sm:text-base text-on-surface-variant hover:text-primary transition-colors inline-block mx-auto py-2" onClick={() => setCurrentStep(2)} type="button">
                        Edit Parameters
                      </button>
                    )}
                  </div>
                </div>
              </section>
            )}

          </form>
        </div>
      </div>
    </div>
  )
}