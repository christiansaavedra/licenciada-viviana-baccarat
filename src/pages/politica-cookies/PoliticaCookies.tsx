import { Link } from "react-router-dom";
import styles from "./PoliticaCookies.module.css";

const PoliticaCookies = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/" className={styles.back}>← Volver al inicio</Link>

        <h1 className={styles.title}>Política de Cookies</h1>
        <p className={styles.updated}>Última actualización: mayo de 2026</p>

        <section className={styles.section}>
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que un sitio web almacena
            en el navegador del usuario. Permiten que el sitio recuerde
            preferencias o analice el comportamiento de navegación.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. ¿Este sitio utiliza cookies?</h2>
          <p>
            Este sitio web utiliza <strong>Google Analytics</strong> para analizar
            el tráfico y el comportamiento de los usuarios de forma anónima. Google
            Analytics establece cookies para recopilar información sobre cómo los
            visitantes interactúan con el sitio, como páginas visitadas, tiempo de
            permanencia y fuente de tráfico. Esta información se utiliza únicamente
            para mejorar la experiencia del usuario y optimizar el contenido.
          </p>
          <p>
            El formulario de contacto utiliza el servicio{" "}
            <strong>EmailJS</strong> para el envío de mensajes. EmailJS puede
            establecer cookies técnicas necesarias para el funcionamiento de su
            servicio. Para más información, consultá la{" "}
            <a
              href="https://www.emailjs.com/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              política de privacidad de EmailJS
            </a>
            .
          </p>
          <p>
            No se utilizan cookies de publicidad ni se comparten datos con terceros
            para fines comerciales.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Cookies del navegador</h2>
          <p>
            El propio navegador puede almacenar información local (
            <em>localStorage</em> o <em>sessionStorage</em>) por razones
            técnicas de funcionamiento de la aplicación, como mantener el estado
            de la navegación. Esta información no se transmite a ningún servidor
            externo ni se utiliza con fines publicitarios.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Cómo gestionar o eliminar cookies</h2>
          <p>
            Podés controlar y eliminar cookies desde la configuración de tu
            navegador. A continuación, los enlaces de ayuda de los principales
            navegadores:
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p>
            Tené en cuenta que deshabilitar ciertas cookies puede afectar el
            funcionamiento de algunos servicios del sitio.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Modificaciones</h2>
          <p>
            Esta política puede actualizarse si se incorporan nuevas
            funcionalidades al sitio. La fecha de última actualización figura al
            inicio del documento.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Contacto</h2>
          <p>
            Ante cualquier consulta sobre el uso de cookies, podés escribir a{" "}
            <a href="mailto:licenciadavivianabaccarat@gmail.com">
              licenciadavivianabaccarat@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PoliticaCookies;
