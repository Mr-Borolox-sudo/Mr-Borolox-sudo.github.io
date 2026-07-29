"use client";

import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-bold tracking-tighter inline-block mb-2">
            Shihab<span className="text-primary-500">.</span>
          </Link>
          <p className="text-gray-400 text-sm">
            Computer Science Student & Cybersecurity Enthusiast.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://github.com/shihab-ahammed" target="_blank" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/shihab-ahammed/" target="_blank" className="text-gray-400 hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://www.instagram.com/_laz_yyyy__/" target="_blank" className="text-gray-400 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
            <FaInstagram size={24} />
          </Link>
          <Link href="mailto:ahammedshihab15@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Email">
            <Mail size={24} />
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {year} Shihab Ahammed. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 md:mt-0">
          Built with <Heart size={14} className="text-red-500" /> and Next.js
        </p>
      </div>
    </footer>
  );
}
