import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
      className={'fixed right-5 bottom-5 z-50 w-12 h-12 rounded-full bg-brand text-white shadow-lg transition-all duration-300 hover:-translate-y-1 ' + (show ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-4')}>
      ↑
    </button>
  )
}
