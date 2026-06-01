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
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/services">
                Physical Guarding
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/services">
                Access Control
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/services">
                Risk Assessment
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" to="/services">
                Surveillance
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
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
              <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm block py-0.5" href="#">
                Terms of Service
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

      {/* Sub-Footer Copyright Area */}
      <div className="max-w-container-max mx-auto px-gutter mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5">
        <p className="text-on-surface-variant text-xs opacity-60 text-center sm:text-left">
          &copy; {currentYear} Ngova Security Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}