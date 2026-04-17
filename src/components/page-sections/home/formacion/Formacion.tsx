import styles from "./Formacion.module.css";
import logoUCES from "../../../../assets/images/logos/UCES.png";
import logoSLAMS from "../../../../assets/images/logos/SLAMS.png";
import logoAASES from "../../../../assets/images/logos/AASES.jpg";
import logoWestern from "../../../../assets/images/logos/WESTERNEUROPE.png";

const formaciones = [
  {
    id: 1,
    title: "Licenciatura en Psicología",
    institution: "Universidad de Ciencias Empresariales y Sociales (UCES)",
  },
  {
    id: 2,
    title: "Abordaje Integrativo del Estrés Crónico",
    institution:
      "Regulación del Sistema Nervioso Autónomo y el Eje HPA — Facultad de Medicina Integrativa Regenera, Barcelona",
  },
  {
    id: 3,
    title: "Diplomatura en Sexualidad y Calidad de Vida",
    institution:
      "Universidad de Ciencias Empresariales y Sociales (UCES), auspiciada por la Sociedad Latinoamericana de Medicina Sexual (SLAMS)",
  },
  {
    id: 4,
    title: "Diplomatura Internacional en Salud Sexual",
    institution: "Asociación Argentina de Sexología y Educación Sexual (AASES)",
  },
  {
    id: 5,
    title: "Posgrado en Psicoanálisis",
    institution: "Hospital Dr. Arturo Ameghino, Ministerio de Salud",
  },
];

const logos = [
  {
    id: "uces",
    alt: "Logo UCES - Diplomatura en Sexualidad y Calidad de Vida. Lic. Viviana Baccarat",
    src: logoUCES,
  },
  {
    id: "slams",
    alt: "Sociedad Latinoamericana de Medicina Sexual - Aval institucional para terapia sexológica internacional",
    src: logoSLAMS,
  },
  {
    id: "aases",
    alt: "Logo AASES - Asociación Argentina de Sexología y Educación Sexual - Especialista en salud sexual con atención online",
    src: logoAASES,
  },
  {
    id: "western",
    alt: "Logo Western Europe University - Especialización universitaria de Postgrado con reconocimiento europeo",
    src: logoWestern,
  },
];

const Formacion = () => {
  return (
    <section className={styles.section} id="formacion">
      <div className="container">
        <h2 className={styles.sectionLabel}>Formación</h2>
        <h3 className={styles.sectionTitle}>
          Mi trayectoria y respaldo académico
        </h3>

        <div className={styles.introBlock}>
          <p className={styles.intro}>
            Cuento con una especialización universitaria de{" "}
            <strong>
              posgrado certificada por la Western Europe University y la
              Facultad de Medicina Integrativa Regenera (Barcelona, España)
            </strong>
            , con reconocimiento europeo.
          </p>
          <p className={styles.intro}>
            Esta formación me permite integrar la Psicología con la{" "}
            <strong>Biología del Estrés</strong>, ofreciendo un abordaje donde
            el cuerpo y la mente no se trabajan por separado.
          </p>
        </div>

        <div className={styles.cards}>
          {formaciones.map((f) => (
            <div key={f.id} className={styles.card}>
              <strong className={styles.cardTitle}>{f.title}</strong>
              <span className={styles.cardInstitution}>{f.institution}</span>
            </div>
          ))}
        </div>

        <div className={styles.logosSection}>
          <p className={styles.logosLabel}>Avales institucionales</p>
          <div className={styles.logos}>
            {logos.map((logo) => (
              <div key={logo.id} className={styles.logoBox}>
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={styles.logoImage}
                    loading="lazy"
                  />
                ) : (
                  <span className={styles.logoPlaceholder}>
                    Logo próximamente
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacion;
