import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 0.5,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      opacity: 0.8,
      backgroundColor: "var(--color-accent-blue)",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-accent-violet pointer-events-none z-[100]"
      variants={variants}
      animate={isHovered ? "hover" : "default"}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      style={{
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
