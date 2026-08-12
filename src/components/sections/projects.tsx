"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { useRef } from "react";

const projects = [
  {
    title: "Bus Reservation System",
    description:
      "A comprehensive console-based reservation system built in C++ to manage bookings, track seat availability, and handle passenger records.",
    technologies: ["C++", "File I/O", "Data Structures"],
    github: "https://github.com/shihab-ahammed",
    demo: "#",
  },
  {
    title: "Linux Customization Lab",
    description:
      "A repository of scripts and configurations for customizing Arch Linux, Fedora, and Kali Linux. Includes automated dotfiles setup and ricing.",
    technologies: ["Bash", "Linux", "Dotfiles"],
    github: "https://github.com/shihab-ahammed",
    demo: "#",
  },
  {
    title: "Cybersecurity CTF Toolkit",
    description:
      "A curated collection of scripts and tools for solving Capture The Flag challenges, focusing on network analysis and cryptography.",
    technologies: ["Python", "Networking", "Cryptography"],
    github: "https://github.com/shihab-ahammed",
    demo: "#",
  },
  {
    title: "AI Assistant Experiments",
    description:
      "Local LLM integrations using Ollama and Open WebUI to create a privacy-first AI assistant for coding and daily tasks.",
    technologies: ["Ollama", "Python", "API"],
    github: "https://github.com/shihab-ahammed",
    demo: "#",
  },
];

function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`glass-card spotlight ${className}`}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured projects"
          subtitle="Some of the things I've built to apply my skills and solve problems."
          eyebrow="Projects"
        />

        {/* 2-col staggered masonry-like layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
                delay: index * 0.1,
              }}
              className={index % 2 === 1 ? "md:mt-12" : ""}
            >
              <SpotlightCard className="p-8 lg:p-10 flex flex-col h-full group">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-colors duration-300">
                    <Folder size={24} />
                  </div>
                  <div className="flex gap-4">
                    {project.github !== "#" && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <FaGithub size={22} />
                      </Link>
                    )}
                    {project.demo !== "#" && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <ExternalLink size={22} />
                      </Link>
                    )}
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className="text-[11px] uppercase tracking-wider font-semibold text-secondary-400 bg-secondary-500/10 border border-secondary-500/20 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
