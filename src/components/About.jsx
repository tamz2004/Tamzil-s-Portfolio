import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import profileImg from "../assets/img/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-space font-bold">About Me</h2>
            <div className="hidden md:block w-32 h-[1px] bg-white/20 ml-4"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {resumeData.about.text}
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {resumeData.about.stats.map((stat, index) => (
                <div key={index} className="glass-panel p-4 text-center border-t-2 border-t-accent-blue">
                  <div className="text-2xl md:text-3xl font-space font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden glass-panel group">
              <div className="absolute inset-0 bg-accent-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={profileImg}
                alt="About Me" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-accent-blue rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent-violet/50 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
