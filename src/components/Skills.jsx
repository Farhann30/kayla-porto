import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Skills() {
  const skills = [
    "Content Strategy",
    "Content Planning",
    "Video Editing",
    "Viral Growth",
    "Adaptibility",
    "Market Research"
  ]

  const redBoxTools = [
    { name: "TikTok", icon: "https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png" },
    { name: "Canva", icon: "https://cdn-icons-png.flaticon.com/512/3128/3128304.png" },
    { name: "Instagram", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" },
    { name: "CapCut", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.png" },
    { name: "VN", icon: "CSS" },
    { name: "Snapseed", icon: "https://img.icons8.com/color/512/snapseed.png" },
    { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Gemini", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
    { name: "Word", icon: "https://img.icons8.com/color/512/microsoft-word-2019--v2.png" },
    { name: "PowerPoint", icon: "https://img.icons8.com/color/512/microsoft-powerpoint-2019--v1.png" }
  ]

  const googleTools = [
    "https://img.icons8.com/color/512/google-drive--v2.png",
    "https://img.icons8.com/color/512/google-docs--v2.png",
    "https://img.icons8.com/color/512/google-sheets.png",
    "https://img.icons8.com/color/512/google-slides.png",
    "https://img.icons8.com/color/512/gmail-new.png",
    "https://img.icons8.com/color/512/google-meet--v2.png",
    "https://img.icons8.com/color/512/google-calendar--v2.png",
    "https://img.icons8.com/color/512/google-chat.png"
  ]

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col gap-16">
        {/* Top Side - Text & Skills */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-script-primary text-6xl md:text-[100px] leading-[0.8] mb-2 drop-shadow-md">
                <span className="block">Personal</span>
                <span className="block ml-12">Skills</span>
              </h2>
              <h2 className="text-script-primary text-5xl md:text-[80px] leading-[0.8] drop-shadow-md relative mt-[-20px] ml-48">
                <span className="text-3xl">&</span> Tools
              </h2>
              <div className="border-b-2 border-[#9d1010]/50 mt-6 mb-8 w-3/4"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-y-8 gap-x-4 pt-4 md:pt-12"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <Heart className="text-[#9d1010] fill-[#9d1010] w-6 h-6 flex-shrink-0" />
                <span className="text-white font-serif font-bold text-lg md:text-xl">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Side - Tools Rectangle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden shadow-2xl w-full"
        >
          {/* Red Box */}
          <div className="bg-[#9d1010] w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
              <h3 className="text-white text-2xl md:text-3xl font-serif font-bold text-center mb-8 md:mb-10 tracking-wide drop-shadow-md">
                Digital Toolbox
              </h3>
              
              {/* Compact Icon Grid Layout */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-5 w-full max-w-[400px] mx-auto">
                {redBoxTools.map((tool, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col items-center gap-1.5 md:gap-2 w-[52px] md:w-16 group cursor-pointer"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl p-1.5 md:p-2 flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0 group-hover:-translate-y-1 transition-transform duration-300">
                      {tool.icon === "CSS" ? (
                        <span className="text-black font-black text-[10px] md:text-xs tracking-tighter">VN</span>
                      ) : (
                        <img src={tool.icon} alt={tool.name} className="w-full h-full object-cover rounded-lg" />
                      )}
                    </div>
                    <span className="text-white text-[9px] md:text-[11px] font-medium text-center break-words w-full leading-tight opacity-90 group-hover:opacity-100 transition-opacity">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* White Box */}
          <div className="bg-white w-full md:w-1/2 p-8 flex flex-col items-center justify-center relative min-h-[350px] md:min-h-[400px] overflow-hidden">
             {/* Animated circular layout for Google Workspace */}
             <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                
                {/* Center Logo */}
                <div className="absolute inset-0 m-auto w-[150px] h-[40px] z-10 flex items-center justify-center">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg" className="w-full h-full object-cover" alt="Workspace" />
                </div>
                
                {/* Thin dashed circle path */}
                <div className="absolute inset-0 m-auto w-[220px] h-[220px] rounded-full border-[1.5px] border-dashed border-gray-300"></div>
                
                {googleTools.map((icon, idx) => {
                  const angle = (idx * (360 / googleTools.length)) * (Math.PI / 180);
                  const radius = 110;
                  
                  return (
                    <motion.div 
                      key={idx}
                      className="absolute top-1/2 left-1/2 w-12 h-12 shadow-md rounded-xl bg-white p-2 z-20 flex items-center justify-center"
                      style={{ 
                        marginTop: '-24px',
                        marginLeft: '-24px',
                      }}
                      initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                      whileInView={{ 
                        x: Math.cos(angle) * radius, 
                        y: Math.sin(angle) * radius,
                        opacity: 1,
                        scale: 1
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1, type: "spring", stiffness: 50 }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <img src={icon} alt="icon" className="w-full h-full object-cover" />
                      </div>
                    </motion.div>
                  );
                })}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
