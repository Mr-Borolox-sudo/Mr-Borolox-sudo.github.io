"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Terminal, Shield, Cpu, Code2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Terminal className="text-primary-400" size={24} />,
      title: "Linux Enthusiast",
      description: "Customizing and working heavily within Linux environments (Arch, Fedora, Kali)."
    },
    {
      icon: <Shield className="text-secondary-400" size={24} />,
      title: "Cybersecurity",
      description: "Learning ethical hacking, networking, and participating in CTF challenges."
    },
    {
      icon: <Code2 className="text-primary-400" size={24} />,
      title: "Software Dev",
      description: "Writing code in C++, Python, and building full-stack applications."
    },
    {
      icon: <Cpu className="text-secondary-400" size={24} />,
      title: "AI Explorer",
      description: "Fascinated by LLMs, Ollama, and integrating AI into daily workflows."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better and see what drives my passion for technology." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm <strong className="text-white">Shihab Ahammed</strong>, a motivated Computer Science student based in Dhaka, Bangladesh, currently studying at Southeast University.
            </p>
            <p>
              My journey into technology began with a deep curiosity about how systems work. This led me to explore Linux, transitioning from standard desktop environments to advanced dual-boot setups and customizing Arch Linux to fit my workflow perfectly.
            </p>
            <p>
              I have a strong passion for <strong className="text-primary-400">Cybersecurity</strong>. I spend my time understanding networking protocols, learning ethical hacking fundamentals, and solving Capture The Flag (CTF) challenges to hone my skills.
            </p>
            <p>
              When I'm not studying or hacking away in the terminal, I enjoy playing video games, exploring new AI tools, and tutoring others in ICT.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary-500/20 group-hover:border-primary-500/30 transition-all">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
