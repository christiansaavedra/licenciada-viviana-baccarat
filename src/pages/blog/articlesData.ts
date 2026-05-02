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
    image: "/blog/CORTISOL_HORIZONTAL.jpg",
    imageAlt:
      "Foto de interruptor: falta de deseo sexual, abordaje clínico por Lic. Viviana Baccarat, sexóloga clínica.",
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
    image: "/blog/DOPAMINA_HORIZONTAL.jpg",
    imageAlt:
      "Imagen de rostro y luz: adicción a la pornografía — consulta sexológica con Lic. Viviana Baccarat",
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
    image: "/blog/RELOJ_HORIZONTAL.jpg",
    imageAlt:
      "Imagen de reloj: estrés y disfunción eréctil — terapia sexual Lic. Viviana Baccarat",
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
    image: "/blog/AFRODISIACO_HORZONTAL.jpg",
    imageAlt:
      "Foto de nudo Ansiedad de desempeño, miedo al fracaso y ansiedad sexual, Lic. Viviana Baccarat, sexóloga clínica",
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
    image: "/blog/VELAS_HORIZONTAL.jpg",
    imageAlt:
      "Imagen de vela: ansiedad sexual y falta de deseo, Lic. Viviana Baccarat, sexóloga clínica.",
    content: [
      "Vivimos en una época en la que el estrés se ha naturalizado. Dormir poco, responder mensajes a cualquier hora, sostener múltiples roles y exigencias: todo eso deja marcas en el cuerpo que, tarde o temprano, aparecen en la esfera íntima. El deseo se apaga, la respuesta sexual se vuelve inconsistente, y muchas personas llegan a consulta con la sensación de que algo está fallando en ellas, cuando en realidad lo que falla es el contexto en el que intentan desear.",
      "Desde la perspectiva de la biología del estrés, el sistema nervioso autónomo tiene dos modos principales: uno de activación (asociado al rendimiento, la alerta y la supervivencia) y otro de recuperación (vinculado al descanso, la digestión y también a la sexualidad). Cuando el estrés se vuelve crónico, el cuerpo permanece en modo de alerta la mayor parte del tiempo, y el acceso al modo de recuperación se reduce. La sexualidad requiere presencia, entrega, conexión con las sensaciones — todas funciones del segundo modo.",
      "Por eso no alcanza con «querer» desear: el deseo necesita un estado fisiológico que lo habilite. Si el cuerpo está en alerta, el deseo no encuentra lugar. Y si el deseo aparece pero se acompaña de ansiedad de desempeño, la respuesta también se ve afectada: dificultades de erección, anorgasmia, eyaculación precoz, vaginismo, dolor. El síntoma no es el problema en sí, sino la expresión de un sistema que necesita ser regulado.",
      "En el trabajo terapéutico, abordamos esta conexión desde dos frentes simultáneos. Por un lado, identificamos qué sostiene la activación —exigencias, pensamientos, ritmos, vínculos— y trabajamos sobre la regulación emocional. Por otro, intervenimos sobre la experiencia sexual específica, buscando reentrenar la respuesta del cuerpo sin la presión del rendimiento.",
      "La buena noticia es que el sistema nervioso es plástico: responde a la intervención. Con las herramientas adecuadas y un tiempo de trabajo sostenido, es posible recuperar el registro del placer, bajar la ansiedad y restablecer una sexualidad que se vive desde el disfrute y no desde la exigencia. Si te reconocés en algo de lo que leíste, no estás solo/a. Es un motivo de consulta frecuente y tiene abordaje.",
    ],
  },
  {
    slug: "el-cuerpo-tiene-memoria",
    title:
      "El cuerpo tiene memoria: Por qué la seguridad interna es la llave del placer",
    subtitle: 'El "freno" invisible: El Nervio Vago',
    excerpt:
      "Tu cuerpo tiene memoria de cada vez que no se sintió seguro. El nervio vago es el guardián que decide si tu sexualidad puede fluir o si debe protegerte. Cuando recuperas esa seguridad interna, el deseo vuelve naturalmente.",
    author: "Lic. Viviana Baccarat",
    date: "2026-04-08",
    readTime: "5 min",
    image: "/blog/NERVIO_VAGO_HORIZONTAL.jpg",
    imageAlt:
      "Foto: Ondas de agua: Entrenar la calma: el gimnasio del sistema nervioso — Lic. Viviana Baccarat",
    content: [
      "Muchas veces, en la consulta, escucho una frase recurrente: «Mi cabeza tiene ganas, pero mi cuerpo no me acompaña». Sentís un bloqueo, una tensión que impide la entrega o una desconexión que aparece justo en el momento del encuentro.",
      "La ciencia actual nos explica que esto no es falta de voluntad ni de amor: es tu sistema nervioso tratando de protegerte.",
      "Imaginate que tenés un interruptor interno que decide si tu cuerpo está en modo «defensa» o en modo «conexión». Ese interruptor es el nervio vago. Cuando el estrés, el cansancio o el miedo al desempeño se vuelven crónicos, el cuerpo se pone «en guardia». En ese estado de alerta, la respuesta sexual se apaga porque la biología prioriza la supervivencia sobre el disfrute. Es así como aparecen las dificultades con la erección, la falta de lubricación o la tensión muscular dolorosa.",
      "Si bien la terapia ayuda a entender el «porqué», a veces la mente comprende pero el cuerpo sigue rígido. Por eso, integramos la práctica de Osteo Tai, una técnica que fusiona la precisión de la osteopatía con la fluidez rítmica del masaje tailandés.",
      "A diferencia de un masaje convencional, aquí no solo trabajamos sobre el tejido; buscamos enviarle señales claras a tu sistema nervioso de que está a salvo. Al trabajar profundamente sobre las fascias y el ritmo respiratorio, logramos desactivar la alarma: reducimos los niveles de cortisol para que el cuerpo baje la guardia.",
      "También recuperamos la sensibilidad: volvés a registrar sensaciones placenteras que el estrés había «anestesiado». Y desbloqueamos la pelvis: liberamos tensiones crónicas en la zona del diafragma y el suelo pélvico, donde solemos alojar las emociones no procesadas.",
      "Cambiar la mirada es fundamental: el placer no es algo que debas «lograr», sino algo que ocurre cuando el cuerpo se siente seguro. Cuando el nervio vago recupera su tono, el deseo deja de ser una tarea pendiente y vuelve a ser lo que siempre debió ser: un proceso natural, fluido y presente.",
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
    image: "/blog/PIEDRAS_HORIZONTAL.jpg",
    imageAlt:
      "Piedras en equilibrio: tratamiento de eyaculación precoz, Lic. Viviana Baccarat, sexóloga clínica.",
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
    image: "/blog/PELEA_CAMA_HORIZONTAL.jpg",
    imageAlt:
      "Foto de pareja: crisis de pareja y falta de sexo — terapia con Lic. Viviana Baccarat",
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
