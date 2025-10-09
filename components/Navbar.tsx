"use client";
import React, { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "@/constants";
import { FaTimes, FaSun, FaMoon, FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { theme, toggleTheme, isHydrated } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_LINKS.map((link) => {
        const targetId = link.href.startsWith("#")
          ? link.href.substring(1)
          : link.href;
        const element = document.getElementById(targetId);
        return { href: link.href, element };
      }).filter((section) => section.element);

      const scrollPosition = window.scrollY + 150; // Increased offset for better detection
      let currentActiveSection = "";

      // Check if we're in the hero section (at the top)
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
        if (scrollPosition < heroBottom) {
          // We're in hero section, don't set any active state
          currentActiveSection = "";
        } else {
          // We're past hero section, check other sections
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const element = section.element!;
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            // Check if we're in this section
            if (
              scrollPosition >= offsetTop - 100 &&
              scrollPosition < offsetTop + offsetHeight - 100
            ) {
              currentActiveSection = section.href;
              break;
            }
          }
          
          // Special handling for the last section (contact)
          const lastSection = sections[sections.length - 1];
          if (lastSection && lastSection.element) {
            const lastElement = lastSection.element;
            const lastOffsetTop = lastElement.offsetTop;
            if (scrollPosition >= lastOffsetTop - 100) {
              currentActiveSection = lastSection.href;
            }
          }
        }
      }

      if (currentActiveSection !== activeLink) {
        setActiveLink(currentActiveSection);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.startsWith("#") ? href.substring(1) : href;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Calculate offset for fixed navbar (navbar height + padding)
      const navbarHeight = 100; // Approximate navbar height with padding
      const elementPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  // Show simplified version until hydrated to prevent hydration mismatch
  if (!isHydrated) {
    return (
      <div>
        <nav className="fixed left-0 right-0 top-6 z-50 px-4 perspective-1000">
          {/* Simplified version without theme-specific styles */}
          <div className="mx-auto hidden max-w-3xl items-center justify-center rounded-full border backdrop-blur-md lg:flex xl:max-w-3xl 2xl:max-w-3xl overflow-hidden py-2.5 px-4 shadow-lg transition-all duration-300 border-gray-300 bg-white/80">
            <div className="flex items-center justify-between relative z-10 w-full">
              {/* Home Icon */}
              <a
                href="#hero"
                className="p-2.5 rounded-full transition-all duration-300 border backdrop-blur-sm border-gray-300 bg-white/50 text-blue-600 mr-4"
                title="Go to Home"
              >
                <FaHome className="w-4 h-4" />
              </a>
              
              <ul className="flex items-center gap-3 xl:gap-4 2xl:gap-5 justify-center flex-1">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="relative px-5 py-2.5 text-sm xl:text-base 2xl:text-lg transition-all duration-500 ease-out touch-manipulation font-medium rounded-full text-gray-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="ml-4 p-2.5 rounded-full transition-all duration-300 border backdrop-blur-sm border-gray-300 bg-white/50 text-gray-600">
                <FaSun className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="rounded-lg lg:hidden overflow-hidden">
            <div className="flex items-center justify-end gap-3">
              <button className="p-3 rounded-full transition-all duration-300 border backdrop-blur-md border-gray-300 bg-white/50 text-gray-600">
                <FaSun className="w-4 h-4" />
              </button>
              <button className="focus:outline-none lg:hidden p-4 touch-manipulation rounded-full backdrop-blur-md border border-gray-300 bg-white/50">
                <FaBars className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <nav className="fixed left-0 right-0 top-6 z-50 px-4 perspective-1000">
        {/* Desktop Menu */}
        <div
          className={`mx-auto hidden max-w-3xl items-center justify-center rounded-full border backdrop-blur-md lg:flex xl:max-w-3xl 2xl:max-w-3xl overflow-hidden
          py-2.5 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.1),0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
          before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:pointer-events-none
          ${
            theme === 'dark'
              ? 'border-gray-700/30 bg-gray-900/20 before:from-gray-800/20 before:to-transparent inset_0_1px_0_rgba(255,255,255,0.05)'
              : 'border-white/20 bg-white/10 before:from-white/10 before:to-transparent inset_0_1px_0_rgba(255,255,255,0.2)'
          }`}
        >
          <div className="flex items-center justify-between relative z-10 w-full">
            {/* Home Icon */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className={`p-2.5 rounded-full transition-all duration-300 border backdrop-blur-sm
              hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl mr-4
              ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-600/30 text-blue-400 hover:bg-blue-400/20 hover:border-blue-400/40'
                  : 'bg-white/50 border-gray-300/30 text-blue-600 hover:bg-blue-600/20 hover:border-blue-600/40'
              }`}
              title="Go to Home"
            >
              <FaHome className="w-4 h-4" />
            </a>
            
            <ul className="flex items-center gap-3 xl:gap-4 2xl:gap-5 justify-center flex-1">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative px-5 py-2.5 text-sm xl:text-base 2xl:text-lg 
                    transition-all duration-500 ease-out touch-manipulation font-medium rounded-full
                    shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.3),0_4px_16px_rgba(59,130,246,0.2)]
                    overflow-hidden group border border-transparent
                    hover:border-blue-300/40 hover:bg-gradient-to-r hover:from-blue-400/20 hover:via-blue-300/30 hover:to-blue-400/20
                    hover:backdrop-blur-lg transform hover:scale-105 hover:-translate-y-0.5
                    ${
                      activeLink === item.href
                        ? theme === 'dark'
                          ? "text-white border-blue-400 bg-blue-500/20 shadow-[0_4px_20px_rgba(59,130,246,0.25)]"
                          : "text-black border-black bg-blue-400/15 shadow-[0_4px_20px_rgba(59,130,246,0.25)]"
                        : theme === 'dark'
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-black"
                    }`}
                  >
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                      bg-gradient-to-r from-transparent via-blue-400/70 to-transparent 
                      transition-all duration-700 ease-out group-hover:animate-shine"
                    ></span>

                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                      bg-gradient-to-br from-blue-300/40 via-transparent to-blue-500/30
                      transition-all duration-500 ease-out group-hover:animate-gloss
                      blur-[1px]"
                    ></span>

                    <span
                      className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100
                      bg-gradient-to-r from-transparent via-blue-400/50 to-transparent
                      transition-all duration-300 ease-out group-hover:animate-shimmer
                      blur-sm"
                    ></span>

                    <span
                      className="absolute inset-px rounded-full opacity-0 group-hover:opacity-60
                      bg-gradient-to-t from-transparent via-blue-300/35 to-blue-400/50
                      transition-all duration-400 ease-out"
                    ></span>

                    <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-sm">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2.5 rounded-full transition-all duration-300 border backdrop-blur-sm
              hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl
              ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-600/30 text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400/40'
                  : 'bg-white/50 border-gray-300/30 text-gray-600 hover:bg-gray-600/20 hover:border-gray-600/40'
              }`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <FaMoon className="w-4 h-4" />
              ) : (
                <FaSun className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-lg lg:hidden overflow-hidden">
          <div className="flex items-center justify-end gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-full transition-all duration-300 border backdrop-blur-md
              hover:scale-110 active:scale-95 shadow-lg
              ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-600/30 text-yellow-400'
                  : 'bg-white/50 border-gray-300/30 text-gray-600'
              }`}
            >
              {theme === 'light' ? (
                <FaMoon className="w-4 h-4" />
              ) : (
                <FaSun className="w-4 h-4" />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className={`focus:outline-none lg:hidden p-4 touch-manipulation rounded-full backdrop-blur-md border
              shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-all duration-300 active:scale-95
              ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-600/30'
                  : 'bg-white/15 border-white/20'
              }`}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
              ) : (
                <FaBars className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <ul
              className={`mt-4 flex flex-col gap-2 backdrop-blur-md p-4 rounded-2xl border
              shadow-[0_8px_32px_rgba(0,0,0,0.1)] animate-in slide-in-from-top-2 duration-300
              ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-600/30'
                  : 'bg-white/15 border-white/20 inset_0_1px_0_rgba(255,255,255,0.2)'
              }`}
            >
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative block w-full text-base py-3 px-4 touch-manipulation transition-all duration-500 font-medium rounded-full
                    shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_24px_rgba(59,130,246,0.3),0_2px_8px_rgba(59,130,246,0.2)]
                    overflow-hidden group border border-transparent
                    hover:border-blue-300/40 hover:bg-gradient-to-r hover:from-blue-400/20 hover:via-blue-300/30 hover:to-blue-400/20
                    hover:backdrop-blur-lg active:scale-95
                    ${
                      activeLink === item.href
                        ? theme === 'dark'
                          ? "text-white border-blue-400 bg-blue-500/20 shadow-[0_4px_16px_rgba(59,130,246,0.25)]"
                          : "text-black border-black bg-blue-400/15 shadow-[0_4px_16px_rgba(59,130,246,0.25)]"
                        : theme === 'dark'
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-black"
                    }`}
                  >
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                      bg-gradient-to-r from-transparent via-blue-400/60 to-transparent 
                      transition-all duration-600 ease-out group-hover:animate-shine"
                    ></span>

                    <span
                      className="absolute inset-px rounded-full opacity-0 group-hover:opacity-50
                      bg-gradient-to-t from-transparent via-blue-300/30 to-blue-400/45
                      transition-all duration-400 ease-out"
                    ></span>

                    <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-sm">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
