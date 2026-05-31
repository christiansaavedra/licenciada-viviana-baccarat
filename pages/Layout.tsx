import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { navigate } from "vike/client/router";
import { usePageContext } from "vike-react/usePageContext";
import styles from "@/components/layout/Layout.module.css";
import WhatsAppButton from "@/components/whatsapp-button/WhatsAppButton";
import PsychologyTodaySeal from "@/components/psychology-today-seal/PsychologyTodaySeal";
import "@/index.css";

type NavItem = {
  label: string;
  id?: string;
  path?: string;
};

const navItems: NavItem[] = [
  { label: "Sobre mí", id: "sobre-mi" },
  { label: "Servicios", id: "servicios" },
  { label: "Formación", id: "formacion" },
  { label: "Preguntas", id: "faq" },
  { label: "Contacto", id: "contacto" },
  { label: "Blog", path: "/blog" },
];

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const pageContext = usePageContext();
  const pathname = pageContext.urlPathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      await navigate("/");
      setTimeout(() => scrollToSection(sectionId), 80);
    }
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <a
              href="/"
              className={styles.logo}
              onClick={() => setIsMenuOpen(false)}
            >
              <h2>Lic. Viviana Baccarat</h2>
              <p>Psicología · Sexología · Gestión del Estrés</p>
            </a>

            <button
              type="button"
              className={styles.hamburger}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul
              className={clsx(
                styles.navLinks,
                isMenuOpen && styles.navLinksOpen,
              )}
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.path ? (
                    <a href={item.path} onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleSectionClick(e, item.id!)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <WhatsAppButton />
        <div className="container">
          <div className={styles.footerContent}>
            <p className={styles.footerCopy}>
              © {new Date().getFullYear()}
              <strong> Lic. Viviana Baccarat — Psicóloga M.N. 56769</strong>
            </p>
            <strong>Psicología · Sexología · Gestión del Estrés</strong>

            <PsychologyTodaySeal />

            <p className={styles.footerLinks}>
              <a href="/politica-privacidad">Política de Privacidad</a>
              <span className={styles.footerSep}>|</span>
              <a href="/politica-cookies">Política de Cookies</a>
              <span className={styles.footerSep}>|</span>
              <a
                href="https://www.argentina.gob.ar/produccion/defensadelconsumidor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Defensa de las y los Consumidores
              </a>
            </p>
            <p className={styles.footerCity}>Buenos Aires, Argentina</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
