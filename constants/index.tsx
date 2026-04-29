import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

// Import technology icons
import javaIcon from "@/assets/java.png";
import cIcon from "@/assets/c.png";
import phpIcon from "@/assets/php.png";
import pythonIcon from "@/assets/python.png";
import laravelIcon from "@/assets/laravel.png";
import djangoIcon from "@/assets/django.png";
import javascriptIcon from "@/assets/JavaScript.png";
import reactIcon from "@/assets/react.png";
import htmlIcon from "@/assets/html.png";
import cssIcon from "@/assets/css.png";
import bootstrapIcon from "@/assets/bootstrap.png";
import tailwindIcon from "@/assets/tailwindcss.png";
import gitIcon from "@/assets/git.png";
import githubIcon from "@/assets/github.png";
import mysqlIcon from "@/assets/mysql.png";
import reactNativeIcon from "@/assets/reactnative.png";
import nextjsIcon from "@/assets/nextJs.png";
import nodejsIcon from "@/assets/nodeJs.png";
import expressjsIcon from "@/assets/expressJs.png";
import mongodbIcon from "@/assets/mongoDB.png";
import typescriptIcon from "@/assets/typescript.png";
import vscodeIcon from "@/assets/vscode.png";
import figmaIcon from "@/assets/figma.png";
import prodtrack from "@/assets/prodTrack.png";
import projectFlow from "@/assets/projectFlow.png";
import gearsphere from "@/assets/gearsphere.png";
import splitify from "@/assets/splitify.jpg";
import portfolio from "@/assets/portfolio.png";
import eventHub from "@/assets/eventHub.png";
import springbootIcon from "@/assets/Spring_Boot.svg";
import firebaseUrl from "@/assets/firebase.png";
import firestoreIcon from "@/assets/firestore.svg";
import postgresqlIcon from "@/assets/postgresql.png";
import postmanIcon from "@/assets/postman.webp";

import profileImage from "@/assets/hero-image.png"; // Add your profile image

// Import university logos
import uwaLogo from "@/assets/uwu.jpg";
import velanaiLogo from "@/assets/Velanai_Central_College.png";

// Define skills with actual icons
export const skillsData = [
  // Frontend Skills
  [
    { id: 1, name: "JavaScript", icon: javascriptIcon },
    { id: 2, name: "TypeScript", icon: typescriptIcon },
    { id: 3, name: "React", icon: reactIcon },
    { id: 4, name: "Next.js", icon: nextjsIcon },
    { id: 5, name: "HTML", icon: htmlIcon },
    { id: 6, name: "CSS", icon: cssIcon },
    { id: 7, name: "Tailwind CSS", icon: tailwindIcon },
    { id: 8, name: "Bootstrap", icon: bootstrapIcon },
    { id: 9, name: "React Native", icon: reactNativeIcon },
  ],
  // Backend Skills
  [
    { id: 10, name: "Node.js", icon: nodejsIcon },
    { id: 11, name: "Express.js", icon: expressjsIcon },
    { id: 12, name: "PHP", icon: phpIcon },
    { id: 13, name: "Laravel", icon: laravelIcon },
    { id: 15, name: "Django", icon: djangoIcon },
    { id: 24, name: "Spring Boot", icon: springbootIcon },
    { id: 25, name: "Firebase", icon: firebaseUrl },
  ],
  // Database Skills
  [
    { id: 18, name: "MySQL", icon: mysqlIcon },
    { id: 19, name: "MongoDB", icon: mongodbIcon },
    { id: 26, name: "PostgreSQL", icon: postgresqlIcon },
    { id: 27, name: "Firestore", icon: firestoreIcon },
  ],
  // Tools & Others
  [
    { id: 20, name: "Git", icon: gitIcon },
    { id: 21, name: "GitHub", icon: githubIcon },
    { id: 22, name: "VS Code", icon: vscodeIcon },
    { id: 23, name: "Figma", icon: figmaIcon },
    { id: 14, name: "Python", icon: pythonIcon },
    { id: 16, name: "Java", icon: javaIcon },
    { id: 17, name: "C", icon: cIcon },
    { id: 28, name: "Postman", icon: postmanIcon },
  ],
];

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  // { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Makinthan",
  greet: "Full Stack Developer",
  description: "",
};

export const PROJECTS = [
  {
    id: 1,
    name: "My Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase my skills, projects, and contact information. Features smooth animations with Framer Motion, dark/light theme switching, interactive skill categories, project showcases with hover effects, and a clean professional design optimized for performance and user experience.",
    image: portfolio,
    githubLink: "https://github.com/Makinthan2001/My-Portfolio",
    viewDemo:
      "https://my-portfolio-eight-gold-74.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    name: "GearSphere",
    description:
      "GearSphere(Academic project) is an advanced PC parts marketplace offering role-based user management, intelligent budget-driven PC builder tool, automated PC building recommendations, complete shopping experience, professional technician services, and comprehensive order tracking system developed with React.js frontend and PHP-MySQL backend",
    image: gearsphere,
    githubLink: "https://github.com/Makinthan2001/Gearsphere-FrontEnd",
    viewDemo:
      "https://www.linkedin.com/posts/s-makinthan-0a694931b_gearsphere-academicproject-webdevelopment-activity-7382417250743480320-HcC4?utm_source=share&utm_medium=member_android&rcm=ACoAAFEenT4B7Ldew3jDQwwbl-h0BK-Y2hfaRxQ",
    tech: ["PHP", "React.js", "MySQL", "Bootstrap"],
  },
  {
    id: 3,
    name: "Splitify",
    description:
      "Splitify was built to solve comrnon problems in shared spending, like unclear balances and manual calculations, It provides a simple and transparent way for users to manage group expenses, reduce disputes, and settle payments efficiently.",
    image: splitify,
    githubLink: "https://github.com/Makinthan2001/splitify.git",
    viewDemo:
      "https://www.linkedin.com/posts/s-makinthan-0a694931b_reactnative-expo-firebase-ugcPost-7455275515625623552-x163?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEenT4B7Ldew3jDQwwbl-h0BK-Y2hfaRxQ",
    tech: ["React Native", "Expo", "Firebase", "TypeScript"],
  },
  {
    id: 4,
    name: "ProjectFlow",
    description:
      "ProjectFlow is a simple yet powerful project management platform designed for teams of all sizes. It offers real-time collaboration. flexible workflows. and clear insights to tum tasks into organized, efficient projects.",
    image: projectFlow,
    githubLink: "https://github.com/Makinthan2001/Project-Management.git",
    viewDemo:
      "https://project-management-chi-ten.vercel.app",
    tech: ["React", "Tailwind CSS", "PostgreSQL", "Express.js", "Clerk"],
  },
  {
    id: 5,
    name: "EventHub",
    description:
      "EventHub is a lightweight, extensible platform for managing events and ticketing. It offers clear APIs, modular design, and easy deployment with room to scale and add features.",
    image: eventHub,
    githubLink: "https://github.com/Makinthan2001/EventHub_Backend.git",
    viewDemo:
      "https://www.linkedin.com/posts/s-makinthan-0a694931b_projectflow-reactjs-tailwindcss-activity-7448568009467521026-W1uS?utm_source=share&utm_medium=member_android&rcm=ACoAAFEenT4B7Ldew3jDQwwbl-h0BK-Y2hfaRxQ",
    tech: ["React", "TypeScript", "MySQL", "Django"],
  },
  {
    id: 6,
    name: "ProdTrack",
    description:
      "ProdTrack is a web-based product inventory management system built with React frontend and PHP backend, enabling admin to add, update, delete, and categorize products with image uploads.",
    image: prodtrack,
    githubLink: "https://github.com/Makinthan2001/ProdTrack",
    viewDemo:
      "https://www.linkedin.com/posts/s-makinthan-0a694931b_webdevelopment-fullstackdevelopment-reactjs-activity-7328680056484954113-O1z9?utm_source=share&utm_medium=member_android&rcm=ACoAAFEenT4B7Ldew3jDQwwbl-h0BK-Y2hfaRxQ",
    tech: ["PHP", "React.js", "MySQL", "Bootstrap"],
  },
  // Add more projects here
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/makinthan2001", // Update with your actual GitHub
    icon: <FaGithub fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/s-makinthan-0a694931b", // Update with your actual LinkedIn
    icon: <FaLinkedin fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "mailto:mahinthan2001a@gmail.com",
    icon: <FaEnvelope fontSize={50} className="hover:opacity-80" />,
  },
];

export const EDUCATION = [
  {
    degree: "Bsc(Hons) in Computer Science and Technology",
    institution: "Uva Wellassa University",
    duration: "September 2023 - September 2027",
    description: "Fundamendals to Advance computer science field education.",
    img: uwaLogo,
    imgAlt: "Uva Wellassa University",
  },
  {
    degree: "Secondary Education",
    institution: "Velanai Central College",
    duration: "January 2012 - October 2021",
    description: "Secondary level education to advance level Mathematics",
    img: velanaiLogo,
    imgAlt: "Velanai Central College",
  },
];

// Skills arrays - customize these with your skills
export const FRONTENDSKILLS = [
  {
    id: 1,
    icon: (
      <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
        JS
      </div>
    ),
    name: "JavaScript",
  },
  // Add more frontend skills
];

export const BACKENDSKILLS = [
  {
    id: 1,
    icon: (
      <div className="w-12 h-12 bg-green-500 rounded-md flex items-center justify-center text-white font-bold">
        N
      </div>
    ),
    name: "Node.js",
  },
  // Add more backend skills
];

export const DATABASE = [
  {
    id: 1,
    icon: (
      <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold">
        DB
      </div>
    ),
    name: "MongoDB",
  },
  // Add more database skills
];

export const CUSTOMTECS = [
  {
    id: 1,
    icon: (
      <div className="w-12 h-12 bg-purple-500 rounded-md flex items-center justify-center text-white font-bold">
        G
      </div>
    ),
    name: "Git",
  },
  // Add more tools/technologies
];

export const skills = [FRONTENDSKILLS, BACKENDSKILLS, DATABASE, CUSTOMTECS];
