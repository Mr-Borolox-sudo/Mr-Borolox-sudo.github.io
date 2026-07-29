"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";

const projects = [
  {
    title: "Bus Reservation System",
    description: "A comprehensive console-based reservation system built in C++ to manage bookings, track seat availability, and handle passenger records.",
    technologies: ["C++", "File I/O", "Data Structures"],
    github: "https://github.com/shihab-ahammed",
    demo: "#"
  },
  {
    title: "Linux Customization Lab",
    description: "A repository of scripts and configurations for customizing Arch Linux, Fedora, and Kali Linux. Includes automated dotfiles setup and ricing.",
    technologies: ["Bash", "Linux", "Dotfiles"],
    github: "https://github.com/shihab-ahammed",
    demo: "#"
  },
  {
    title: "Cybersecurity CTF Toolkit",
    description: "A curated collection of scripts and tools for solving Capture The Flag challenges, focusing on network analysis and cryptography.",
    technologies: ["Python", "Networking", "Cryptography"],
    github: "https://github.com/shihab-ahammed",
    demo: "#"
  },
  {
    title: "AI Assistant Experiments",
    description: "Local LLM integrations using Ollama and Open WebUI to create a privacy-first AI assistant for coding and daily tasks.",
    technologies: ["Ollama", "Python", "API"],
    github: "https://github.com/shihab-ahammed",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Some of the things I've built to apply my skills and solve problems." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder size={40} className="text-primary-500" />
                <div className="flex gap-4">
                  {project.github !== "#" && (
                    <Link href={project.github} target="_blank" className="text-gray-400 hover:text-primary-400 transition-colors">
                      <FaGithub size={22} />
                    </Link>
                  )}
                  {project.demo !== "#" && (
                    <Link href={project.demo} target="_blank" className="text-gray-400 hover:text-primary-400 transition-colors">
                      <ExternalLink size={22} />
                    </Link>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="text-xs font-mono text-secondary-400 bg-secondary-400/10 px-3 py-1 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
