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

type Status = "idle" | "sending" | "success" | "error";

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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="from_name" className="text-sm font-medium text-gray-300 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="from_email" className="text-sm font-medium text-gray-300 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3 text-sm"
                  >
                    <CheckCircle size={16} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 text-sm"
                  >
                    <XCircle size={16} />
                    Something went wrong. Please try emailing me directly.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <MessageSquare size={18} /> Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
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
