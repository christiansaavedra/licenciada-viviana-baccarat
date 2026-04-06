import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

const renderText = (text: string) =>
  text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );

const faqs = [
  {
    id: "faq-1",
    question: "¿Cómo es la primera sesión?",
    answer:
      "Es un encuentro inicial para conocernos y entender tu motivo de consulta. **No hay nada que preparar**: simplemente contás lo que está pasando y desde ahí empezamos a pensar juntos cómo abordarlo.",
  },
  {
    id: "faq-2",
    question: "¿Puedo consultar solo/a o en pareja?",
    answer:
      "Ambas opciones son posibles. Evaluamos juntos cuál es la modalidad más adecuada según tu situación y lo que querés trabajar.",
  },
  {
    id: "faq-3",
    question: "¿Tu enfoque es solo en sexualidad?",
    answer:
      "No. Trabajo también ansiedad, baja autoestima, crisis personales y conflictos vinculares. La sexualidad muchas veces está conectada con estas áreas, y **el abordaje las integra**.",
  },
  {
    id: "faq-4",
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Se requiere aviso con al menos **48 horas de anticipación**. En caso contrario, se abona el 50% del valor de la sesión.",
  },
  {
    id: "faq-5",
    question: "¿Las sesiones son confidenciales?",
    answer:
      "Sí. Todo lo que se trabaja en el espacio terapéutico está protegido por el **secreto profesional**. Es un espacio de absoluta privacidad y respeto.",
  },
  {
    id: "faq-6",
    question: "¿Las sesiones online son igual de efectivas que las presenciales?",
    answer:
      "Sí. La evidencia clínica muestra que la psicoterapia online es **igual de efectiva** que la presencial. En el caso de la terapia sexual, muchas personas encuentran que la comodidad y privacidad del entorno propio favorecen una mayor apertura. Las sesiones se realizan por videollamada y siguen exactamente el mismo proceso clínico.",
  },
];

const FAQ = () => {
  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <h2 className={styles.sectionLabel}>Conocé más</h2>
        <h3 className={styles.sectionTitle}>Preguntas frecuentes</h3>

        <Accordion.Root
          type="single"
          collapsible
          className={styles.accordionRoot}
        >
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className={styles.accordionItem}
            >
              <Accordion.Header className={styles.accordionHeader}>
                <Accordion.Trigger className={styles.accordionTrigger}>
                  <span>{faq.question}</span>
                  <ChevronDown className={styles.chevron} aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={styles.accordionContent}>
                <p className={styles.accordionBody}>{renderText(faq.answer)}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQ;
