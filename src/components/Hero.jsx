import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Star element */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute right-[10%] md:right-[20%] top-[30%] text-white"
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L54 40L94 25L60 55L90 90L50 65L10 90L40 55L6 25L46 40L50 0Z" fill="white"/>
        </svg>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Photos in center */}
        <div className="relative w-48 h-64 md:w-64 md:h-80 mb-[-60px] md:mb-[-100px] z-20">
          {/* Photo 1 (Back left) */}
          <motion.img 
            initial={{ opacity: 0, rotate: -25, x: -50 }}
            animate={{ opacity: 1, rotate: -15, x: -20 }}
            transition={{ duration: 0.8 }}
            src="/images/kayla porto foto/HERO 1/HERO 1.1.JPEG" 
            className="absolute inset-0 w-full h-full object-cover rounded shadow-2xl grayscale border-2 border-[#222]"
            alt="Kayla 1" 
          />
          {/* Photo 2 (Back right) */}
          <motion.img 
            initial={{ opacity: 0, rotate: 25, x: 50 }}
            animate={{ opacity: 1, rotate: 15, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/images/kayla porto foto/HERO 1/HERO 1.JPEG" 
            className="absolute inset-0 w-full h-full object-cover rounded shadow-2xl sepia border-2 border-[#222]"
            alt="Kayla 3" 
          />
          {/* Photo 3 (Front center) */}
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/images/kayla porto foto/HERO 1/HERO 1.2.jpg" 
            className="absolute inset-0 w-full h-full object-cover rounded shadow-2xl border-4 border-black grayscale"
            alt="Kayla 2" 
          />
          
          {/* Red circle detail */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute bottom-4 left-4 w-6 h-6 bg-[#9d1010] rounded-full z-30"
          />
        </div>

        {/* Huge Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center z-30 pointer-events-none"
        >
          <h1 className="text-script-primary text-[90px] md:text-[220px] leading-[0.6] drop-shadow-2xl">
            <span className="block ml-[-50px] md:ml-[-250px]">Creative</span>
            <span className="block mr-[-50px] md:mr-[-250px]">Portfolio</span>
          </h1>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-10 md:right-12 text-white/50 text-sm">
        2026
      </div>
    </section>
  )
}
