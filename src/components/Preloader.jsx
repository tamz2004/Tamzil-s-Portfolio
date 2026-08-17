import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      <div className="relative flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-space font-bold text-white tracking-widest mb-4">
          TAMZIL
        </h1>
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-accent-blue animate-preloader"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
