import { useState } from "react";
import { Phone, Mail, Instagram } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    motif: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.prenom.trim()) e.prenom = "Champ requis";
    if (!form.nom.trim()) e.nom = "Champ requis";
    if (!form.email.trim()) e.email = "Champ requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
    if (!form.message.trim()) e.message = "Champ requis";
    if (!form.consent) e.consent = "Veuillez accepter";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: form.prenom,
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          motif: form.motif,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.message || "Erreur d'envoi");
      }

      setSubmitted(true);
    } catch {
      setErrors({ form: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-sm border font-body text-sm text-foreground bg-background/60 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-secondary transition-colors ${
      errors[field] ? "border-destructive" : "border-primary/15"
    }`;

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-28 px-6 md:px-16">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-semibold text-primary mb-4">Merci !</h2>
          <p className="font-body text-foreground/75">
            Votre message a bien été envoyé. Je reviens vers vous dans les meilleurs délais.
          </p>
        </AnimatedSection>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        <AnimatedSection className="lg:col-span-2">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-secondary mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">Prenons contact</h2>
          <div className="mt-1 w-16 h-px bg-primary/30" />
          <p className="mt-6 text-sm font-body text-foreground/70 leading-relaxed">
            Prise de renseignement sans engagement. N'hésitez pas à me contacter pour toute question.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-secondary" />
              <a href="tel:+33668274395" className="text-sm font-body text-foreground/80 hover:text-primary transition-colors">06 68 27 43 95</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-secondary" />
              <a href="mailto:ameliegnaturopathe@icloud.com" className="text-sm font-body text-foreground/80 hover:text-primary transition-colors">ameliegnaturopathe@icloud.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-4 h-4 text-secondary" />
              <a href="https://instagram.com/doucement__soi" target="_blank" rel="noopener noreferrer" className="text-sm font-body text-foreground/80 hover:text-primary transition-colors">@doucement__soi</a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-3" delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {errors.form && <p className="text-sm text-destructive font-body">{errors.form}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <input type="text" placeholder="Prénom *" className={inputClass("prenom")} value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} />
                {errors.prenom && <p className="text-xs text-destructive mt-1">{errors.prenom}</p>}
              </div>
              <div>
                <input type="text" placeholder="Nom *" className={inputClass("nom")} value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
                {errors.nom && <p className="text-xs text-destructive mt-1">{errors.nom}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <input type="email" placeholder="Email *" className={inputClass("email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <input type="tel" placeholder="Téléphone" className={inputClass("telephone")} value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
              </div>
            </div>
            <input type="text" placeholder="Motif de contact" className={inputClass("motif")} value={form.motif} onChange={(e) => setForm({ ...form, motif: e.target.value })} />
            <div>
              <textarea placeholder="Votre message *" rows={5} className={inputClass("message")} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1 accent-secondary" />
                <span className="text-xs font-body text-foreground/60 leading-relaxed">
                  J'accepte que mes données soient utilisées dans le cadre de ma prise de contact. Elles ne seront ni partagées, ni utilisées à des fins commerciales.
                </span>
              </label>
              {errors.consent && <p className="text-xs text-destructive mt-1">{errors.consent}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-primary-foreground px-8 py-3.5 text-sm font-body font-medium tracking-wide rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Envoi en cours…" : "Envoyer mon message"}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
