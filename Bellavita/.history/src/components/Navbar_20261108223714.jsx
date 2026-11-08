import { useState } from 'react'

const links = [
  ['Menu', '#menu'], ['About Us', '#about'], ['Offers & Discounts', '#offers'],
  ['Reviews', '#reviews'], ['Contacts', '#contacts'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-cream sticky top-0 z-40 shadow-sm">
      <div className="max-w-[1170px] mx-auto px-5 h-20 lg:h-24 flex items-center justify-between">
        <a href="#" className="leading-none">
          <span className="font-serif text-3xl text-ink block">Bellavita</span>
          <span className="text-brand text-[9px] font-bold tracking-[0.2em] uppercase block text-center mt-1">— Gourmet Cuisine —</span>
        </a>
        <nav className="hidden lg:flex gap-8 text-[15px] text-ink/80">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="relative hover:text-brand transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand hover:after:w-full after:transition-all">{l}</a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5">
          <span className={'h-0.5 w-6 bg-ink transition-transform ' + (open ? 'translate-y-2 rotate-45' : '')} />
          <span className={'h-0.5 w-6 bg-ink transition-opacity ' + (open ? 'opacity-0' : '')} />
          <span className={'h-0.5 w-6 bg-ink transition-transform ' + (open ? '-translate-y-2 -rotate-45' : '')} />
        </button>
      </div>
      <div className={'lg:hidden overflow-hidden transition-all duration-300 ' + (open ? 'max-h-80' : 'max-h-0')}>
        <nav className="px-5 pb-5 flex flex-col">
          {links.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} className="py-3 border-t border-ink/10 hover:text-brand">{l}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
