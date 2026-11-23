export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo es la primera consulta?",
    answer:
      "Es un encuentro inicial para conocernos y entender tu motivo de consulta. **No hay nada que preparar**: simplemente contás lo que está pasando y desde ahí empezamos a pensar juntos cómo abordarlo.",
  },
  {
    id: "faq-2",
    question: "¿Se puede venir solo, sin pareja?",
    answer:
      "Sí. Podés consultar **solo o en pareja**, según lo que necesites. En la consulta individual trabajamos con lo que te pasa a vos; en la de pareja, con los dos.",
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
    question: "¿Funciona la terapia sexual online?",
    answer:
      "Sí. Trabajamos por **videollamada de Zoom**, en un espacio privado, y lo que practicás entre sesiones lo hacés en tu casa, que es donde pasa tu vida sexual. Muchas personas la eligen por comodidad, por privacidad o porque viven lejos. La evidencia clínica muestra que la psicoterapia online es igual de efectiva que la presencial.",
  },
  {
    id: "faq-7",
    question: "¿Cuánto dura un tratamiento?",
    answer:
      "Depende de cada persona y de cada consulta, por eso **no hay un número fijo de sesiones**. Cada sesión dura 50 minutos. En la primera consulta vemos tu situación y te cuento cómo podemos trabajar.",
  },
  {
    id: "faq-8",
    question: "¿Cuánto cuesta una consulta?",
    answer:
      "El valor se informa [por WhatsApp](whatsapp) al momento de consultar.",
  },
  {
    id: "faq-6",
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Se requiere aviso con al menos **48 horas de anticipación**. En caso contrario, se abona el 50% del valor de la sesión.",
  },
];
