"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Picture — shown at top on mobile, right side on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0 order-first lg:order-last"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 p-1 shadow-[0_0_40px_rgba(14,165,233,0.3)]">
              <div className="w-full h-full rounded-full bg-gray-900 border-4 border-black overflow-hidden relative group cursor-pointer">
                <Image
                  src="/profile.jpg"
                  alt="Shihab Ahammed"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 mb-6 text-sm font-mono"
            >
              <Terminal size={14} />
              <span>sys.boot("shihab_ahammed")</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
              Hi, I'm <span className="text-gradient">Shihab Ahammed</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed"
            >
              Computer Science Student | Cybersecurity Enthusiast | Linux User | AI Explorer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
            >
              I'm passionate about cybersecurity, Linux, AI, programming, and building secure systems. I'm currently studying Computer Science while continuously learning ethical hacking, C++, networking, and modern software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4"
            >
              <Link
                href="#projects"
                className="px-8 py-4 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center gap-2"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-l from-primary-900/20 to-transparent blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
}
