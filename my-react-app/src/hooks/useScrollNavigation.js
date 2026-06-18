import { useState } from "react";

/**
 * Custom hook for handling scroll navigation and menu state
 * @returns {Object} - { isMenuOpen, setIsMenuOpen, scrollToSection }
 */
export const useScrollNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    setIsMenuOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    isMenuOpen,
    setIsMenuOpen,
    scrollToSection,
  };
};
