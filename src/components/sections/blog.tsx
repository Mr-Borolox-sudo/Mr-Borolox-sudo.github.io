"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";
import { useRef } from "react";

const articles = [
  {
    title: "Mastering Linux Customization: A Guide to Arch Linux",
    category: "Linux",
    date: "Coming Soon",
    readTime: "5 min read",
    excerpt:
      "Dive into the world of dotfiles, window managers, and ricing to create the perfect development environment on Arch Linux.",
  },
  {
    title: "Understanding Network Protocols for Ethical Hacking",
    category: "Cybersecurity",
    date: "Coming Soon",
    readTime: "8 min read",
    excerpt:
      "A beginner-friendly breakdown of TCP/IP, DNS, and HTTP, and how attackers exploit misconfigurations in these protocols.",
  },
  {
    title: "Running Local LLMs with Ollama",
    category: "AI",
    date: "Coming Soon",
    readTime: "6 min read",
    excerpt:
      "How to set up your own private, locally-hosted AI assistant using Ollama and Open WebUI without compromising data privacy.",
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

export default function Blog() {
  return (
    <section id="blog" className="section relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Latest writing"
          subtitle="Thoughts, tutorials, and insights on tech, cybersecurity, and Linux."
          eyebrow="Blog"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
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
            >
              <Link href="#" className="block h-full">
                <SpotlightCard className="p-6 lg:p-8 flex flex-col h-full group cursor-pointer">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1.5 rounded-full">
                      {article.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover:bg-primary-500/20 group-hover:border-primary-500/30 group-hover:text-primary-400 transition-all duration-300">
                      <BookOpen size={18} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300"
          >
            <span className="border-b border-transparent group-hover:border-white/30 pb-0.5 transition-colors">
              View all articles
            </span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
