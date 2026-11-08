import { Reveal, SectionHead } from './ui.jsx'

const benefits = [
  { t: 'Exceptional Quality of Food', d: 'We take pride in offering our guests the highest quality of ingredients sourced from local farms and markets.', c: '#E8892E', i: '🍤' },
  { t: 'Varied Menu Selection', d: 'Our menu features a wide selection of dishes to suit every taste and preference. We have something for everyone.', c: '#2B2F3B', i: '📖' },
  { t: 'Impeccable Service', d: 'Our staff is trained to provide attentive and personalized service to each and every guest, ensuring a memorable dining experience.', c: '#D8362B', i: '🍷' },
]

export default function Benefits() {
  return (
    <section className="max-w-[1170px] mx-auto px-5 py-16 lg:py-28">
      <SectionHead eyebrow="What to expect" title="The Benefits of Dining with Us" text="Looking for a great place to have dinner? Book a table at Bellavita!" />
      <div className="grid md:grid-cols-3 gap-12 md:gap-10 mt-14">
        {benefits.map((b, i) => (
          <Reveal key={b.t} delay={i * 150}>
            <div className="group">
              <div className="w-[98px] h-[94px] bg-[#3A3F4D] rounded-[45%_55%_50%_50%] flex items-center justify-center text-3xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <span className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: b.c }}>{b.i}</span>
              </div>
              <h3 className="font-serif text-2xl mt-6">{b.t}</h3>
              <span className="block h-0.5 w-6 bg-brand mt-4 transition-all duration-300 group-hover:w-14" />
              <p className="text-mute leading-relaxed mt-5 max-w-sm">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
