import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import clsx from "clsx";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={clsx("container", styles.container)}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.title_container}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={styles.title}>Sexualidad en Foco</h2>
            <h1 className={styles.title}>Terapia Sexual</h1>
          </motion.div>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lic. Viviana Baccarat · M.N. 56769 — <strong>Psicóloga</strong>,{" "}
            <strong>Sexóloga Clínica</strong> y especialista en{" "}
            <strong>Gestión del Estrés</strong>
          </motion.h2>

          <motion.div
            className={styles.description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className={styles.description_paragraph}>
              Entender lo que te pasa es el primer paso para recuperar tu
              bienestar. Aquí exploramos los motivos y los caminos para abordar
              los <strong>conflictos de pareja</strong> y tu{" "}
              <strong>salud sexual</strong>.
            </p>

            <p
              className={clsx(
                styles.description_paragraph,
                styles.description_paragraph_bold,
              )}
            >
              <strong>Atención online en Argentina y en el exterior.</strong>
            </p>
          </motion.div>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#contacto" className={styles.primaryButton}>
              Solicitar consulta
            </a>
            <a href="#servicios" className={styles.secondaryButton}>
              Conocé los servicios
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/viviana_baccarat_square.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 768px)"
              srcSet="/viviana_baccarat_square.jpg"
              type="image/jpeg"
            />
            <source
              srcSet="/viviana_baccarat_1x.webp 492w, /viviana_baccarat.webp 984w"
              sizes="492px"
              type="image/webp"
            />
            <img
              src="/viviana_baccarat.jpg"
              className={styles.profile_pic}
              alt="Lic. Viviana Baccarat M.N 56769 - Especialista en Terapia Psicosexual y Abordaje del Estrés con atención online e internacional."
              fetchPriority="high"
              decoding="async"
              width={984}
              height={1748}
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
