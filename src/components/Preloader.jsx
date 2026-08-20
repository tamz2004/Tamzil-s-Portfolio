import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1500;
    const raf = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

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
        <div className="flex items-end gap-4 mb-6">
          <h1 className="text-5xl md:text-7xl font-space font-black text-slate-900 tracking-tight">
            TAMZIL
          </h1>
          <span className="font-mono text-xl md:text-2xl text-accent-blue mb-1 md:mb-2 tabular-nums">
            {count}%
          </span>
        </div>
        <div className="w-56 h-[2px] bg-slate-900/10 overflow-hidden">
          <div className="h-full bg-accent-blue animate-preloader"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
