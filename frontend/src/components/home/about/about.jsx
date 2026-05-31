// src/components/home/about/AboutSection.jsx
import { personalData } from "@/utils/data/personal-data";

function About() {
  return (
    <section id="about" className="my-12 lg:my-16 relative">
      {/* Side Label - Hidden on mobile */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md font-bold">
          ABOUT ME
        </span>
        <span className="h-36 w-0.5 bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Profile Image Section */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            <img
              src={personalData.profile} 
              alt="Devesh Kumar"
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 border-2 border-violet-500/30 w-75 h-75 object-cover shadow-2xl hover:scale-105"
            />
          </div>
        </div>

        {/* Biography Section */}
        <div className="order-2 lg:order-1">
          <h2 className="text-[#16f2b3] text-2xl font-bold mb-4 uppercase tracking-wider">
            Who I am?
          </h2>
          <div className="text-gray-300 text-base lg:text-lg leading-relaxed space-y-4">
            <p>{personalData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;