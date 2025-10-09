// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { FiBriefcase, FiCalendar, FiMapPin, FiLink } from "react-icons/fi";
// import { useTheme } from "@/contexts/ThemeContext";

// const experiences = [
//   {
//     title: "Full Stack Developer",
//     company: "Freelance",
//     period: "2024 - Present",
//     location: "Remote",
//     website: "https://freelane.com",
//     description: "Led development of multiple web applications using React, Node.js, and MongoDB. Implemented responsive designs and optimized performance.",
//     technologies: ["Next.js", "Node.js", "PostgreSQL", "Express", "TypeScript"],
//     achievements: [
//       "Developed and deployed 02+ full-stack applications",
//       "Improved application performance by 40%",
//       "Implemented responsive designs for all devices",
//       "Collaborated with cross-functional teams"
//     ]
//   },
// ];

// const Experience = () => {
//   const { theme } = useTheme();
  
//   return (
//     <section className={`relative w-full min-h-screen transition-colors duration-300 ${
//       theme === 'dark' ? 'bg-gray-900' : 'bg-white'
//     }`} id="experience">
//       {/* Animated background effects */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className={`absolute inset-0 ${
//           theme === 'dark'
//             ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]'
//             : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]'
//         }`} />
//       </div>

//       {/* Content Container */}
//       <div className={`relative pl-2 pr-6 sm:pl-4 sm:pr-8 md:pl-8 md:pr-16 lg:pl-16 lg:pr-28 py-16 sm:py-20 transition-colors duration-300 ${
//         theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
//       }`}>
//         <div className="relative container mx-auto max-w-6xl px-2 sm:px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-8 px-4"
//         >
//           <motion.h2 
//             className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Experience
//           </motion.h2>
//           <motion.div 
//             className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           />
//           <p className={`text-lg transition-colors duration-300 ${
//             theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
//           }`}>
//             My professional journey and work experience
//           </p>
//         </motion.div>

//         <div className="grid gap-8 sm:gap-12 max-w-5xl mx-auto">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <div className={`relative p-6 sm:p-8 rounded-xl backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 border ${
//                 theme === 'dark'
//                   ? 'bg-gray-800/90 border-gray-700/50 hover:border-blue-500/50'
//                   : 'bg-white/90 border-gray-200/50 hover:border-blue-500/50'
//               }`}>
//                 <div className="flex items-start gap-4">
//                   <div className={`p-3 rounded-lg transition-all duration-300 group-hover:scale-110 ${
//                     theme === 'dark'
//                       ? 'bg-blue-500/10 text-blue-400'
//                       : 'bg-blue-500/10 text-blue-600'
//                   }`}>
//                     <FiBriefcase className="w-6 h-6" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex flex-wrap items-center gap-4 mb-2">
//                       <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
//                         theme === 'dark' ? 'text-white' : 'text-gray-900'
//                       }`}>
//                         {exp.title}
//                       </h3>
//                       <a 
//                         href={exp.website}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors"
//                       >
//                         <FiLink className="w-4 h-4" />
//                         <span className="text-sm">{exp.company}</span>
//                       </a>
//                     </div>
                    
//                     <div className="flex flex-wrap items-center gap-4 mb-4">
//                       <div className={`flex items-center gap-1 transition-colors duration-300 ${
//                         theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
//                       }`}>
//                         <FiCalendar className="w-4 h-4" />
//                         <span className="text-sm">{exp.period}</span>
//                       </div>
//                       <div className={`flex items-center gap-1 transition-colors duration-300 ${
//                         theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
//                       }`}>
//                         <FiMapPin className="w-4 h-4" />
//                         <span className="text-sm">{exp.location}</span>
//                       </div>
//                     </div>

//                     <p className={`mb-6 transition-colors duration-300 ${
//                       theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
//                     }`}>{exp.description}</p>

//                     <div className="space-y-4">
//                       <h4 className="text-blue-500 font-medium">Key Achievements:</h4>
//                       <ul className="space-y-2">
//                         {exp.achievements.map((achievement, idx) => (
//                           <motion.li
//                             key={idx}
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: idx * 0.1 }}
//                             className={`flex items-start gap-2 transition-colors duration-300 ${
//                               theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
//                             }`}
//                           >
//                             <span className="text-blue-500 mt-1">•</span>
//                             {achievement}
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="mt-6 flex flex-wrap gap-2">
//                       {exp.technologies.map((tech, techIndex) => (
//                         <motion.span
//                           key={techIndex}
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.3, delay: techIndex * 0.1 }}
//                           whileHover={{ scale: 1.05 }}
//                           className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
//                         >
//                           {tech}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience; 