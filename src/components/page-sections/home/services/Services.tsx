import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Services.module.css";
import TerapiaSexualImage from "../../../../assets/images/terapia_sexual_individual.jpg";

const disfuncionesData = [
  {
    id: "falta-deseo",
    label: "Falta de deseo",
    image: "/servicios/FALTA DESEO.jpg",
    imagePosition: "center top",
    imageAlt:
      "Tratamiento para la falta de deseo sexual – Lic. Viviana Baccarat",
    text: "Cuando el deseo disminuye o desaparece, la experiencia sexual puede volverse distante o poco conectada. El abordaje terapéutico permite comprender qué factores —como el estrés, la ansiedad o la exigencia— están interfiriendo, favoreciendo la **recuperación del interés** y una vivencia más libre y genuina de la sexualidad.",
  },
  {
    id: "eyaculacion-precoz",
    label: "Eyaculación Precoz",
    image: "/servicios/Eyaculacion precoz.jpg",
    imagePosition: "center -8rem",
    imageAlt:
      "Especialista en eyaculación precoz en Belgrano y consulta virtual – Lic. Viviana Baccarat",
    text: "Suele vivirse como una pérdida de control: el cuerpo responde antes de lo que uno quisiera y eso genera frustración, ansiedad y, muchas veces, evitación. **Más que una cuestión de tiempo**, el punto central es la dificultad para regular cómo responde el cuerpo ante la estimulación.\n\n La terapia no busca 'aguantar', sino reentrenar la respuesta del cuerpo y el registro de las sensaciones. El objetivo es que la regulación deje de ser un esfuerzo y se convierta en una capacidad natural de disfrutar.",
  },
  {
    id: "disfuncion-erectil",
    label: "Disfunción Eréctil",
    image: "/servicios/DISFUNCION ERECTIL (1).jpg",
    imagePosition: "center -6rem",
    imageAlt:
      "Especialista en disfunción eréctil - Terapia psicosexual online y presencial en Belgrano – Lic. Viviana Baccarat",
    text: 'Es la dificultad para lograr o mantener una erección satisfactoria. Su origen puede ser orgánico o psicológico, pero el miedo a "no cumplir" suele agravar el síntoma al bloquear la respuesta natural.\n\nEl tratamiento se enfoca en eliminar la **ansiedad por el desempeño** y el estrés asociado, permitiendo que la erección vuelva a ser un proceso fluido y espontáneo.',
  },
  {
    id: "vaginismo",
    label: "Vaginismo",
    image: "/servicios/VAGINISMO.jpg",
    imagePosition: "center -8rem",
    imageAlt:
      "Tratamiento del vaginismo y tensión pélvica involuntaria - Sexología clínica en Belgrano – Lic. Viviana Baccarat",
    text: "Es el espasmo involuntario de los músculos del suelo pélvico que bloquea la penetración, el uso de tampones o exámenes médicos. Actúa como un **mecanismo de defensa** que no responde al control voluntario.\n\nIntegramos el registro corporal y el manejo de la ansiedad para desactivar la respuesta de tensión de forma progresiva, recuperando el bienestar y el placer.",
  },
  {
    id: "dispareunia",
    label: "Dispareunia",
    image: "/servicios/DISPAREUNIA.jpg",
    imageAlt:
      "Especialista en dispareunia y coito doloroso - Terapia psicosexual virtual e internacional – Lic. Viviana Baccarat",
    text: "Es el dolor genital persistente que se manifiesta antes, durante o después del encuentro sexual. Su presencia activa una respuesta de protección que genera tensión y evitación, afectando el deseo y el vínculo con el cuerpo.\n\nIdentificamos el origen del malestar para **romper el ciclo de dolor y ansiedad**, recuperando el bienestar y una sexualidad plena.",
  },
  {
    id: "anorgasmia",
    label: "Anorgasmia",
    image: "/servicios/ANORGASMIA.jpg",
    imagePosition: "center -4rem",
    imageAlt:
      "Tratamiento para la anorgasmia y dificultades para alcanzar el orgasmo – Lic. Viviana Baccarat",
    text: 'Es la dificultad persistente para alcanzar el orgasmo a pesar de una excitación adecuada. Suele estar vinculada a la ansiedad y al hecho de "observarse" en lugar de sentir, bloqueando la entrega al placer.\n\nReducimos la autoexigencia y ampliamos el registro sensorial para que el orgasmo surja como una **respuesta natural**, liberando la presión y la ansiedad del proceso.',
  },
  {
    id: "pornografia-sexualidad",
    label: "Pornografía y sexualidad",
    image: "/servicios/PORNOGRAFIA.jpg",
    imageAlt:
      "Impacto de la pornografía en el deseo y la respuesta sexual real - Consulta sexológica en Belgrano y Online – Lic. Viviana Baccarat",
    text: "El consumo frecuente puede generar una **dependencia del estímulo visual**, habituando el deseo a la intensidad de una pantalla y dificultando la respuesta ante el encuentro real.\n\nReentrenamos la sensibilidad y la conexión con los sentidos para recuperar una sexualidad consciente y compartida.",
  },
];

const areasData = [
  {
    id: "terapia-sexual",
    label: "Terapia Sexual",
    image: TerapiaSexualImage,
    imageAlt:
      "Terapia psicosexual para el tratamiento de dificultades sexuales y ansiedad de desempeño – Lic. Viviana Baccarat",
    text: "Cuando la sexualidad se vive bajo exigencia, miedo o tensión, el cuerpo deja de responder con naturalidad y la experiencia pierde conexión. La psicoterapia sexual permite comprender qué está sosteniendo ese malestar —ya sea en el deseo, la respuesta o el encuentro—, **integrando el impacto del estrés** para recuperar una vivencia más libre, confiada y en sintonía con uno mismo.",
  },
  {
    id: "terapia-pareja",
    label: "Terapia de Pareja",
    image: "/servicios/pareja.jpg",
    imageAlt:
      "Terapia de pareja para dificultades sexuales, falta de deseo y conflictos en la relación – Lic. Viviana Baccarat",
    text: "Cuando la comunicación se dificulta o el deseo se apaga, el vínculo puede volverse tenso, distante o repetitivo. La terapia de pareja permite comprender qué está generando esa desconexión —ya sea en la comunicación, la intimidad o la vida sexual— y trabajar sobre los patrones que la sostienen. El objetivo es **reducir la tensión, reconstruir el encuentro** y recuperar una forma más genuina y placentera de estar juntos.",
  },
  {
    id: "estres-ansiedad",
    label: "Estrés y Ansiedad",
    image: "/servicios/ESTRES.jpeg",
    imagePosition: "center -22rem",
    imageAlt:
      "Terapia para ansiedad y estrés con abordaje psicológico integral – Lic. Viviana Baccarat",
    text: "Cuando el estrés se vuelve sostenido, el cuerpo permanece en alerta y afecta el descanso, el ánimo y la respuesta sexual. \n\nEl abordaje terapéutico permite comprender cómo se sostiene esa activación y trabajar en su regulación, favoreciendo una disminución de la tensión y la recuperación del equilibrio físico y emocional.",
  },
  {
    id: "practica-tai",
    label: "Práctica Tai",
    image: "/servicios/PRACTICA TAI.jpg",
    imageAlt:
      "Práctica Tai para la regulación del sistema nervioso y conciencia corporal en sexología – Lic. Viviana Baccarat",
    text: "Una herramienta corporal para reducir el estrés y los estados de alerta, facilitando la conexión con lo que el cuerpo siente. Es un recurso de **regulación emocional y conciencia corporal** específicamente diseñado para complementar el tratamiento de la ansiedad y las dificultades sexuales.\n\n(Recurso complementario al tratamiento principal, coordinado por un profesional externo especializado).",
  },
];

const renderText = (text: string) =>
  text
    .split(/(\*\*.*?\*\*)/g)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );

const contentVariants = {
  enter: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: "easeIn" } },
};

const Services = () => {
  const [activeId, setActiveId] = useState(areasData[0].id);
  const active = areasData.find((a) => a.id === activeId)!;

  const [activeDisfuncionId, setActiveDisfuncionId] = useState(
    disfuncionesData[0].id,
  );
  const activeDisfuncion = disfuncionesData.find(
    (d) => d.id === activeDisfuncionId,
  )!;

  return (
    <>
      {" "}
      <section className={styles.servicesSection} id="servicios">
        <div className="container">
          <h2 className={styles.sectionLabel}>Servicios</h2>
          <h3 className={styles.sectionTitle}>Servicios y enfoques terapéuticos</h3>

          <div className={styles.pills}>
            {areasData.map((area) => (
              <button
                key={area.id}
                className={`${styles.pill} ${activeId === area.id ? styles.pillActive : ""}`}
                onClick={() => setActiveId(area.id)}
              >
                {area.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              className={styles.contentGrid}
              variants={contentVariants}
              initial="enter"
              animate="visible"
              exit="exit"
            >
              <div className={styles.imageContainer}>
                {active.image ? (
                  <img
                    src={active.image}
                    alt={active.imageAlt}
                    className={styles.image}
                    loading="lazy"
                    style={{ objectPosition: active.imagePosition ?? "center" }}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>Imagen próximamente</span>
                  </div>
                )}
              </div>

              <div className={styles.textContainer}>
                <h4 className={styles.areaTitle}>{active.label}</h4>
                <p className={styles.areaText}>{renderText(active.text)}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section
        className={`${styles.servicesSection} ${styles.servicesSectionAlt}`}
      >
        <div className="container">
          <h2 className={styles.sectionLabel}>Motivos de consulta</h2>
          <h3 className={styles.sectionTitle}>
            Disfunciones y síntomas tratados
          </h3>

          <div className={styles.pills}>
            {disfuncionesData.map((item) => (
              <button
                key={item.id}
                className={`${styles.pill} ${activeDisfuncionId === item.id ? styles.pillActive : ""}`}
                onClick={() => setActiveDisfuncionId(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDisfuncionId}
              className={`${styles.contentGrid} ${styles.contentGridReversed}`}
              variants={contentVariants}
              initial="enter"
              animate="visible"
              exit="exit"
            >
              <div className={styles.textContainer}>
                <h4 className={styles.areaTitle}>{activeDisfuncion.label}</h4>
                <p className={styles.areaText}>
                  {renderText(activeDisfuncion.text)}
                </p>
              </div>

              <div className={styles.imageContainer}>
                {activeDisfuncion.image ? (
                  <img
                    src={activeDisfuncion.image}
                    alt={activeDisfuncion.imageAlt}
                    className={styles.image}
                    loading="lazy"
                    style={{
                      objectPosition:
                        activeDisfuncion.imagePosition ?? "center",
                    }}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>Imagen próximamente</span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Services;
