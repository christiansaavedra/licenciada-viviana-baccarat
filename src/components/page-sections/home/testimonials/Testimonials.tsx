import styles from "./Testimonials.module.css";

const testimonios = [
  {
    id: 1,
    text: "Llevaba años con dificultades que no sabía cómo nombrar ni a quién consultar. En el espacio terapéutico encontré un lugar donde hablar sin vergüenza y herramientas concretas para recuperar algo que creía perdido. El cambio fue real.",
    author: "Paciente (anónimo/a)",
    service: "Terapia Sexual Individual",
    stars: 5,
  },
  {
    id: 2,
    text: "La conexión entre mi estrés laboral y los problemas que tenía con mi pareja nunca la había visto tan clara. Viviana me ayudó a entender qué pasaba en mi cuerpo y cómo eso impactaba en todo lo demás. Hoy somos otra pareja.",
    author: "Paciente (anónimo/a)",
    service: "Terapia de Pareja",
    stars: 5,
  },
  {
    id: 3,
    text: "Tuve miedo de hacer la consulta online, pensaba que no iba a ser lo mismo. Desde la primera sesión me sentí contenida y comprendida. El formato virtual funcionó perfecto y pude avanzar desde casa, a mi ritmo.",
    author: "Paciente (anónimo/a)",
    service: "Consulta online — Internacional",
    stars: 5,
  },
];

const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={styles.quoteIcon}
  >
    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2.01L9.027 6c-.86.49-1.66 1.13-2.4 1.91-.74.79-1.32 1.67-1.73 2.64-.41.97-.61 1.97-.61 3.01 0 1.52.47 2.72 1.4 3.6.94.88 2.1 1.32 3.48 1.32.9 0 1.65-.28 2.26-.84.6-.56.9-1.27.9-2.13zm8.908 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.824-.56-.13-1.07-.14-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2.01L17.935 6c-.86.49-1.66 1.13-2.4 1.91-.74.79-1.32 1.67-1.73 2.64-.41.97-.61 1.97-.61 3.01 0 1.52.47 2.72 1.4 3.6.94.88 2.1 1.32 3.48 1.32.9 0 1.65-.28 2.26-.84.6-.56.9-1.27.9-2.13z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionLabel}>Testimonios</h2>
        <h3 className={styles.sectionTitle}>Lo que dicen quienes ya dieron el paso</h3>
        <p className={styles.disclaimer}>
          Testimonios compartidos con consentimiento. Los nombres se omiten para
          preservar la confidencialidad.
        </p>

        <div className={styles.grid}>
          {testimonios.map((t) => (
            <article key={t.id} className={styles.card}>
              <QuoteIcon />

              <p className={styles.text}>{t.text}</p>

              <div className={styles.footer}>
                <div className={styles.stars} aria-label={`${t.stars} estrellas`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <div className={styles.attribution}>
                  <span className={styles.author}>{t.author}</span>
                  <span className={styles.service}>{t.service}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
