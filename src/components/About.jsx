import React, { useState } from "react";
import aboutImage from "../assets/Web_Photo_Editor.jpg"; // Replace with your actual image path
import resumePDF from "../assets/resume.pdf"; // Replace with your actual resume PDF path

const About = ({ isDarkMode }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleResume = () => {
    setIsResumeOpen(!isResumeOpen);
  };

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className={`min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 transition-all duration-300 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={aboutImage}
              alt="About Me"
              className="w-45 h-52 sm:w-100 sm:h-60 lg:w-[1000px] lg:h-[390px] object-cover"
              style={{
                borderRadius: "100%",
              }}
            />
          </div>

          {/* Right Section: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              I am a passionate developer with expertise in creating
              user-friendly web applications and innovative solutions. I have
              completed over 70 projects and bring 3+ years of experience to
              the table. Whether you're looking for a responsive website or a
              complex full-stack application, I'm here to help bring your vision
              to life.
            </p>
            <div className="flex justify-center lg:justify-start gap-12 mt-8">
              <div>
                <h3 className="text-4xl font-bold text-purple-500">70+</h3>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-purple-500">3+</h3>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
            <button
              className={`mt-8 px-8 py-3 font-medium rounded-full shadow-lg text-lg transition-all ${
                isDarkMode
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              onClick={toggleResume}
            >
              Hire Me
            </button>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`}
          onClick={toggleResume}
        >
          <div
            className={`bg-white rounded-lg p-6 shadow-lg max-w-3xl w-full ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-2xl font-bold mb-4 text-center">My Resume</h2>
            <iframe
              src={resumePDF}
              className="w-full h-96"
              title="Resume"
            ></iframe>
            <button
              className={`mt-4 px-6 py-2 rounded-lg text-lg transition-all block mx-auto ${
                isDarkMode
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              onClick={toggleResume}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
