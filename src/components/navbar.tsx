"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating pill nav */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className={`glass-nav rounded-full flex items-center justify-between px-5 py-2.5 w-full max-w-3xl transition-all duration-500 ${
            scrolled ? "shadow-[0_0_40px_rgba(14,165,233,0.08)]" : ""
          }`}
        >
          {/* Logo */}
          <Link
            href="#home"
            className="text-lg font-bold tracking-tight shrink-0"
            onClick={() => setIsOpen(false)}
          >
            Shihab<span className="text-primary-400">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-1.5 rounded-full text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop socials */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="https://github.com/Mr-Borolox-sudo" target="_blank" aria-label="GitHub"
              className="text-gray-500 hover:text-white transition-colors duration-300">
              <FaGithub size={17} />
            </Link>
            <Link href="https://www.linkedin.com/in/shihab-ahammed/" target="_blank" aria-label="LinkedIn"
              className="text-gray-500 hover:text-[#0a66c2] transition-colors duration-300">
              <FaLinkedin size={17} />
            </Link>
            <Link href="https://www.instagram.com/_laz_yyyy__/" target="_blank" aria-label="Instagram"
              className="text-gray-500 hover:text-[#E1306C] transition-colors duration-300">
              <FaInstagram size={17} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-white origin-center transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block h-px w-5 bg-white origin-center transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </motion.nav>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "rgba(8,8,8,0.92)", backdropFilter: "blur(24px)" }}
          >
            <ul className="flex flex-col items-center gap-2 mb-12">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-semibold text-gray-300 hover:text-white transition-colors tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-6"
            >
              <Link href="https://github.com/Mr-Borolox-sudo" target="_blank"
                className="text-gray-500 hover:text-white transition-colors"><FaGithub size={22} /></Link>
              <Link href="https://www.linkedin.com/in/shihab-ahammed/" target="_blank"
                className="text-gray-500 hover:text-[#0a66c2] transition-colors"><FaLinkedin size={22} /></Link>
              <Link href="https://www.instagram.com/_laz_yyyy__/" target="_blank"
                className="text-gray-500 hover:text-[#E1306C] transition-colors"><FaInstagram size={22} /></Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
