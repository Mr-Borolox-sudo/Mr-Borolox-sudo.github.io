"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Mail className="text-primary-400" size={20} />,
    label: "Email",
    value: "ahammedshihab15@gmail.com",
    href: "mailto:ahammedshihab15@gmail.com",
  },
  {
    icon: <FaLinkedin className="text-[#0a66c2]" size={20} />,
    label: "LinkedIn",
    value: "shihab-ahammed",
    href: "https://www.linkedin.com/in/shihab-ahammed/",
  },
  {
    icon: <FaInstagram className="text-[#E1306C]" size={20} />,
    label: "Instagram",
    value: "@_laz_yyyy__",
    href: "https://www.instagram.com/_laz_yyyy__/",
  },
  {
    icon: <FaGithub className="text-white" size={20} />,
    label: "GitHub",
    value: "Mr-Borolox-sudo",
    href: "https://github.com/Mr-Borolox-sudo",
  },
  {
    icon: <MapPin className="text-secondary-400" size={20} />,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-white mb-2">Contact Info</h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="glass-card p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium truncate block"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-gray-300 text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full py-4 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : submitted ? (
                    <>Message Sent! <MessageSquare size={18} /></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
