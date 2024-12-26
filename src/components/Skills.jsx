import React, { useState } from 'react';
import { FaCss3Alt, FaLaravel, FaReact, FaJs, FaAngular, FaNodeJs, FaHtml5, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiBurpsuite, SiTypescript, SiShadcnui, SiNextdotjs, SiExpress, SiPostman } from 'react-icons/si';
import { DiRedis, DiMongodb } from "react-icons/di";
import { FcLinux } from "react-icons/fc";

const Skills = ({ isDarkMode }) => {
  const skills = [
    { icon: FaCss3Alt, name: 'CSS', level: 8 },
    { icon: FaHtml5, name: 'HTML', level: 9 },
    { icon: SiTailwindcss, name: 'Tailwind', level: 9 },
    { icon: FaReact, name: 'React JS', level: 9 },
    { icon: FaJs, name: 'JavaScript', level: 9 },
    { icon: SiShadcnui, name: 'Shadcn', level: 8 },
    { icon: SiNextdotjs, name: 'Next JS', level: 7 },
    { icon: FaNodeJs, name: 'Node.js', level: 9 },
    { icon: SiExpress, name: 'Express JS', level: 9 },
    { icon: SiTypescript, name: 'Typescript', level: 8 },
    { icon: SiPostman, name: 'Postman', level: 8 },
    { icon: FaDocker, name: 'Docker', level: 7 },
    { icon: DiRedis, name: 'Redis', level: 7 },
    { icon: DiMongodb, name: 'MongoDB', level: 8 },
    { icon: SiBurpsuite, name: 'Burpsuite', level: 6 },
    {icon:FcLinux,name:'Linux',level:7}
  ];

  return (
    <div
      id="skills"
      className={`min-h-screen flex flex-col items-center justify-center px-8 py-16 transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-900'
        }`}
    >
      <h2 className="text-4xl font-bold mb-6 flex items-center">
        My Skills <span className="ml-2 text-purple-600 text-5xl">↘</span>
      </h2>
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
            >
              <div className="flex items-center space-x-4">
                <skill.icon className="text-3xl" />
                <span className="font-semibold">{skill.name}</span>
              </div>
              <div className="flex space-x-1">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${i < skill.level
                        ? 'bg-purple-600'
                        : isDarkMode
                          ? 'bg-gray-700'
                          : 'bg-gray-300'
                      }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
