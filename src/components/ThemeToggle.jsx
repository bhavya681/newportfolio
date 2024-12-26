import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300 ease-in-out"
    >
      {/* Circle */}
      <span
        className={`absolute w-7 h-7 bg-white dark:bg-yellow-500 rounded-full transition-all duration-300 ease-in-out ${
          isDarkMode ? 'transform translate-x-6' : 'transform translate-x-0'
        }`}
      ></span>

      {/* Sun Icon (Light Mode) */}
      <SunIcon
        className={`absolute left-1 top-1/2 transform -translate-y-1/2 h-5 w-5 text-yellow-400 transition-opacity duration-300 ${
          isDarkMode ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Moon Icon (Dark Mode) */}
      <MoonIcon
        className={`absolute right-1 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400 transition-opacity duration-300 ${
          isDarkMode ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
