"use client";
import { skillsData } from '@/constants';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

const categoryTransitionVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const categories = [
  { id: "frontend", label: "Frontend", icon: <FiCode className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", icon: <FiServer className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
  { id: "database", label: "Database", icon: <FiDatabase className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
  { id: "custom", label: "Other", icon: <FiTool className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
];

const Skills = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <motion.section
      className={`relative w-full min-h-screen transition-colors duration-300 pt-10 pb-12 sm:pb-16 md:pb-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated background effects */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div
          className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]'
              : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]'
          }`}
        />
      </motion.div>

      {/* Content Container */}
      <div className={`relative pl-2 pr-6 sm:pl-4 sm:pr-8 lg:pl-6 lg:pr-12 pb-16 transition-colors duration-300 ${
        theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
      }`}>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto perspective-1000 px-2 sm:px-4"
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-3 sm:mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p
            className={`text-sm sm:text-base max-w-2xl mx-auto px-3 sm:px-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my technical expertise and the tools I use to build amazing web applications
          </motion.p>
        </motion.div>

        {/* Main Content Layout - Sidebar + Content */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Left Sidebar - Categories */}
          <motion.div 
            className="lg:w-80 lg:flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div className={`sticky top-6 rounded-2xl p-6 backdrop-blur-md border transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700/50' 
                : 'bg-white/50 border-gray-200/50'
            }`}>
              <h3 className="text-lg font-semibold mb-4 text-center">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Skill Categories
                </span>
              </h3>
              
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.05) }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 5
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActive(index)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group ${
                      active === index
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : theme === 'dark'
                          ? 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white border border-gray-600/50 hover:border-blue-400/50'
                          : 'bg-gray-50/50 hover:bg-gray-100/50 text-gray-700 hover:text-gray-900 border border-gray-200/50 hover:border-blue-300/50'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      active === index
                        ? 'bg-white shadow-lg'
                        : `bg-gradient-to-r ${category.color}`
                    }`} />
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-lg transition-all duration-300 ${
                          active === index ? 'text-white' : ''
                        }`}>
                          {category.icon}
                        </span>
                        <h4 className="font-semibold text-base">
                          {category.label}
                        </h4>
                      </div>
                      <p className={`text-sm transition-all duration-300 ${
                        active === index
                          ? 'text-white/80'
                          : theme === 'dark'
                            ? 'text-gray-400 group-hover:text-gray-300'
                            : 'text-gray-500 group-hover:text-gray-700'
                      }`}>
                        {category.id === 'frontend' && 'UI/UX & Client-side Development'}
                        {category.id === 'backend' && 'Server-side & API Development'}
                        {category.id === 'database' && 'Data Management '}
                        {category.id === 'custom' && 'Tools & Additional Technologies'}
                      </p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <motion.div
                      animate={{ x: active === index ? 5 : 0 }}
                      className={`text-lg transition-all duration-300 ${
                        active === index ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      →
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Skills Grid */}
          <motion.div 
            className="flex-1 lg:max-w-4xl lg:mx-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={categoryTransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className={`rounded-2xl p-6 backdrop-blur-md border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700/50' 
                    : 'bg-white/50 border-gray-200/50'
                }`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categories[active].color}`}>
                      <span className="text-white text-xl">
                        {categories[active].icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        <span className={`bg-gradient-to-r ${categories[active].color} bg-clip-text text-transparent`}>
                          {categories[active].label} Development
                        </span>
                      </h3>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {skillsData[active].length} technologies and tools
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <motion.div
                  className="perspective-1000 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {skillsData[active].map((tech, index) => (
                    <motion.div
                      key={`${active}-${tech.id}`}
                      variants={itemVariants}
                      transition={{ delay: index * 0.05 }}
                      onHoverStart={() => setHoveredSkill(index)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className={`relative group card-3d shadow-3d shadow-3d-hover p-3 sm:p-4 rounded-lg backdrop-blur-sm transition-all duration-500
                        border transform-gpu cursor-pointer overflow-hidden
                        ${hoveredSkill === index ? 'shadow-lg shadow-blue-500/20 border-blue-300/50 scale-105' : ''}
                        ${
                          theme === 'dark'
                            ? 'bg-gray-800/90 border-gray-600/50 hover:bg-gray-700/90'
                            : 'bg-white/90 border-gray-200/50 hover:bg-gray-50/90'
                        }`}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div className="flex flex-col items-center justify-center gap-2 relative z-10" style={{ transform: 'translateZ(20px)' }}>
                        <motion.div
                          animate={{
                            scale: hoveredSkill === index ? 1.2 : 1,
                            rotateY: hoveredSkill === index ? 10 : 0,
                            rotateX: hoveredSkill === index ? 5 : 0,
                            translateZ: hoveredSkill === index ? 30 : 0,
                          }}
                          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 relative"
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                            sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                          />
                        </motion.div>
                        <p
                          className={`text-xs font-medium text-center transition-colors ${
                            theme === 'dark'
                              ? 'text-gray-300 group-hover:text-gray-100'
                              : 'text-gray-700 group-hover:text-gray-800'
                          }`}
                        >
                          {tech.name}
                        </p>
                      </div>

                      {/* 3D Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${categories[active].color} opacity-0 
                      group-hover:opacity-20 transition-all duration-500 pointer-events-none`}
                        style={{ transform: 'translateZ(5px)' }}
                      />
                      
                      {/* 3D Depth highlight */}
                      <div
                        className={`absolute inset-0 rounded-xl transition-all duration-500 pointer-events-none
                          ${hoveredSkill === index 
                            ? 'bg-gradient-to-tr from-white/10 via-transparent to-white/5' 
                            : 'opacity-0'
                          }`}
                        style={{ transform: 'translateZ(10px)' }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
