import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../data/resumeData";

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-space font-bold">Journey</h2>
            <div className="hidden md:block w-32 h-[1px] bg-white/20 ml-4"></div>
          </div>
        </motion.div>

        {/* Tab Controls */}
        <div className="flex justify-center md:justify-start mb-12">
          <div className="flex p-1 bg-white/5 rounded-full border border-white/10 relative">
            {["experience", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 rounded-full text-sm font-space font-bold tracking-wider transition-colors z-10 capitalize ${
                  activeTab === tab ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent-blue rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-[31px] top-4 bottom-4 w-[2px] bg-white/10"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-12"
            >
              {activeTab === "experience" &&
                resumeData.experience.map((item, index) => (
                  <div key={index} className="relative pl-12 md:pl-24 group">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-4 top-1 w-8 h-8 rounded-full bg-dark border-2 border-accent-blue flex items-center justify-center group-hover:scale-125 group-hover:bg-accent-blue transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-accent-blue group-hover:bg-white transition-colors"></div>
                    </div>
                    
                    <h3 className="text-2xl font-space font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 text-sm font-space">
                      <span className="text-accent-blue font-medium">{item.company}</span>
                      <span className="hidden md:block w-1 h-1 rounded-full bg-white/30"></span>
                      <span className="text-white/50">{item.period}</span>
                    </div>
                    <p className="text-white/70 leading-relaxed max-w-2xl">{item.description}</p>
                  </div>
                ))}

              {activeTab === "education" &&
                resumeData.education.map((item, index) => (
                  <div key={index} className="relative pl-12 md:pl-24 group">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-4 top-1 w-8 h-8 rounded-full bg-dark border-2 border-accent-violet flex items-center justify-center group-hover:scale-125 group-hover:bg-accent-violet transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-accent-violet group-hover:bg-white transition-colors"></div>
                    </div>
                    
                    <h3 className="text-2xl font-space font-bold text-white mb-2">{item.degree}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 text-sm font-space">
                      <span className="text-accent-violet font-medium">{item.institution}</span>
                      <span className="hidden md:block w-1 h-1 rounded-full bg-white/30"></span>
                      <span className="text-white/50">{item.period}</span>
                    </div>
                    <p className="text-white/70 leading-relaxed font-medium">{item.details}</p>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
