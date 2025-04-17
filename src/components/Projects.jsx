import React, { useState } from "react";
import cryptostuff from '../assets/cryptostuff.png';
import codebuddy from '../assets/codebuddy.png';
import jobportal from '../assets/jobportal.png';
import moviesearch from '../assets/moviesearch.png';
import personalport from '../assets/portfoliostuff.png';
import crowdfund from '../assets/crowdfund.png';
import learnnova from '../assets/learnnova.png';
import ww from '../assets/weatherwear.png';
import thumbnail from '../assets/thumbnailboarder.png';
import ff from '../assets/ff.png';
import ecc from '../assets/ecc.png';
import xo from '../assets/xo.png';
import ShipLink from '../assets/ShipLink.png';
import tailtenders from '../assets/tailtenders.png';
const projects = [
  {
title: "ShipLink – Smart, Competitive & Flexible Shipping Platform",
    description: "ShipLink is a modern shipping and logistics platform that bridges the gap between people who need to ship products and shippers looking for delivery jobs.",
    link: "https://shiplink.onrender.com/",
    image: ShipLink,
    date: "April 2, 2025",
  },
  {
    title: "TailTenders - AI-Powered Personal Stylist",
    description: "Developed a smart fashion recommendation platform using AI to provide personalized outfit suggestions.",
    link: "https://trialtailtender-xiab-one.vercel.app/",
    image: tailtenders,
    date: "Feb 22, 2025",
  },
   {
    title: "CodeBuddy - Developer Social Media",
    description: "Built a full-stack social platform for developers with real-time chat functionality.",
    link: "https://codebuddy-gamma.vercel.app",
    image: codebuddy,
    date: "Aug 2022",
  },
  {
    title: "CryptoTracker App",
    description: "Developed a responsive cryptocurrency tracking application with real-time updates.",
    link: "https://crypto-app1-seven.vercel.app",
    image: cryptostuff,
    date: "May 2022",
  },
  {
    title: "Job Portal Application",
    description: "Secure authentication, job posting, application tracking, and advanced search filters.",
    link: "https://mernjobportal-2-1cwi.onrender.com",
    image: jobportal,
    date: "Dec 2021",
  },
  {
    title: "Movie Search App",
    description: "A responsive Movie Search web app.",
    link: "https://movie-search-tan.vercel.app",
    image: moviesearch,
    date: "Feb 2023",
  },
  {
    title: "Personal Portfolio Website",
    description: "A personal portfolio website showcasing skills and projects with a blog section using Next Js and animations.",
    link: "https://mine-portolio.vercel.app",
    image: personalport,
    date: "Mar 2023",
  },
  {
    title: "Crowd Funding App",
    description: "revolutionary crowdfunding web application designed to unite donors and causes for greater impact. 🚀[Frontend].",
    link: "https://crowdforward-o5zj.vercel.app",
    image: crowdfund,
    date: "Mar 2023",
  },
  {
    title: "Tic Tac Toe Game",
    description: "a sleek and dynamic Tic Tac Toe game crafted with TypeScript and React! 🎮.",
    link: "https://tictactoe-delta-wheat.vercel.app",
    image: xo,
    date: "Mar 2023",
  },
  {
    title: "WeatherWear",
    description: "our Ultimate Travel Companion and Style Guide,Weather-Based Outfit Suggestion.",
    link: "https://weatherwear-orcin.vercel.app/",
    image: ww,
    date: "Apr 2023",
  },
  {
    title: "Fast Food App",
    description: "Building an Advanced React Food Delivery App (Frontend).",
    link: "https://advan-food-app.vercel.app",
    image: ff,
    date: "May 2023",
  },
  {
    title: "LearnNova",
    description: " simplify and enhance web user life through powerful tools tailored for academic and personal development..",
    link: "https://learnnova-9fgg.vercel.app",
    image: learnnova,
    date: "Jun 2023",
  },
  {
    title: "Thumbnail Board Center",
    description: " a platform designed to simplify the creation and management of image thumbnails for websites, social media, and other digital content.",
    link: "https://thumbnailboard.vercel.app",
    image: thumbnail,
    date: "Jul 2023",
  },
  {
    title: "E-commerce Platform",
    description: "A scalable and modern e-commerce platform with advanced search [Frontend].",
    link: "https://react-eccomernce-app.vercel.app",
    image: ecc,
    date: "Jan 2023",
  },
];

const Projects = ({ isDarkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const projectsToShow = isExpanded ? projects : projects.slice(0, 3); // Show first 3 projects by default

  const handleToggleProjects = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      id="projects"
      className={`min-h-screen flex flex-col items-center px-6 py-16 transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
    >
      <h2 className="text-5xl font-bold text-center mb-16 tracking-wide">
        My Projects
      </h2>

      {/* Projects Container */}
      <div className="space-y-16 relative max-w-4xl">
        {projectsToShow.map((project, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center text-center"
          >
            {/* Project Image and Info Container */}
            <div className="relative w-full">
              {/* Project Image */}
              <div
                className={`w-full h-64 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 ${isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info (Initially hidden, shown on hover) */}
              <div
                className={`absolute bottom-0 left-0 p-4 rounded-b-xl w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode ? "bg-gray-800/90" : "bg-gray-100/90"
                  }`}
              >
                <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-2 opacity-80 leading-relaxed">
                  {project.description}
                </p>
                <span className="block text-sm mb-2 opacity-70">{project.date}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-6 py-2 text-lg font-medium rounded-full border-2 transition-colors duration-300 ${isDarkMode
                      ? "border-primary text-primary hover:bg-primary hover:text-gray-100"
                      : "border-gray-600 text-black hover:bg-gray-400 hover:text-black"
                    }`}
                >
                  View Project
                </a>
              </div>

            </div>

            {/* Arrow for hierarchy */}
            {index < projectsToShow.length - 1 && (
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-3xl text-primary">
                &#8595;
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Toggle Button for expanding/collapsing projects */}
      <div className="mt-12 flex justify-center items-center">
        <button
          onClick={handleToggleProjects}
          className={`inline-block text-lg font-medium underline transition-colors duration-300 ${isDarkMode ? "text-primary" : "text-gray-800 hover:text-gray-600"
            }`}
        >
          {isExpanded ? "Show Less Projects" : "See More Projects >>"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
