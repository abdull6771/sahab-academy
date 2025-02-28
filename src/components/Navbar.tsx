
import React, { useState, useEffect } from "react";
import { Menu, X, BookOpen, GraduationCap, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="text-maroon h-8 w-8" />
            <span className="font-bold text-lg md:text-xl whitespace-nowrap">
              SAHAB <span className="text-maroon">ACADEMY</span>
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-maroon transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-maroon transition-colors">
              About
            </a>
            <a href="#sections" className="text-gray-800 hover:text-maroon transition-colors">
              Sections
            </a>
            <a href="#welcome" className="text-gray-800 hover:text-maroon transition-colors">
              Welcome
            </a>
            <Button className="bg-maroon hover:bg-maroon-dark text-white">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-[300px] opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-800 hover:text-maroon transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-maroon transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#sections"
              className="text-gray-800 hover:text-maroon transition-colors"
              onClick={toggleMenu}
            >
              Sections
            </a>
            <a
              href="#welcome"
              className="text-gray-800 hover:text-maroon transition-colors"
              onClick={toggleMenu}
            >
              Welcome
            </a>
            <Button className="bg-maroon hover:bg-maroon-dark text-white w-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
