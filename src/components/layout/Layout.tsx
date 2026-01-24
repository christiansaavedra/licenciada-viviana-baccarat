import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import WhatsAppButton from "../whatsapp-button/WhatsappButton";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <h1></h1>
              <p>Psicología y Sexología Clínica</p>
            </div>
            <ul className={styles.navLinks}>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/sobre-mi">Sobre Mí</a>
              </li>
              <li>
                <a href="/servicios">Servicios</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <WhatsAppButton
          phoneNumber="5491155936542"
          defaultMessage="Hola, vi tu página web y me interesa agendar una cita"
        />
        <div className="container">
          <p>
            © {new Date().getFullYear()} Lic. Viviana - Psicóloga y Sexóloga
            Clínica
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
