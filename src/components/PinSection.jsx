import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function PinSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10])

  return (
    <section aria-label="Pinned narrative" className="relative">
      <div ref={ref} className="h-[180vh] md:h-[220vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x, rotate }} className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/regalyn-watch.svg" alt="Regalyn case profile" className="w-full h-auto" />
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Balanced. Precise. Quiet.</h3>
                <p className="mt-4 text-slate-300 leading-relaxed">We tuned the rotor to reduce chatter and leaned on dense materials to dampen resonance. The result is a calm, almost weightless presence on the wrist.</p>
                <ul className="mt-6 space-y-3 text-slate-200/90">
                  <li>• 40mm case diameter</li>
                  <li>• 10.2mm thickness</li>
                  <li>• 47mm lug‑to‑lug</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
