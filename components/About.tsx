"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMonitor } from "react-icons/fi";
import { FaMobileAlt, FaServer } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

const services = [
  {
    icon: <FiMonitor className="w-8 h-8" />,
    title: "Website Development",
    description: "Creating responsive and modern web applications",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaMobileAlt className="w-7 h-7" />,
    title: "App Development",
    description: "Building cross-platform mobile solutions",
    color: "from-purple-500 to-pink-500",
  },
    {
      icon: <FaServer className="w-7 h-7" />,
      title: "Website Hosting",
      description: "Deploying and managing web applications online",
      color: "from-orange-500 to-red-500"
    },
];

// const stats = [
//   {
//     number: "03",
//     suffix: "+",
//     text: "Completed Projects",
//     icon: "🎯"
//   },
//   {
//     number: "95",
//     suffix: "%",
//     text: "Client satisfaction",
//     icon: "⭐"
//   },
//   {
//     number: "01",
//     suffix: "+",
//     text: "Years of experience",
//     icon: "💫"
//   }
// ];

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative w-full min-h-screen transition-colors duration-300 bg-transparent pt-10 pb-12 sm:pb-16 md:pb-20`}
      id="about"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"
          }`}
        />
      </div>

      {/* Content Container */}
      <div
        className={`relative pl-2 pr-6 sm:pl-4 sm:pr-8 md:pl-8 md:pr-16 lg:pl-16 lg:pr-28 pb-16 transition-colors duration-300 ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 px-4"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Services Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative pt-4"
          >
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex gap-4 items-start pl-16 group"
                >
                  <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                    <div
                      className={`absolute w-4 h-4 rounded-full bg-gradient-to-br ${service.color} shadow-lg shadow-blue-500/50`}
                    />
                    <div
                      className={`absolute w-3 h-3 rounded-full bg-gradient-to-br ${service.color} animate-ping opacity-75`}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-4 items-center">
                      <div
                        className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 shadow-lg group-hover:bg-gradient-to-br ${
                          service.color
                        } group-hover:bg-opacity-10 group-hover:border-blue-300/50 ${
                          theme === "dark"
                            ? "bg-gray-800/80 border-gray-600"
                            : "bg-white/80 border-gray-200"
                        }`}
                      >
                        <div
                          className={`transition-colors duration-300 group-hover:text-white ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {service.icon}
                        </div>
                      </div>
                      <h3
                        className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p
                      className={`pl-[52px] transition-colors duration-300 ${
                        theme === "dark"
                          ? "text-gray-400 group-hover:text-gray-300"
                          : "text-gray-600 group-hover:text-gray-700"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 px-1 sm:px-2 pt-4"
          >
            <motion.div
              className={`p-6 rounded-xl backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 ${
                theme === "dark"
                  ? "bg-gray-800/80 border-gray-600"
                  : "bg-white/80 border-gray-200"
              }`}
              whileHover={{ scale: 1.01 }}
            >
              <p
                className={`text-base leading-relaxed transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I am a passionate Full Stack Developer with expertise in modern
                technologies like React, Node.js, and PHP. I thrive in dynamic
                environments, delivering impactful solutions through clean,
                efficient code. Continuously learning and exploring emerging
                technologies, I focus on expanding my skills in DevOps, Cloud
                Computing, Artificial Intelligence, and Machine Learning. I aim
                to contribute meaningfully to innovative software projects with
                creativity, technical proficiency, and a commitment to
                excellence.
              </p>
            </motion.div>

            {/* Stats
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-[#112240] border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                       {stat.number}
                      <span className="text-white">{stat.suffix}</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
