import { motion } from 'framer-motion'

export default function CommunityServiceProject() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-[#9d1010] font-serif font-bold text-2xl md:text-3xl mb-4 tracking-wider">
          Community Service Program
        </h2>
        <h3 className="text-script-primary text-8xl md:text-[120px] leading-[0.8] drop-shadow-md mb-8">
          Project
        </h3>
        <p className="text-gray-300 leading-relaxed font-light text-[15px]">
          As the PDD (Publication and Documentation) Coordinator, I led the visual storytelling for the entire Community Service Program (KKN) period. I was responsible for producing two major professional documentaries: one capturing the specific progress and activities within my assigned village, and another larger-scale documentary for the entire sub-district. By managing the end-to-end production process—from filming to final editing—I successfully showcased the project's milestones and community impact to both local stakeholders and university authorities.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 items-center"
      >
        {/* Laptop 1 */}
        <div className="relative w-full max-w-[500px]">
          <div className="w-full aspect-[16/10] bg-[#e5e5e5] rounded-t-xl border-[12px] border-[#e5e5e5] overflow-hidden shadow-2xl relative">
            <img src="/images/kayla porto foto/HERO 8/HERO 8.png" alt="Youtube 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-[110%] ml-[-5%] h-5 bg-[#d4d4d4] rounded-b-xl shadow-xl flex justify-center">
            <div className="w-20 h-1.5 mt-1 bg-[#a3a3a3] rounded-full"></div>
          </div>
          <div className="text-center mt-6">
            <a href="https://youtu.be/zm9WlK1gbLs?si=CIouyQwtFaKVETPJ" target="_blank" rel="noopener noreferrer" className="text-primary font-serif font-bold text-xl underline">Click Here!</a>
          </div>
        </div>

        {/* Laptop 2 */}
        <div className="relative w-full max-w-[500px]">
          <div className="w-full aspect-[16/10] bg-[#e5e5e5] rounded-t-xl border-[12px] border-[#e5e5e5] overflow-hidden shadow-2xl relative">
            <img src="/images/kayla porto foto/HERO 8/HERO 8.1.png" alt="Youtube 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-[110%] ml-[-5%] h-5 bg-[#d4d4d4] rounded-b-xl shadow-xl flex justify-center">
            <div className="w-20 h-1.5 mt-1 bg-[#a3a3a3] rounded-full"></div>
          </div>
          <div className="text-center mt-6">
            <a href="https://drive.google.com/file/d/1B8BWUSTEJgXL-UplNZH332NJAXcWxUBP/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-primary font-serif font-bold text-xl underline">Click Here!</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
