import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.png';

const Home = ({ isDarkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 ${
        isDarkMode
          ? 'bg-gradient-to-b from-gray-900 via-black to-purple-900 text-white'
          : 'bg-gradient-to-b from-gray-100 via-white to-blue-100 text-gray-900'
      }`}
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-start space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Hi, I’m{' '}
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r ${
              isDarkMode ? 'from-teal-400 to-blue-500' : 'from-blue-500 to-teal-400'
            }`}
          >
            Bhavya Wade
          </span>
        </motion.h1>
        
        <motion.p
          className={`text-base md:text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          A passionate{' '}
          <span
            className={`font-semibold ${
              isDarkMode ? 'text-teal-400' : 'text-teal-600'
            }`}
          >
            Software Developer
          </span>{' '}
          creating professional and innovative web solutions.
        </motion.p>
        
        <motion.a
          href="#projects"
          className={`px-6 py-3 rounded-full font-semibold shadow-lg text-sm md:text-lg transition-transform transform hover:scale-105 ${
            isDarkMode
              ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
              : 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.img
          src={profile}
          alt="Profile"
          className="rounded-full shadow-2xl h-56 w-56 md:h-72 md:w-72 object-cover cursor-pointer"
          whileHover={{ scale: 1.05, rotate: 5 }} // Scale and rotate on hover
          transition={{ type: 'spring', stiffness: 300 }} // Spring effect for hover
        />
      </motion.div>
    </section>
  );
};

export default Home;
