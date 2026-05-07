import { ReactNode } from "react";

const Modal = ({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="bg-background rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-heading font-semibold text-primary mb-6">{title}</h2>
        <div className="space-y-5 text-sm font-body text-foreground/80 leading-relaxed">
          {children}
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

export const PolitiqueConfidentialite = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => (
  <Modal open={open} onClose={onClose} title="POLITIQUE DE CONFIDENTIALITÉ">
    <div>
      <p className="font-semibold text-foreground mb-1">Responsable du traitement</p>
      <p>
        Amélie Gothier, naturopathe — micro-entreprise (SIRET 97887419600030).
        <br />
        Email : ameliegnaturopathe@icloud.com — Téléphone : 06 68 27 43 95
      </p>
    </div>

    <div>
      <p className="font-semibold text-foreground mb-1">Données collectées</p>
      <p>
        Via le formulaire de contact : prénom, nom, email, téléphone (facultatif), motif de
        prise de contact, message. Ces données sont collectées uniquement avec votre
        consentement (envoi du formulaire).
      </p>
    </div>

    <div>
      <p className="font-semibold text-foreground mb-1">Finalité</p>
      <p>
        Répondre à votre demande de contact et, le cas échéant, organiser un rendez-vous.
        Aucun usage commercial, aucune cession à des tiers.
      </p>
    </div>

    <div>
      <p className="font-semibold text-foreground mb-1">Base légale</p>
      <p>
        Consentement (article 6.1.a du RGPD) lors de l'envoi du formulaire de contact.
      </p>
    </div>

    <div>
      <p className="font-semibold text-foreground mb-1">Hébergement des données</p>
      <p>
        Les messages sont stockés via Supabase (serveurs situés en Union Européenne) et
        transmis par email via Resend.
      </p>
    </div>

    <div>
      <p className="font-semibold text-foreground mb-1">Durée de conservation</p>
      <p>
        Les messages sont conservés 3 ans à compter du dernier contact, puis supprimés.
      </p>
    </div>

    <div>
      <p className="font-semibold text-foreground mb-1">Vos droits</p>
      <p>
        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
        d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour
        exercer ces droits : ameliegnaturopathe@icloud.com.
        <br />
        Vous pouvez également introduire une réclamation auprès de la CNIL (
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          www.cnil.fr
        </a>
        ).
      </p>
    </div>
  </Modal>
);

export const PolitiqueCookies = ({
  open,
  onClose,
  onManage,
}: {
  open: boolean;
  onClose: () => void;
  onManage: () => void;
}) => (
  <Modal open={open} onClose={onClose} title="POLITIQUE DE COOKIES">
    <div>
      <p>
        Un cookie est un petit fichier déposé sur votre appareil lors de la visite d'un
        site. Ce site utilise un usage minimal de cookies, dans le respect du RGPD et des
        recommandations de la CNIL.
      </p>
    </div>

    <div>
      <p className="font-semibold text-foreground mb-1">Cookies strictement nécessaires</p>
      <p>
        Un seul cookie technique est utilisé pour mémoriser vos choix de consentement
        (clé : <code className="text-xs bg-primary/10 px-1 rounded">doucement-soi-cookie-consent</code>).
        Il est exempté de consentement car indispensable au fonctionnement du site.
      </p>
    </div>

    <div>
      <p className="font-semibold text-foreground mb-1">Cookies de mesure d'audience</p>
      <p>Aucun cookie de mesure d'audience n'est actuellement déposé.</p>
    </div>

    <div>
      <p className="font-semibold text-foreground mb-1">Cookies marketing / tiers</p>
      <p>Aucun cookie publicitaire ou de réseau social n'est déposé.</p>
    </div>

    <div>
      <p className="font-semibold text-foreground mb-1">Modifier vos choix</p>
      <p>
        Vous pouvez à tout moment modifier vos préférences ou retirer votre consentement.
      </p>
      <button
        onClick={onManage}
        className="mt-3 px-4 py-2 text-xs font-body bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
      >
        Gérer mes cookies
      </button>
    </div>
  </Modal>
);
