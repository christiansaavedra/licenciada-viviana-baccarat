import { useEffect, useRef } from "react";
import styles from "./PsychologyTodaySeal.module.css";

const PROFILE_URL = "https://www.psychologytoday.com/profile/1006195";
const DATA_CODE =
  "aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMy9wcm9maWxlLzEwMDYxOTU/Y2FsbGJhY2s9c3hjYWxsYmFjaw==";

/**
 * Psychology Today Verified Seal.
 *
 * PT's verified-seal.js wraps all its logic in a DOMContentLoaded listener.
 * Because we mount this component after the page has already loaded, that
 * event has already fired and the listener never runs. Instead we replicate
 * exactly what the script does:
 *   1. Decode the base64 data-code → JSONP URL.
 *   2. Define window.sxcallback (the JSONP receiver PT's API calls).
 *   3. Append a <script> pointing at the JSONP URL so the browser fetches it.
 *
 * The callback injects the badge as a CSS background-image on our anchor.
 */
export default function PsychologyTodaySeal() {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;

    const jsonpUrl = atob(DATA_CODE);

    // Guard against double-injection (StrictMode, client navigation).
    if (document.querySelector(`script[src="${jsonpUrl}"]`)) return;

    // sxcallback must be defined BEFORE the JSONP script is appended.
    (window as any).sxcallback = function (data: any) {
      anchor.setAttribute("target", "_top");
      anchor.style.display = "block";
      anchor.style.backgroundRepeat = "no-repeat";
      anchor.style.backgroundSize = "contain";
      anchor.style.backgroundImage = `url("data:image/svg+xml;base64,${data.image.content}")`;
      anchor.style.width = `${parseInt(data.image.dimensions.width)}px`;
      anchor.style.height = `${parseInt(data.image.dimensions.height)}px`;
      anchor.title = data.name;
    };

    const script = document.createElement("script");
    script.src = jsonpUrl;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.wrapper}>
      <a
        ref={anchorRef}
        href={PROFILE_URL}
        className={`sx-verified-seal ${styles.seal}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Perfil verificado en Psychology Today"
      />
    </div>
  );
}
