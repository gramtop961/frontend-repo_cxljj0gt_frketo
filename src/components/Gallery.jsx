import { motion } from 'framer-motion'

const images = [
  '/regalyn-watch.svg',
  '/regalyn-watch.svg',
  '/regalyn-watch.svg',
]

export default function Gallery() {
  return (
    <section aria-label="Gallery" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">See it from every angle</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img src={src} alt={`Regalyn watch ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
