"use client"
import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '@/constants'
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
    const { theme } = useTheme();
    
    return (
        <footer className={`relative border-t transition-colors duration-300 ${
            theme === 'dark' 
                ? 'bg-[#0A192F] border-gray-800' 
                : 'bg-gray-50 border-gray-200'
        }`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-14'>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${
                    theme === 'dark' 
                        ? 'from-[#0A192F] via-transparent to-transparent' 
                        : 'from-gray-50 via-transparent to-transparent'
                }`} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'
                >
                    {/* Contact Info */}
                    <div className='text-center sm:text-left'>
                        <h3 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4'>
                            Get in Touch
                        </h3>
                        <div className='space-y-3'>
                            <div className={`flex items-center justify-center sm:justify-start gap-2 transition-colors ${
                                theme === 'dark' 
                                    ? 'text-gray-400 hover:text-white' 
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}>
                                <FiPhone className="w-4 h-4" />
                                <span className='font-mono'>+94 70 4079 547</span>
                            </div>
                            <div className={`flex items-center justify-center sm:justify-start gap-2 transition-colors ${
                                theme === 'dark' 
                                    ? 'text-gray-400 hover:text-white' 
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}>
                                <FiMail className="w-4 h-4" />
                                <a href="mailto:mahinthan2001a@gmail.com" className={`transition-colors ${
                                    theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'
                                }`}>
                                    mahinthan2001a@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='text-center'>
                        <h3 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4'>
                            Connect With Me
                        </h3>
                        <div className='flex items-center justify-center gap-4 sm:gap-6'>
                            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                                <motion.a
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.2, rotate: 8 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.05
                                    }}
                                    viewport={{ once: true }}
                                    href={link.href}
                                    key={index}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`transition-colors p-2 rounded-full ${
                                        theme === 'dark' 
                                            ? 'text-gray-400 hover:text-white hover:bg-white/5' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                                    }`}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Name and Copyright */}
                    <div className='text-center lg:text-right'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                        <h2 className={`text-2xl sm:text-3xl mb-2 font-serif transition-colors duration-300 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                            Makinthan
                        </h2>

                            <p className={`text-sm mb-4 transition-colors duration-300 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                Full Stack Developer
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={`relative z-10 mt-12 pt-8 border-t transition-colors duration-300 ${
                        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                    }`}
                >
                    <p className={`text-center text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        &copy; {new Date().getFullYear()} Makinthan. All rights reserved.
                        <span className='block sm:inline sm:ml-1'>
                            Crafted with ❤️ using Next.js & TailwindCSS
                        </span>
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
