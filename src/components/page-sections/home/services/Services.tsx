import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import styles from "./Services.module.css";
import clsx from "clsx";
import TerapiaSexualIndividualImage from "../../../../assets/images/terapia_sexual_individual.jpg";

const servicesData = [
  {
    id: "item-1",
    title: "Eyaculacion precoz",
    quote:
      "Porque no se trata de alcanzar un ideal, sino de construir una relación más propia y habitable con la sexualidad.",
    description:
      "Cuando la sexualidad comienza a vivirse con preocupación, exigencia o miedo a que algo no funcione, el encuentro suele quedar atrapado en la anticipación y el control. En lugar de ser una experiencia compartida, pasa a evaluarse, medirse o ponerse a prueba, generando malestar y distancia con el propio cuerpo y con el otro.\n\nEl trabajo terapéutico se orienta a comprender qué está en juego en esas experiencias, a desarmar las exigencias que se instalan y a habilitar una vivencia sexual menos presionada.",
  },
  {
    id: "item-2",
    title: "Vaginismo",
    quote:
      "Un espacio para abordar los conflictos, silencios y desencuentros que afectan la comunicación y la intimidad en la pareja.",
    description:
      "Con el tiempo, muchas parejas notan que el deseo cambia, se vuelve menos espontáneo o aparece con dificultad. La rutina, las responsabilidades, la falta de tiempo o ciertos conflictos no dichos pueden impactar en la vida sexual y en la cercanía emocional.\n\nLa vida en pareja puede ser una fuente de disfrute, pero también atravesar momentos de distancia, desencuentro o silencios que generan malestar. En esos momentos, la terapia de pareja ofrece un espacio de escucha y trabajo conjunto para pensar lo que está pasando en el vínculo, revisar modos de comunicarse y abordar cómo se está viviendo la intimidad y la sexualidad.",
  },
  {
    id: "item-3",
    title: "Bajo deseo sexual",
    quote:
      "Acompañamiento psicológico en momentos de crisis, ansiedad, dificultades vinculares y búsquedas personales.",
    description:
      "La psicoterapia individual está dirigida a personas que atraviesan distintos malestares emocionales, como ansiedad, angustia, dificultades en la autoestima, duelos o momentos de crisis. Es un espacio de escucha y trabajo terapéutico para poner en palabras lo que está pasando, comprender los propios procesos y encontrar modos posibles de transitar las dificultades.\n\nEste espacio está a cargo de otra profesional del equipo y se orienta al abordaje psicológico general, sin intervención específica sobre la sexualidad.",
  },
  {
    id: "item-4",
    title: "Disfuncion erectil",
    quote:
      "Porque no se trata de alcanzar un ideal, sino de construir una relación más propia y habitable con la sexualidad.",
    description:
      "Cuando la sexualidad comienza a vivirse con preocupación, exigencia o miedo a que algo no funcione, el encuentro suele quedar atrapado en la anticipación y el control. En lugar de ser una experiencia compartida, pasa a evaluarse, medirse o ponerse a prueba, generando malestar y distancia con el propio cuerpo y con el otro.\n\nEl trabajo terapéutico se orienta a comprender qué está en juego en esas experiencias, a desarmar las exigencias que se instalan y a habilitar una vivencia sexual menos presionada.",
  },
  {
    id: "item-5",
    title: "Dispareunia",
    quote:
      "Porque no se trata de alcanzar un ideal, sino de construir una relación más propia y habitable con la sexualidad.",
    description:
      "Cuando la sexualidad comienza a vivirse con preocupación, exigencia o miedo a que algo no funcione, el encuentro suele quedar atrapado en la anticipación y el control. En lugar de ser una experiencia compartida, pasa a evaluarse, medirse o ponerse a prueba, generando malestar y distancia con el propio cuerpo y con el otro.\n\nEl trabajo terapéutico se orienta a comprender qué está en juego en esas experiencias, a desarmar las exigencias que se instalan y a habilitar una vivencia sexual menos presionada.",
  },
  {
    id: "item-6",
    title: "Anorgasmia",
    quote:
      "Porque no se trata de alcanzar un ideal, sino de construir una relación más propia y habitable con la sexualidad.",
    description:
      "Cuando la sexualidad comienza a vivirse con preocupación, exigencia o miedo a que algo no funcione, el encuentro suele quedar atrapado en la anticipación y el control. En lugar de ser una experiencia compartida, pasa a evaluarse, medirse o ponerse a prueba, generando malestar y distancia con el propio cuerpo y con el otro.\n\nEl trabajo terapéutico se orienta a comprender qué está en juego en esas experiencias, a desarmar las exigencias que se instalan y a habilitar una vivencia sexual menos presionada.",
  },
  {
    id: "item-6",
    title: "Adiccion a la pornografia",
    quote:
      "Porque no se trata de alcanzar un ideal, sino de construir una relación más propia y habitable con la sexualidad.",
    description:
      "Cuando la sexualidad comienza a vivirse con preocupación, exigencia o miedo a que algo no funcione, el encuentro suele quedar atrapado en la anticipación y el control. En lugar de ser una experiencia compartida, pasa a evaluarse, medirse o ponerse a prueba, generando malestar y distancia con el propio cuerpo y con el otro.\n\nEl trabajo terapéutico se orienta a comprender qué está en juego en esas experiencias, a desarmar las exigencias que se instalan y a habilitar una vivencia sexual menos presionada.",
  },
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <h2 className={styles.section_title}>Servicios</h2>
        <h2 className={styles.section_title_small}>
          Terapia sexual individual
        </h2>

        <div className={styles.info_container}>
          <div className={styles.image_container}>
            <img src={TerapiaSexualIndividualImage} className={styles.image} />
          </div>
          <div className={styles.description_container}>
            <p className={styles.description_title}>
              "Porque no se trata de alcanzar un ideal, sino de construir una
              relación más propia y habitable con la sexualidad."
            </p>

            <Accordion.Root
              className={styles.accordionRoot}
              type="single"
              defaultValue="item-1"
              collapsible
            >
              {servicesData.map((service) => (
                <Accordion.Item
                  key={service.id}
                  className={styles.accordionItem}
                  value={service.id}
                >
                  <Accordion.Header className={styles.accordionHeader}>
                    <Accordion.Trigger className={styles.accordionTrigger}>
                      <span className={styles.accordionTitle}>
                        {service.title}
                      </span>
                      <ChevronDown
                        className={styles.accordionChevron}
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className={styles.accordionContent}>
                    <div className={styles.accordionBody}>
                      <p className={styles.quote}>{service.quote}</p>
                      <p className={styles.description}>
                        {service.description}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
