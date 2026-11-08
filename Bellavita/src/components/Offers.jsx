import { SectionHead, Reveal, Button } from './ui.jsx'

const offers = [
  ['20%', 'Weekday Lunch', 'Monday to Friday, 12 PM – 4 PM, on all main dishes.'],
  ['2 for 1', 'Happy Hour', 'Every day 5 PM – 7 PM on cocktails and wine by the glass.'],
  ['Free', 'Birthday Dessert', 'Celebrate with us and get a free dessert with your party.'],
]

export default function Offers() {
  return (
    <section id="offers" className="py-16 lg:py-28">
      <div className="max-w-[1170px] mx-auto px-5">
        <SectionHead eyebrow="Offers & discounts" title="Treats You Will Love" />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {offers.map(([big, t, d], i) => (
            <Reveal key={t} delay={i * 120}>
              <div className="h-full rounded-3xl bg-ink text-white p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <span className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-brand/90 group-hover:scale-125 transition-transform duration-500" />
                <p className="relative font-serif text-4xl">{big}</p>
                <h3 className="font-serif text-2xl mt-10">{t}</h3>
                <p className="text-white/70 mt-3">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12"><Button href="#contacts">Book a Table</Button></Reveal>
      </div>
    </section>
  )
}
