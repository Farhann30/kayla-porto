import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-script-primary text-7xl md:text-[100px] mb-2 drop-shadow-md">About Me</h2>
        <h3 className="text-2xl text-primary font-medium tracking-wide">I'm Kayla Hilda H., S.IP</h3>
      </motion.div>
      
      {/* Content Grid */}
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
        {/* Left Column - Text & Education */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 mb-16 leading-relaxed font-light text-[15px] md:text-base">
            I am a recent graduate in Government Studies from Hasanuddin University with a strong interest in marketing and communication. I have experience in content creation, brand collaboration, and direct outreach, combined with a structured approach to planning and execution. I am passionate about creating impactful campaigns, building meaningful connections, and continuously developing my skills in a dynamic and results-driven environment.
          </p>

          <div className="mb-8">
            <h2 className="text-script-primary text-6xl md:text-[80px] mb-2 drop-shadow-md">Education</h2>
            <div className="border-b-2 border-[#9d1010]/50 pb-2 mb-4">
              <h4 className="text-primary text-xl font-medium">Universitas Hasanuddin</h4>
            </div>
            <div className="text-gray-300 font-light space-y-2 text-[14px]">
              <p>Bachelor of Government Science | 2022 - 2026</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>GPA: 3.97 / 4.00 | CUMLAUDE</li>
                <li>Focus: Public Services, Government Communication</li>
                <li>Research Experience: Social Mapping Project (Gowa District)</li>
                <li>Academic Activities: Comparative Study (IPDN), MUN Delegate (Nigeria - ITU Council)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Images and Tags */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative pt-12 md:pt-0"
        >
          {/* Images container */}
          <div className="flex bg-[#9d1010] p-4 md:p-8 pt-12 md:pt-16 rounded-sm shadow-2xl ml-4 md:ml-12 relative min-h-[400px]">
            {/* Left Image (Graduation) - breaking out of container */}
            <div className="absolute left-[-20px] md:left-[-60px] top-[-30px] md:top-[-40px] w-48 md:w-64 h-[280px] md:h-[380px] bg-white p-2 md:p-3 rounded-sm shadow-xl z-10">
              <img 
                src="/images/kayla porto foto/HERO 2/HERO 2.JPEG" 
                alt="Graduation" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            {/* Right Image (Casual) */}
            <div className="w-full pl-[40%] md:pl-[45%]">
               <img 
                src="/images/kayla porto foto/HERO 2/HERO 2.1.JPG" 
                alt="Casual" 
                className="w-full h-full object-cover rounded-sm shadow-md"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-12 justify-center md:justify-end">
            <span className="bg-[#e8e8e8] text-[#800000] px-6 py-2 rounded-full font-serif font-bold text-sm shadow-md">Social Media Spesialist</span>
            <span className="bg-[#e8e8e8] text-[#800000] px-6 py-2 rounded-full font-serif font-bold text-sm shadow-md">Marketing Enthusiast</span>
            <span className="bg-[#e8e8e8] text-[#800000] px-6 py-2 rounded-full font-serif font-bold text-sm shadow-md">Content Creator</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
