export default function Footer() {
  return (
    <footer className="py-14 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
        <p aria-label="Copyright">© {new Date().getFullYear()} Regalyn. All rights reserved.</p>
        <nav aria-label="Footer links" className="flex items-center gap-6">
          <a href="#specs" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">Specs</a>
          <a href="#buy" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">Buy</a>
          <a href="#support" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">Support</a>
        </nav>
      </div>
    </footer>
  )
}
