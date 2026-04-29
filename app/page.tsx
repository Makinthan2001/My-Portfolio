import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SkillsAnimation from '@/components/SkillsAnimation'
import About from '@/components/About'
import Skills from '@/components/Skill'
import EducationSection from '@/components/EducationSection'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className="relative w-full min-h-screen antialiased transition-colors duration-300 overflow-x-hidden">
     {/* Left Sidebar - Skills Animation */}
     <SkillsAnimation />
     
     {/* Main Content with left margin for sidebar */}
     <div className='relative z-10 ml-0 md:ml-24 w-full md:w-[calc(100%-6rem)] overflow-x-hidden'>
       <Navbar />
       
       {/* Scrollable Content */}
       <main className="w-full max-w-full overflow-x-hidden">
         <Hero />
         <About />
         <Skills />
         <Projects />
         {/* <Experience /> */}
         <EducationSection />
         <ContactForm />
         <Footer />
       </main>
     </div>
    </div>
  )
}

export default page
