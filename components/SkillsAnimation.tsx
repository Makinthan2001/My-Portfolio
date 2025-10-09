"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

// Import technology icons
import javaIcon from "@/assets/java.png";
import cIcon from "@/assets/c.png";
import phpIcon from "@/assets/php.png";
import pythonIcon from "@/assets/python.png";
import javascriptIcon from "@/assets/JavaScript.png";
import reactIcon from "@/assets/react.png";
import htmlIcon from "@/assets/html.png";
import cssIcon from "@/assets/css.png";
import bootstrapIcon from "@/assets/bootstrap.png";
import tailwindIcon from "@/assets/tailwindcss.png";
import gitIcon from "@/assets/git.png";
import githubIcon from "@/assets/github.png";
import mysqlIcon from "@/assets/mysql.png";
import nextjsIcon from "@/assets/nextJs.png";
import nodejsIcon from "@/assets/nodeJs.png";
import mongodbIcon from "@/assets/mongoDB.png";

const technologies = [
  { name: "Java", icon: javaIcon },
  { name: "C", icon: cIcon },
  { name: "PHP", icon: phpIcon },
  { name: "Python", icon: pythonIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "React", icon: reactIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "MongoDB", icon: mongodbIcon },
];

const SkillsAnimation = () => {
  const { theme } = useTheme();
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <aside className={`fixed left-0 top-0 h-screen w-24 backdrop-blur-md border-r z-50 overflow-hidden shadow-xl transition-colors duration-300 hidden md:block ${
      theme === 'dark' 
        ? 'bg-gray-900 border-gray-700/50' 
        : 'bg-white border-gray-200/50'
    }`}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]'
        }`} />
      </div>
      
      {/* Vertical Scrolling Column */}
      <div className="relative h-full w-full overflow-hidden py-4">
        <div className="flex flex-col animate-scroll-vertical space-y-4" style={{ minHeight: "max-content" }}>
          {duplicatedTechnologies.map((tech, index) => (
            <div
              key={`sidebar-${index}`}
              className={`group flex-shrink-0 flex flex-col items-center justify-center
                w-16 h-16 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg 
                border transition-all duration-300 hover:scale-105 cursor-pointer mx-auto
                hover:border-blue-200/60 hover:bg-gradient-to-br hover:to-blue-50/50
                ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-600 hover:from-gray-700 hover:to-blue-900/50 hover:border-blue-400/60'
                    : 'bg-white border-gray-200 hover:from-white hover:border-blue-200/60'
                }`}
              title={tech.name}
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-8 h-8 relative transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                    sizes="32px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for seamless edges */}
      <div className={`absolute top-0 left-0 right-0 h-16 bg-gradient-to-b to-transparent pointer-events-none z-10 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'from-gray-900 via-gray-900/70' 
          : 'from-white via-white/70'
      }`}></div>
      <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t to-transparent pointer-events-none z-10 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'from-gray-900 via-gray-900/70' 
          : 'from-white via-white/70'
      }`}></div>
    </aside>
  );
};

export default SkillsAnimation;