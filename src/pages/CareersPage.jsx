import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'

export default function CareersPage() {
  const containerRef = useRef(null)
  useRevealAll(containerRef, '.reveal-field, .reveal-hidden')
  
  const [file, setFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFile(null)
        e.target.reset()
      }, 5000)
    }, 2000)
  }

  return (
    <div ref={containerRef} className="pt-16 sm:pt-24 overflow-x-hidden text-on-background bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-section-gap px-gutter max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="z-10 reveal-hidden">
            <span className="font-label-caps text-xs sm:text-label-caps text-primary mb-3 block tracking-widest uppercase">CAREERS AT NGOVA</span>
            <h1 className="font-display-lg text-3xl sm:text-5xl lg:text-display-lg mb-4 sm:mb-6 leading-tight text-white">
              Build Your Future with the Best
            </h1>
            <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant mb-6 sm:mb-8 max-w-xl leading-relaxed">
              Join a disciplined, dedicated team maintaining the gold standard in high-end tactical security services across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a className="bg-primary text-on-primary text-center px-8 py-3.5 font-bold transition-all hover:scale-105 active:scale-95 rounded-lg text-sm" href="#apply">
                Apply Now
              </a>
              <a className="border border-white/10 text-center text-white px-8 py-3.5 font-bold hover:bg-white/5 transition-all rounded-lg text-sm" href="#values">
                Our Values
              </a>
            </div>
          </div>
          <div className="relative group reveal-hidden">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-xl overflow-hidden border border-white/5 aspect-[4/3] shadow-2xl">
              <img alt="Ngova Security Team" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-surface-container-lowest py-12 sm:py-section-gap px-gutter border-y border-white/5" id="values">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-10 sm:mb-16 reveal-hidden">
            <h2 className="font-headline-md text-2xl sm:text-headline-md text-white mb-2">The Ngova Standard</h2>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl mx-auto">
              Our reputation is built on the unwavering commitment of our team members to these central pillars.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="glass-panel border border-white/5 bg-white/[0.01] p-6 sm:p-8 group hover:border-primary/50 transition-all duration-500 rounded-xl reveal-hidden">
              <div className="w-11 h-11 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center bg-white/5 border border-white/10 text-primary rounded-lg">
                <span className="material-symbols-outlined text-xl sm:text-2xl">verified_user</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Integrity</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Honesty and transparency drive our force. We operate with high ethical standards, even when no one is watching.
              </p>
            </div>
            <div className="glass-panel border border-white/5 bg-white/[0.01] p-6 sm:p-8 group hover:border-primary/50 transition-all duration-500 rounded-xl reveal-hidden">
              <div className="w-11 h-11 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center bg-white/5 border border-white/10 text-primary rounded-lg">
                <span className="material-symbols-outlined text-xl sm:text-2xl">gavel</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Accountability</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                We own our actions completely. Every member of our tactical division is personally responsible for site safety.
              </p>
            </div>
            <div className="glass-panel border border-white/5 bg-white/[0.01] p-6 sm:p-8 group hover:border-primary/50 transition-all duration-500 rounded-xl reveal-hidden">
              <div className="w-11 h-11 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center bg-white/5 border border-white/10 text-primary rounded-lg">
                <span className="material-symbols-outlined text-xl sm:text-2xl">visibility</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Vigilance</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Absolute focus is non-negotiable. We maintain readiness to identify and neutralize operational risks early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-12 sm:py-section-gap px-gutter max-w-container-max mx-auto scroll-mt-24" id="apply">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/3 reveal-hidden">
            <h2 className="font-display-lg text-2xl sm:text-display-lg mb-4 sm:mb-6 text-white">Ready to Enlist?</h2>
            <p className="text-sm sm:text-body-md text-on-surface-variant mb-6 sm:mb-8">
              Join a crew that protects infrastructure assets and rewards your expertise. Our recruitment division evaluates application pipelines within 48 business hours.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full text-xl">payments</span>
                <div>
                  <p className="font-bold text-white text-sm sm:text-base">Competitive Pay</p>
                  <p className="text-on-surface-variant text-xs sm:text-sm mt-0.5">Premium compensation models and performance incentives.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full text-xl">school</span>
                <div>
                  <p className="font-bold text-white text-sm sm:text-base">Advanced Training</p>
                  <p className="text-on-surface-variant text-xs sm:text-sm mt-0.5">Continuous technical systems calibration and advanced leadership pathways.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full text-xl">medical_services</span>
                <div>
                  <p className="font-bold text-white text-sm sm:text-base">Comprehensive Benefits</p>
                  <p className="text-on-surface-variant text-xs sm:text-sm mt-0.5">Medical, risk shield support frameworks, and structural security plans.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="glass-panel p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 shadow-2xl border border-white/5 bg-white/[0.02] rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                <div className="reveal-field space-y-2">
                  <label className="font-label-caps text-[11px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="full-name">Full Name</label>
                  <input className="w-full bg-neutral-900 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white text-sm transition-all px-4 py-3" id="full-name" placeholder="Enter full legal name" required type="text"/>
                </div>
                <div className="reveal-field space-y-2">
                  <label className="font-label-caps text-[11px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="email">Email Address</label>
                  <input className="w-full bg-neutral-900 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white text-sm transition-all px-4 py-3" id="email" placeholder="email@example.com" required type="email"/>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                <div className="reveal-field space-y-2">
                  <label className="font-label-caps text-[11px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="position">Position Applied For</label>
                  <select className="w-full bg-neutral-900 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white text-sm transition-all px-4 py-3 appearance-none" id="position">
                    <option value="physical-guard">Physical Guarding</option>
                    <option value="surveillance">Surveillance Specialist</option>
                    <option value="risk-analyst">Risk Assessment Analyst</option>
                    <option value="executive-protection">Executive Protection</option>
                    <option value="k9-handler">K9 Handler</option>
                  </select>
                </div>
                <div className="reveal-field space-y-2">
                  <label className="font-label-caps text-[11px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="phone">Phone Number</label>
                  <input className="w-full bg-neutral-900 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white text-sm transition-all px-4 py-3" id="phone" placeholder="+27 (0) 00 000 0000" required type="tel"/>
                </div>
              </div>

              {/* Upload CV */}
              <div className="reveal-field space-y-3">
                <label className="font-label-caps text-[11px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider block">Upload CV / Resume</label>
                <div 
                  className={`border-2 border-dashed p-6 sm:p-10 text-center transition-all duration-300 cursor-pointer group rounded-xl relative overflow-hidden ${
                    isDragging 
                      ? 'border-primary bg-primary/10' 
                      : isSuccess || file
                        ? 'border-emerald-500/50 bg-emerald-500/5'
                        : 'border-white/10 bg-neutral-900/50 hover:border-primary hover:bg-neutral-900'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('cv-upload').click()}
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <span className={`material-symbols-outlined text-3xl sm:text-4xl mb-2 transition-colors duration-300 inline-block ${
                      isSuccess || file ? 'text-emerald-400' : 'text-on-surface-variant group-hover:text-primary'
                    }`}>
                      {isSuccess || file ? 'task_alt' : 'cloud_upload'}
                    </span>
                    <p className="text-white text-sm font-medium">
                      {isSuccess ? <span className="text-emerald-400 font-bold">Documents Received</span> : 
                       file ? <span>File: <span className="text-primary font-bold">{file.name}</span></span> :
                       <span className="px-2 block">
                         <span className="hidden sm:inline">Drag and drop your CV here or </span>
                         <span className="text-primary font-bold hover:underline">Click to upload file</span>
                       </span>
                      }
                    </p>
                    <p className="text-[10px] text-on-surface-variant mt-1.5 font-mono">PDF, DOCX (Max 10MB)</p>
                  </div>
                  <input accept=".pdf,.doc,.docx" className="hidden" id="cv-upload" type="file" onChange={handleFileChange} />
                </div>
              </div>

              {/* Additional Info */}
              <div className="reveal-field space-y-2">
                <label className="font-label-caps text-[11px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="message">Professional Summary</label>
                <textarea className="w-full bg-neutral-900 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white text-sm transition-all px-4 py-3 resize-none" id="message" placeholder="Briefly highlight your relevant field experience..." rows="3"></textarea>
              </div>

              {/* Submit Button */}
              <div className="reveal-field pt-2">
                <button 
                  className={`w-full md:w-auto text-on-primary px-10 py-3.5 font-bold rounded-lg transition-all text-sm flex items-center justify-center gap-2.5 ${
                    isSubmitting 
                      ? 'bg-neutral-800 text-on-surface-variant opacity-80 cursor-not-allowed' 
                      : isSuccess
                        ? 'bg-emerald-600 text-white'
                        : 'bg-primary text-black hover:brightness-110 active:scale-[0.98]'
                  }`} 
                  disabled={isSubmitting || isSuccess}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin material-symbols-outlined text-lg">sync</span>
                      <span>Processing...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <span>Application Forwarded</span>
                      <span className="material-symbols-outlined text-lg">verified</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <span className="material-symbols-outlined text-lg">send</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}