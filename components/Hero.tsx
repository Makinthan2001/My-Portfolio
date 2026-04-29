"use client";
import { HERO, SOCIAL_MEDIA_LINKS } from "@/constants";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import cardimg from "@/assets/hero-image.png";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  interface Dot {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
  }

  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  // Handle smooth scroll to contact section
  const handleHireMeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      const navbarHeight = 100; // Same offset as navbar
      const elementPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const parent = canvas.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        canvas.width = parentRect.width;
        canvas.height = parentRect.height;
        canvas.style.width = `${parentRect.width}px`;
        canvas.style.height = `${parentRect.height}px`;
      } else {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    updateCanvasSize();

    // Create dots
    const createDots = () => {
      dotsRef.current = [];
      // Calculate dots based on canvas area for better coverage
      const dotDensity = (canvas.width * canvas.height) / 12000; // Increased density (was 20000)
      const numberOfDots = Math.max(50, Math.min(100, Math.floor(dotDensity))); // Between 40-80 dots (was 25-40)

      for (let i = 0; i < numberOfDots; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: 3, // Decreased radius for smaller dots
        });
      }
    };

    // Create dots after canvas is properly sized
    createDots();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach((dot) => {
        // Mouse repulsion
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120 && distance > 0) {
          const force = (120 - distance) / 120;
          dot.vx -= (dx / distance) * force * 2;
          dot.vy -= (dy / distance) * force * 2;
        }

        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x <= dot.size || dot.x >= canvas.width - dot.size) {
          dot.vx *= -1;
          dot.x = Math.max(dot.size, Math.min(canvas.width - dot.size, dot.x));
        }
        if (dot.y <= dot.size || dot.y >= canvas.height - dot.size) {
          dot.vy *= -1;
          dot.y = Math.max(dot.size, Math.min(canvas.height - dot.size, dot.y));
        }

        // Apply friction
        dot.vx *= 0.99;
        dot.vy *= 0.99;

        // Add random movement
        dot.vx += (Math.random() - 0.5) * 0.1;
        dot.vy += (Math.random() - 0.5) * 0.1;

        // Draw dot with glow effect
        ctx.save();
        ctx.globalAlpha = 0.95; // Maximum opacity for high visibility

        // Outer glow
        ctx.shadowColor = "#3b82f6";
        ctx.shadowBlur = 10; // Reduced blur for smaller appearance
        ctx.fillStyle = "#3b82f6";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright dot
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#60a5fa";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    // Handle window resize to recreate dots
    const handleResize = () => {
      updateCanvasSize();
      createDots();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`relative w-full min-h-screen transition-colors duration-300 overflow-hidden flex items-center justify-center
        text-gray-800 dark:text-gray-100 bg-transparent`}
      id="hero"
    >
      {/* Interactive Dots Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 0,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"
          }`}
        />
      </div>

      <div
        className="relative w-full max-w-4xl flex flex-col items-center justify-center text-center px-4"
        style={{ zIndex: 10 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            {/* Main greeting heading now uses CSS var foreground for consistent theming */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-[var(--foreground)] tracking-tight">
              Hello <span className="text-blue-500">.</span>
            </h1>

            <div className="relative inline-block mb-4 sm:mb-6">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--foreground)]/90 tracking-tight flex items-center justify-center gap-4">
                <div className="w-8 h-[2px] bg-blue-500"></div>
                I&apos;m {HERO.name}
                <div className="w-8 h-[2px] bg-blue-500"></div>
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {HERO.greet}
            </h3>

            <p
              className={`text-lg sm:text-xl max-w-2xl mx-auto mb-8 transition-colors duration-300 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {HERO.description}
            </p>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.href}`}
                className={`p-2 rounded-lg transition-colors text-xl sm:text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500/60 focus:ring-offset-transparent ${
                  theme === "dark"
                    ? "bg-gray-800/80 hover:bg-gray-700 text-gray-200 hover:text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={handleHireMeClick}
              className="group flex items-center gap-2 px-6 sm:px-8 py-3 bg-blue-500 text-white rounded-full text-sm sm:text-base font-medium hover:bg-blue-600 transition-all duration-300"
            >
              Hire Me
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Makinthan.pdf"
              download="Makinthan.pdf"
              className={`group flex items-center gap-2 px-6 sm:px-8 py-3 border border-blue-500 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                theme === "dark"
                  ? "text-blue-400 hover:bg-blue-400 hover:text-gray-900"
                  : "text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              My Resume
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
