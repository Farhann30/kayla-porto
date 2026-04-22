import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[600px] flex">
      {/* Backgrounds */}
      <div className="w-[45%] bg-[#0f0f0f]"></div>
      <div className="w-[55%] bg-[#9d1010]"></div>

      {/* Content Container */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        <div className="grid md:grid-cols-2 w-full items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white pr-8 z-10"
          >
            <h2 className="text-script-primary text-[100px] leading-[0.8] drop-shadow-md mb-8 ml-[-20px]">
              Contact
            </h2>
            <p className="text-gray-300 font-light mb-12 text-sm tracking-wide">
              Thank you for viewing this portfolio!
            </p>

            <div className="flex gap-6 mb-16">
              <div className="w-0.5 bg-white h-32 opacity-70"></div>
              <div className="flex flex-col justify-between py-1 text-sm font-light text-gray-200">
                <p>+62 857 9920 9279</p>
                <p>kayla.hadianinda@gmail.com</p>
                <a href="https://www.linkedin.com/in/kaylahildaa11" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9d1010] transition-colors">LinkedIn</a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-12 items-center">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-white overflow-hidden p-1 flex items-center justify-center">
                   <img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png" alt="Tiktok" className="w-full h-full object-cover" />
                 </div>
                 <div className="text-xs font-light space-y-1">
                   <a href="https://www.tiktok.com/@kayyylaaah" target="_blank" rel="noopener noreferrer" className="block hover:underline">@kayyylaaah</a>
                   <a href="https://www.tiktok.com/@key.liesss" target="_blank" rel="noopener noreferrer" className="block hover:underline">@key.liesss</a>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-white overflow-hidden p-1 flex items-center justify-center">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="w-full h-full object-cover" />
                 </div>
                 <div className="text-xs font-light">
                   <a href="https://www.instagram.com/kaylahildaa" target="_blank" rel="noopener noreferrer" className="block hover:underline">@kaylahildaa</a>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] w-full z-10 relative mt-16 md:mt-0"
          >
             <div className="absolute inset-0 bg-black shadow-2xl overflow-hidden ml-0 md:-ml-20">
               <img src="/images/kayla porto foto/HERO 12/HERO 12.png" alt="Contact Kayla" className="w-full h-full object-cover opacity-90" />
             </div>
          </motion.div>
        </div>
      </div>
      
      {/* Year */}
      <div className="absolute bottom-8 right-12 text-white/50 text-sm z-20">
        2026
      </div>
    </section>
  )
}
