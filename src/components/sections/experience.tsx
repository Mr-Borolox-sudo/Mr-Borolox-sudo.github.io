"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { useRef } from "react";

const timeline = [
  {
    type: "education",
    title: "B.Sc. in Computer Science & Engineering",
    organization: "Southeast University",
    location: "Dhaka, Bangladesh",
    date: "Expected Graduation: Present",
    description:
      "Building a strong foundation in computer science principles, data structures, algorithms, and software engineering. Exploring cybersecurity and Linux as specialized interests.",
    icon: <GraduationCap size={18} />,
  },
  {
    type: "experience",
    title: "ICT Tutor",
    organization: "Freelance",
    location: "Dhaka, Bangladesh",
    date: "Part-time",
    description:
      "Provided part-time ICT tutoring, helping students understand computer science fundamentals and basic programming concepts.",
    icon: <Briefcase size={18} />,
  },
];

const journey = [
  "Started Programming",
  "Learned Linux",
  "Switched to Arch Linux",
  "Started Cybersecurity",
  "Learning AI",
  "Building Real-world Projects",
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

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Education & Experience"
          subtitle="My academic background and professional journey so far."
          eyebrow="Timeline"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main timeline */}
          <div className="lg:col-span-8">
            <div className="relative space-y-10 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  {/* Icon Node */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#080808] bg-[#0f1117] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] group-hover:bg-primary-500 group-hover:text-[#080808] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 z-10 ml-0 md:ml-0">
                    {item.icon}
                  </div>

                  {/* Card Content */}
                  <SpotlightCard className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 md:p-8 ml-6 md:ml-0">
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                      <div className="font-mono-accent text-primary-400 font-medium">
                        {item.organization}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-xs font-mono text-gray-500 mb-5">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar Journey */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-4"
          >
            <div className="sticky top-28">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-[0.15em] mb-8 border-b border-white/10 pb-4">
                Learning Journey
              </h3>
              <div className="space-y-6">
                {journey.map((step, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-xs font-mono font-bold group-hover:bg-secondary-500/10 group-hover:text-secondary-400 group-hover:border-secondary-500/20 transition-all duration-300">
                      0{index + 1}
                    </div>
                    <div className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
