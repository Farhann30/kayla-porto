import { motion } from 'framer-motion'

export default function VolunteeringExperience() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-center">
        {/* Left - Photo Collage */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]"
        >
          {/* Large Vertical */}
          <div className="h-full rounded-sm overflow-hidden shadow-2xl bg-[#222]">
            <img src="/images/kayla porto foto/HERO 11/HERO 11.png" alt="Lanyard" className="w-full h-full object-cover" />
          </div>
          {/* Two Horizontal */}
          <div className="flex flex-col gap-4 h-full">
            <div className="h-1/2 rounded-sm overflow-hidden shadow-2xl bg-[#222]">
              <img src="/images/kayla porto foto/HERO 11/HERO 11.1.png" alt="Team" className="w-full h-full object-cover object-top" />
            </div>
            <div className="h-1/2 rounded-sm overflow-hidden shadow-2xl bg-[#222]">
              <img src="/images/kayla porto foto/HERO 11/HERO 11.2.png" alt="Group" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Right - Text and Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 items-center"
        >
          <div className="flex-1">
             <h2 className="text-script-primary text-6xl md:text-[80px] leading-[0.8] drop-shadow-md mb-8">
               Volunteering<br/>
               <span className="ml-12">Experience</span>
             </h2>
             <div className="border-b-2 border-[#9d1010]/50 pb-2 mb-2 inline-block">
               <h3 className="text-[#9d1010] font-serif text-xl md:text-2xl font-bold uppercase tracking-wider">
                 FISIP PKKMB COMITTEE
               </h3>
             </div>
             <h4 className="text-[#9d1010] font-serif text-lg italic font-bold mb-6">
               As a Content Creator
             </h4>
             <p className="text-gray-300 leading-relaxed font-light text-[15px] max-w-sm">
               As a content creator I created and published engaging and informative content to welcome and educate new students about campus life. Coordinated with the team regarding shooting and video during the event as well as editing videos and photos to ensure high quality content.
             </p>
          </div>
          
          <div className="w-48 md:w-56 h-[400px] md:h-[480px] border-[5px] border-gray-800 rounded-[1rem] md:rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-black relative shadow-2xl mt-8 lg:mt-0">
             <img src="/images/kayla porto foto/HERO 11/HERO 11.3.png" className="w-full h-full object-cover" alt="PKKMB Content" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
