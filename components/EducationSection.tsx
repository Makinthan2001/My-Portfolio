"use client";
import { EDUCATION } from "@/constants";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

const EducationSection = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      className={`relative w-full sm:min-h-screen transition-colors duration-300 bg-transparent pt-10 pb-2 xs:pb-4 sm:pb-8 md:pb-10 lg:pb-12`}
      id="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated background effects */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"
          }`}
        />
      </motion.div>

      {/* Content Container */}
      <div
        className={`relative pl-2 pr-6 sm:pl-4 sm:pr-8 md:pl-8 md:pr-16 lg:pl-16 lg:pr-28 pb-2 xs:pb-3 sm:pb-6 md:pb-8 lg:pb-10 transition-colors duration-300 ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <div className="relative container mx-auto max-w-6xl px-2 sm:px-4">
          {/* Section Header */}
          <motion.div
            className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 xs:mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
            >
              Education Journey
            </motion.h2>
            <motion.div
              className="w-12 xs:w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-3 xs:mb-4 sm:mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p
              className={`text-xs xs:text-sm sm:text-base max-w-2xl mx-auto px-3 xs:px-4 transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              viewport={{ once: true }}
            >
              My academic journey and educational achievements that shaped my
              professional path
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            {/* Timeline line */}
            <motion.div
              className="absolute left-3 xs:left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
            ></motion.div>

            {Array.isArray(EDUCATION) &&
              EDUCATION.map((edu, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                  viewport={{ once: true }}
                  key={index}
                  className="relative flex flex-col gap-3 xs:gap-4 mb-4 xs:mb-6 sm:mb-8 md:mb-12"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-3 xs:left-4 w-5 xs:w-6 sm:w-8 md:w-10 h-5 xs:h-6 sm:h-8 md:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-[2px] xs:border-[3px] sm:border-4 shadow-lg shadow-blue-500/25 flex items-center justify-center ${
                      theme === "dark" ? "border-gray-900" : "border-white"
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.3 + index * 0.15,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <FaGraduationCap className="w-2 xs:w-2.5 sm:w-3 md:w-4 h-2 xs:h-2.5 sm:h-3 md:h-4 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="pl-10 xs:pl-12 sm:pl-16 md:pl-20 w-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                      className={`p-3 xs:p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 group backdrop-blur-sm border ${
                        theme === "dark"
                          ? "bg-gray-800/90 border-gray-700/50 hover:border-blue-500/50"
                          : "bg-white/90 border-gray-200/50 hover:border-blue-500/50"
                      }`}
                    >
                      <div className="flex items-start gap-2 xs:gap-3 sm:gap-4 md:gap-6 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
                        <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center transition-all duration-300">
                          {edu.img ? (
                            <Image
                              src={edu.img}
                              alt={edu.imgAlt ?? edu.institution}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          ) : null}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3
                            className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-0.5 xs:mb-1 sm:mb-2 break-words group-hover:text-blue-400 transition-colors ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-1.5 xs:gap-2 text-blue-400">
                            <FaUniversity className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base font-medium break-words">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5 xs:space-y-2 sm:space-y-3 md:space-y-4">
                        <div className="flex items-center gap-1.5 xs:gap-2 text-purple-300">
                          <FaCalendarAlt className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base font-medium">
                            {edu.duration}
                          </p>
                        </div>
                        <p
                          className={`text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors ${
                            theme === "dark"
                              ? "text-gray-300 group-hover:text-gray-200"
                              : "text-gray-600 group-hover:text-gray-700"
                          }`}
                        >
                          {edu.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
