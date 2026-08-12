"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#050505] pt-16 pb-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Brand & Mission */}
          <div className="text-center md:text-left max-w-sm">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight inline-block mb-4"
            >
              Shihab<span className="text-primary-400">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building secure systems and exploring the boundaries of Linux, cybersecurity, and software development.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <p className="text-xs font-mono uppercase tracking-widest text-gray-500">
              Connect
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/shihab-ahammed"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shihab-ahammed/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0a66c2]/20 hover:text-[#0a66c2] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/_laz_yyyy__/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#E1306C]/20 hover:text-[#E1306C] transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href="mailto:ahammedshihab15@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© {year} Shihab Ahammed. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Root access to knowledge, one shell at a time.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
