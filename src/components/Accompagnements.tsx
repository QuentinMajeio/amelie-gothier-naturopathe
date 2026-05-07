import { ClipboardCheck, Sparkles, Hand, UserCheck, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: ClipboardCheck, title: "Bilan de vitalité", text: "Un bilan complet pour évaluer votre hygiène de vie, identifier vos déséquilibres et définir un plan d'accompagnement personnalisé." },
  { icon: Droplets, title: "Problèmes de peau", text: "Un accompagnement doux et global pour les peaux sensibles ou réactives, en complément de votre suivi dermatologique." },
  { icon: Hand, title: "Massages bien-être", text: "Des massages doux et enveloppants pour relâcher les tensions, favoriser la détente et soutenir votre équilibre global." },
  { icon: UserCheck, title: "Accompagnement personnalisé", text: "Un suivi sur mesure, adapté à votre rythme et à vos objectifs, pour ancrer des changements durables dans votre quotidien." },
];

const Accompagnements = () => {
  return (
    <section id="accompagnements" className="py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-secondary mb-4">Accompagnements</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">Ce que je vous propose</h2>
          <div className="mt-1 mx-auto w-16 h-px bg-primary/30" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 12px 32px -8px hsl(var(--primary) / 0.12)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
              className="bg-card/80 border border-primary/8 rounded-sm p-8 md:p-10 hover:border-secondary/30 cursor-default"
            >
              <motion.div
                className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center mb-5"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">{title}</h3>
              <p className="text-sm font-body text-foreground/70 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
          {services.slice(3).map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 12px 32px -8px hsl(var(--primary) / 0.12)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: (i + 3) * 0.1 }}
              className="bg-card/80 border border-primary/8 rounded-sm p-8 md:p-10 hover:border-secondary/30 cursor-default md:w-[calc(33.333%-1rem)]"
            >
              <motion.div
                className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center mb-5"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">{title}</h3>
              <p className="text-sm font-body text-foreground/70 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accompagnements;
