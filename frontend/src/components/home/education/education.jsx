import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import experienceAnimation from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
function education() {
  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Background SVG - Standard img tag for Vite */}
      <img
        src="/section.svg"
        alt="Section Background"
        className="absolute top-0 -z-10 w-full max-w-[1572px]"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Education 
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Lottie Animation Side */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experienceAnimation} />
            </div>
          </div>

          {/* Experience List Side */}
          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <GlowCard
                  key={education.id}
                  identifier={`experience-${education.id}`}
                >
                  <div className="p-3 relative">
                    <img
                      src="/blur-23.svg"
                      alt="Card Blur"
                      className="absolute bottom-0 opacity-80 w-full"
                    />

                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {education.duration}
                      </p>
                    </div>

                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {education.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default education;
