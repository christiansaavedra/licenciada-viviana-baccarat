import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const EMAILJS_SERVICE_ID = "service_77b5n2e";
const EMAILJS_TEMPLATE_ID = "template_wwn5p4a";
const EMAILJS_PUBLIC_KEY = "2tyhnNkjQwIXAOWEX";

type FormValues = {
  user_name: string;
  user_phone: string;
  user_email: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onBlur" });

  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name: data.user_name,
          user_phone: data.user_phone,
          user_email: data.user_email,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      reset();
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
            </ul>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            noValidate
          >
            {/* Nombre — obligatorio */}
            <div className={styles.field}>
              <label htmlFor="user_name" className={styles.label}>
                Nombre <span className={styles.required}>*</span>
              </label>
              <input
                id="user_name"
                type="text"
                className={`${styles.input} ${errors.user_name ? styles.input_error : ""}`}
                {...register("user_name", { required: "El nombre es obligatorio." })}
              />
              {errors.user_name && (
                <p className={styles.field_error} role="alert">
                  {errors.user_name.message}
                </p>
              )}
            </div>

            {/* Teléfono — opcional */}
            <div className={styles.field}>
              <label htmlFor="user_phone" className={styles.label}>
                Teléfono
              </label>
              <input
                id="user_phone"
                type="tel"
                className={styles.input}
                {...register("user_phone")}
              />
            </div>

            {/* Email — obligatorio */}
            <div className={styles.field}>
              <label htmlFor="user_email" className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                id="user_email"
                type="email"
                className={`${styles.input} ${errors.user_email ? styles.input_error : ""}`}
                {...register("user_email", {
                  required: "El email es obligatorio.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Ingresá un email válido.",
                  },
                })}
              />
              {errors.user_email && (
                <p className={styles.field_error} role="alert">
                  {errors.user_email.message}
                </p>
              )}
            </div>

            {/* Mensaje — opcional */}
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Contame brevemente tu consulta..."
                className={styles.textarea}
                {...register("message")}
              />
            </div>

            <div className={styles.submit_row}>
              <button
                type="submit"
                disabled={isSubmitting || status === "sending"}
                className={styles.submitButton}
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
              <p className={styles.privacy_note}>
                <LockIcon />
                Tus datos son confidenciales y están protegidos por secreto profesional.
              </p>
            </div>

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
const LockIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

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

export default Contact;
