import VideoSrc from "../../assets/videos/sobre_mi.mp4";
import VideoPlayer from "../../components/video-player/VideoPlayer";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.section} id="sobre-mi">
      <div className="container">
        <h2 className={styles.sectionLabel}>Sobre mí</h2>
        <h3 className={styles.sectionTitle}>Conocé mi enfoque</h3>

        <div className={styles.grid}>
          <VideoPlayer src={VideoSrc} />

          <div className={styles.textContainer}>
            <p className={styles.text}>
              Experiencia clínica, formación constante y una convicción:{" "}
              <strong>la sexualidad también se habita con la palabra.</strong>
            </p>
            <p className={styles.text}>
              Soy Licenciada en Psicología, Sexóloga Clínica y especialista en
              Gestión del Estrés. Trabajo con personas y parejas que atraviesan
              dificultades en su vida sexual —en el deseo, la respuesta del
              cuerpo o la conexión con el otro— desde una escucha atenta,{" "}
              <strong>sin juicios y con rigor clínico</strong>.
            </p>
            <p className={styles.text}>
              Este espacio está pensado para alojar lo que muchas veces cuesta
              decir: cuando el deseo se vuelve confuso, el cuerpo no responde
              como se espera o ciertas conductas empiezan a pesar más de lo que
              deberían.{" "}
              <strong>
                Un lugar para entender qué está pasando y empezar a trabajarlo.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
