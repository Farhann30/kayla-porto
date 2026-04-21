import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Showcase from './components/Showcase'
import SocialMediaSpecialist from './components/SocialMediaSpecialist'
import CommunityServiceDigital from './components/CommunityServiceDigital'
import CommunityServiceProject from './components/CommunityServiceProject'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import VolunteeringExperience from './components/VolunteeringExperience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-[#9d1010] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Showcase />
        <SocialMediaSpecialist />
        <CommunityServiceDigital />
        <CommunityServiceProject />
        <Experience />
        <Leadership />
        <VolunteeringExperience />
      </main>
      
      <Contact />
    </div>
  )
}

export default App
