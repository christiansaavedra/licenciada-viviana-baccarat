import { useEffect, useRef } from "react";
import styles from "./PsychologyTodaySeal.module.css";

const SCRIPT_SRC = "https://member.psychologytoday.com/verified-seal.js";
const PROFILE_URL = "https://www.psychologytoday.com/profile/1006195";
const DATA_BADGE = "13";
const DATA_ID = "1006195";
const DATA_CODE =
  "aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMy9wcm9maWxlLzEwMDYxOTU/Y2FsbGJhY2s9c3hjYWxsYmFjaw==";

/**
 * Psychology Today Verified Seal.
 *
 * The PT script reads its OWN data-* attributes (via document.currentScript or
 * by scanning script tags), decodes the base64 data-code into a JSONP URL,
 * calls it, and the JSONP response injects the seal <img> into the nearest
 * element with class "sx-verified-seal".
 *
 * We inject the script via innerHTML on a wrapper container so the browser
 * parses & executes it natively — the same way the original HTML snippet from
 * PT works. A simple appendChild also works, but inserting raw HTML mirrors
 * the official integration exactly.
 */
export default function PsychologyTodaySeal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Guard against double-injection (React StrictMode, client navigation)
    if (container.querySelector("script")) return;

    // Build a real <script> node so the browser actually executes it.
    // (Scripts inserted via innerHTML are inert; createElement is needed.)
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = SCRIPT_SRC;
    // Do NOT set async — PT's script reads its own data-* attributes via
    // document.currentScript, which is null for async scripts.
    script.setAttribute("data-badge", DATA_BADGE);
    script.setAttribute("data-id", DATA_ID);
    script.setAttribute("data-code", DATA_CODE);
    container.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <a
        href={PROFILE_URL}
        className={`sx-verified-seal ${styles.seal}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Perfil verificado en Psychology Today"
      />
    </div>
  );
}
