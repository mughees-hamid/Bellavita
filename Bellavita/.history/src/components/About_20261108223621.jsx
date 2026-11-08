import { Reveal, Leaf, Eyebrow, Flourish, Button } from './ui.jsx'

const stats = [['40+', 'Years of tradition'], ['3', 'Restaurants'], ['120', 'Dishes on the menu']]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden pb-16 lg:pb-28">
      <div className="max-w-[1170px] mx-auto px-5 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -left-6 top-16 -bottom-6 right-6 bg-cream rounded-lg" />
            <div className="relative bg-white p-3 shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#8B5A2B] via-[#B9783C] to-[#4A2E18] relative overflow-hidden flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 p-8 w-full">
                  {['🥗', '🍝', '🍷', '🍕', '🍟', '🍺'].map((e, i) => (
                    <span key={i} className="aspect-square rounded-full bg-white/90 flex items-center justify-center text-3xl sm:text-4xl shadow-lg" style={{ animation: 'floaty 5s ease-in-out infinite', animationDelay: i * 0.4 + 's' }}>{e}</span>
                  ))}
                </div>
              </div>
            </div>
            <Leaf className="w-14 -left-4 -top-6" style={{ '--r': '30deg' }} />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <Eyebrow>About us</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight mt-4">Passion for Food: Get to Know Our Restaurant</h2>
          <Flourish className="mt-8" />
          <p className="text-ink/75 text-lg font-medium mt-8 leading-relaxed"> is a chain of three top-rated Italian restaurants, conveniently located in New York, Boston, and Chicago.</p>
          <p className="text-mute mt-6 leading-relaxed">Come to a perfect place for a delicious breakfast, perhaps for a cup of cappuccino to lift your mood after your hard working day.</p>
          <p className="text-mute mt-6 leading-relaxed">For four decades, El Gambino restaurant has been serving the local community with the world's famous cuisines. Our diversified menu offers a wide selection of meals for any taste. Visit us to feel the warmth of our hospitality and to enjoy your favorite cuisine!</p>
          <div className="grid grid-cols-3 gap-4 mt-10">
            {stats.map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-3xl sm:text-4xl text-brand">{n}</p>
                <p className="text-mute text-sm mt-1">{l}</p>
              </div>
            ))}
          </div>
          <Button href="#menu" className="mt-10">See Our Menu</Button>
        </Reveal>
      </div>
    </section>
  )
}
