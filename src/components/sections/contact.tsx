"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, CheckCircle, XCircle } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_0xnp96m";
const TEMPLATE_ID = "template_lptzgnl";
const PUBLIC_KEY = "mRuHUWvh_Ab5A6qKP";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "ahammedshihab15@gmail.com",
    href: "mailto:ahammedshihab15@gmail.com",
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    value: "shihab-ahammed",
    href: "https://www.linkedin.com/in/shihab-ahammed/",
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    value: "@_laz_yyyy__",
    href: "https://www.instagram.com/_laz_yyyy__/",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    value: "Mr-Borolox-sudo",
    href: "https://github.com/Mr-Borolox-sudo",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

type Status = "idle" | "sending" | "success" | "error";

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

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Get in touch"
          subtitle="Have a question or want to work together? Reach out!"
          eyebrow="Contact"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Contact Information
            </h3>
            
            <div className="flex flex-col gap-4">
              {contactInfo.map((item, index) => (
                <SpotlightCard key={index} className="p-4 flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-gray-400 group-hover:bg-primary-500/10 group-hover:text-primary-400 group-hover:border-primary-500/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-mono text-gray-500 mb-1">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        className="text-gray-200 hover:text-primary-400 transition-colors text-sm font-medium truncate block"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-gray-200 text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-8 md:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="from_name" className="text-xs font-mono uppercase tracking-widest text-gray-400 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#080808]/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="from_email" className="text-xs font-mono uppercase tracking-widest text-gray-400 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#080808]/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-gray-400 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full bg-[#080808]/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3.5 text-sm font-medium"
                  >
                    <CheckCircle size={18} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3.5 text-sm font-medium"
                  >
                    <XCircle size={18} />
                    Something went wrong. Please try emailing me directly.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] active:scale-[0.98]"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <MessageSquare size={18} /> Message Sent
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
