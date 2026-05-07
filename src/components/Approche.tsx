import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Approche = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16">
      <AnimatedSection className="max-w-3xl mx-auto text-center" parallax parallaxSpeed={0.06}>
        <p className="text-sm font-body font-medium tracking-widest uppercase text-secondary mb-6">
          Mon approche
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary leading-snug">
          Une vision globale,<br className="hidden md:block" /> un accompagnement sur mesure
        </h2>
        <div className="mt-1 mx-auto w-16 h-px bg-primary/30" />
        <p className="mt-8 text-base md:text-lg font-body text-foreground/75 leading-relaxed max-w-2xl mx-auto">
          La naturopathie s'intéresse à vous dans votre globalité — corps, émotions, rythme de vie.
          Mon rôle est de vous écouter avec attention, de comprendre vos besoins et de vous proposer
          un accompagnement individualisé, ancré dans des habitudes simples et durables.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
          {["Approche globale", "Écoute attentive", "Hygiène de vie", "Équilibre durable"].map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
              className="px-5 py-2 rounded-full border border-primary/20 text-primary text-sm font-body font-medium"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Approche;
