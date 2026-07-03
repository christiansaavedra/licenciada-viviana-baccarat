// Lightweight GA4 event helper.
//
// gtag se inyecta de forma global en pages/+Head.tsx. Durante el SSR/prerender
// (window no existe) o antes de que cargue Google Analytics, window.gtag es
// undefined, así que verificamos ambas condiciones antes de disparar el evento.

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void })
    .gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params);
}
