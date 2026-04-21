import { motion } from 'framer-motion'

export default function Showcase() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
      {/* Personal Account Section */}
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <h2 className="text-script-primary text-6xl md:text-[80px] leading-[0.8] mb-8 drop-shadow-md">
            Personal Account
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed font-light text-[15px]">
            I actively manage my personal Instagram account as an influencer, focusing on lifestyle inspiration and OOTD (Outfit of the Day) content to build a relatable and aesthetic digital presence.
          </p>
          <p className="text-gray-300 leading-relaxed font-light text-[15px]">
            Complementing my personal branding, I served as a Talent Ambassador for <a href="#" className="text-white underline">@ekrutes.id</a>, where I utilized my on-camera presence to create impactful branding videos. In this role, I produced four Reels per month tailored to specific marketing briefs, effectively bridging the gap between professional corporate messaging and engaging lifestyle-driven content. Beyond content creation, I provided detailed insight reports to analyze performance metrics, ensuring each campaign aligned with the brand's strategic goals. This experience highlights my versatility in balancing the authenticity of an influencer with the structured requirements of a professional marketing representative.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 flex justify-center gap-4 md:gap-8 overflow-x-auto pb-8 snap-x"
        >
          {/* Mockup 1 */}
          <div className="w-48 md:w-56 h-[400px] md:h-[480px] border-4 border-gray-800 rounded-[2.5rem] overflow-hidden flex-shrink-0 snap-center bg-black relative">
            <img src="/images/kayla porto foto/HERO 4/HERO 4.PNG" className="w-full h-full object-cover" alt="IG Profile" />
          </div>
          {/* Mockup 2 */}
          <div className="w-48 md:w-56 h-[400px] md:h-[480px] border-4 border-gray-800 rounded-[2.5rem] overflow-hidden flex-shrink-0 snap-center bg-black relative">
            <img src="/images/kayla porto foto/HERO 4/HERO 4.1.PNG" className="w-full h-full object-cover" alt="IG Reels" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
               <a href="#" className="text-primary font-serif font-bold text-sm underline whitespace-nowrap">Click Here!</a>
            </div>
          </div>
          {/* Mockup 3 */}
          <div className="w-48 md:w-56 h-[400px] md:h-[480px] border-4 border-gray-800 rounded-[2.5rem] overflow-hidden flex-shrink-0 snap-center bg-black relative">
            <img src="/images/kayla porto foto/HERO 4/HERO 4.2.PNG" className="w-full h-full object-cover" alt="IG Video" />
          </div>
        </motion.div>
      </div>

      {/* Content Creator Section */}
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <div className="mb-8">
            <h2 className="text-script-primary text-6xl md:text-[80px] leading-[0.8] drop-shadow-md">Content</h2>
            <h2 className="text-script-primary text-4xl md:text-[50px] leading-[0.8] drop-shadow-md ml-12">Creator & Writer</h2>
          </div>
          <p className="text-gray-300 leading-relaxed font-light text-[15px]">
            In my role as a Content Creator and Writer for <a href="#" className="text-white underline">Folka.original</a>, a brand specializing in mobile phones and electronic services, I was responsible for developing data-driven marketing content. I conducted thorough market and competitor research to identify emerging trends and user preferences, ensuring all promotional materials aligned perfectly with the target audience's interests. By translating these insights into creative strategies, I successfully designed and shared over 8 high-engagement content pieces on Instagram that adhered to brand guidelines while effectively driving product awareness. This experience allowed me to refine my skills in planning content based on data analysis to achieve specific marketing goals.
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
            <div className="w-48 md:w-60 h-[400px] md:h-[500px] border-4 border-gray-800 rounded-[2.5rem] overflow-hidden flex-shrink-0 snap-center bg-black relative shadow-2xl">
              <img src="/images/kayla porto foto/HERO 5/HERO 5.png" className="w-full h-full object-cover" alt="Tiktok Profile" />
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-primary font-serif font-bold text-sm underline">Click Here!</a>
            </div>
          </div>
          {/* Mockup 2 */}
          <div className="relative">
            <div className="w-48 md:w-60 h-[400px] md:h-[500px] border-4 border-gray-800 rounded-[2.5rem] overflow-hidden flex-shrink-0 snap-center bg-black relative shadow-2xl">
              <img src="/images/kayla porto foto/HERO 5/HERO 5.1.png" className="w-full h-full object-cover" alt="Tiktok Video" />
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-primary font-serif font-bold text-sm underline">Click Here!</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
