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
    slug: "cortisol-el-interruptor-del-deseo",
    title: "Cortisol: el interruptor del deseo",
    subtitle:
      "Por qué tu cerebro apaga la respuesta sexual cuando detecta una amenaza externa.",
    excerpt:
      "El deseo no se enciende por voluntad. Cuando el cortisol se mantiene elevado, el cuerpo entra en un modo biológico donde la sexualidad simplemente no tiene lugar. Entender este mecanismo cambia cómo abordamos el problema.",
    author: "Lic. Viviana Baccarat",
    date: "2026-04-17",
    readTime: "5 min",
    image: "/servicios/FALTA DESEO.jpg",
    imageAlt:
      "Cortisol y caída del deseo sexual — abordaje clínico por Lic. Viviana Baccarat",
    content: [
      "Muchas personas llegan a consulta diciendo «quiero desear, pero no pasa nada». Detrás de esa frase hay frustración, culpa, y la sensación de que algo en uno mismo está fallando. Lo que en realidad sucede es que el cuerpo entró en un modo biológico donde el deseo, literalmente, no tiene cabida.",
      "El cortisol es la hormona central de la respuesta al estrés. Cuando el cerebro detecta una amenaza —real o simbólica— el eje hipotálamo-hipófisis-suprarrenal la libera para preparar al cuerpo para actuar. En dosis cortas es útil e incluso adaptativa. El problema aparece cuando el estrés se cronifica —trabajo, hiperconectividad, conflictos sostenidos, exigencias múltiples— y el cortisol permanece elevado de forma sostenida.",
      "A nivel biológico, el cortisol crónico inhibe la producción de hormonas sexuales (testosterona, estrógenos), suprime la activación parasimpática —la que permite la excitación y la entrega— y mantiene al sistema nervioso en estado de vigilancia. En ese contexto, el cerebro interpreta cualquier función no vinculada a la supervivencia como prescindible. Y el sexo, desde el punto de vista evolutivo, lo es.",
      "Por eso no alcanza con «intentar desear». Si el interruptor biológico está apagado, el esfuerzo consciente no lo enciende: lo satura más. El camino terapéutico pasa por identificar qué sostiene la activación, regular el sistema nervioso y devolverle al cuerpo la capacidad de entrar en un estado de calma receptiva.",
      "Reconocer que lo que ocurre no es falta de voluntad, sino una respuesta fisiológica predecible, cambia todo. Lleva del «¿qué me pasa a mí?» al «¿qué está pidiendo mi sistema?». Y a partir de ahí el trabajo terapéutico tiene un mapa claro: reducir la carga, reentrenar la respuesta y permitir que el deseo vuelva a aparecer desde un cuerpo que puede recibirlo.",
    ],
  },
  {
    slug: "el-secuestro-de-la-dopamina",
    title: "El secuestro de la dopamina",
    subtitle:
      "Cómo la hiperestimulación digital redefine tus umbrales de placer y te desconecta de la realidad.",
    excerpt:
      "La pornografía online no es «más» sexualidad: es un estímulo que recalibra los circuitos de recompensa del cerebro. Entender qué pasa a nivel neurobiológico permite abordar el tema sin moralizar y con herramientas concretas.",
    author: "Lic. Viviana Baccarat",
    date: "2026-04-15",
    readTime: "5 min",
    image: "/servicios/PORNOGRAFIA.jpg",
    imageAlt:
      "Impacto de la pornografía en el deseo real — consulta sexológica con Lic. Viviana Baccarat",
    content: [
      "La pornografía online está diseñada para retener la atención. Cada click, cada nueva escena, cada cambio de estímulo, dispara una liberación de dopamina —el neurotransmisor de la anticipación y la recompensa. El cerebro aprende muy rápidamente que ese estímulo es fácil, intenso y siempre disponible.",
      "El punto importante es que el problema no es moral: es neurobiológico. La dopamina opera sobre principios de novedad e intensidad. Cuando el sistema se expone de forma repetida a estímulos muy altos, recalibra sus umbrales: lo que antes activaba, ahora necesita más para generar la misma respuesta. El encuentro real —con su ritmo humano, sus pausas, su imperfección— queda por debajo del nuevo umbral.",
      "Esto no significa que haya una falla de conducta. Significa que el cerebro funciona exactamente como está programado: busca el camino de mayor recompensa con menor esfuerzo. La hiperestimulación digital no es una versión «más amplia» de la sexualidad; es una versión empobrecida que entrena al sistema a responder únicamente a estímulos extremos.",
      "En consulta aparecen patrones muy claros: dificultades de excitación frente a la pareja, eyaculación retrasada, falta de deseo real, sensación de desconexión durante el encuentro. Ninguna de esas personas está «defectuosa»: son sistemas nerviosos entrenados para un tipo de estímulo que hoy necesitan recalibrarse.",
      "El abordaje terapéutico no pasa por la prohibición ni por la culpa, sino por reentrenar la sensibilidad. Recuperar la capacidad de registrar estímulos más sutiles, reconectar con las sensaciones del propio cuerpo y con las de la pareja, y permitir que el deseo vuelva a ampliarse más allá de la pantalla. Con el tiempo, el sistema aprende a disfrutar de nuevo lo que antes parecía «poco».",
    ],
  },
  {
    slug: "la-trampa-del-rendimiento",
    title: "La trampa del rendimiento",
    subtitle:
      "El error biológico de intentar controlar con la mente un proceso que pertenece al cuerpo.",
    excerpt:
      "Cuanto más se intenta «hacer bien», menos responde el cuerpo. La ansiedad de desempeño sigue una lógica circular que se puede romper entendiendo cómo funciona el sistema nervioso autónomo.",
    author: "Lic. Viviana Baccarat",
    date: "2026-04-12",
    readTime: "5 min",
    image: "/servicios/DISFUNCION ERECTIL (1).jpg",
    imageAlt:
      "Ansiedad de desempeño y disfunción eréctil — terapia sexual Lic. Viviana Baccarat",
    content: [
      "Hay un error silencioso que atraviesa gran parte de las consultas por dificultades sexuales: intentar controlar con la mente un proceso que pertenece al cuerpo. Cuanto más se quiere «hacer bien», menos responde el cuerpo. Cuanto más se vigila la erección, la lubricación o el orgasmo, más se bloquean.",
      "La respuesta sexual es una función del sistema nervioso autónomo —la parte que no controlamos voluntariamente. Igual que la digestión o el latido cardíaco, depende de un estado fisiológico, no de una decisión consciente. Cuando intentamos dirigirla desde la voluntad, activamos justamente el circuito contrario al que permitiría que suceda: el de la alerta.",
      "A esto se le llama ansiedad de desempeño y tiene una lógica circular: la preocupación por no responder activa el sistema de estrés, que a su vez inhibe la respuesta, que confirma la preocupación, que intensifica la activación. Cada encuentro se vive como un examen. Y el cuerpo no funciona bien bajo evaluación.",
      "El abordaje terapéutico rompe ese ciclo por donde se puede intervenir: la exigencia. Se trabaja en soltar el objetivo, recuperar el registro de la sensación por la sensación misma, y reentrenar al sistema para que confíe en que el cuerpo sabe hacer lo que tiene que hacer cuando se le permite. El placer aparece cuando deja de ser una tarea.",
      "Lo paradójico es que el primer paso hacia recuperar la respuesta es dejar de buscarla. Eso no significa resignarse: significa retirar la presión que está impidiendo que el sistema se regule solo. La terapia ayuda a construir ese espacio donde el cuerpo vuelve a ser un lugar de disfrute y no un territorio de prueba.",
    ],
  },
  {
    slug: "el-afrodisiaco-invisible",
    title: "El afrodisíaco invisible",
    subtitle:
      "Por qué la seguridad emocional es la llave maestra que activa el sistema nervioso parasimpático.",
    excerpt:
      "Ninguna técnica reemplaza la sensación de estar a salvo. La seguridad emocional es el factor que activa la entrega y la receptividad — una condición biológica, no una abstracción romántica.",
    author: "Lic. Viviana Baccarat",
    date: "2026-04-11",
    readTime: "5 min",
    image: "/servicios/PAREJA.jpg",
    imageAlt:
      "Seguridad emocional en la pareja y su impacto en la sexualidad — Lic. Viviana Baccarat",
    content: [
      "Hay algo que ninguna técnica, ningún juguete ni ninguna sustancia puede reemplazar: la sensación de estar a salvo. La seguridad emocional es el afrodisíaco invisible, el que activa el sistema nervioso parasimpático —el responsable de la excitación, la entrega y la conexión.",
      "El cuerpo humano tiene un sistema interno de detección de seguridad, lo que el Dr. Stephen Porges llamó «neurocepción». Evalúa constantemente el entorno y el vínculo sin que lo advirtamos. Cuando percibe señales de amenaza (una mirada esquiva, un tono de voz, una crítica sutil, un conflicto no resuelto), inhibe automáticamente las funciones de conexión y receptividad. La sexualidad entra en ese grupo.",
      "Por eso parejas que técnicamente «saben» lo que hacen pueden tener dificultades profundas en la intimidad: no es un problema de habilidad, es un problema de contexto emocional. Y parejas sin experiencia, pero con alta seguridad afectiva, suelen construir vínculos sexuales plenos sin esfuerzo técnico. El cuerpo reconoce muy bien la diferencia.",
      "Construir seguridad emocional no es un proyecto rápido, pero sí concreto. Implica aprender a comunicar necesidades sin convertirlas en reclamos, a sostener los desacuerdos sin retirarse ni atacar, a reparar después de los conflictos y a generar rituales de conexión que no dependan del encuentro sexual. Cuando eso se construye, el cuerpo lo detecta y el deseo vuelve a tener dónde aparecer.",
      "En terapia abordamos esta dimensión en paralelo al trabajo con los síntomas sexuales. Ninguna intervención sobre la respuesta del cuerpo funciona si el sistema nervioso no percibe seguridad. El vínculo no es el contexto de la sexualidad: es su condición de posibilidad.",
    ],
  },
  {
    slug: "estres-cronico-y-deseo-sexual",
    title:
      "Cuando el estrés toma las riendas: su impacto en el deseo y la respuesta sexual",
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
  {
    slug: "el-gimnasio-de-la-atencion",
    title: "El gimnasio de la atención",
    subtitle:
      "Cómo el mindfulness entrena a tu sistema nervioso para habitar el presente y potenciar el placer sensorial.",
    excerpt:
      "El placer requiere atención, y la atención se entrena. Mindfulness no es una moda: es un trabajo medible sobre el sistema nervioso que mejora el registro sensorial, reduce la ansiedad y amplía la capacidad de disfrute.",
    author: "Lic. Viviana Baccarat",
    date: "2026-04-08",
    readTime: "4 min",
    image: "/servicios/PRACTICA TAI.jpg",
    imageAlt:
      "Mindfulness y conciencia corporal aplicada a la sexualidad — Lic. Viviana Baccarat",
    content: [
      "El placer requiere atención. Parece obvio, pero es uno de los desafíos más grandes de esta época: la mayoría vive con la atención dispersa, fragmentada, saltando de estímulo en estímulo. Y una mente ausente durante el encuentro sexual percibe menos, se entrega menos y se satisface menos.",
      "Mindfulness —la práctica de atención plena— no es una moda ni una técnica espiritual. Es un entrenamiento medible del sistema nervioso que fortalece la capacidad de sostener la atención, regular la respuesta al estrés y habitar el presente sin ser arrastrado por el pensamiento.",
      "En el ámbito sexual esto se traduce en algo muy concreto: más registro sensorial, menos autoevaluación mental, más capacidad de disfrutar el proceso en lugar de apuntar a un final. Distintos estudios muestran que la práctica sostenida mejora el deseo, reduce la ansiedad de desempeño y aumenta la satisfacción reportada.",
      "No se trata de meditar durante el sexo. Se trata de entrenar al cerebro, fuera del encuentro, para volver al presente cuando se distrae. Con el tiempo ese músculo atencional se activa también en la intimidad: cuando aparece un pensamiento evaluador, la mente sabe cómo regresar al cuerpo, a la sensación, al contacto.",
      "Este tipo de entrenamiento se integra muy bien al abordaje terapéutico de las dificultades sexuales. Complementa el trabajo cognitivo y relacional con una intervención directa sobre la atención y el cuerpo, que es donde ocurre el placer. No es un extra: es una de las herramientas más potentes para recuperar el disfrute.",
    ],
  },
  {
    slug: "la-ventana-de-tolerancia",
    title: "La ventana de tolerancia",
    subtitle:
      "Cómo ampliar el registro sensorial para evitar que el sistema nervioso colapse antes de tiempo.",
    excerpt:
      "La eyaculación precoz no es un problema de autocontrol, sino de la capacidad del sistema nervioso para sostener la activación sin desbordarse. Ampliar esa ventana es un entrenamiento concreto con resultados consistentes.",
    author: "Lic. Viviana Baccarat",
    date: "2026-04-05",
    readTime: "5 min",
    image: "/servicios/Eyaculacion precoz.jpg",
    imageAlt:
      "Eyaculación precoz y ventana de tolerancia — abordaje clínico Lic. Viviana Baccarat",
    content: [
      "Uno de los motivos de consulta más frecuentes en sexología clínica es la eyaculación precoz. Suele vivirse como una falla del autocontrol, pero la explicación más precisa viene de la teoría polivagal: se trata de un sistema nervioso que pierde la capacidad de sostener la activación dentro de su «ventana de tolerancia».",
      "Todos tenemos una ventana de tolerancia: el rango de activación en el que el cuerpo puede estar alerta, conectado y funcionando bien. Si la intensidad del estímulo excede ese rango, el sistema se desborda —descarga, se bloquea o se congela. La eyaculación precoz es, en muchos casos, esa descarga cuando la ventana es estrecha.",
      "Esto no tiene que ver con la «fuerza de voluntad». Tiene que ver con el nivel de ansiedad de base, con la historia de los primeros encuentros (cuando todo sucedía rápido por miedo a ser descubierto, por ejemplo) y con el grado de registro sensorial que la persona logra sostener antes de que el sistema se sature.",
      "El abordaje terapéutico consiste en ampliar esa ventana. Se trabaja en reducir la ansiedad basal, aumentar el registro de las sensaciones corporales a baja intensidad —para que el sistema no necesite llegar a la descarga tan rápido— y reentrenar la respuesta mediante ejercicios progresivos. La clave es que el cuerpo aprenda a tolerar más estimulación sin saturarse.",
      "El resultado no es «aguantar más»: es disfrutar más. Una ventana de tolerancia más amplia significa un sistema nervioso más resiliente, más conectado, más presente. La eyaculación precoz deja de ser un enemigo a vencer y se convierte en una señal de que el sistema necesita entrenamiento. Y ese entrenamiento, con las herramientas adecuadas, tiene resultados consistentes.",
    ],
  },
  {
    slug: "cuando-la-pelea-sigue-en-la-cama",
    title: "Cuando la pelea sigue en la cama",
    subtitle:
      "Cómo las discusiones no resueltas crean una barrera biológica que el cuerpo no puede ignorar.",
    excerpt:
      "Una discusión no resuelta deja una huella bioquímica que dura horas —a veces días. Reparar el vínculo no es solo un asunto emocional: es la condición fisiológica para que el deseo vuelva a aparecer.",
    author: "Lic. Viviana Baccarat",
    date: "2026-04-03",
    readTime: "5 min",
    image: "/servicios/ANORGASMIA.jpg",
    imageAlt:
      "Conflicto de pareja y su impacto en la vida sexual — terapia con Lic. Viviana Baccarat",
    content: [
      "Hay parejas que llegan a consulta sorprendidas: «Nos llevamos bien, nos queremos, pero el sexo dejó de funcionar». Al revisar el contexto aparecen peleas recurrentes que nunca terminan de cerrarse, temas que se evitan, desacuerdos que se acumulan. El cuerpo lleva cuenta de todo eso aunque la mente diga que «ya pasó».",
      "Una discusión no resuelta deja una huella bioquímica concreta. El cortisol y la adrenalina, liberados durante el conflicto, pueden permanecer elevados durante horas —y en algunos sistemas, días. El sistema nervioso interpreta a la pareja como una fuente de amenaza intermitente, y eso cambia todo el registro del encuentro íntimo.",
      "No alcanza con «reconciliarse» rápido y pasar al otro tema. El cuerpo necesita señales claras de reparación: contacto, reconocimiento del daño, disculpa cuando corresponde, un acuerdo sobre cómo hacer distinto la próxima vez. Sin eso, el sistema registra el conflicto como abierto, y el deseo no aparece porque el cuerpo no está dispuesto a bajar la guardia.",
      "Por eso la terapia de pareja y el abordaje sexológico no son territorios separados. La vida sexual no se resuelve solo «en la cama»: se resuelve en cómo la pareja procesa sus diferencias, cómo repara después de los conflictos y cómo construye la sensación de estar en el mismo equipo incluso cuando hay desacuerdos.",
      "Cuando ese trabajo se hace, muchas veces el deseo vuelve sin necesidad de intervenir directamente sobre el síntoma sexual. Porque lo que estaba bloqueando no era una dificultad técnica: era un sistema nervioso que percibía al otro como amenaza. Reparar el vínculo es, muchas veces, el camino más eficaz para recuperar la vida sexual.",
    ],
  },
];

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);
