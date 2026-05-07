import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "Qu'est-ce que la naturopathie ?", a: "La naturopathie est une approche complémentaire qui s'appuie sur des moyens naturels — alimentation, hygiène de vie, gestion du stress, phytothérapie — pour soutenir la vitalité et l'équilibre global. Elle ne se substitue pas à un suivi médical." },
  { q: "Comment se déroule une séance ?", a: "Après un premier échange et l'envoi d'un questionnaire préalable, nous nous retrouvons pour un bilan approfondi. Je prends le temps de comprendre votre quotidien, vos habitudes et vos besoins avant de vous proposer un plan d'accompagnement personnalisé." },
  { q: "La naturopathie remplace-t-elle un suivi médical ?", a: "Non. La naturopathie est une approche complémentaire. Elle ne remplace en aucun cas un diagnostic ou un traitement médical. Je travaille en complément de votre suivi de santé habituel." },
  { q: "Les massages font-ils partie de l'accompagnement ?", a: "Oui, les massages bien-être peuvent faire partie de l'accompagnement. Ce sont des techniques douces, orientées vers la détente et le relâchement des tensions, sans visée thérapeutique au sens médical." },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 px-6 md:px-16 bg-card/60">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-secondary mb-4">Questions fréquentes</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">Vos questions</h2>
          <div className="mt-1 mx-auto w-16 h-px bg-primary/30" />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-primary/10 rounded-sm px-6 bg-background/60 transition-all duration-300 hover:border-secondary/30 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.1)] hover:-translate-y-1">
                <AccordionTrigger className="text-left font-heading font-medium text-primary text-base py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm font-body text-foreground/70 leading-relaxed pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
