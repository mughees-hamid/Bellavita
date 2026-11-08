import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <footer className="bg-ink text-white/80">
      <div className="max-w-[1170px] mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-serif text-3xl text-white"></p>
          <p className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase mt-1">Gourmet Cuisine</p>
          <p className="mt-5 text-sm leading-relaxed">Italian restaurants in New York, Boston and Chicago, serving fresh local ingredients for four decades.</p>
        </div>
        <div>
          <h4 className="font-serif text-xl text-white mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[['Menu', '#menu'], ['About Us', '#about'], ['Offers', '#offers'], ['Reviews', '#reviews'], ['Contacts', '#contacts']].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-brand transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl text-white mb-4">Visit us</h4>
          <p className="text-sm leading-relaxed">125 Main Street<br />New York, NY<br />+1 (234) 567 89 00<br />Mon–Sun, 12 PM – 01 AM</p>
        </div>
        <div>
          <h4 className="font-serif text-xl text-white mb-4">Newsletter</h4>
          {done ? <p className="fade-in text-sm text-brand">Subscribed! Check your inbox soon.</p> : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true) }} className="flex gap-2">
              <input required type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="min-w-0 flex-1 rounded-full px-4 py-2.5 text-ink outline-none" />
              <button className="bg-brand text-white rounded-full px-5 hover:bg-white hover:text-brand transition-colors">Join</button>
            </form>
          )}
          <div className="flex gap-4 mt-6 text-sm">
            {['Instagram', 'Facebook', 'YouTube'].map((s) => <a key={s} href="#" className="underline hover:text-brand">{s}</a>)}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">© {new Date().getFullYear()} El Gambino. All rights reserved.</div>
    </footer>
  )
}
