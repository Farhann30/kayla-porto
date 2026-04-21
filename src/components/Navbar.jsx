import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:px-12 flex justify-between items-center z-50 bg-black/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-xl font-medium tracking-wide"
      >
        Kayla Hilda
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="hidden md:flex gap-8 text-white/80 text-sm font-medium"
      >
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </motion.div>
    </nav>
  )
}
