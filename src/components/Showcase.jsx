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
          className="order-1 md:order-2 flex justify-center items-center relative w-full h-[450px] md:h-[550px] mt-12 md:mt-0 max-w-[400px] md:max-w-[500px] mx-auto"
        >
          {/* Mockup 1 (Left Back) */}
          <div className="absolute left-[0%] md:left-[-15%] z-10 -rotate-12 scale-90 hover:z-40 hover:scale-105 hover:-rotate-6 transition-all duration-500 w-40 md:w-56 h-[320px] md:h-[480px] border-4 border-gray-800 rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-black shadow-xl cursor-pointer">
            <img src="/images/kayla porto foto/HERO 4/HERO 4.PNG" className="w-full h-full object-cover" alt="IG Profile" />
          </div>
          
          {/* Mockup 3 (Right Back) */}
          <div className="absolute right-[0%] md:right-[-15%] z-20 rotate-12 scale-90 hover:z-40 hover:scale-105 hover:rotate-6 transition-all duration-500 w-40 md:w-56 h-[320px] md:h-[480px] border-4 border-gray-800 rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-black shadow-xl cursor-pointer">
            <img src="/images/kayla porto foto/HERO 4/HERO 4.2.PNG" className="w-full h-full object-cover" alt="IG Video" />
          </div>

          {/* Mockup 2 (Center Front) */}
          <div className="absolute left-[50%] -translate-x-1/2 z-30 scale-100 hover:scale-105 transition-all duration-500 w-48 md:w-60 h-[380px] md:h-[500px] border-4 border-gray-800 rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer">
            <img src="/images/kayla porto foto/HERO 4/HERO 4.1.PNG" className="w-full h-full object-cover" alt="IG Reels" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm">
               <a href="https://www.instagram.com/kaylahildaa" target="_blank" rel="noopener noreferrer" className="text-primary font-serif font-bold text-sm underline whitespace-nowrap">Click Here!</a>
            </div>
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
          className="order-1 md:order-2 flex justify-center items-center relative w-full h-[450px] md:h-[550px] mt-12 md:mt-0 max-w-[350px] md:max-w-[450px] mx-auto"
        >
          {/* Mockup 1 (Back Left) */}
          <div className="absolute left-[0%] md:left-[-10%] top-[10%] z-10 -rotate-6 scale-90 hover:z-30 hover:scale-105 hover:-rotate-3 transition-all duration-500 w-44 md:w-56 h-[350px] md:h-[480px] border-4 border-gray-800 rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-black shadow-xl cursor-pointer">
            <img src="/images/kayla porto foto/HERO 5/HERO 5.png" className="w-full h-full object-cover" alt="Tiktok Profile" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm">
              <a href="https://www.instagram.com/folka.original" target="_blank" rel="noopener noreferrer" className="text-primary font-serif font-bold text-sm underline whitespace-nowrap">Click Here!</a>
            </div>
          </div>
          
          {/* Mockup 2 (Front Right) */}
          <div className="absolute right-[0%] md:right-[-10%] top-[0%] z-20 rotate-6 scale-100 hover:scale-105 transition-all duration-500 w-48 md:w-60 h-[380px] md:h-[500px] border-4 border-gray-800 rounded-[1.25rem] overflow-hidden flex-shrink-0 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer">
            <img src="/images/kayla porto foto/HERO 5/HERO 5.1.png" className="w-full h-full object-cover" alt="Tiktok Video" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm">
              <a href="https://www.instagram.com/reel/CwKWml3NF9S/?igsh=MWhmNzllbXZhdXVpcw==" target="_blank" rel="noopener noreferrer" className="text-primary font-serif font-bold text-sm underline whitespace-nowrap">Click Here!</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
