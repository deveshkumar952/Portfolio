
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Data and Assets
// import { personalData } from "@/utils/data/personal-data";

import './App.css';
import './card.css';

// Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/home/hero/hero";

import ScrollToTop from "./components/helper/scroll-to-top";

import About from './components/home/about/about';
import Experience from './components/home/experience/experience';
import Skills from './components/home/skills/skills';
import ProjectSection from './components/home/projects/projectSection';
import Education from './components/home/education/education';
import ContactSection from './components/home/contact/contactSection';

function App() {
      

  return (
    <div className="bg-[#0d1224] text-white">
      <ToastContainer />
      
      {/* Layout Wrapper */}
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <Navbar />

        {/* Page Content */}
        <div id="main-content">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <ProjectSection />
          <Education />
          <ContactSection />
        </div>

        <ScrollToTop />
      </main>

      <Footer />
    </div>
  );
}

export default App;