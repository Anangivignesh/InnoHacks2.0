import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ParallaxSection = ({ 
  children, 
  velocity = 100, // speed
  direction = 1, // 1 for down, -1 for up
  className = "",
  style = {}
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, velocity * direction]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

export const FloatingElement = ({ 
  children, 
  delay = 0, 
  duration = 6,
  yOffset = 20,
  className = "" 
}) => {
  return (
    <motion.div
      animate={{ 
        y: [-yOffset, yOffset, -yOffset],
        rotate: [-2, 2, -2]
      }}
      transition={{ 
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
