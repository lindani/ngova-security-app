import { Link } from 'react-router-dom'

const LOGO_URL = 'https://ngovasecurity.co.za/wp/wp-content/uploads/2025/06/Site-Header-Logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-fortress-black border-t border-white/5 py-12 sm:py-20" id="contact">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12">
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6">
          <div className="flex items-center">
            <img alt="Ngova Security Logo" className="h-9 sm:h-11 w-auto object-contain" src={LOGO_URL} />
          </div>
          <p className="text-on-surface-variant text-xs sm:text-sm max-w-xs leading-relaxed opacity-80">
            Setting the continent's standard in high-end elite protection and modern tactical security operations.
          </p>
          <div className="flex gap-3 pt-1">
            <a
              className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors text-on-surface-variant hover:text-primary bg-white/[0.02]"
              href="#"
              aria-label="Global Web Portal"
            >
              <span className="material-symbols-outlined text-base">public</span>
            </a>
            <a
              className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors text-on-surface-variant hover:text-primary bg-white/[0.02]"
              href="mailto:contact@ngova-security.com"
              aria-label="Email Us"
            >
              <span className="material-symbols-outlined text-base">mail</span>
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div className="md:col-span-2">
          <p className="font-label-caps text-[11px] sm:text-xs text-primary mb-4 sm:mb-6 tracking-widest uppercase font-semibold">
            Services
          </p>
          <ul className="flex flex-col gap-2.5 sm:gap-3.5">
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/services#physical-guarding">
                Physical Guarding
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/services#access-control">
                Access Control
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/services#risk-assessment">
                Risk Assessment
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/services#monitoring">
                Surveillance
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/services#tactical-deployment">
                Tactical Deployment
              </Link>
            </li>
          </ul>
        </div>

        {/* Company & Compliance Links */}
        <div className="md:col-span-2">
          <p className="font-label-caps text-[11px] sm:text-xs text-primary mb-4 sm:mb-6 tracking-widest uppercase font-semibold">
            Company
          </p>
          <ul className="flex flex-col gap-2.5 sm:gap-3.5">
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/clients">
                Clients
              </Link>
            </li>
            <li>
              <a 
                href="/documents/ngova-privacy-policy.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm flex items-center gap-1.5 py-0.5"
              >
                Privacy Policy (POPIA)
                <span className="material-symbols-outlined text-xs opacity-40">open_in_new</span>
              </a>
            </li>
            <li>
              <a 
                href="/documents/ngova-paia-manual.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm flex items-center gap-1.5 py-0.5"
              >
                PAIA Manual
                <span className="material-symbols-outlined text-xs opacity-40">open_in_new</span>
              </a>
            </li>
            <li>
              <a 
                href="/documents/ngova-terms-policy.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm flex items-center gap-1.5 py-0.5"
              >
                Terms of Service
                <span className="material-symbols-outlined text-xs opacity-40">open_in_new</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-4">
          <p className="font-label-caps text-[11px] sm:text-xs text-primary mb-4 sm:mb-6 tracking-widest uppercase font-semibold">
            Contact
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0">location_on</span>
              <span className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                48 Mynhardt Street, Unit 10<br />Gants Plaza, Strand, 7140
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg sm:text-xl flex-shrink-0">call</span>
              <a className="text-on-surface-variant text-xs sm:text-sm hover:text-primary transition-colors" href="tel:0213608201">
                021 360 8201
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg sm:text-xl flex-shrink-0">mail</span>
              <a
                className="text-on-surface-variant text-xs sm:text-sm hover:text-primary transition-colors break-all"
                href="mailto:contact@ngova-security.com"
              >
                contact@ngova-security.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Statutory Corporate Disclosures Banner */}
      <div className="max-w-container-max mx-auto px-gutter mt-12 pt-6 border-t border-white/5">
        <p className="text-[11px] text-on-surface-variant/50 leading-relaxed text-center md:text-left tracking-wide">
          <span className="text-on-surface-variant/70 font-semibold uppercase tracking-wider block md:inline md:mr-2">Statutory Disclosure:</span>
          Ngova Trading (Pty) Ltd As Ngova Security Services &bull; Registration No: 2016/035498/07 &bull; PSIRA Registration No: 2766562. 
          Registered in accordance with the Private Security Industry Regulation Act 56 of 2001.
        </p>
      </div>

      {/* Sub-Footer Copyright Area */}
      <div className="max-w-container-max mx-auto px-gutter mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs opacity-60 text-center sm:text-left">
          &copy; {currentYear} Ngova Trading (Pty) Ltd As Ngova Security Services. All Rights Reserved.
        </p>
        <p className="text-on-surface-variant text-xs opacity-60 text-center sm:text-right">
          Built by{' '}
          <a 
            href="https://www.linkedin.com/in/lindani-pani-81916b100/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-on-surface-variant hover:text-primary font-medium underline underline-offset-4 decoration-white/20 hover:decoration-primary transition-colors"
          >
            Lindani Pani
          </a>
        </p>
      </div>
    </footer>
  )
}