import { Link } from "react-scroll";
import { HiOutlineArrowUp } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 bg-dark relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer font-space font-bold text-xl tracking-tighter hover:text-accent-blue transition-colors"
          >
            Tamzil
          </Link>
          <p className="text-slate-400 text-sm font-space">
            &copy; {currentYear} Ahamed Tamzil S. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" data-cursor-magnetic className="text-slate-500 hover:text-slate-900 transition-colors">
            <FaGithub className="text-xl" />
          </a>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" data-cursor-magnetic className="text-slate-500 hover:text-slate-900 transition-colors">
            <FaLinkedin className="text-xl" />
          </a>
          <a href={`mailto:${resumeData.contact.email}`} data-cursor-magnetic className="text-slate-500 hover:text-slate-900 transition-colors">
            <FaEnvelope className="text-xl" />
          </a>
        </div>

        <Link
          to="home"
          smooth={true}
          duration={500}
          data-cursor-magnetic
          className="btn-flat w-12 h-12 bg-transparent flex items-center justify-center text-slate-500 hover:text-white hover:bg-accent-blue cursor-pointer group"
        >
          <HiOutlineArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
