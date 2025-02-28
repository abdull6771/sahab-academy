
import React from "react";
import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="text-maroon h-6 w-6" />
              <span className="font-bold text-lg whitespace-nowrap">
                SAHAB <span className="text-maroon">ACADEMY</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Providing quality education in Babura Local Government, Jigawa State, Nigeria.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social Media Icons */}
              {['facebook', 'twitter', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-maroon transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Sections", href: "#sections" },
                { name: "Welcome", href: "#welcome" },
                { name: "Contact", href: "#" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">School Sections</h3>
            <ul className="space-y-2">
              {[
                { name: "Nursery Section", href: "#" },
                { name: "Primary Section", href: "#" },
                { name: "Secondary Section", href: "#" },
                { name: "Admissions", href: "#" },
                { name: "School Calendar", href: "#" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {[
                { 
                  icon: <MapPin className="h-5 w-5 text-maroon" />, 
                  text: "Babura Local Government, Jigawa State, Nigeria" 
                },
                { 
                  icon: <Phone className="h-5 w-5 text-maroon" />, 
                  text: "+234 000 0000 000" 
                },
                { 
                  icon: <Mail className="h-5 w-5 text-maroon" />, 
                  text: "info@sahabacademy.edu.ng" 
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">{item.icon}</div>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SAHAB Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
