import { useEffect } from 'react'

export default function Toast({ message, onClose, duration = 7000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [onClose, duration])

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 z-50 animate-in fade-in slide-in-from-top-4 duration-300 w-[calc(100%-2rem)] max-w-md">
      <div className="bg-neutral-900 border border-security-emerald/30 shadow-[0_4px_30px_rgba(16,185,129,0.15)] rounded-xl p-4 flex items-start gap-3 backdrop-blur-md">
        <span className="material-symbols-outlined text-security-emerald shrink-0 mt-0.5">
          check_circle
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">Thank You!</p>
          <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{message}</p>
        </div>
        <button 
          onClick={onClose}
          type="button" 
          className="text-on-surface-variant hover:text-white transition-colors p-0.5 rounded-md hover:bg-white/5"
        >
          <span className="material-symbols-outlined text-base">close</span>
        </button>
      </div>
    </div>
  )
}