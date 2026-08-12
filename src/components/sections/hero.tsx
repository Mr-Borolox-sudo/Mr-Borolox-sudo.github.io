"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-28 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Photo — top on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
            className="flex-shrink-0 order-first lg:order-last"
          >
            {/* Double-bezel frame */}
            <div className="p-1.5 rounded-full bg-gradient-to-tr from-primary-600/60 via-secondary-500/40 to-primary-400/60 shadow-[0_0_60px_rgba(14,165,233,0.2)]">
              <div className="p-1 rounded-full bg-background">
                <div className="w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden relative group">
                  <Image
                    src="/profile.jpg"
                    alt="Shihab Ahammed"
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                    priority
                  />
                  {/* Inner vignette */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="max-w-2xl text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="eyebrow mb-6 inline-flex"
            >
              <Terminal size={11} />
              sys.boot(&quot;shihab_ahammed&quot;)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Shihab Ahammed</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
              className="text-base md:text-lg text-gray-400 font-mono-accent mb-4"
            >
              CS Student &nbsp;·&nbsp; Cybersecurity Enthusiast &nbsp;·&nbsp; Linux User &nbsp;·&nbsp; AI Explorer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
              className="text-gray-500 text-base leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Passionate about cybersecurity, Linux, AI, and building secure systems. Currently studying Computer Science
              while exploring ethical hacking, C++, networking, and modern software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3"
            >
              {/* Primary CTA — Button-in-Button pattern */}
              <Link
                href="#projects"
                className="group flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-[0_0_24px_rgba(14,165,233,0.25)] hover:shadow-[0_0_36px_rgba(14,165,233,0.4)] active:scale-[0.98]"
              >
                View Projects
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  <ArrowRight size={14} />
                </span>
              </Link>

              <Link
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/25 hover:bg-white/5 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative orbs */}
      <div aria-hidden="true" className="absolute right-0 top-1/3 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute left-0 bottom-0 w-64 h-64 bg-secondary-600/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
