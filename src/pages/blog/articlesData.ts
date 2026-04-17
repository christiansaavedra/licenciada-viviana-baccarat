export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: string;
  date: string; // ISO format YYYY-MM-DD
  readTime: string; // ej: "5 min"
  image: string;
  imageAlt: string;
  content: string[]; // array de párrafos
};

export const articles: Article[] = [
  {
    slug: "estres-cronico-y-deseo-sexual",
    title: "Cuando el estrés toma las riendas: su impacto en el deseo y la respuesta sexual",
    subtitle:
      "Por qué el cuerpo deja de responder cuando la mente no se detiene, y qué podemos hacer al respecto.",
    excerpt:
      "El estrés sostenido no solo afecta el ánimo o el descanso: tiene efectos directos sobre el deseo, la excitación y la respuesta sexual. Entender esta conexión es el primer paso para recuperar una sexualidad plena.",
    author: "Lic. Viviana Baccarat",
    date: "2026-04-10",
    readTime: "5 min",
    image: "/servicios/ESTRES.jpeg",
    imageAlt:
      "Persona reflexionando — abordaje del estrés crónico y su impacto en la sexualidad",
    content: [
      "Vivimos en una época en la que el estrés se ha naturalizado. Dormir poco, responder mensajes a cualquier hora, sostener múltiples roles y exigencias: todo eso deja marcas en el cuerpo que, tarde o temprano, aparecen en la esfera íntima. El deseo se apaga, la respuesta sexual se vuelve inconsistente, y muchas personas llegan a consulta con la sensación de que algo está fallando en ellas, cuando en realidad lo que falla es el contexto en el que intentan desear.",
      "Desde la perspectiva de la biología del estrés, el sistema nervioso autónomo tiene dos modos principales: uno de activación (asociado al rendimiento, la alerta y la supervivencia) y otro de recuperación (vinculado al descanso, la digestión y también a la sexualidad). Cuando el estrés se vuelve crónico, el cuerpo permanece en modo de alerta la mayor parte del tiempo, y el acceso al modo de recuperación se reduce. La sexualidad requiere presencia, entrega, conexión con las sensaciones — todas funciones del segundo modo.",
      "Por eso no alcanza con «querer» desear: el deseo necesita un estado fisiológico que lo habilite. Si el cuerpo está en alerta, el deseo no encuentra lugar. Y si el deseo aparece pero se acompaña de ansiedad de desempeño, la respuesta también se ve afectada: dificultades de erección, anorgasmia, eyaculación precoz, vaginismo, dolor. El síntoma no es el problema en sí, sino la expresión de un sistema que necesita ser regulado.",
      "En el trabajo terapéutico, abordamos esta conexión desde dos frentes simultáneos. Por un lado, identificamos qué sostiene la activación —exigencias, pensamientos, ritmos, vínculos— y trabajamos sobre la regulación emocional. Por otro, intervenimos sobre la experiencia sexual específica, buscando reentrenar la respuesta del cuerpo sin la presión del rendimiento.",
      "La buena noticia es que el sistema nervioso es plástico: responde a la intervención. Con las herramientas adecuadas y un tiempo de trabajo sostenido, es posible recuperar el registro del placer, bajar la ansiedad y restablecer una sexualidad que se vive desde el disfrute y no desde la exigencia. Si te reconocés en algo de lo que leíste, no estás solo/a. Es un motivo de consulta frecuente y tiene abordaje.",
    ],
  },
];

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);
