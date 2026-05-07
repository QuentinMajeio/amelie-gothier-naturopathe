import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { Switch } from "@/components/ui/switch";

const CookieBanner = ({
  onOpenPolitique,
}: {
  onOpenPolitique: () => void;
}) => {
  const { consent, ready, acceptAll, rejectAll, customize } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (!ready || consent !== null) return null;

  const handleSave = () => {
    customize({ analytics, marketing });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        role="dialog"
        aria-live="polite"
        aria-label="Consentement aux cookies"
      >
        <div className="max-w-4xl mx-auto bg-background border border-primary/20 rounded-xl shadow-2xl p-6 md:p-8">
          {!showSettings ? (
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="font-heading text-lg text-primary mb-2">
                  Votre confidentialité compte
                </h2>
                <p className="text-sm font-body text-foreground/80 leading-relaxed">
                  Ce site utilise uniquement des cookies strictement nécessaires à son
                  fonctionnement. Aucun cookie de mesure d'audience ou de marketing n'est
                  déposé sans votre accord. Vous pouvez accepter, refuser ou personnaliser à
                  tout moment.{" "}
                  <button
                    onClick={onOpenPolitique}
                    className="underline hover:text-primary transition-colors"
                  >
                    En savoir plus
                  </button>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-5 py-2.5 text-sm font-body border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Personnaliser
                </button>
                <button
                  onClick={rejectAll}
                  className="px-5 py-2.5 text-sm font-body border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Tout refuser
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-2.5 text-sm font-body bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-lg text-primary">
                Préférences de cookies
              </h2>

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-primary/10">
                  <div className="flex-1">
                    <p className="font-body font-semibold text-sm text-foreground">
                      Strictement nécessaires
                    </p>
                    <p className="text-xs font-body text-foreground/60 mt-1">
                      Indispensables au fonctionnement du site (mémorisation de vos choix
                      cookies). Toujours actifs.
                    </p>
                  </div>
                  <Switch checked disabled />
                </div>

                <div className="flex items-start justify-between gap-4 pb-4 border-b border-primary/10">
                  <div className="flex-1">
                    <p className="font-body font-semibold text-sm text-foreground">
                      Mesure d'audience
                    </p>
                    <p className="text-xs font-body text-foreground/60 mt-1">
                      Nous aident à comprendre comment le site est utilisé pour l'améliorer.
                      Aucun outil n'est actuellement actif.
                    </p>
                  </div>
                  <Switch checked={analytics} onCheckedChange={setAnalytics} />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-body font-semibold text-sm text-foreground">
                      Marketing
                    </p>
                    <p className="text-xs font-body text-foreground/60 mt-1">
                      Permettent une personnalisation publicitaire. Aucun outil n'est
                      actuellement actif.
                    </p>
                  </div>
                  <Switch checked={marketing} onCheckedChange={setMarketing} />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-2">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-5 py-2.5 text-sm font-body border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Retour
                </button>
                <button
                  onClick={handleSave}
                  className="px-5 py-2.5 text-sm font-body bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  Enregistrer mes choix
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
