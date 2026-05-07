import { useEffect, useState, useCallback } from "react";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: number;
};

const STORAGE_KEY = "doucement-soi-cookie-consent";
const CONSENT_VERSION = 1;

export const getStoredConsent = (): CookieConsent | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
};

export const saveConsent = (
  partial: Pick<CookieConsent, "analytics" | "marketing">
): CookieConsent => {
  const consent: CookieConsent = {
    necessary: true,
    analytics: partial.analytics,
    marketing: partial.marketing,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: consent }));
  return consent;
};

export const clearConsent = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: null }));
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(getStoredConsent());
    setReady(true);
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as CookieConsent | null;
      setConsent(detail);
    };
    window.addEventListener("cookie-consent-changed", handler);
    return () => window.removeEventListener("cookie-consent-changed", handler);
  }, []);

  const acceptAll = useCallback(() => saveConsent({ analytics: true, marketing: true }), []);
  const rejectAll = useCallback(() => saveConsent({ analytics: false, marketing: false }), []);
  const customize = useCallback(
    (prefs: { analytics: boolean; marketing: boolean }) => saveConsent(prefs),
    []
  );
  const reset = useCallback(() => clearConsent(), []);

  return { consent, ready, acceptAll, rejectAll, customize, reset };
};
