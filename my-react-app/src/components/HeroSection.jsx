import { FaDownload } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
import resume from "../assets/resume.pdf";


const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleHireClick = () => {
    console.log("Hire Me button clicked!");
    navigate("/hire");
  };
  return (
    <section className="relative w-full" data-aos="zoom-in-up">
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-3/4 bg-gradient-to-br from-[#0c7fac] blur-2xl opacity-40"></div>

        <div className="h-20 w-3/4 bg-gradient-to-r from-[#289eff] blur-2xl opacity-40"></div>
      </div>

      <div className="w-full px-5 sm:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 max-w-2xl md:max-w-3xl lg:max-w-none mx-auto">
          
          <div className="lg:py-6">
            <div className="text-center lg:text-left">
              <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                HI, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">
                  ROSHAN
                </span>
              </h1>
            </div>

            <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
              I'm a passionate web developer with expertise in React,
              Tailwind CSS, and JavaScript. I create responsive and visually
              appealing websites that provide seamless user experiences.
              Let's work together to bring your ideas to life!
            </p>

            <div className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max lg:mx-0">
              <button 
                onClick={handleHireClick}
                className="px-6 py-3 md:px-7 bg-primary text-white rounded-full relative group w-full sm:w-max flex justify-center">
                <span className='absolute inset-0  rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary boarder-2 border-transparent'>
                </span>
                <span className='relative flex items-center justify-center text-white'>
                Hire Me
                </span>
              </button>

              <button className="px-6 py-3 md:px-7 border border-primary rounded-full relative-group w-full sm:w-max flex justify-center">
                <div className='hover:scale-105 transition-all ease-in-out flex justify-center items-center relative'>
                  <div className='svg-container'>
                    <FaDownload size={18} className='text-primary' />
                    <div className='download-loader text-white hidden'>
                    </div>
                  </div>
                  <a href={resume}
                   download="Roshan_thapa_resume.pdf"
                   className='pl-2 text-primary'>
                    Download CV
                  </a>
                </div>
              </button>
            </div>
            </div>
          <div className='lg:h-full md:flex'>
            <div className='flex w-full h-96 min-h-96 lg:min-h-[none] lg:w-full lg:h-full lg:h-full items-center justify-end relative'>
              <div className='absolute h-full z-0 p-2 top-1/2 -translate-y-1/2  w-5/6 right-0 h-[calc(80%=20px)] bg-linear-to-r opacity-25 from-[#0c64ac] to-primary blur-2xl'>
              </div>
              <div className='absolute h-full z-10 p-2 ml-auto -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-[40%_70%_50%_30%/40%_50%_60%_60%] shadow-lg border border-cyan-500'>
              <img 
              src={hero} 
              alt="Hero pic"
              width="500"
              height="auto"
              loading="lazy"
              className='w-full h-full rounded-[40%_70%_50%_30%/40%_50%_60%_60%]     object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;