import { useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";

const ProjectCard = ({ project }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      transitionSpeed={400}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="glass-panel h-full flex flex-col group overflow-hidden spotlight-card relative"
        style={{
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        }}
      >

        {/* Project Content */}
        <div className="p-8 flex-1 flex flex-col">
          <div className="text-accent-violet text-sm font-space font-medium mb-2 tracking-wider uppercase">
            {project.type}
          </div>
          <h3 className="text-2xl font-space font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-white/80 font-medium mb-4">{project.tagline}</p>
          <p className="text-white/60 text-sm mb-6 flex-1">{project.description}</p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="text-xs font-space bg-white/5 border border-white/10 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-space font-bold hover:text-accent-blue transition-colors group/link">
              <span>View Project</span>
              <HiOutlineExternalLink className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-space font-bold hover:text-accent-violet transition-colors group/link text-white/50 hover:text-white">
              <span>Source Code</span>
              <HiOutlineCode className="group-hover/link:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
