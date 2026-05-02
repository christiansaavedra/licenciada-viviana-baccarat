import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { useViewport } from "../../../../common/hooks/useViewport";
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
  {
    id: 4,
    text: "Viviana ha sido una guía excepcional. Desde el primer encuentro me hizo sentir escuchado y creó un espacio seguro para abrirme. Su calidez humana y claridad para explicar conceptos me ayudaron mucho. Gracias a su acompañamiento, avanzo con confianza y sus herramientas me recuerdan que el cambio es posible.",
    author: "Paciente (anónimo/a)",
    service: "Terapia Sexual Individual",
    stars: 5,
  },
  {
    id: 5,
    text: "Las sesiones de Osteo Tai me hicieron consciente de que vivía en alerta constante. Fue un complemento excelente que me ayudó a bajar las defensas y sentirme más seguro. Aprendí a escuchar mi cuerpo y estar presente en mis sensaciones con mayor conciencia.",
    author: "Paciente (anónimo/a)",
    service: "Práctica Osteo Tai",
    stars: 5,
  },
  {
    id: 6,
    text: "Después de consultar al urólogo y saber que era psicológico, decidí hacer terapia. Descubrí que era igual de controlador en el sexo que en la vida diaria. En terapia aprendí a soltar el control y estar más presente. Hoy disfruto de verdad con menos presión en mi sexualidad y vida cotidiana.",
    author: "Paciente (anónimo/a)",
    service: "Eyaculación Precoz",
    stars: 5,
  },
  {
    id: 7,
    text: "Cada encuentro me generaba ansiedad pensando si mi cuerpo respondería. Era como rendir un examen y me bloqueaba por los nervios. Con Viviana entendí que la presión me jugaba en contra y aprendí a soltar el control. La terapia me dio herramientas para bajar la ansiedad sin sentirme juzgado. Hoy me siento más seguro y recuperé la confianza gradualmente.",
    author: "Paciente (anónimo/a)",
    service: "Disfunción Eréctil",
    stars: 5,
  },
  {
    id: 8,
    text: "El porno me había anestesiado y en la vida real nada me satisfacía. Me costaba conectar con mi pareja porque mi mente estaba en otro lado. La terapia me ayudó a entender por qué me refugiaba ahí y cómo recuperar la sensibilidad. Gradualmente dejé las aplicaciones y recuperé el deseo real con mi pareja.",
    author: "Paciente (anónimo/a)",
    service: "Adicción a la Pornografía",
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
  const { isMobile } = useViewport();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const canScrollPrev = emblaApi.canScrollPrev();
      const canScrollNext = emblaApi.canScrollNext();

      if (prevButtonRef.current) {
        prevButtonRef.current.disabled = !canScrollPrev;
      }
      if (nextButtonRef.current) {
        nextButtonRef.current.disabled = !canScrollNext;
      }
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  // Group testimonials: 1 per slide on mobile, 3 per slide on desktop
  const itemsPerSlide = isMobile ? 1 : 3;
  const groupedTestimonials = [];
  for (let i = 0; i < testimonios.length; i += itemsPerSlide) {
    groupedTestimonials.push(testimonios.slice(i, i + itemsPerSlide));
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionLabel}>Testimonios</h2>
        <h3 className={styles.sectionTitle}>
          Lo que dicen quienes ya dieron el paso
        </h3>
        <p className={styles.disclaimer}>
          Testimonios compartidos con consentimiento. Los nombres se omiten para
          preservar la confidencialidad.
        </p>

        <div className={styles.carouselContainer}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {groupedTestimonials.map((group, groupIndex) => (
                <div key={groupIndex} className={styles.emblaSlide}>
                  <div className={styles.slideGrid}>
                    {group.map((t) => (
                      <article key={t.id} className={styles.card}>
                        <QuoteIcon />

                        <p className={styles.text}>{t.text}</p>

                        <div className={styles.footer}>
                          <div
                            className={styles.stars}
                            aria-label={`${t.stars} estrellas`}
                          >
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
              ))}
            </div>
          </div>

          <button
            ref={prevButtonRef}
            onClick={scrollPrev}
            aria-label="Testimonio anterior"
            className={`${styles.controlButton} ${styles.prevButton}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            ref={nextButtonRef}
            onClick={scrollNext}
            aria-label="Siguiente testimonio"
            className={`${styles.controlButton} ${styles.nextButton}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
