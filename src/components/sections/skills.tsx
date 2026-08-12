"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

const skillCategories = [
  {
    eyebrow: "01",
    title: "Programming & Development",
    skills: ["C++", "Python", "Java", "SQL", "HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    eyebrow: "02",
    title: "Cybersecurity",
    skills: ["Networking", "Linux", "Wireshark", "Nmap", "Burp Suite", "OWASP", "Ethical Hacking"],
  },
  {
    eyebrow: "03",
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Arch Linux", "Fedora", "Kali Linux", "Ollama", "Open WebUI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section relative">
      {/* Subtle row stripe */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(255,255,255,0.014)" }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="Technical skills"
          subtitle="Technologies and tools I use to build secure systems and modern applications."
          eyebrow="Skills"
        />

        <div className="flex flex-col gap-16">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono-accent text-primary-400">{category.eyebrow}</span>
                <div className="h-px flex-1 bg-white/8" />
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-[0.15em]">
                  {category.title}
                </h3>
              </div>

              {/* Pills */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.04 } },
                }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9, y: 10 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                      },
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 cursor-default transition-all duration-300 hover:text-primary-400 spotlight"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
