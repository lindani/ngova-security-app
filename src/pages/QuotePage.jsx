import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function QuotePage() {
  const location = useLocation()
  
  const [formMode, setFormMode] = useState('quote') 
  const [currentStep, setCurrentStep] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Step 1: Client Information Controlled State
  const [clientName, setClientName] = useState('')
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // Step 2: Operational Scope Controlled State
  const [serviceCategory, setServiceCategory] = useState('Physical Static Guarding')
  const [primaryLocation, setPrimaryLocation] = useState('')
  const [duration, setDuration] = useState('12')
  const [assetValue, setAssetValue] = useState('')

  // Direct Contact Mode Controlled State
  const [contactSubject, setContactSubject] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  useEffect(() => {
    const requestedMode = location.state?.mode
    if (requestedMode === 'quote' || requestedMode === 'contact') {
      handleModeChange(requestedMode)
    }
  }, [location.state])

  const handleModeChange = (mode) => {
    setFormMode(mode)
    setCurrentStep(1)
    setIsSuccess(false)
    setIsSubmitting(false)
  }

  const handleTransition = (nextStep) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep(nextStep)
      window.scrollTo({ top: 0, behavior: 'auto' })
      setIsTransitioning(false)
    }, 300)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <div className="pt-20 pb-12 lg:pt-32 lg:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative min-h-screen">
      {/* Ambient Atmospheric Decor */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none overflow-hidden">
        <img alt="Background Visual" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600"/>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
        {/* Left Sidebar: Progress & Context */}
        <aside className="lg:col-span-4 space-y-6 lg:space-y-8 lg:sticky lg:top-32 h-fit">
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-caps text-xs text-primary uppercase tracking-widest font-semibold">
                {formMode === 'quote' ? 'Consultation Portal' : 'Communications Center'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-3 lg:mb-4 leading-tight font-bold">
              {formMode === 'quote' ? (
                <>
                  Secure Your <br className="hidden lg:block"/>
                  <span className="text-primary text-glow">Enterprise</span>
                </>
              ) : (
                <>
                  Connect With <br className="hidden lg:block"/>
                  <span className="text-primary text-glow">Consultants</span>
                </>
              )}
            </h1>
            <p className="font-body-lg text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto lg:mx-0 leading-relaxed">
              {formMode === 'quote' 
                ? 'Initialize your corporate risk assessment brief. Our active monitoring teams respond within 2 hours.'
                : 'Submit operational requests, cross-border project specifications, or corporate inquiries.'}
            </p>
          </div>

          {/* Conditional Progress Tracker Refactored for Horizontal Mobile Swiping */}
          {formMode === 'quote' ? (
            <div className="w-full border-y border-subtle/30 py-4 lg:py-0 lg:border-none">
              <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible scrollbar-none snap-x relative items-center lg:items-start px-2 lg:px-0">
                <div className="absolute left-[15px] top-6 bottom-6 w-px bg-border-subtle hidden lg:block"></div>
                
                {/* Step 1 Indicator */}
                <div className={`flex flex-row lg:flex-row items-center gap-3 group relative transition-all snap-center shrink-0 min-w-[140px] sm:min-w-[180px] lg:min-w-0 ${currentStep < 1 ? 'opacity-40' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ring-4 ring-background text-xs shrink-0 ${
                    currentStep > 1 
                      ? 'bg-security-emerald text-fortress-black' 
                      : currentStep === 1 
                        ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(255,179,172,0.4)]'
                        : 'bg-surface-container-highest text-on-surface-variant border border-subtle'
                  }`}>
                    <span className="material-symbols-outlined text-sm">{currentStep > 1 ? 'check' : 'person'}</span>
                  </div>
                  <div className="text-left">
                    <span className={`font-label-caps text-[9px] tracking-widest block ${currentStep > 1 ? 'text-security-emerald' : currentStep === 1 ? 'text-primary' : 'text-on-surface-variant'}`}>STEP 01</span>
                    <p className={`text-xs font-bold ${currentStep >= 1 ? 'text-on-surface' : 'text-on-surface-variant'}`}>Corporate Details</p>
                  </div>
                </div>

                {/* Step 2 Indicator */}
                <div className={`flex flex-row lg:flex-row items-center gap-3 group relative transition-all snap-center shrink-0 min-w-[140px] sm:min-w-[180px] lg:min-w-0 ${currentStep < 2 ? 'opacity-40' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ring-4 ring-background text-xs shrink-0 ${
                    currentStep > 2 
                      ? 'bg-security-emerald text-fortress-black' 
                      : currentStep === 2 
                        ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(255,179,172,0.4)]'
                        : 'bg-surface-container-highest text-on-surface-variant border border-subtle'
                  }`}>
                    <span className="material-symbols-outlined text-sm">{currentStep > 2 ? 'check' : 'visibility'}</span>
                  </div>
                  <div className="text-left">
                    <span className={`font-label-caps text-[9px] tracking-widest block ${currentStep > 2 ? 'text-security-emerald' : currentStep === 2 ? 'text-primary' : 'text-on-surface-variant'}`}>STEP 02</span>
                    <p className={`text-xs font-bold ${currentStep >= 2 ? 'text-on-surface' : 'text-on-surface-variant'}`}>Operational Scope</p>
                  </div>
                </div>

                {/* Step 3 Indicator */}
                <div className={`flex flex-row lg:flex-row items-center gap-3 group relative transition-all snap-center shrink-0 min-w-[140px] sm:min-w-[180px] lg:min-w-0 ${currentStep < 3 && !isSuccess ? 'opacity-40' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ring-4 ring-background text-xs shrink-0 ${
                    isSuccess
                      ? 'bg-security-emerald text-fortress-black shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                      : currentStep === 3 
                        ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(255,179,172,0.4)]'
                        : 'bg-surface-container-highest text-on-surface-variant border border-subtle'
                  }`}>
                    <span className="material-symbols-outlined text-sm">{isSuccess ? 'check' : 'verified_user'}</span>
                  </div>
                  <div className="text-left">
                    <span className={`font-label-caps text-[9px] tracking-widest block ${isSuccess ? 'text-security-emerald' : currentStep === 3 ? 'text-primary' : 'text-on-surface-variant'}`}>STEP 03</span>
                    <p className={`text-xs font-bold ${currentStep >= 3 || isSuccess ? 'text-on-surface' : 'text-on-surface-variant'}`}>Review & Confirm</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 border border-primary/20 rounded-xl bg-primary/5 backdrop-blur-sm animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="material-symbols-outlined text-primary text-sm">support_agent</span>
                <span className="font-label-caps text-[11px] text-primary tracking-widest">DIRECT ENQUIRY</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Skip configuration. Submit your intent parameters directly to our corporate office.
              </p>
            </div>
          )}

          {/* Confidentiality & Assurance Card */}
          <div className="p-4 border border-subtle rounded-xl bg-surface-container-low/40 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-security-emerald text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              <span className="font-label-caps text-[11px] text-security-emerald tracking-widest">DATA CONFIDENTIALITY</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Your organizational metadata and asset parameters are fully encrypted and processed strictly by cleared tactical personnel.
            </p>
          </div>
        </aside>

        {/* Right Content: Form Engine */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Switcher Header */}
          <div className="flex w-full max-w-sm mx-auto lg:mx-0 p-1 bg-surface-container-high/60 border border-subtle/50 rounded-xl backdrop-blur-sm">
            <button
              type="button"
              onClick={() => handleModeChange('quote')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold tracking-wider font-label-caps transition-all ${
                formMode === 'quote' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-base">request_quote</span>
              Quote
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('contact')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold tracking-wider font-label-caps transition-all ${
                formMode === 'contact' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-base">mail</span>
              Contact
            </button>
          </div>

          {/* Main Submission Form Container */}
          <form className="space-y-8" onSubmit={formMode === 'contact' || currentStep === 3 ? handleSubmit : undefined}>
            
            {/* --- QUOTATION MODE RENDER ENGINE --- */}
            {formMode === 'quote' && (
              <div 
                key={currentStep} 
                className={`transition-all duration-300 transform ease-in-out ${
                  isTransitioning 
                    ? 'opacity-0 scale-[0.98] translate-y-4' 
                    : 'opacity-100 scale-100 translate-y-0 animate-in fade-in slide-in-from-bottom-4'
                }`}
              >
                {/* Step 01: Client Details */}
                {currentStep === 1 && (
                  <section>
                    <div className="p-4 sm:p-8 lg:p-10 border border-subtle rounded-2xl glass-panel-quote relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-6">Corporate Details</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">FULL NAME</label>
                          <input 
                            className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm" 
                            placeholder="Johnathan Vane" 
                            required={formMode === 'quote'} 
                            type="text"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">ORGANIZATION</label>
                          <input 
                            className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm" 
                            placeholder="Nexus Dynamics Corp." 
                            required={formMode === 'quote'} 
                            type="text"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">BUSINESS EMAIL</label>
                          <input 
                            className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm" 
                            placeholder="vane@nexus-dynamics.com" 
                            required={formMode === 'quote'} 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">PHONE LINE</label>
                          <input 
                            className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm" 
                            placeholder="+27 (0) 21 000 8888" 
                            required={formMode === 'quote'} 
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                        <button 
                          className={`flex items-center justify-center gap-3 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 w-full sm:w-auto text-sm ${isTransitioning ? 'btn-loading' : 'hover:scale-[1.02] active:scale-[0.98]'}`} 
                          onClick={() => handleTransition(2)} 
                          type="button"
                        >
                          {isTransitioning ? (
                            <>
                              <span>Processing...</span>
                              <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                            </>
                          ) : (
                            <>
                              <span>Continue to Scope</span>
                              <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </section>
                )}

                {/* Step 02: Operational Scope */}
                {currentStep === 2 && (
                  <section>
                    <div className="p-4 sm:p-8 lg:p-10 border border-subtle rounded-2xl glass-panel-quote relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-6">Deployment Parameters</h2>
                      <div className="grid grid-cols-1 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">SERVICE CATEGORY</label>
                          <div className="relative">
                            <select 
                              value={serviceCategory}
                              onChange={(e) => setServiceCategory(e.target.value)}
                              className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-all cursor-pointer bg-surface-container-low/80 text-sm"
                            >
                              <option value="Physical Static Guarding">Physical Static Guarding</option>
                              <option value="Executive Protection (Close Guarding)">Executive Protection (Close Guarding)</option>
                              <option value="Electronic Surveillance (CCTV/Biometric)">Electronic Surveillance (CCTV/Biometric)</option>
                              <option value="Risk Assessment & Threat Intel">Risk Assessment & Threat Intel</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                              <span className="material-symbols-outlined">expand_more</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">PRIMARY LOCATION</label>
                          <input 
                            value={primaryLocation}
                            onChange={(e) => setPrimaryLocation(e.target.value)}
                            className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm" 
                            placeholder="Corporate HQ / Facility Address" 
                            required={formMode === 'quote'} 
                            type="text"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div className="space-y-2">
                            <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">CONTRACT DURATION</label>
                            <div className="flex items-center gap-4">
                              <input 
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary text-sm" 
                                type="number"
                              />
                              <span className="text-on-surface-variant font-medium text-sm">Months</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">ESTIMATED ASSET OVERVIEW</label>
                            <input 
                              value={assetValue}
                              onChange={(e) => setAssetValue(e.target.value)}
                              className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm" 
                              placeholder="e.g., Commercial Office Park" 
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-subtle flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                        <button className="font-medium text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm py-2" onClick={() => handleTransition(1)} type="button">
                          <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                        </button>
                        <button 
                          className={`flex items-center justify-center gap-3 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 w-full sm:w-auto text-sm ${isTransitioning ? 'btn-loading' : 'hover:scale-[1.02] active:scale-[0.98]'}`} 
                          onClick={() => handleTransition(3)} 
                          type="button"
                        >
                          {isTransitioning ? (
                            <>
                              <span>Processing...</span>
                              <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                            </>
                          ) : (
                            <>
                              <span>Review Specifications</span>
                              <span className="material-symbols-outlined text-sm">shield</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </section>
                )}

                {/* Step 03: Review & Submit */}
                {currentStep === 3 && (
                  <section>
                    <div className="p-4 sm:p-8 lg:p-12 border border-subtle rounded-2xl glass-panel-quote text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_50%)]"></div>
                      
                      {!isSuccess ? (
                        <>
                          <div className="w-16 h-16 bg-security-emerald/10 text-security-emerald rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-security-emerald/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold mb-3 relative z-10">Specifications Confirmed</h2>
                          <p className="text-xs text-on-surface-variant mb-6 max-w-sm mx-auto relative z-10">
                            Operational parameters are validated. Select submit to securely transmit your consulting requirements.
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-6 border-y border-subtle py-4 relative z-10">
                            <div className="p-3 sm:p-4 bg-surface-container-low/50 rounded-xl border border-subtle/50">
                              <span className="font-label-caps text-[9px] tracking-widest text-on-surface-variant block mb-1">SPECIFICATION</span>
                              <p className="text-xs text-primary font-bold tracking-wider">{serviceCategory.toUpperCase()}</p>
                            </div>
                            <div className="p-3 sm:p-4 bg-surface-container-low/50 rounded-xl border border-subtle/50">
                              <span className="font-label-caps text-[9px] tracking-widest text-on-surface-variant block mb-1">PRIORITY</span>
                              <p className="text-xs text-security-emerald font-bold tracking-wider">ENTERPRISE SLA</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-4 relative z-10">
                            <button 
                              className={`w-full py-3.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-3 ${
                                isSubmitting ? 'btn-loading bg-primary text-on-primary' : 
                                'bg-primary text-on-primary hover:brightness-110 active:scale-[0.98] shadow-xl shadow-primary/20'
                              }`} 
                              type="submit"
                            >
                              {isSubmitting ? (
                                <>
                                  <span>PROCESSING SPECIFICATIONS...</span>
                                  <span className="material-symbols-outlined text-base animate-spin">sync</span>
                                </>
                              ) : (
                                <>
                                  <span>SUBMIT PROPOSAL REQUEST</span>
                                  <span className="material-symbols-outlined text-base">send</span>
                                </>
                              )}
                            </button>
                            {!isSubmitting && (
                              <button className="font-medium text-xs text-on-surface-variant hover:text-primary transition-colors inline-block mx-auto py-1" onClick={() => handleTransition(2)} type="button">
                                Modify Parameters
                              </button>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="py-8 animate-in fade-in zoom-in-95 duration-500">
                          <span className="material-symbols-outlined text-5xl text-security-emerald mb-3">check_circle</span>
                          <h2 className="text-xl font-bold mb-2 text-on-surface">Proposal Received</h2>
                          <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                            Thank you. Security specifications logged. An account coordinator will compile your brief and follow up within 2 hours.
                          </p>
                        </div>
                      )}
                    </div>
                  </section>
                )}
              </div>
            )}

            {/* --- DIRECT CONTACT MODE ENGINE --- */}
            {formMode === 'contact' && (
              <section className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                <div className="p-4 sm:p-8 lg:p-10 border border-subtle rounded-2xl glass-panel-quote relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                  
                  {!isSuccess ? (
                    <>
                      <h2 className="text-xl sm:text-2xl font-bold mb-6">Consultation Inquiry</h2>
                      
                      <div className="grid grid-cols-1 gap-4 sm:gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                          <div className="space-y-2">
                            <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">YOUR NAME</label>
                            <input 
                              className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm" 
                              placeholder="Alex Smith" 
                              required={formMode === 'contact'} 
                              type="text"
                              value={clientName}
                              onChange={(e) => setClientName(e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">EMAIL ADDRESS</label>
                            <input 
                              className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm" 
                              placeholder="smith@organization.com" 
                              required={formMode === 'contact'} 
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">SUBJECT</label>
                          <input 
                            className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm" 
                            placeholder="Operational Deployment Inquiry" 
                            required={formMode === 'contact'} 
                            type="text"
                            value={contactSubject}
                            onChange={(e) => setContactSubject(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-label-caps text-[10px] tracking-widest text-on-surface-variant block">OPERATIONAL BRIEF / MESSAGE</label>
                          <textarea 
                            className="w-full border border-subtle px-4 py-3 text-on-surface rounded-lg transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/40 text-sm min-h-[120px] resize-y" 
                            placeholder="Outline your security mandate parameters or specialized corporate requests here..."
                            required={formMode === 'contact'}
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <button 
                          className={`flex items-center justify-center gap-3 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 w-full sm:w-auto text-sm ${isSubmitting ? 'btn-loading' : 'hover:scale-[1.02] active:scale-[0.98]'}`} 
                          type="submit"
                        >
                          {isSubmitting ? (
                            <>
                              <span>TRANSMITTING...</span>
                              <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                            </>
                          ) : (
                            <>
                              <span>TRANSMIT BRIEF</span>
                              <span className="material-symbols-outlined text-sm">send</span>
                            </>
                          )}
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-500">
                      <span className="material-symbols-outlined text-5xl text-security-emerald mb-3">check_circle</span>
                      <h2 className="text-xl font-bold mb-2 text-on-surface">Transmission Dispatched</h2>
                      <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                        Your direct corporate inquiry has been encrypted and securely transmitted. Clearances are being verified; an agent will respond via secure channel shortly.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}