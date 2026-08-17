import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { resumeData } from "../data/resumeData";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-space font-bold">Projects</h2>
            <div className="hidden md:block w-32 h-[1px] bg-white/20 ml-4"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
