# CLAUDE.md

Este archivo contiene instrucciones y contexto para Claude Code en este proyecto.
Claude lo lee automáticamente al inicio de cada conversación.

---

## Descripción del proyecto

Este sitio pertenece a una psícologa sexóloga profesional de la salud mental y sexual habilitada en Argentina.
Ofrece atención psicológica y sexológica clínica de forma online para toda Argentina e internacionalmente, y presencial en Buenos Aires. El foco de su práctica es la intersección entre el estrés crónico,
la ansiedad y las disfunciones sexuales.

El objetivo del sitio es lograr que el SEO sea optimizado para que las personas puedan hallar el sitio facilmente. Una vez dentro del sitio, el objetivo es que el usuario complete el formulario de contacto, o bien clickee el botón de Whatsapp a fin de poder concretar una consulta con la profesional.

## Stack tecnológico

React, Vite, Vike, CSS Modules, hosting en Vercel

## Convenciones de código

- Los estilos van en CSS modules, uno por componente. Las classNames van en minusculas separadas por \_ (Ejemplo: styles.text_container)
- Existe un index.css principal que contiene las variables de CSS.
- Cada página debe tener su propio meta title (50-60 caracteres, keyword al inicio, formato "Beneficio/Tema: Subtema clarificador" o "Tema concreto | Marca), meta description (Reglas: 3-5 palabras, keyword principal, sin stop-words, relacionados al input que un usuario podria escribir en un buscador), y cualquier atributo relacionado al head para potenciar el SEO.
- Las imagenes deben tener texto alt.
- Las imagenes deben tener lazy loading, utilizando el img tag nativo de html: or lazy loading: <img loading="lazy" decoding="async" />. Para hero o imagenes visibles ni bien el usuario entra en la pagina, usaremos loading="eager" fetchpriority="high" so LCP doesn't regress, which would hurt SEO; (2) always set width and height attributes to prevent layout shift (CLS).
- Agregar <strong> tags donde sea necesario, sin abusra innecesariamente, con el proposito que sea para optimizar SEO.

## Comandos útiles

<!-- Ej:
- `npm run dev` — inicia el servidor de desarrollo
- `npm run build` — genera el build de producción
-->

## Preferencias de trabajo con Claude

<!-- Cómo preferís que Claude te asista:
- Idioma de respuestas
- Nivel de detalle en las explicaciones
- Qué evitar hacer
-->

## Notas adicionales

- Hay una cuenta en Google Search Console y Google Analytics para este sitio. Es muy importante ir optimizando el sitio para aumentar el SEO y la expocisión en la web.
