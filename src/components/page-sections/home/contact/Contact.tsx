import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const EMAILJS_SERVICE_ID = "service_77b5n2e";
const EMAILJS_TEMPLATE_ID = "template_wwn5p4a";
const EMAILJS_PUBLIC_KEY = "2tyhnNkjQwIXAOWEX";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={styles.section} id="contacto">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: info */}
          <div className={styles.info}>
            <h2 className={styles.sectionLabel}>Contacto</h2>
            <h3 className={styles.sectionTitle}>¿Hablamos?</h3>
            <p className={styles.infoText}>
              Si querés agendar una sesión o hacer una consulta, podés
              escribirme por WhatsApp o completar el formulario.
            </p>

            <ul className={styles.contactList}>
              <li>
                <a
                  href="https://wa.me/5491155936542?text=Hola%20Lic.%20Viviana%20Baccarat%2C%20quisiera%20consultar%20por%20un%20turno%20para%20%5BTerapia%20Sexual%20%2F%20Psicoterapia%5D."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <WhatsAppIcon />
                  (+54 911) 5593‑6542
                </a>
              </li>
              <li>
                <a
                  href="mailto:licenciadavivianabaccarat@gmail.com"
                  className={styles.contactLink}
                >
                  <MailIcon />
                  licenciadavivianabaccarat@gmail.com
                </a>
              </li>
              {/* <li>
                <a
                  href="https://calendly.com/licenciadavivianabaccarat/sesion-con-la-lic-viviana-baccarat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <CalendarIcon />
                  Reservar turno online
                </a>
              </li> */}
            </ul>
          </div>

          {/* Right: form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.form}
            noValidate
          >
            <div className={styles.field}>
              <label htmlFor="user_name" className={styles.label}>
                Nombre <span className={styles.required}>*</span>
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="user_phone" className={styles.label}>
                Teléfono <span className={styles.required}>*</span>
              </label>
              <input
                id="user_phone"
                name="user_phone"
                type="tel"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="user_email" className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Mensaje <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Contame brevemente tu consulta..."
                className={styles.textarea}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={styles.submitButton}
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "success" && (
              <p className={styles.successMsg}>
                ¡Mensaje enviado! Me pondré en contacto a la brevedad.
              </p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg}>
                Hubo un error al enviar. Por favor intentá de nuevo o escribime
                directamente por WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

// ── Inline SVG icons ──────────────────────────────────────────────
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export default Contact;
