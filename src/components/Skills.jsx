import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { 
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub,
  FaServer, FaBrain, FaLaptopCode, FaDatabase, FaTools
} from "react-icons/fa";
import { 
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, 
  SiJsonwebtokens, SiPostman, SiTensorflow, SiC 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillIcons = {
  "Java": <FaJava className="text-[#5382a1]" />,
  "JavaScript": <SiJavascript className="text-[#f7df1e]" />,
  "C": <SiC className="text-[#a8b9cc]" />,
  "React.js": <FaReact className="text-[#61dafb]" />,
  "HTML": <FaHtml5 className="text-[#e34f26]" />,
  "CSS": <FaCss3Alt className="text-[#1572b6]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38b2ac]" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-slate-900" />,
  "MongoDB": <SiMongodb className="text-[#47a248]" />,
  "MySQL": <SiMysql className="text-[#4479a1]" />,
  "JWT": <SiJsonwebtokens className="text-[#000000] bg-white rounded-full p-1" />,
  "REST APIs": <TbApi className="text-accent-blue" />,
  "Git": <FaGitAlt className="text-[#f05032]" />,
  "GitHub": <FaGithub className="text-slate-900" />,
  "Postman": <SiPostman className="text-[#ff6c37]" />,
  "TensorFlow.js": <SiTensorflow className="text-[#ff6f00]" />
};

const categoryIcons = {
  "Backend & APIs": <FaServer className="text-accent-blue" />,
  "AI / ML Exposure": <FaBrain className="text-accent-blue" />,
  "Frontend": <FaLaptopCode className="text-accent-blue" />,
  "Databases": <FaDatabase className="text-accent-blue" />,
  "Tools & Practices": <FaTools className="text-accent-blue" />
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark">
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-accent-blue">03 /</span>
            <h2 className="text-4xl md:text-6xl font-space font-black">Skills</h2>
            <div className="hidden md:block flex-1 h-[2px] bg-slate-900/10 ml-4"></div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <div className="flex flex-col gap-6 mb-24 overflow-hidden w-full marquee-container py-6">
        {/* Row 1 */}
        <div className="flex w-fit animate-marquee">
          {[...resumeData.skills.marqueeRow1, ...resumeData.skills.marqueeRow1].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center px-8 py-4 mx-4 glass-panel whitespace-nowrap text-xl font-space font-bold text-slate-700 hover:text-accent-blue hover:-translate-y-2 hover:shadow-[6px_6px_0_0_rgba(20,20,15,1)] transition-all duration-300 border-slate-200 group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{skillIcons[skill]}</span>
              {skill}
            </div>
          ))}
        </div>
        {/* Row 2 (Reverse) */}
        <div className="flex w-fit animate-marquee-reverse">
          {[...resumeData.skills.marqueeRow2, ...resumeData.skills.marqueeRow2].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center px-8 py-4 mx-4 glass-panel whitespace-nowrap text-xl font-space font-bold text-slate-700 hover:text-accent-blue hover:-translate-y-2 hover:shadow-[6px_6px_0_0_rgba(20,20,15,1)] transition-all duration-300 border-slate-200 group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{skillIcons[skill]}</span>
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel hover-lift p-8 hover:border-accent-blue/50 transition-colors group"
            >
              <h3 className="text-xl font-space font-bold mb-6 text-slate-900 group-hover:text-accent-blue transition-colors flex items-center gap-3">
                <span className="text-2xl">{categoryIcons[category.title]}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-900/5 border border-slate-200 rounded-md text-sm text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
