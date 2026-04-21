import { motion } from 'framer-motion'

export default function SocialMediaSpecialist() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <div className="mb-8">
            <h2 className="text-script-primary text-6xl md:text-[80px] leading-[0.8] drop-shadow-md">
              Social Media
            </h2>
            <h2 className="text-primary font-serif italic font-bold text-3xl md:text-5xl mt-2 ml-12">
              Specialist
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed font-light text-[15px]">
            During my Community Service Program (KKN) at Hasanuddin University, I led the digital documentation and publication team to enhance regional visibility. I developed a creative content strategy for TikTok and Instagram that successfully bridged local activities with a broader digital audience. Through strategic trend adaptation and engaging storytelling, I achieved a viral milestone of 4M+ views on a single TikTok video, significantly increasing organic engagement for the project. This experience sharpened my ability to identify viral trends and produce high-impact content that captures mass attention.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 flex justify-center gap-4 md:gap-8 overflow-x-auto pb-8 snap-x"
        >
          {/* Mockup 1 */}
          <div className="relative">
            <div className="w-48 md:w-56 h-[400px] md:h-[480px] border-4 border-gray-800 rounded-[2.5rem] overflow-hidden flex-shrink-0 snap-center bg-black relative shadow-2xl">
              <img src="/images/kayla porto foto/HERO 6/HERO 6.png" className="w-full h-full object-cover" alt="Tiktok KKN 1" />
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-primary font-serif font-bold text-sm underline">Click Here!</a>
            </div>
          </div>
          {/* Mockup 2 */}
          <div className="relative">
            <div className="w-48 md:w-56 h-[400px] md:h-[480px] border-4 border-gray-800 rounded-[2.5rem] overflow-hidden flex-shrink-0 snap-center bg-black relative shadow-2xl">
              <img src="/images/kayla porto foto/HERO 6/HERO 6.1.png" className="w-full h-full object-cover" alt="IG KKN" />
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-primary font-serif font-bold text-sm underline">Click Here!</a>
            </div>
          </div>
          {/* Mockup 3 */}
          <div className="relative">
            <div className="w-48 md:w-56 h-[400px] md:h-[480px] border-4 border-gray-800 rounded-[2.5rem] overflow-hidden flex-shrink-0 snap-center bg-black relative shadow-2xl">
              <img src="/images/kayla porto foto/HERO 6/HERO 6.2.png" className="w-full h-full object-cover" alt="Tiktok KKN 2" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
