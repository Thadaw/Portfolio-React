import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const HireSection = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback if user is not on home page
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#111827] text-white px-6">
      <div className="max-w-3xl w-full bg-[#1f2937] rounded-2xl shadow-lg p-8 md:p-12">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Hire Me 🚀
        </h1>

        <p className="text-gray-300 text-center mb-8">
          I am a passionate Frontend Developer skilled in React, Tailwind CSS,
          and JavaScript. I build responsive, modern, and high-performance web
          applications.
        </p>

        {/* Skills / Services */}
        <div className="grid md:grid-cols-2 gap-4 text-gray-300 mb-8">
          <div className="bg-[#111827] p-4 rounded-xl">
            ✔ React / Vite Projects
          </div>
          <div className="bg-[#111827] p-4 rounded-xl">
            ✔ Responsive UI Design
          </div>
          <div className="bg-[#111827] p-4 rounded-xl">
            ✔ Portfolio Websites
          </div>
          <div className="bg-[#111827] p-4 rounded-xl">
            ✔ API Integration
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-center mb-8">
          <p className="flex items-center justify-center gap-2 text-gray-300">
            <FaEnvelope size={18} /> magarr800@example.com
          </p>

          <p className="flex items-center justify-center gap-2 text-gray-300">
            <FaPhone size={18} /> +977-9846195682
          </p>

          <p className="flex items-center justify-center gap-2 text-gray-300">
            <FaGithub size={18} /> github.com/yourname
          </p>

          <p className="flex items-center justify-center gap-2 text-gray-300">
            <FaLinkedin size={18} /> linkedin.com/in/yourname
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-full border border-gray-500 hover:border-white transition"
          >
            Go Back Home
          </button>

          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full bg-primary hover:opacity-90 transition"
          >
            Contact Me
          </button>

        </div>
      </div>
    </section>
  );
};

export default HireSection;