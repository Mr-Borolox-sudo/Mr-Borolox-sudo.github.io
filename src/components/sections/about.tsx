"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Terminal, Shield, Code2, Cpu } from "lucide-react";
import { useRef } from "react";

const highlights = [
  {
    icon: <Terminal size={20} />,
    title: "Linux enthusiast",
    description:
      "Customizing and working heavily within Linux environments — Arch, Fedora, Kali.",
    accent: "primary",
  },
  {
    icon: <Shield size={20} />,
    title: "Cybersecurity",
    description:
      "Learning ethical hacking, networking, and participating in CTF challenges.",
    accent: "secondary",
  },
  {
    icon: <Code2 size={20} />,
    title: "Software dev",
    description:
      "Writing code in C++, Python, and building full-stack applications.",
    accent: "primary",
  },
  {
    icon: <Cpu size={20} />,
    title: "AI explorer",
    description:
      "Fascinated by LLMs, Ollama, and integrating AI into daily workflows.",
    accent: "secondary",
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

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="About me"
          subtitle="Get to know me better and see what drives my passion for technology."
          eyebrow="About"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          {/* Text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-3 space-y-6 text-gray-400 text-base leading-[1.85]"
          >
            <p>
              Hello — I&apos;m{" "}
              <strong className="text-white font-semibold">
                Shihab Ahammed
              </strong>
              , a motivated Computer Science student based in Dhaka, Bangladesh,
              currently studying at Southeast University.
            </p>
            <p>
              My journey into technology began with a deep curiosity about how
              systems work. This led me to explore Linux, transitioning from
              standard desktop environments to advanced dual-boot setups and
              customizing Arch Linux to fit my workflow perfectly.
            </p>
            <p>
              I have a strong passion for{" "}
              <strong className="text-primary-400 font-semibold">
                Cybersecurity
              </strong>
              . I spend my time understanding networking protocols, learning
              ethical hacking fundamentals, and solving Capture The Flag (CTF)
              challenges to hone my skills.
            </p>
            <p>
              When I&apos;m not studying or hacking away in the terminal, I
              enjoy playing video games, exploring new AI tools, and tutoring
              others in ICT.
            </p>
          </motion.div>

          {/* Cards — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.32, 0.72, 0, 1],
              delay: 0.15,
            }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, index) => (
              <SpotlightCard key={index} className="p-5 flex items-start gap-4 group">
                <div
                  className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center border transition-all duration-300 ${
                    item.accent === "primary"
                      ? "bg-primary-500/10 border-primary-500/20 text-primary-400 group-hover:bg-primary-500/20 group-hover:border-primary-400/40"
                      : "bg-secondary-500/10 border-secondary-500/20 text-secondary-400 group-hover:bg-secondary-500/20 group-hover:border-secondary-400/40"
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
