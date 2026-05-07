import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  parallax?: boolean;
  parallaxSpeed?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0, parallax = false, parallaxSpeed = 0.08 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallaxSpeed * -100, parallaxSpeed * 100]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
      style={parallax ? { y } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
