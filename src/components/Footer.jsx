import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`transition-all border-gray-500 duration-300 ${isDarkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
        } py-10 px-6`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-6xl font-bold tracking-tight">
            <span>Follow</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700">
              me
            </span>
          </h2>
          <div className="flex gap-4 mt-6 justify-center lg:justify-start">
            <a
              href="https://x.com/wade_bhavy55123"
              aria-label="Twitter"
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 
                hover:bg-gray-700 hover:text-white ${isDarkMode ? "bg-black text-white" : "border-black"}`}
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/bhavya-wade/"
              aria-label="Linkedin"
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 
                hover:bg-gray-700 hover:text-white ${isDarkMode ? "bg-black text-white" : "border-black"}`}         >
              <span><CiLinkedin /></span>
            </a>
            <a
              href="https://github.com/bhavya681"
              aria-label="Github"
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 
                hover:bg-gray-700 hover:text-white ${isDarkMode ? "bg-black text-white" : "border-black"}`}        >
              <span><FaGithub /></span>
            </a>
            <a
              href="https://www.instagram.com/bhavya_wade"
              aria-label="Instagram"
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 
                hover:bg-gray-700 hover:text-white ${isDarkMode ? "bg-black text-white" : "border-black"}`}            >
              <span><FaInstagram /></span>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-right">
          <p className="font-medium">Bhavya Wade</p>
          <nav className="flex gap-6 justify-center mt-4 text-sm">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </div>

      <div className="mt-10 text-center text-sm opacity-80">
        <p>&copy; 2025 Bhavya Wade. All rights reserved</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#terms" className="hover:underline">
            Terms of Use
          </a>
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
