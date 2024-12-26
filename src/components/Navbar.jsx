import React, { useState } from 'react';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed  top-0 w-full z-50 transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-900 text-white border-b border-gray-700 shadow-lg shadow-gray-800 rounded-md'
          : 'bg-white text-gray-900 shadow-lg shadow-gray-200 rounded-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-wide">
              Bhavya Wade
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-8">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item}
              </a>
            ))}
          <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative focus:outline-none transition-all duration-300"
            >
              {/* Circle */}
              <span
                className={`w-4 h-4 bg-white dark:bg-yellow-500 rounded-full absolute transition-transform duration-300 ease-in-out ${
                  isDarkMode ? 'transform translate-x-6' : 'transform translate-x-0'
                }`}
              ></span>
              
          
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`sm:hidden ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
          } px-4 py-3 space-y-3 flex flex-col justify-center`}
        >
          {['Home', 'Projects', 'Blog', 'Contact'].map((item) => (<>
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block text-center text-sm font-medium transition ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-800 hover:text-gray-900'
              }`}
            >
              {item}
            </a>
           </>
          ))}
          <div className='flex justify-center'>
             <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative focus:outline-none transition-all duration-300"
            >
              {/* Circle */}
              <span
                className={`w-4 h-4 bg-white dark:bg-yellow-500 rounded-full absolute transition-transform duration-300 ease-in-out ${
                  isDarkMode ? 'transform translate-x-6' : 'transform translate-x-0'
                }`}
              ></span>
              
              {/* Sun and Moon Icons */}
            
            </button>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
