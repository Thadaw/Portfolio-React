import React from "react";
import { Menu, X } from "lucide-react";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen, scrollToSection } =
    useScrollNavigation();

  const menuItems = [
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header className="relative z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-3xl font-black cursor-pointer">
          ROSHAN<span className="text-blue-400">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-white text-base font-medium transition-colors hover:text-blue-400"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-base font-semibold"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 p-8 flex flex-col">
          <button
            className="self-end text-white mb-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>

          <ul className="flex flex-col gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-white text-xl font-semibold hover:text-blue-400"
                >
                  {item.name}
                </button>
              </li>
            ))}

            <li className="pt-6">
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-blue-500 text-white py-4 rounded-xl text-lg font-bold"
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;