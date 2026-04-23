import { motion } from 'framer-motion'
import ImageWithSkeleton from './ImageWithSkeleton';

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
          className="order-1 md:order-2 flex justify-center items-center relative w-full h-[450px] md:h-[550px] mt-12 md:mt-0 max-w-[400px] md:max-w-[500px] mx-auto"
        >
          {/* Mockup 1 (Back Left) */}
          <div className="absolute left-[0%] md:left-[-15%] z-10 -rotate-12 scale-90 hover:z-40 hover:scale-105 hover:-rotate-6 transition-all duration-500 w-40 md:w-56 h-[320px] md:h-[480px] border-4 border-gray-800 rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-black shadow-xl cursor-pointer">
            <ImageWithSkeleton src="/images/kayla porto foto/HERO 6/HERO 6.png" className="w-full h-full object-cover" alt="Tiktok KKN 1" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm">
              <a href="https://www.tiktok.com/@kknt114_moncongloebulu?_r=1&_t=ZS-95kfv5Xcjp7" target="_blank" rel="noopener noreferrer" className="text-primary font-serif font-bold text-sm underline whitespace-nowrap">Click Here!</a>
            </div>
          </div>
          
          {/* Mockup 3 (Back Right) */}
          <div className="absolute right-[0%] md:right-[-15%] z-20 rotate-12 scale-90 hover:z-40 hover:scale-105 hover:rotate-6 transition-all duration-500 w-40 md:w-56 h-[320px] md:h-[480px] border-4 border-gray-800 rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-black shadow-xl cursor-pointer">
            <ImageWithSkeleton src="/images/kayla porto foto/HERO 6/HERO 6.2.png" className="w-full h-full object-cover" alt="Tiktok KKN 2" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm">
              <a href="https://vt.tiktok.com/ZS9RKoeeT/" target="_blank" rel="noopener noreferrer" className="text-primary font-serif font-bold text-sm underline whitespace-nowrap">Click Here!</a>
            </div>
          </div>

          {/* Mockup 2 (Front Center) */}
          <div className="absolute left-[50%] -translate-x-1/2 z-30 scale-100 hover:scale-105 transition-all duration-500 w-48 md:w-60 h-[380px] md:h-[500px] border-4 border-gray-800 rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer">
            <ImageWithSkeleton src="/images/kayla porto foto/HERO 6/HERO 6.1.png" className="w-full h-full object-cover" alt="IG KKN" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm">
              <a href="https://www.instagram.com/kknt114_moncongloebulu" target="_blank" rel="noopener noreferrer" className="text-primary font-serif font-bold text-sm underline whitespace-nowrap">Click Here!</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
