export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
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
    question: "¿Las sesiones son confidenciales?",
    answer:
      "Sí. Todo lo que se trabaja en el espacio terapéutico está protegido por el **secreto profesional**. Es un espacio de absoluta privacidad y respeto.",
  },
  {
    id: "faq-5",
    question:
      "¿Las sesiones online son igual de efectivas que las presenciales?",
    answer:
      "Sí. La evidencia clínica muestra que la psicoterapia online es **igual de efectiva** que la presencial. En el caso de la terapia sexual, muchas personas encuentran que la comodidad y privacidad del entorno propio favorecen una mayor apertura. Las sesiones se realizan por videollamada y siguen exactamente el mismo proceso clínico.",
  },
  {
    id: "faq-6",
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Se requiere aviso con al menos **48 horas de anticipación**. En caso contrario, se abona el 50% del valor de la sesión.",
  },
];
