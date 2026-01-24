import clsx from "clsx";
import VideoSrc from "../../assets/videos/sobre_mi.mp4";
import styles from "./About.module.css";

const About = () => {
  return (
    <div style={{ padding: "4rem 0" }} id="About">
      <div className={clsx("container", styles.container)}>
        <div className={styles.video_container}>
          <video src={VideoSrc} controls className={styles.video} />
        </div>

        <div className={styles.text_container}>
          <p className={styles.text}>
            Experiencia clínica, formación constante y una convicción:{" "}
            <b>la sexualidad también se habita con la palabra.</b>
          </p>
          <p className={styles.text}>
            Soy Licenciada en Psicología y Sexóloga Clínica. Acompaño a personas
            y parejas desde una escucha clínica atenta, respetuosa y sin
            juicios, cuando atraviesan dificultades en su vida sexual.
          </p>
          <p className={styles.text}>
            Este espacio está pensado para alojar esas experiencias,
            especialmente cuando el deseo se vuelve confuso, el cuerpo no
            responde como se espera o ciertas conductas comienzan a generar
            preocupación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
