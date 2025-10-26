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
import exam from "@/assets/OnlineExamination.png";
import gearsphere from "@/assets/gearsphere.png";
import savemycontact from "@/assets/SaveMyContact.png";
import portfolio from "@/assets/portfolio.png";

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
  ],
  // Database Skills
  [
    { id: 18, name: "MySQL", icon: mysqlIcon },
    { id: 19, name: "MongoDB", icon: mongodbIcon },
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
  greet: "Software Developer",
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
      "https://www.linkedin.com/posts/s-makinthan-0a694931b_webdevelopment-fullstackdevelopment-reactjs-activity-7328680056484954113-O1z9?utm_source=share&utm_medium=member_android&rcm=ACoAAFEenT4B7Ldew3jDQwwbl-h0BK-Y2hfaRxQ",
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
    name: "Portfolio Website",
    description:
      "ProdTrack is a web-based product inventory management system built with React frontend and PHP backend, enabling admin to add, update, delete, and categorize products with image uploads.",
    image: prodtrack,
    githubLink: "https://github.com/Makinthan2001/ProdTrack",
    viewDemo:
      "https://www.linkedin.com/posts/s-makinthan-0a694931b_webdevelopment-fullstackdevelopment-reactjs-activity-7328680056484954113-O1z9?utm_source=share&utm_medium=member_android&rcm=ACoAAFEenT4B7Ldew3jDQwwbl-h0BK-Y2hfaRxQ",
    tech: ["PHP", "React.js", "MySQL", "Bootstrap"],
  },
  {
    id: 4,
    name: "Online Examination System",
    description:
      "A PHP-based online examination system featuring user authentication, exam creation, question management, result tracking, and role-based access control for administrators and students.",
    image: exam,
    githubLink: "https://github.com/Makinthan2001/WAD-mini-project",
    viewDemo:
      "https://github.com/Makinthan2001/WAD-mini-project/blob/main/README.md",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: 5,
    name: "SaveMyContact",
    description:
      "SaveMyContact is a secure web-based contact management application built with PHP and MySQL. Users can register, login, and manage their personal contacts with add, view, search, and delete functionality.",
    image: savemycontact,
    githubLink: "https://github.com/Makinthan2001/SaveMyContact",
    viewDemo:
      "https://github.com/Makinthan2001/SaveMyContact/blob/main/README.md",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
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
