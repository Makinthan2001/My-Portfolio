"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Import your skill icons
import reactIcon from "@/assets/react.png";
import nextJsIcon from "@/assets/nextJs.png";
import nodeJsIcon from "@/assets/nodeJs.png";
import phpIcon from "@/assets/php.png";
import javaIcon from "@/assets/java.png";
import pythonIcon from "@/assets/python.png";
import javaScriptIcon from "@/assets/JavaScript.png";
import typeScriptIcon from "@/assets/typescript.png";
import htmlIcon from "@/assets/html.png";
import cssIcon from "@/assets/css.png";
import tailwindIcon from "@/assets/tailwindcss.png";
import bootstrapIcon from "@/assets/bootstrap.png";
import mysqlIcon from "@/assets/mysql.png";
import mongoDBIcon from "@/assets/mongoDB.png";
import gitIcon from "@/assets/git.png";
import githubIcon from "@/assets/github.png";
import vscodeIcon from "@/assets/vscode.png";
import figmaIcon from "@/assets/figma.png";

// Seeded random number generator to ensure consistency
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
}

// Helper functions using seeded random
const createSeededRandomX = (seed: number, containerWidth: number) => {
  const rng = new SeededRandom(seed);
  return () => rng.next() * containerWidth;
};

const createSeededRandomY = (seed: number, containerHeight: number) => {
  const rng = new SeededRandom(seed);
  return () => rng.next() * containerHeight;
};

const createSeededDuration = (seed: number) => {
  const rng = new SeededRandom(seed);
  return () => 15 + rng.next() * 20; // 15-35 seconds
};

const createSeededDelay = (seed: number) => {
  const rng = new SeededRandom(seed);
  return () => rng.next() * 10; // 0-10 seconds delay
};

// Skill icons array
const skillIcons = [
  { src: reactIcon, alt: "React", size: 40 },
  { src: nextJsIcon, alt: "Next.js", size: 35 },
  { src: nodeJsIcon, alt: "Node.js", size: 38 },
  { src: phpIcon, alt: "PHP", size: 36 },
  { src: javaIcon, alt: "Java", size: 32 },
  { src: pythonIcon, alt: "Python", size: 34 },
  { src: javaScriptIcon, alt: "JavaScript", size: 36 },
  { src: typeScriptIcon, alt: "TypeScript", size: 36 },
  { src: htmlIcon, alt: "HTML", size: 34 },
  { src: cssIcon, alt: "CSS", size: 34 },
  { src: tailwindIcon, alt: "Tailwind CSS", size: 38 },
  { src: bootstrapIcon, alt: "Bootstrap", size: 36 },
  { src: mysqlIcon, alt: "MySQL", size: 40 },
  { src: mongoDBIcon, alt: "MongoDB", size: 32 },
  { src: gitIcon, alt: "Git", size: 36 },
  { src: githubIcon, alt: "GitHub", size: 36 },
  { src: vscodeIcon, alt: "VS Code", size: 36 },
  { src: figmaIcon, alt: "Figma", size: 32 },
];

interface FloatingIconProps {
  icon: typeof skillIcons[0];
  index: number;
  containerWidth: number;
  containerHeight: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ 
  icon, 
  index, 
  containerWidth, 
  containerHeight,
}) => {
  // Use seeded random functions for consistent results
  const randomX = createSeededRandomX(index * 1000, containerWidth - icon.size);
  const randomY = createSeededRandomY(index * 2000, containerHeight - icon.size);
  const getDuration = createSeededDuration(index * 3000);
  const getDelay = createSeededDelay(index * 4000);

  // Generate multiple waypoints for each icon
  const generatePath = () => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      points.push({
        x: randomX(),
        y: randomY(),
      });
    }
    return points;
  };

  const path = generatePath();
  const duration = getDuration();
  const delay = getDelay();

  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{
        x: path[0].x,
        y: path[0].y,
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        x: path.map(p => p.x),
        y: path.map(p => p.y),
        opacity: [0, 0.7, 0.9, 0.6, 0.8, 0.7, 0],
        scale: [0.8, 1, 0.9, 1.1, 0.95, 1, 0.8],
        rotate: [0, 15, -10, 20, -15, 10, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
      }}
      style={{
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
      }}
    >
      <motion.div
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: duration * 0.8,
          delay: delay * 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          width={icon.size}
          height={icon.size}
          className="object-contain"
          style={{
            filter: 'brightness(0.9) contrast(1.1)',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

interface FloatingIconsProps {
  theme?: 'light' | 'dark';
}

const FloatingIcons: React.FC<FloatingIconsProps> = ({ theme = 'dark' }) => {
  const [containerDimensions, setContainerDimensions] = useState({
    width: 1200,
    height: 800
  });

  // Set container dimensions based on actual window size
  useEffect(() => {
    const updateDimensions = () => {
      setContainerDimensions({
        width: Math.min(window.innerWidth, 1200),
        height: Math.min(window.innerHeight, 800)
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating skill icons */}
      {skillIcons.map((icon, index) => (
        <FloatingIcon
          key={`${icon.alt}-${index}`}
          icon={icon}
          index={index}
          containerWidth={containerDimensions.width}
          containerHeight={containerDimensions.height}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;