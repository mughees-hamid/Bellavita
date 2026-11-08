import { useState } from 'react'
import { SectionHead, Reveal } from './ui.jsx'

const field = 'w-full bg-cream rounded-xl px-5 py-4 outline-none border border-transparent focus:border-brand focus:bg-white transition-colors'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', date: '', guests: '2' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <section id="contacts" className="py-16 lg:py-28">
      <div className="max-w-[1170px] mx-auto px-5">
        <SectionHead eyebrow="Contacts" title="Book a Table" text="Leave your details and we will confirm your reservation." />
        <div className="grid lg:grid-cols-5 gap-10 mt-14">
          <Reveal className="lg:col-span-3">
            {sent ? (
              <div className="fade-in bg-cream rounded-3xl p-10 text-center">
                <p className="text-5xl">🎉</p>
                <h3 className="font-serif text-3xl mt-4">Thank you, {form.name || 'friend'}!</h3>
                <p className="text-mute mt-3">Your table for {form.guests} is requested. We will call you soon.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-brand font-medium underline">Book another table</button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid sm:grid-cols-2 gap-5">
                <input required placeholder="Your name" value={form.name} onChange={set('name')} className={field} />
                <input required type="tel" placeholder="Phone number" value={form.phone} onChange={set('phone')} className={field} />
                <input required type="date" value={form.date} onChange={set('date')} className={field} />
                <select value={form.guests} onChange={set('guests')} className={field}>
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
                </select>
                <button className="sm:col-span-2 bg-brand text-white font-medium py-4 rounded-full hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/40 transition-all">Book a Table</button>
              </form>
            )}
          </Reveal>
          <Reveal delay={150} className="lg:col-span-2">
            <div className="bg-ink text-white rounded-3xl p-8 space-y-6">
              {[['📍', 'Address', '125 Main Street, New York, NY'], ['📞', 'Phone', '+1 (234) 567 89 00'], ['🕛', 'Hours', 'Mon–Sun, 12 PM – 01 AM']].map(([i, t, d]) => (
                <div key={t} className="flex gap-4">
                  <span className="text-2xl">{i}</span>
                  <div><p className="font-serif text-xl">{t}</p><p className="text-white/70">{d}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
