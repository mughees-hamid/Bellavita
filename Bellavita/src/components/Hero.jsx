import { Leaf, Eyebrow, Button } from './ui.jsx'

const bits = [
  ['18%', '22%', '#E8502E'], ['40%', '15%', '#F59A3C'], ['60%', '28%', '#E8502E'], ['30%', '45%', '#F59A3C'],
  ['55%', '50%', '#D8362B'], ['72%', '42%', '#F59A3C'], ['25%', '68%', '#E8502E'], ['48%', '72%', '#F0C27A'],
  ['68%', '68%', '#D8362B'], ['45%', '38%', '#fff'],
]

function Plate() {
  return (
    <div className="relative w-[78vw] max-w-[460px] aspect-square rounded-full bg-[#F1F0F7] shadow-2xl p-[6%]">
      <div className="relative w-full h-full rounded-full bg-white overflow-hidden">
        {bits.map(([l, t, c], i) => (
          <span key={i} className="absolute shadow-md" style={{ left: l, top: t, width: '22%', height: '22%', background: c, transform: `rotate(${i * 30}deg)`, borderRadius: i % 2 ? '50% 50% 50% 8%' : '50%' }} />
        ))}
        {[['20%', '55%'], ['62%', '18%'], ['38%', '60%'], ['70%', '56%'], ['14%', '36%']].map(([l, t], i) => (
          <span key={i} className="absolute w-[9%] h-[9%] bg-[#5FA83A] rounded-[0_80%_0_80%]" style={{ left: l, top: t, transform: `rotate(${i * 50}deg)` }} />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-5 py-14 lg:py-0 lg:min-h-[590px] grid lg:grid-cols-2 items-center gap-10">
        <div className="relative z-10 order-2 lg:order-1">
          <div className="text-in"><Eyebrow>Welcome to our restaurants</Eyebrow></div>
          <h1 className="text-in font-serif text-[40px] sm:text-5xl lg:text-[56px] leading-[1.15] mt-5" style={{ animationDelay: '.15s' }}>
            Gourmet Cuisine From Fresh Local Ingredients
          </h1>
          <p className="text-in text-ink/70 text-lg mt-8 lg:mt-14" style={{ animationDelay: '.3s' }}>Enjoy your favorite dishes in our restaurants!</p>
          <div className="text-in mt-8 flex flex-wrap items-center gap-6" style={{ animationDelay: '.45s' }}>
            <Button href="#contacts">Book a Table</Button>
            <a href="tel:+12345678900" className="flex items-center gap-2 font-medium hover:text-brand transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11 11 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.56 3.5a1 1 0 01-.25 1z" /></svg>
              +1 (234) 567 89 00
            </a>
          </div>
        </div>
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end lg:-mr-16 py-6">
          <div className="absolute inset-0 lg:-inset-y-14 bg-gradient-to-br from-cream to-[#D9D4C6] rounded-[40%_60%_55%_45%] opacity-70" />
          <div className="plate-in relative"><Plate /></div>
        </div>
      </div>
      <Leaf className="w-10 top-6 left-[45%] hidden sm:block" style={{ '--r': '20deg' }} />
      <Leaf className="w-16 top-[28%] left-[40%] hidden lg:block" style={{ '--r': '-40deg', animationDelay: '1s' }} />
      <Leaf className="w-9 bottom-[30%] left-[38%] hidden lg:block" style={{ '--r': '60deg', animationDelay: '2s' }} />
      <Leaf className="w-12 bottom-6 right-[35%]" style={{ '--r': '-10deg', animationDelay: '1.5s' }} />
    </section>
  )
}
