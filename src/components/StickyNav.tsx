import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const StickyNav = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/10 shadow-sm"
        >
          <div className="flex items-center justify-between px-6 md:px-16 py-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={logo}
                alt="Doucement Soi – Retour à l'accueil"
                className="h-14 md:h-16 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
            <a
              href="#contact"
              className="bg-secondary text-secondary-foreground px-6 py-2.5 text-sm font-body font-medium tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              Prendre contact
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default StickyNav;
