import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import clsx from "clsx";
import ProfilePic from "../../../public/viviana_baccarat.jpg";
import ProfilePicSquare from "../../../public/viviana_baccarat_square.jpg";
import { useViewport } from "../../common/hooks/useViewport";

const Hero = () => {
  const { isMobile } = useViewport();
  return (
    <section className={styles.hero}>
      <div className={clsx("container", styles.container)}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Espacio de Terapia Sexual
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lic. Viviana Baccarat · M.N. 56769 — Psicóloga, Sexóloga Clínica y
            especialista en Gestión del Estrés
          </motion.p>

          <motion.div
            className={styles.description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>
              Entender lo que te pasa es el primer paso para recuperar el
              bienestar. Aquí exploramos los motivos y los caminos para
              abordarlos.
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
          <img
            src={isMobile ? ProfilePicSquare : ProfilePic}
            className={styles.profile_pic}
            alt="Lic. Viviana Baccarat M.N 56769 - Especialista en Terapia Psicosexual y Abordaje
del Estrés con atención online e internacional."
          />
        </motion.div>
      </div>

      {/* Floating shapes */}
      {/*     <motion.div
        className={clsx(styles.floatingShape, styles.shape1)}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      /> */}
      {/* 
      <motion.div
        className={clsx(styles.floatingShape, styles.shape2)}
        animate={{
          scale: [1, 0.9, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className={clsx(styles.floatingShape, styles.shape3)}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      /> */}
    </section>
  );
};

export default Hero;
