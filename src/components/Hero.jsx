import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { resumeData } from "../data/resumeData";
import profileImg from "../assets/img/profile-transparent.png";
import resumePdf from "../assets/AhamedTamzil.pdf";

import { FaGithub as GithubIcon, FaLinkedinIn as LinkedinIcon, FaEnvelope as EnvelopeIcon } from "react-icons/fa";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const blobOneY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

  const maskLine = {
    hidden: { y: "110%" },
    visible: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const firstName = resumeData.hero.name.split(" ")[0];
  const lastName = resumeData.hero.name.split(" ").slice(1).join(" ");

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-8 overflow-hidden"
    >
      {/* Background Blobs */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-40" style={{ opacity: contentFade }}>
        <motion.div style={{ y: blobOneY }} className="absolute top-[20%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-accent-blue/35 blur-3xl rounded-full animate-blob"></motion.div>
        <motion.div style={{ y: blobTwoY, animationDelay: '2s' }} className="absolute bottom-[20%] right-[10%] w-64 h-64 md:w-96 md:h-96 bg-accent-violet/10 blur-3xl rounded-full animate-blob"></motion.div>
      </motion.div>

      {/* Ghost index number, editorial detail */}
      <span className="hidden lg:block absolute top-24 right-12 font-mono text-sm text-slate-400 tracking-widest">01 / HOME</span>

      <motion.div style={{ opacity: contentFade }} className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center md:items-end justify-between z-10">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left mt-12 md:mt-0"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 1.8 } } }}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="w-8 h-[2px] bg-accent-blue"></span>
            <span className="text-accent-blue font-mono text-sm tracking-widest uppercase">Hello, I'm</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-space font-black leading-[0.95] mb-4">
            <span className="mask-reveal">
              <motion.span variants={maskLine} className="inline-block text-slate-900">{firstName}</motion.span>
            </span>
            {" "}
            <span className="mask-reveal">
              <motion.span variants={maskLine} className="inline-block text-gradient">{lastName}</motion.span>
            </span>
          </h1>

          <motion.div variants={fadeUp} className="h-8 md:h-12 text-xl md:text-3xl font-space font-bold text-slate-700 mb-6">
            <span>{displayText}</span>
            <span className="animate-pulse text-accent-blue">|</span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-slate-600 max-w-xl text-sm md:text-base leading-relaxed mb-10 mx-auto md:mx-0">
            {resumeData.hero.intro}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-magnetic
              className="btn-flat px-8 py-4 bg-accent-blue font-bold text-white w-full sm:w-auto text-center relative overflow-hidden"
            >
              Download Resume
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              data-cursor-magnetic
              className="btn-flat px-8 py-4 bg-transparent font-bold text-slate-900 w-full sm:w-auto text-center cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-6 mt-12 justify-center md:justify-start">
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
                data-cursor-magnetic
                className="text-2xl text-slate-600 hover:text-accent-blue hover:-translate-y-1 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          style={{ y: imageY }}
          className="flex-1 flex justify-center md:justify-end relative w-full mb-8 md:mb-[5.5rem]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-md z-10">
            <div className="absolute -inset-4 border-2 border-accent-blue rounded-full opacity-30"></div>
            <img
              src={profileImg}
              alt="Profile"
              className="w-full aspect-square rounded-full object-cover relative z-10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x600/faf9f6/4338ca?text=AT";
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400"
        style={{ opacity: contentFade }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-slate-300"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
