import { useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";

const ProjectCard = ({ project, index = 0 }) => {
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
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      scale={1.01}
      transitionSpeed={400}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        data-cursor-magnetic
        className="glass-panel h-full flex flex-col group overflow-hidden spotlight-card relative"
        style={{
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        }}
      >
        {/* Project Content */}
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="text-accent-blue text-sm font-mono font-medium tracking-wider uppercase">
              {project.type}
            </div>
            <span className="font-mono text-3xl font-black text-slate-900/10 group-hover:text-accent-blue/20 transition-colors leading-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-2xl font-space font-black text-slate-900 mb-2 group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-700 font-medium mb-4">{project.tagline}</p>
          <p className="text-slate-600 text-sm mb-6 flex-1">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="text-xs font-mono bg-slate-900/5 border border-slate-200 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-auto border-t border-slate-200 pt-6">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-space font-bold hover:text-accent-blue transition-colors group/link">
              <span>View Project</span>
              <HiOutlineExternalLink className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-space font-bold hover:text-accent-blue transition-colors group/link text-slate-500 hover:text-slate-900">
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
