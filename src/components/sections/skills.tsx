"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

const skillCategories = [
  {
    title: "Programming & Development",
    skills: ["C++", "Python", "Java", "SQL", "HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cybersecurity",
    skills: ["Networking", "Linux", "Wireshark", "Nmap", "Burp Suite", "OWASP", "Ethical Hacking Fundamentals"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Arch Linux", "Fedora", "Kali Linux", "Ollama", "Open WebUI"],
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with to build secure systems and modern applications." 
        />
        
        <div className="flex flex-col gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2 inline-block">
                {category.title}
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-4"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-3 glass rounded-lg text-gray-300 font-medium border border-white/5 hover:border-primary-500/50 hover:text-primary-400 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)] transition-all cursor-default"
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
