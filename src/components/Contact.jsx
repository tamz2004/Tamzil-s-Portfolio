import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiCheck } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-space font-bold">Contact</h2>
            <div className="hidden md:block w-32 h-[1px] bg-white/20 ml-4"></div>
          </div>
          <p className="text-white/60 max-w-2xl text-lg">Let's Build Something Great.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-space font-bold mb-8">Get In Touch</h3>
            <div className="flex flex-col gap-6">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-4 text-white/70 hover:text-accent-blue transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HiOutlineMail className="text-xl" />
                </div>
                <span className="font-space text-lg">{resumeData.contact.email}</span>
              </a>
              <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-4 text-white/70 hover:text-accent-violet transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <span className="font-space text-lg">{resumeData.contact.phone}</span>
              </a>
            </div>

            <div className="mt-12">
              <h4 className="text-sm uppercase tracking-widest text-white/40 mb-6 font-space">Social Profiles</h4>
              <div className="flex gap-4">
                <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-white hover:bg-accent-blue hover:scale-110 transition-all">
                  <FaGithub className="text-xl" />
                </a>
                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-white hover:bg-accent-blue hover:scale-110 transition-all">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 flex flex-col gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-blue peer placeholder-transparent transition-colors"
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-0 top-3 text-white/40 text-sm font-space transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent-blue peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">
                  Your Name
                </label>
              </div>

              <div className="relative group mt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-blue peer placeholder-transparent transition-colors"
                  placeholder="Email"
                />
                <label htmlFor="email" className="absolute left-0 top-3 text-white/40 text-sm font-space transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent-blue peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">
                  Your Email
                </label>
              </div>

              <div className="relative group mt-4">
                <textarea
                  name="message"
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-blue peer placeholder-transparent resize-none transition-colors"
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-white/40 text-sm font-space transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent-blue peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="mt-6 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold tracking-wider hover:bg-accent-blue hover:border-accent-blue transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : isSuccess ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2 text-green-400"
                  >
                    <HiCheck className="text-xl" /> Sent!
                  </motion.div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
