import { useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import styles from "./Layout.module.css";
import WhatsAppButton from "../whatsapp-button/WhatsAppButton";

const navItems = [
  { label: "Sobre mí", id: "sobre-mi" },
  { label: "Servicios", id: "servicios" },
  { label: "Formación", id: "formacion" },
  { label: "Preguntas", id: "faq" },
  { label: "Contacto", id: "contacto" },
];

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <Link
              to="/"
              className={styles.logo}
              onClick={() => setIsMenuOpen(false)}
            >
              <h1>Lic. Viviana Baccarat</h1>
              <p>Psicología · Sexología Clínica · Gestión del Estrés</p>
            </Link>

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
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <WhatsAppButton />
        <div className="container">
          <div className={styles.footerContent}>
            <p className={styles.footerCopy}>
              © {new Date().getFullYear()} Lic. Viviana Baccarat — Psicóloga
              M.N. 56769
            </p>
            <p className={styles.footerLinks}>
              <Link to="/politica-privacidad">Política de Privacidad</Link>
              <span className={styles.footerSep}>|</span>
              <Link to="/politica-cookies">Política de Cookies</Link>
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
};

export default Layout;
