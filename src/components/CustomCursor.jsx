import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      const target = e.target.closest("a, button, [data-cursor-magnetic]");

      if (target) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Magnetic pull: bias toward the element's center rather than the raw pointer
        const pullStrength = 0.35;
        cursorX.set(e.clientX + (centerX - e.clientX) * pullStrength - 20);
        cursorY.set(e.clientY + (centerY - e.clientY) * pullStrength - 20);
        setIsHovered(true);
      } else {
        cursorX.set(e.clientX - 6);
        cursorY.set(e.clientY - 6);
        setIsHovered(false);
      }
    };

    const mouseDown = () => setIsPressed(true);
    const mouseUp = () => setIsPressed(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full border-2 border-accent-blue"
      style={{
        x: ringX,
        y: ringY,
        mixBlendMode: "normal",
      }}
      animate={{
        width: isHovered ? 56 : 12,
        height: isHovered ? 56 : 12,
        backgroundColor: isHovered ? "rgba(67,56,202,0.08)" : "rgba(67,56,202,1)",
        scale: isPressed ? 0.85 : 1,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
    />
  );
};

export default CustomCursor;
