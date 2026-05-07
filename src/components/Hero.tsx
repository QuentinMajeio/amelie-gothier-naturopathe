import { motion, useScroll, useTransform } from "framer-motion";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bocaux.png";

const Hero = () => {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section className="relative flex flex-col">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-6 bg-gradient-to-b from-background/70 via-background/40 to-transparent backdrop-blur-[2px]"
      >
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img
            src={logo}
            alt="Doucement Soi – Retour à l'accueil"
            className="h-24 md:h-32 cursor-pointer hover:opacity-80 transition-opacity drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]"
          />
        </a>
        <a
          href="#contact"
          className="hidden md:inline-block bg-secondary text-secondary-foreground px-6 py-2.5 text-sm font-body font-medium tracking-wide rounded-sm hover:opacity-90 transition-opacity"
        >
          Prendre contact
        </a>
      </motion.nav>

      {/* Panoramic hero banner with parallax */}
      <div className="relative w-full h-[55vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ y: imgY }}
          src={heroBg}
          alt="Bocaux d'herbes et plantes séchées dans un atelier de naturopathie"
          className="absolute inset-0 w-full h-[120%] object-cover object-center"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Text content with parallax */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 -mt-32 md:-mt-40 px-6 md:px-16 pb-16 md:pb-20 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold text-primary leading-[1.1] tracking-tight"
        >
          Retrouvez l'essentiel,
          <br />
          <span className="italic font-normal">doucement</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          className="mt-5 text-lg md:text-xl font-body text-foreground/80 max-w-lg leading-relaxed"
        >
          Un accompagnement naturel et personnalisé pour prendre soin de vous, à votre rythme.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-sm font-body font-medium tracking-wide rounded-sm hover:opacity-90 transition-opacity"
          >
            Prendre rendez-vous
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-4 text-sm text-muted-foreground font-body"
        >
          Prise de renseignement sans engagement
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
