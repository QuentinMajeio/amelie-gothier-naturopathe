import { Heart, Battery, Moon, Leaf, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const needs = [
  { icon: Heart, title: "Stress & anxiété", text: "Retrouver un état de calme intérieur grâce à des outils naturels adaptés à votre quotidien." },
  { icon: Battery, title: "Fatigue persistante", text: "Identifier les causes profondes de votre fatigue et restaurer votre énergie de manière progressive." },
  { icon: Moon, title: "Troubles du sommeil", text: "Améliorer la qualité de vos nuits avec une approche douce et personnalisée." },
  { icon: Leaf, title: "Inconfort digestif", text: "Apaiser les inconforts digestifs en travaillant sur l'alimentation et l'hygiène de vie." },
  { icon: Droplets, title: "Problèmes de peau", text: "Prendre soin de votre peau de l'intérieur en identifiant les déséquilibres à l'origine des inconforts cutanés." },
];

const PourQui = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-card/60">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-secondary mb-4">Pour qui ?</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">Des accompagnements pensés pour vous</h2>
          <div className="mt-1 mx-auto w-16 h-px bg-primary/30" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.slice(0, 3).map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 12px 32px -8px hsl(var(--primary) / 0.12)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
              className="bg-background/70 backdrop-blur-sm rounded-sm p-8 flex flex-col items-start border border-primary/8 hover:border-secondary/40 cursor-default"
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center mb-5"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-lg font-heading font-semibold text-primary mb-3">{title}</h3>
              <p className="text-sm font-body text-foreground/70 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-center">
          {needs.slice(3).map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 12px 32px -8px hsl(var(--primary) / 0.12)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: (i + 3) * 0.1 }}
              className="bg-background/70 backdrop-blur-sm rounded-sm p-8 flex flex-col items-start border border-primary/8 hover:border-secondary/40 cursor-default sm:w-[calc(33.333%-0.75rem)]"
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center mb-5"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-lg font-heading font-semibold text-primary mb-3">{title}</h3>
              <p className="text-sm font-body text-foreground/70 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PourQui;
