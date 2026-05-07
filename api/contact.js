const DEFAULT_CONTACT_EMAIL = 'ameliegnaturopathe@icloud.com';

function json(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function cleanText(value = '', max = 5000) {
  return String(value || '').trim().slice(0, max);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { success: false, message: 'Méthode non autorisée.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    const data = {
      prenom: cleanText(body.prenom, 100),
      nom: cleanText(body.nom, 100),
      email: cleanText(body.email, 255),
      telephone: cleanText(body.telephone, 30),
      motif: cleanText(body.motif, 255),
      message: cleanText(body.message, 5000),
    };

    if (!data.prenom || !data.nom || !data.email || !data.message) {
      return json(res, 400, { success: false, message: 'Champs requis manquants.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return json(res, 400, { success: false, message: 'Adresse email invalide.' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is missing');
      return json(res, 500, { success: false, message: 'Configuration email manquante.' });
    }

    const safe = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]));
    const subject = `Nouveau message de ${data.prenom} ${data.nom}`;
    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#222;max-width:680px;">
        <h2 style="margin:0 0 16px;color:#6b7d67;">Nouveau message depuis le site Doucement Soi</h2>
        <table style="border-collapse:collapse;width:100%;font-size:15px;">
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;width:140px;">Prénom</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${safe.prenom}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Nom</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${safe.nom}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Téléphone</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${safe.telephone || 'Non renseigné'}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Motif</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${safe.motif || 'Non renseigné'}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px 12px;white-space:pre-wrap;">${safe.message}</td></tr>
        </table>
        <p style="margin-top:18px;color:#777;font-size:13px;">Ce message a été envoyé depuis le formulaire du site.</p>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || 'Doucement Soi <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: data.email,
        subject,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', errorText);
      return json(res, 502, { success: false, message: "L'email n'a pas pu être envoyé." });
    }

    return json(res, 200, { success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return json(res, 500, { success: false, message: 'Erreur interne.' });
  }
}
