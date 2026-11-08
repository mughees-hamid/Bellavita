import { useEffect, useRef } from 'react'

export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('show'); io.disconnect() }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} style={{ transitionDelay: delay + 'ms' }} className={'reveal ' + className}>{children}</div>
}

export const Leaf = ({ className = '', style }) => (
  <svg viewBox="0 0 60 60" className={'leaf absolute ' + className} style={style} aria-hidden="true">
    <path d="M5 55 C5 20 25 5 55 5 C55 35 35 55 5 55Z" fill="#5FA83A" />
    <path d="M8 52 C25 35 38 22 52 8" stroke="#3F7F25" strokeWidth="2" fill="none" />
  </svg>
)

export const Flourish = ({ className = '' }) => (
  <svg width="70" height="14" viewBox="0 0 70 14" className={className} fill="none" stroke="#FF5E27" strokeWidth="1.6" aria-hidden="true">
    <path d="M2 7h24M44 7h24M26 7c4-6 8-6 9-6M26 7c4 6 8 6 9 6M44 7c-4-6-8-6-9-6M44 7c-4 6-8 6-9 6" />
    <circle cx="35" cy="7" r="2" fill="#FF5E27" />
  </svg>
)

export const Eyebrow = ({ children, center }) => (
  <p className={'text-brand text-[11px] font-bold tracking-[0.15em] uppercase ' + (center ? 'text-center' : '')}>– {children} –</p>
)

export const Button = ({ children, href = '#', className = '' }) => (
  <a href={href} className={'inline-block bg-brand text-white font-medium px-10 py-4 rounded-full hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/40 transition-all ' + className}>{children}</a>
)

export const SectionHead = ({ eyebrow, title, text }) => (
  <Reveal className="text-center max-w-2xl mx-auto">
    <Eyebrow center>{eyebrow}</Eyebrow>
    <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] mt-4">{title}</h2>
    <Flourish className="mx-auto mt-8" />
    {text && <p className="text-ink/70 text-lg mt-8">{text}</p>}
  </Reveal>
)
