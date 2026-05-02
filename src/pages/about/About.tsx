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
              Acompaño a personas y parejas que buscan{" "}
              <strong>
                mejorar su salud sexual y gestionar el estrés y la ansiedad
              </strong>{" "}
              desde una mirada clínica que entiende el deseo como parte del
              equilibrio emocional.
            </p>
            <p className={styles.text}>
              Trabajo con herramientas precisas para{" "}
              <strong>resolver lo que interfiere en el placer</strong> y
              ayudarte a{" "}
              <strong>recuperar el bienestar y la satisfacción</strong>.
            </p>
          </div>
        </div>

        <details className={styles.transcript}>
          <summary className={styles.transcriptToggle}>
            Ver transcripción del video
          </summary>
          <div className={styles.transcriptContent}>
            <p>
              ¿Sentís que algo en tu sexualidad cambió y no sabés por qué? El
              cuerpo habla cuando las emociones no encuentran palabras. Soy
              psicóloga, diplomada en terapias sexuales. Trabajo con un enfoque
              que integra el psicoanálisis y la terapia sexual. Acompaño a
              personas y parejas que desean comprender lo que les pasa y
              reencontrarse con su deseo. Si algo de esto te resuena, este puede
              ser tu primer paso. No dudes en consultarme.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default About;
