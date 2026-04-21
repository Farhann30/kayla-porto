import { motion } from 'framer-motion'

export default function Experience() {
  const images = [
    "/images/kayla porto foto/HERO 9/HERO 9.png",
    "/images/kayla porto foto/HERO 9/HERO 9.1.png",
    "/images/kayla porto foto/HERO 9/HERO 9.2.png",
    "/images/kayla porto foto/HERO 9/HERO 9.3.png",
    "/images/kayla porto foto/HERO 9/HERO 9.4.png"
  ]

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-script-primary text-7xl md:text-[120px] leading-[0.8] drop-shadow-md mb-8">
          Experience
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto mb-12"
      >
        {images.map((src, idx) => (
          <div key={idx} className="h-28 md:h-40 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-800 group cursor-pointer relative flex-shrink-0">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img src={src} className="w-auto h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={`Experience ${idx + 1}`} />
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-gray-300 leading-relaxed font-serif text-[15px] md:text-[17px]">
          My experience in joining the Model United Nations (MUN) as a delegate from Nigeria was a very valuable experiences. As a delegate, I delved into various global issues faced by Nigeria, in the ITU council with the theme "Bridging the Digital Divide: Equal and Universal Access to the Internal" During the conference, I actively participated in debates, negotiations, and resolution drafting, which enhanced my communication, critical thinking, and teamwork skills. Interacting with other delegates from different backgrounds and countries also opened new horizons and expanded my international network.
        </p>
      </motion.div>
    </section>
  )
}
