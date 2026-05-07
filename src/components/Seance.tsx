import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Prise de contact", text: "Vous me contactez par téléphone, email ou via le formulaire. Nous échangeons brièvement sur vos besoins." },
  { num: "02", title: "Questionnaire préalable", text: "Je vous envoie un questionnaire détaillé afin de préparer notre rencontre et d'établir un premier état des lieux." },
  { num: "03", title: "Premier échange & bilan", text: "Lors de notre premier rendez-vous, nous prenons le temps d'un échange approfondi pour comprendre votre situation globale." },
  { num: "04", title: "Accompagnement personnalisé", text: "Vous repartez avec des conseils concrets et un plan adapté. Un suivi est proposé pour ajuster et avancer ensemble." },
];

const Seance = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-card/60">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-secondary mb-4">Déroulement</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">Comment se déroule une séance ?</h2>
          <div className="mt-1 mx-auto w-16 h-px bg-primary/30" />
        </AnimatedSection>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 6 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
              className="flex gap-6 md:gap-8 cursor-default"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-heading font-semibold text-primary"
                  whileHover={{ scale: 1.15, backgroundColor: "hsl(var(--secondary) / 0.35)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.num}
                </motion.div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-primary/15 my-1" />}
              </div>
              <div className="pb-10">
                <h3 className="text-lg font-heading font-semibold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm font-body text-foreground/70 leading-relaxed max-w-lg">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="mt-16"
        >
          <AnimatedSection className="text-center mb-8">
            <p className="text-sm font-body font-medium tracking-widest uppercase text-secondary mb-4">Tarifs</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary">Tarification</h2>
            <div className="mt-1 mx-auto w-16 h-px bg-primary/30" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: "Première séance", price: "60€", detail: null },
              { label: "Séance de suivi", price: "45€", detail: null },
              { label: "Massage crânien", price: "45€", detail: "30 min de massage (prévoir 45 min)" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.03, boxShadow: "0 12px 32px -8px hsl(var(--primary) / 0.12)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background border border-primary/10 rounded-sm p-6 text-center hover:border-secondary/30 cursor-default"
              >
                <p className="text-sm font-body font-medium text-foreground/60 mb-2">{item.label}</p>
                <motion.p
                  className="text-3xl font-heading font-semibold text-primary"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item.price}
                </motion.p>
                {item.detail && (
                  <p className="mt-2 text-xs font-body text-foreground/50">{item.detail}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Seance;
