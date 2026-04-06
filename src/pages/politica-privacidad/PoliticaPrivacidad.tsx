import { Link } from "react-router-dom";
import styles from "./PoliticaPrivacidad.module.css";

const PoliticaPrivacidad = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/" className={styles.back}>← Volver al inicio</Link>

        <h1 className={styles.title}>Política de Privacidad</h1>
        <p className={styles.updated}>Última actualización: abril de 2025</p>

        <section className={styles.section}>
          <h2>1. Responsable del tratamiento</h2>
          <p>
            Lic. Viviana Baccarat — Psicóloga y Sexóloga Clínica (M.N. 56769),
            con domicilio en la Ciudad Autónoma de Buenos Aires, Argentina.
            Correo de contacto: <a href="mailto:vivianabaccarat@gmail.com">vivianabaccarat@gmail.com</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Marco legal aplicable</h2>
          <p>
            El tratamiento de los datos personales se rige por la{" "}
            <strong>Ley N.° 25.326 de Protección de los Datos Personales</strong> de
            la República Argentina y sus normas reglamentarias, así como por las
            disposiciones de la{" "}
            <strong>Agencia de Acceso a la Información Pública (AAIP)</strong>, autoridad
            de aplicación en la materia.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Datos que se recopilan</h2>
          <p>A través del formulario de contacto de este sitio web se recopilan:</p>
          <ul>
            <li>Nombre y apellido</li>
            <li>Número de teléfono / WhatsApp</li>
            <li>Dirección de correo electrónico</li>
            <li>Mensaje o consulta libre</li>
          </ul>
          <p>
            No se recopilan datos sensibles (en los términos del art. 2 de la Ley 25.326)
            a través del formulario web. Cualquier información de carácter clínico es
            tratada exclusivamente en el marco de la relación terapéutica y con estricta
            confidencialidad profesional.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Finalidad del tratamiento</h2>
          <p>Los datos recabados se utilizan exclusivamente para:</p>
          <ul>
            <li>Responder a la consulta enviada y coordinar turnos.</li>
            <li>Comunicaciones directamente relacionadas con el servicio solicitado.</li>
          </ul>
          <p>No se utilizan para fines de marketing ni se ceden a terceros.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Almacenamiento y seguridad</h2>
          <p>
            Los mensajes enviados a través del formulario son transmitidos mediante{" "}
            <strong>EmailJS</strong>, un servicio de terceros que actúa como encargado
            de tratamiento. EmailJS no almacena el contenido de los mensajes de forma
            permanente. Se aplican medidas técnicas razonables para proteger la
            información durante la transmisión.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Derechos del titular</h2>
          <p>
            De conformidad con el art. 14 y siguientes de la Ley 25.326, toda persona
            tiene derecho a:
          </p>
          <ul>
            <li>
              <strong>Acceder</strong> a sus datos personales registrados.
            </li>
            <li>
              <strong>Rectificar</strong> datos inexactos o incompletos.
            </li>
            <li>
              <strong>Suprimir</strong> sus datos cuando no exista obligación legal de
              conservarlos.
            </li>
          </ul>
          <p>
            Para ejercer estos derechos, puede escribir a{" "}
            <a href="mailto:vivianabaccarat@gmail.com">vivianabaccarat@gmail.com</a>{" "}
            indicando su nombre completo y el derecho que desea ejercer. Se responderá
            dentro de los plazos previstos por la normativa vigente.
          </p>
          <p>
            Asimismo, tiene derecho a presentar una reclamación ante la{" "}
            <a
              href="https://www.argentina.gob.ar/aaip"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agencia de Acceso a la Información Pública
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Conservación de los datos</h2>
          <p>
            Los datos de contacto se conservan únicamente durante el tiempo necesario
            para atender la consulta. No se mantiene ninguna base de datos de usuarios
            o pacientes en el sitio web.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Modificaciones</h2>
          <p>
            Esta política puede actualizarse para reflejar cambios normativos o en el
            funcionamiento del sitio. La fecha de última actualización figura al inicio
            del documento.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
