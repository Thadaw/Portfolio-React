import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Project from "./components/Project";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import  HireSection from "./components/HireSection";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <div className='bg-[#111827] min-h-screen'>
      <Header />
      <HeroSection />
      <Education/>
      <Certificates/>
      <AboutSection/>
      <Experience/>
      <Project/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#111827] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire" element={<HireSection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;