import TopBar from './components/TopBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Offers from './components/Offers.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Menu />
        <Offers />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
