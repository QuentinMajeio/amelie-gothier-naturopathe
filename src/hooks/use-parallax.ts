import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxOptions {
  speed?: number; // 0.1 = subtle, 0.5 = strong
  offset?: [string, string];
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.2, offset = ["start end", "end start"] } = options;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: offset as any });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  return { ref, y };
}

export function useHeroParallax(): MotionValue<number> {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 800], [0, 200]);
}
