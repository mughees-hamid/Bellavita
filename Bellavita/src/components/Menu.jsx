import { useState } from 'react'
import { SectionHead, Reveal } from './ui.jsx'

const menu = {
  Starters: [
    ['Caprese Salad', 'Buffalo mozzarella, vine tomatoes, basil, olive oil', '$9', '🥗'],
    ['Melon & Prosciutto', 'Sweet melon, cured ham, balsamic glaze, mint', '$11', '🍈'],
    ['Bruschetta', 'Grilled bread, tomato, garlic, fresh basil', '$8', '🍞'],
    ['Fried Calamari', 'Crispy squid, lemon, spicy marinara', '$12', '🦑'],
  ],
  Mains: [
    ['Spaghetti Carbonara', 'Guanciale, egg yolk, pecorino romano', '$16', '🍝'],
    ['Margherita Pizza', 'Wood-fired, San Marzano tomato, mozzarella', '$14', '🍕'],
    ['Grilled Sea Bass', 'Lemon butter, roasted vegetables', '$24', '🐟'],
    ['Osso Buco', 'Braised veal shank, saffron risotto', '$28', '🍖'],
  ],
  Desserts: [
    ['Tiramisu', 'Espresso-soaked ladyfingers, mascarpone, cocoa', '$8', '🍰'],
    ['Panna Cotta', 'Vanilla cream, wild berry sauce', '$7', '🍮'],
    ['Gelato Trio', 'Pistachio, stracciatella, hazelnut', '$7', '🍨'],
    ['Cannoli', 'Sicilian shells, ricotta, candied orange', '$6', '🥐'],
  ],
  Drinks: [
    ['Aperol Spritz', 'Aperol, prosecco, soda, orange slice', '$10', '🍹'],
    ['Italian Red Wine', 'Chianti Classico, glass', '$9', '🍷'],
    ['Cappuccino', 'Double espresso, steamed milk', '$4', '☕'],
    ['Fresh Lemonade', 'Sicilian lemons, mint, sparkling water', '$5', '🍋'],
  ],
}

export default function Menu() {
  const [tab, setTab] = useState('Starters')
  return (
    <section id="menu" className="bg-cream py-16 lg:py-28">
      <div className="max-w-[1170px] mx-auto px-5">
        <SectionHead eyebrow="Our menu" title="Dishes Made with Love" text="Pick a category and see what is cooking today." />
        <Reveal>
          <div role="tablist" className="flex flex-wrap justify-center gap-3 mt-10">
            {Object.keys(menu).map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
                className={'px-6 py-2.5 rounded-full text-sm font-medium transition-all ' + (tab === t ? 'bg-brand text-white shadow-md shadow-brand/30' : 'bg-white text-ink hover:text-brand')}>
                {t}
              </button>
            ))}
          </div>
        </Reveal>
        <div key={tab} className="grid md:grid-cols-2 gap-5 mt-10">
          {menu[tab].map(([name, desc, price, icon], i) => (
            <div key={name} style={{ animationDelay: i * 80 + 'ms' }} className="fade-in bg-white rounded-2xl p-5 flex items-center gap-5 hover:-translate-y-1 hover:shadow-lg transition-all">
              <span className="w-16 h-16 shrink-0 rounded-full bg-cream flex items-center justify-center text-3xl">{icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xl">{name}</h3>
                <p className="text-mute text-sm mt-1">{desc}</p>
              </div>
              <span className="font-serif text-xl text-brand">{price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
