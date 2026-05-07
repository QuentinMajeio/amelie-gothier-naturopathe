import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import amelieImg from "@/assets/amelie.png";

const APropos = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="a-propos" className="py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <AnimatedSection className="lg:col-span-2">
          <div ref={imgRef} className="aspect-[3/4] rounded-sm overflow-hidden border border-primary/10">
            <motion.img
              style={{ y: imgY }}
              src={amelieImg}
              alt="Amélie Gothier, naturopathe"
              className="w-[100%] h-[120%] object-cover object-[30%_20%]"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-3" delay={0.15} parallax parallaxSpeed={0.05}>
          <p className="text-sm font-body font-medium tracking-widest uppercase text-secondary mb-4">À propos</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary leading-snug">Amélie Gothier</h2>
          <div className="mt-1 w-16 h-px bg-primary/30" />
          <p className="mt-6 text-base font-body text-foreground/75 leading-relaxed">
            Naturopathe et ancienne préparatrice en pharmacie, j'ai choisi de me tourner
            vers une approche plus globale de la santé. Mon parcours m'a appris l'importance
            de l'écoute, de la rigueur et de la bienveillance dans chaque accompagnement.
          </p>
          <p className="mt-4 text-base font-body text-foreground/75 leading-relaxed">
            Je vous accompagne avec douceur et pédagogie, en prenant le temps de comprendre
            votre histoire et vos besoins. Mon objectif : vous transmettre des clés simples
            et durables pour retrouver un équilibre qui vous ressemble.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default APropos;
