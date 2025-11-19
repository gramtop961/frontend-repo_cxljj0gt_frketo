import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.6])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.1])

  return (
    <section aria-label="Regalyn Watches hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_40%,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="relative z-10 text-center px-6 pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white"
        >
          Regalyn Watches
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.05 }}
          className="mt-5 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          Time, distilled. Crafted with surgical-grade steel, sapphire crystal, and a movement you feel more than hear.
        </motion.p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#buy" className="px-6 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Buy now</a>
          <a href="#specs" className="px-6 py-3 rounded-full bg-slate-800/60 text-white border border-white/10 hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Explore</a>
        </div>
      </div>

      <div className="relative w-full max-w-5xl aspect-[16/9] mt-20">
        <motion.img
          src="/regalyn-watch.svg"
          alt="Regalyn watch hero"
          className="w-full h-auto drop-shadow-[0_40px_120px_rgba(59,130,246,0.35)] select-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -120]) }}
        />
      </div>
    </section>
  )
}
