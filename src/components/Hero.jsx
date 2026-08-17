import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { resumeData } from "../data/resumeData";
import profileImg from "../assets/img/profile-transparent.png";
import resumePdf from "../assets/AhamedTamzil.pdf";

// Fix for full icon import issue if it happens, better use specific icons
import { FaGithub as GithubIcon, FaLinkedinIn as LinkedinIcon, FaEnvelope as EnvelopeIcon } from "react-icons/fa";
// Fix for full icon import issue if it happens, better use specific icons

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const roles = resumeData.hero.roles;
    const currentRole = roles[roleIndex];
    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && displayText === currentRole) {
      typeSpeed = 2000;
      setTimeout(() => setIsDeleting(true), typeSpeed);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-8 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-accent-blue/30 blur-3xl rounded-full animate-blob"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 md:w-96 md:h-96 bg-accent-violet/30 blur-3xl rounded-full animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center md:items-end justify-between z-10">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left mt-12 md:mt-0"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 2 } },
          }}
        >
          <motion.div variants={textVariants} className="text-accent-blue font-space font-medium tracking-wider mb-4 uppercase">
            Hello, I'm
          </motion.div>
          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space font-bold leading-tight mb-4"
          >
            <span className="text-white">{resumeData.hero.name.split(" ")[0]}</span>{" "}
            <span className="text-blue-600 drop-shadow-[0_2px_15px_rgba(37,99,235,0.4)]">
              {resumeData.hero.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>
          <motion.div variants={textVariants} className="h-8 md:h-12 text-xl md:text-3xl font-space font-medium text-white/80 mb-6">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </motion.div>
          <motion.p variants={textVariants} className="text-white/60 max-w-xl text-sm md:text-base leading-relaxed mb-10 mx-auto md:mx-0">
            {resumeData.hero.intro}
          </motion.p>
          
          <motion.div variants={textVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-blue-700 font-bold text-white shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 hover:bg-blue-600 transition-all w-full sm:w-auto text-center relative group overflow-hidden"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-4 rounded-full border border-white/20 hover:border-accent-blue font-bold text-white transition-all w-full sm:w-auto text-center cursor-pointer hover:bg-white/5"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={textVariants} className="flex gap-6 mt-12 justify-center md:justify-start">
            {[
              { icon: <GithubIcon />, link: resumeData.contact.github },
              { icon: <LinkedinIcon />, link: resumeData.contact.linkedin },
              { icon: <EnvelopeIcon />, link: `mailto:${resumeData.contact.email}` },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 hover:text-accent-blue hover:-translate-y-1 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end relative w-full mb-8 md:mb-[5.5rem]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-md z-10">
            <img 
              src={profileImg}
              alt="Profile" 
              className="w-full aspect-square rounded-full object-cover relative z-10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x600/0a0a0f/3b82f6?text=AT";
              }}
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
