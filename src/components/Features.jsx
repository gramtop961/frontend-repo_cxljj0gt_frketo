import { motion } from 'framer-motion'
import { Shield, Activity, Droplets, Cpu, Battery, Sun } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Sapphire crystal',
    desc: 'Virtually scratch‑proof clarity with AR coating on both sides.',
  },
  {
    icon: Activity,
    title: 'Automatic movement',
    desc: '28,800 vph, 40‑hour power reserve, tuned for everyday accuracy.',
  },
  {
    icon: Droplets,
    title: '100m water resistant',
    desc: 'Swim, shower, or sprint through rain. Sealed and tested.',
  },
  {
    icon: Cpu,
    title: 'Milled steel',
    desc: '316L surgical‑grade case with micro‑polished chamfers.',
  },
  {
    icon: Battery,
    title: 'Lume that lasts',
    desc: 'Swiss Super‑LumiNova for all‑night legibility.',
  },
  {
    icon: Sun,
    title: 'Anti‑glare dial',
    desc: 'High‑contrast dial that reads at a glance in any light.',
  },
]

export default function Features() {
  return (
    <section id="specs" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-white tracking-tight text-center"
        >
          Made to wear. Built to last.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.05] transition"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-white/10 text-white">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg">{title}</h3>
                  <p className="mt-1 text-slate-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
