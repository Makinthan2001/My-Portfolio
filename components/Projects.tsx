"use client"
import { PROJECTS } from '@/constants'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useTheme } from '@/contexts/ThemeContext'

interface Project {
  id: number;
  name: string;
  description: string;
  image: string | StaticImageData;
  githubLink: string;
  viewDemo: string;
  tech: string[];
}

const Projects = () => {
  const { theme, isHydrated } = useTheme();

  return (
    <motion.section
      className={`relative w-full min-h-screen transition-colors duration-300 px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pb-16 md:pb-20 ${
        theme === 'dark' ? 'text-gray-100' : 'text-gray-800 bg-white'
      }`}
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]'
        }`} />
      </div>

      {/* Content Container */}
      <div className={`relative pl-2 pr-6 sm:pl-4 sm:pr-8 md:pl-8 md:pr-16 lg:pl-16 lg:pr-28 pb-16 transition-colors duration-300 ${
        theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
      }`}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-7xl mx-auto px-4 sm:px-6'>
          {(PROJECTS as Project[]).map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`group rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border flex flex-col relative ${
                theme === 'dark'
                  ? 'bg-gray-800/90 border-gray-700/50 hover:border-violet-400/70 hover:shadow-violet-500/20'
                  : 'bg-gradient-to-br from-pink-50 via-violet-50 to-purple-50 border-pink-200/50 hover:border-violet-400/70 hover:shadow-violet-500/20'
              }`}
            >
              {/* Card Hover Effect - Only in Light Mode */}
              {theme === 'light' && (
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-violet-200/50 to-purple-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              )}
              
              {/* Image Container */}
              <motion.div className='relative aspect-[16/9] overflow-hidden m-4 rounded-lg z-10' whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                {/* Support both string paths and StaticImageData */}
                {typeof project.image === 'string' ? (
                  <Image src={project.image} alt={project.name} fill className='object-cover' />
                ) : (
                  <Image src={project.image} alt={project.name} fill className='object-cover' />
                )}
              </motion.div>

              {/* Content Container */}
              <div className='px-6 pb-6 sm:px-8 sm:pb-8 space-y-4 flex-1 flex flex-col relative z-10'>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className={`text-xl sm:text-2xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.name}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className={`text-sm sm:text-base flex-grow ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  className='pt-2'
                >
                  <h4 className={`text-xs sm:text-sm font-medium mb-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>Technologies Used</h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech: string, index: number) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 bg-gradient-to-r from-pink-100 to-violet-100 text-violet-800 border border-pink-200/50 hover:border-violet-300 hover:from-pink-200 hover:to-violet-200`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4'
                >
                  <motion.a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group bg-gradient-to-r from-pink-100 to-violet-100 text-violet-800 border border-pink-200/50 hover:border-violet-300 hover:from-pink-200 hover:to-violet-200 hover:shadow-lg hover:shadow-violet-200/50`}
                  >
                    <FiGithub className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                    View on GitHub
                    <MdArrowOutward className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                  <motion.a
                    href={project.viewDemo}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group bg-gradient-to-r from-violet-500 to-pink-500 text-white border border-violet-400 hover:from-violet-600 hover:to-pink-600 hover:shadow-lg hover:shadow-violet-300/50`}
                  >
                    <FiExternalLink className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                    View Project
                    <MdArrowOutward className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
