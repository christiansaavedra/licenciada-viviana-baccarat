import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import WhatsAppButton from "../whatsapp-button/WhatsAppButton";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <h1>Lic. Viviana Baccarat</h1>
              <p>Psicología · Sexología Clínica · Manejo del Estrés</p>
            </div>
            <ul className={styles.navLinks}>
              <li><a href="#sobre-mi">Sobre mí</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#formacion">Formación</a></li>
              <li><a href="#faq">Preguntas</a></li>
              <li><a href="#contacto">Contacto</a></li>
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
              © {new Date().getFullYear()} Lic. Viviana Baccarat — Psicóloga M.N. 56769
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
