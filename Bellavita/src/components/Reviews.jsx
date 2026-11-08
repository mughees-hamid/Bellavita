import { useEffect, useState } from 'react'
import { SectionHead } from './ui.jsx'

const reviews = [
  ['Sophia Miller', 'New York', 'The carbonara tastes just like the one I had in Rome. The staff made our anniversary dinner unforgettable.'],
  ['James Carter', 'Boston', 'Fresh ingredients and a menu with something for everyone. We come back every week with the kids.'],
  ['Emily Davis', 'Chicago', 'Warm atmosphere, great cocktails and the best tiramisu in the city. Booking a table was easy too.'],
]

export default function Reviews() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setI((n) => (n + 1) % reviews.length), 5000)
    return () => clearInterval(id)
  }, [paused])
  const [name, city, text] = reviews[i]
  return (
    <section id="reviews" className="bg-cream py-16 lg:py-28">
      <div className="max-w-[1170px] mx-auto px-5">
        <SectionHead eyebrow="Reviews" title="What Our Guests Say" />
        <div className="max-w-3xl mx-auto mt-12 text-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div key={i} className="fade-in">
            <div className="text-brand text-2xl tracking-widest" aria-label="5 out of 5 stars">★★★★★</div>
            <p className="font-serif text-xl sm:text-2xl leading-relaxed mt-6">“{text}”</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold">{name[0]}</span>
              <div className="text-left">
                <p className="font-medium">{name}</p>
                <p className="text-mute text-sm">{city}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, n) => (
              <button key={n} onClick={() => setI(n)} aria-label={'Review ' + (n + 1)} className={'h-2.5 rounded-full transition-all ' + (n === i ? 'w-8 bg-brand' : 'w-2.5 bg-ink/20')} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
