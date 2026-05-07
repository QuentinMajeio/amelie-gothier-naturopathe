# Déploiement Vercel — Doucement Soi

Ce projet est une version propre Vite / React prévue pour Vercel.

## Variables Vercel obligatoires

Dans Vercel > Project > Settings > Environment Variables, créer :

- `RESEND_API_KEY` : clé API Resend
- `CONTACT_EMAIL` : adresse qui reçoit les messages du formulaire, par exemple `ameliegnaturopathe@icloud.com`

Optionnel :

- `FROM_EMAIL` : uniquement si un domaine est vérifié dans Resend, par exemple `Doucement Soi <contact@doucementsoi.fr>`

## Réglages Vercel

- Framework Preset : Vite
- Build Command : `npm run build`
- Output Directory : `dist`
- Install Command : `npm install`

## Test après déploiement

1. Ouvrir le site en production.
2. Envoyer un message test depuis le formulaire.
3. Vérifier dans Resend > Emails que le destinataire est bien `CONTACT_EMAIL`.
4. Vérifier que le mail arrive dans la boîte d'Amélie.

## Important

Cette version n'utilise plus Supabase pour l'envoi du formulaire. Le formulaire appelle `/api/contact`, une fonction serverless Vercel.
