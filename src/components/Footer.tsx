import { useState } from "react";
import logo from "@/assets/logo.png";
import { PolitiqueConfidentialite, PolitiqueCookies } from "./LegalModals";
import { clearConsent } from "@/hooks/use-cookie-consent";

const MentionsLegales = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div
        className="bg-background rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-heading font-semibold text-primary mb-6">MENTIONS LÉGALES</h2>

        <div className="space-y-5 text-sm font-body text-foreground/80 leading-relaxed">
          <div>
            <p className="font-semibold text-foreground mb-1">Éditeur du site : Quentin MARLAS</p>
            <p>Amélie Gothier</p>
            <p>Naturopathe</p>
            <p>Email : ameliegnaturopathe@icloud.com</p>
            <p>Téléphone : 06 68 27 43 95</p>
            <p>Statut : micro-entreprise</p>
            <p>SIRET : 97887419600030</p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Hébergement :</p>
            <p>o2switch — 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France</p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Propriété intellectuelle : Amélie Gothier</p>
            <p>L'ensemble du contenu présent sur ce site (textes, images, logo) est protégé et ne peut être reproduit sans autorisation.</p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Données personnelles :</p>
            <p>Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre aux demandes. Elles ne sont pas cédées à des tiers.</p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Responsabilité :</p>
            <p>Les conseils proposés en naturopathie ne remplacent pas un avis médical.</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-8 text-xs font-body text-foreground/50 hover:text-primary transition-colors underline"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  const [showMentions, setShowMentions] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  const handleManageCookies = () => {
    setShowCookies(false);
    clearConsent();
  };

  return (
    <>
      <footer className="border-t border-primary/10 py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="Doucement Soi" className="h-14 opacity-80" />
            <p className="text-xs font-body text-foreground/50 text-center md:text-left">
              Doucement Soi — retrouver l'essentiel
              <br />
              Amélie Gothier · Naturopathe
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-xs font-body text-foreground/50">
            <a href="tel:+33668274395" className="hover:text-primary transition-colors">06 68 27 43 95</a>
            <a href="mailto:ameliegnaturopathe@icloud.com" className="hover:text-primary transition-colors">
              ameliegnaturopathe@icloud.com
            </a>
            <a
              href="https://instagram.com/doucement__soi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram : @doucement__soi
            </a>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 justify-center md:justify-end text-foreground/30">
              <button
                onClick={() => setShowMentions(true)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Mentions légales
              </button>
              <span aria-hidden>·</span>
              <button
                onClick={() => setShowPrivacy(true)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Confidentialité
              </button>
              <span aria-hidden>·</span>
              <button
                onClick={() => setShowCookies(true)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>
      <MentionsLegales open={showMentions} onClose={() => setShowMentions(false)} />
      <PolitiqueConfidentialite open={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <PolitiqueCookies
        open={showCookies}
        onClose={() => setShowCookies(false)}
        onManage={handleManageCookies}
      />
    </>
  );
};

export default Footer;
