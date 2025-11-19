import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Features from './components/Features'
import PinSection from './components/PinSection'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Scroller from './components/Scroller'

function App() {
  useEffect(() => {
    document.title = 'Regalyn Watches — Time, distilled.'
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" aria-hidden="true"/>

      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Regalyn" className="w-7 h-7" />
            <span className="sr-only">Regalyn Watches</span>
            <p className="text-sm font-medium text-white/80">Regalyn</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#specs" className="hover:text-white">Specs</a>
            <a href="#buy" className="hover:text-white">Buy</a>
            <a href="#support" className="hover:text-white">Support</a>
          </nav>
        </div>
      </header>

      <main>
        <Scroller>
          <Hero />
          <Features />
          <PinSection />
          <Gallery />

          <section id="buy" className="py-24">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-semibold tracking-tight">Choose your finish</motion.h3>
              <p className="mt-4 text-slate-300">Steel, Black DLC, or Titanium. All with sapphire and Super‑LumiNova.</p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Steel','Black','Titanium'].map((name) => (
                  <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <img src="/regalyn-watch.svg" alt={`${name} finish`} className="w-full h-auto" />
                    <p className="mt-4 text-white font-medium">{name}</p>
                    <button className="mt-4 w-full rounded-full bg-white text-slate-900 py-2.5 font-medium hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Add to bag</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Scroller>
      </main>

      <Footer />
    </div>
  )
}

export default App
