"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 inline-flex items-center gap-4">
          <span className="w-12 h-1 bg-primary-500 rounded-full inline-block"></span>
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-400 text-lg max-w-2xl">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
