import { motion } from 'framer-motion'
import ImageWithSkeleton from './ImageWithSkeleton';

export default function CommunityServiceDigital() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-script-primary text-6xl md:text-[90px] leading-[0.8] drop-shadow-md">
          Community Service
        </h2>
        <div className="flex justify-between items-center mt-2">
           <h3 className="text-script-primary text-5xl md:text-[70px] leading-[0.8] drop-shadow-md ml-12 md:ml-32">
             Program
           </h3>
           <h4 className="text-script-primary text-4xl md:text-[50px]">
             Digital Innovation
           </h4>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Laptop & Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-8 max-w-lg mx-auto">
            <div className="w-full aspect-[16/10] bg-[#ddd] rounded-t-xl border-[8px] border-[#ddd] overflow-hidden shadow-2xl relative">
              <ImageWithSkeleton src="/images/kayla porto foto/HERO 7/HERO 7.png" alt="Suaraku" className="w-full h-full object-cover" />
            </div>
            <div className="w-[110%] ml-[-5%] h-4 bg-[#bbb] rounded-b-xl shadow-xl flex justify-center">
              <div className="w-16 h-1 bg-[#999] rounded-b-md"></div>
            </div>
            <div className="text-center mt-6">
              <a href="https://www.moncongloebulu.com/#/pengaduan" target="_blank" rel="noopener noreferrer" className="text-primary font-serif font-bold text-xl underline">Click Here!</a>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed font-light text-[15px]">
            As part of my commitment to modernizing governance, I developed the Digital Public Complaint Service, an online portal integrated into village websites to bridge the communication gap between citizens and local authorities. To ensure widespread accessibility, I proactively distributed and installed barcode posters in every hamlet (dusun), allowing residents to easily report issues via their smartphones. This project successfully increased government responsiveness and transparency while demonstrating my ability to implement practical, digital-based service innovations at the community level.
          </p>
        </motion.div>

        {/* Right - Images grid & Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-4 mb-8">
            <ImageWithSkeleton src="/images/kayla porto foto/HERO 7/HERO 7.1.png" alt="Group" className="col-span-2 w-full h-48 object-cover rounded-md shadow-md grayscale" />
            <ImageWithSkeleton src="/images/kayla porto foto/HERO 7/HERO 7.2.png" alt="Individual" className="w-full h-40 object-cover rounded-md shadow-md grayscale" />
            <ImageWithSkeleton src="/images/kayla porto foto/HERO 7/HERO 7.3.png" alt="Table" className="w-full h-40 object-cover rounded-md shadow-md" />
          </div>
          <p className="text-gray-300 leading-relaxed font-light text-[15px]">
            As the Sub-district Secretary during my Community Service Program (KKN), I streamlined administrative workflows across three villages by managing daily attendance for all students and maintaining high disciplinary standards. I was responsible for drafting essential formal documentation, including official letters for sub-district events, while ensuring seamless communication between team members and local stakeholders. My role was pivotal in ensuring that all administrative tasks and reporting were executed with high accountability and remained strictly on schedule.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
