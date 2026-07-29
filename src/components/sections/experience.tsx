"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const timeline = [
  {
    type: "education",
    title: "B.Sc. in Computer Science & Engineering",
    organization: "Southeast University",
    location: "Dhaka, Bangladesh",
    date: "Expected Graduation: Present",
    description: "Building a strong foundation in computer science principles, data structures, algorithms, and software engineering. Exploring cybersecurity and Linux as specialized interests.",
    icon: <GraduationCap size={20} />
  },
  {
    type: "experience",
    title: "ICT Tutor",
    organization: "Freelance",
    location: "Dhaka, Bangladesh",
    date: "Part-time",
    description: "Provided part-time ICT tutoring, helping students understand computer science fundamentals and basic programming concepts.",
    icon: <Briefcase size={20} />
  }
];

const journey = [
  "Started Programming",
  "Learned Linux",
  "Switched to Arch Linux",
  "Started Cybersecurity",
  "Learning AI",
  "Building Real-world Projects"
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Education & Experience" 
          subtitle="My academic background and professional journey so far." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-10 pb-4 space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -left-[45px] md:-left-[53px] top-1 w-10 h-10 rounded-full border-4 border-black flex items-center justify-center ${item.type === 'education' ? 'bg-primary-500' : 'bg-secondary-500'} text-white`}>
                    {item.icon}
                  </div>
                  
                  <div className="glass-card p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <div className="text-primary-400 font-medium text-lg">{item.organization}</div>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">Learning Journey</h3>
            <div className="space-y-6">
              {journey.map((step, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-sm font-mono group-hover:bg-primary-500/20 group-hover:text-primary-400 group-hover:border-primary-500/30 transition-all">
                    {index + 1}
                  </div>
                  <div className="text-gray-300 font-medium group-hover:text-white transition-colors">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
