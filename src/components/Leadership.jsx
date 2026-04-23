import { motion } from 'framer-motion'
import ImageWithSkeleton from './ImageWithSkeleton';

export default function Leadership() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Leadership Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-script-primary text-6xl md:text-[90px] leading-[0.8] drop-shadow-md mb-8">
            Leadership
          </h2>
          <div className="flex bg-[#222] shadow-2xl rounded-sm overflow-hidden h-64 border border-gray-800">
             <div className="w-1/2 grayscale hover:grayscale-0 transition-all duration-500">
               <ImageWithSkeleton src="/images/kayla porto foto/HERO 10/HERO 10.png" alt="Team Huddle" className="w-full h-full object-cover" />
             </div>
             <div className="w-1/2 ">
               <ImageWithSkeleton src="/images/kayla porto foto/HERO 10/HERO 10.1.png" alt="Uniform" className="w-full h-full object-cover grayscale" />
             </div>
          </div>
        </motion.div>

        {/* Right - Project Management Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="pt-4 md:pt-16"
        >
          <div className="border-b-2 border-[#9d1010]/50 pb-2 mb-6 inline-block w-full">
            <h3 className="text-[#9d1010] font-serif text-2xl md:text-3xl font-bold">
              Public Relations Coordinator
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed font-light text-[14px]">
            During my tenure as the Public Relations Coordinator, I led a dedicated team of five individuals to manage and execute new events while strengthening the organization's digital presence. I developed and implemented effective communication strategies, including managing social media content and video production for routine training and major celebrations. By coordinating four major work programs in a single period, I successfully improved relations with both internal and external stakeholders and enhanced the organization's overall image.
          </p>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-3 gap-8 items-center pt-12 border-t border-gray-800">
        {/* Public Relations Coordinator Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-script-primary text-5xl md:text-[70px] leading-[0.8] drop-shadow-md mb-6 text-left md:text-right">
            Project Management
          </h2>
          <p className="text-gray-300 leading-relaxed font-light text-[15px]">
            As the Project Officer for "Party Games," a strategic athlete development program, I directed a committee of 12 people across six organizing divisions. I successfully secured key partnerships with sponsors and media partners while monitoring finances to exceed our initial budget target. Additionally, I improved team performance through regular evaluations and constructive recommendations, resulting in a highly successful and well-organized event for the management committee.
          </p>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center mt-8 md:mt-0"
        >
          <div className="w-48 md:w-56 h-[400px] md:h-[480px] border-[5px] border-gray-800 rounded-[1rem] md:rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-black relative shadow-2xl">
            <ImageWithSkeleton src="/images/kayla porto foto/HERO 10/HERO 10.2.png" className="w-full h-full object-cover" alt="PR Mockup" />
          </div>
          <div className="text-center mt-4">
          </div>
        </motion.div>

        {/* Team High Five Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="h-full flex items-center mt-8 md:mt-0"
        >
          <div className="w-full h-64 md:h-[480px] rounded-sm overflow-hidden shadow-2xl bg-gray-900 border-2 border-gray-800">
             <ImageWithSkeleton src="/images/kayla porto foto/HERO 10/HERO 10.3.png" alt="High Five" className="w-full h-full object-cover grayscale" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
