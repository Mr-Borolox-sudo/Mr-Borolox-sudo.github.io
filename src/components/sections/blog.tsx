"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";

const articles = [
  {
    title: "Mastering Linux Customization: A Guide to Arch Linux",
    category: "Linux",
    date: "Coming Soon",
    readTime: "5 min read",
    excerpt: "Dive into the world of dotfiles, window managers, and ricing to create the perfect development environment on Arch Linux."
  },
  {
    title: "Understanding Network Protocols for Ethical Hacking",
    category: "Cybersecurity",
    date: "Coming Soon",
    readTime: "8 min read",
    excerpt: "A beginner-friendly breakdown of TCP/IP, DNS, and HTTP, and how attackers exploit misconfigurations in these protocols."
  },
  {
    title: "Running Local LLMs with Ollama",
    category: "AI",
    date: "Coming Soon",
    readTime: "6 min read",
    excerpt: "How to set up your own private, locally-hosted AI assistant using Ollama and Open WebUI without compromising data privacy."
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Latest Writing" 
          subtitle="Thoughts, tutorials, and insights on tech, cybersecurity, and Linux." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col group cursor-pointer"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-400 bg-primary-400/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <BookOpen size={20} className="text-gray-500 group-hover:text-primary-400 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="#" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
            View all articles <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
