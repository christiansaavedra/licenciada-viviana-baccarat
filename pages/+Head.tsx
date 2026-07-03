import { usePageContext } from "vike-react/usePageContext";
import { faqs } from "@/components/page-sections/home/faq/faqData";
import { BASE_URL } from "./+config";

const GA_ID = "G-J2PRKE208R";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lic. Viviana Baccarat — Psicóloga y Sexóloga Clínica",
  description:
    "Psicoterapia sexual y gestión del estrés. Tratamiento de disfunciones sexuales, terapia de pareja y abordaje del estrés crónico. Atención online e internacional.",
  url: `${BASE_URL}/`,
  email: "licenciadavivianabaccarat@gmail.com",
  image: `${BASE_URL}/og-image.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belgrano",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.5617,
    longitude: -58.4564,
  },
  areaServed: [
    { "@type": "Country", name: "Argentina" },
    {
      "@type": "AdministrativeArea",
      name: "Internacional — sesiones online por videollamada",
    },
  ],
  serviceType: [
    "Terapia Sexual",
    "Terapia de Pareja",
    "Gestión del Estrés y Ansiedad",
    "Psicoterapia Online",
  ],
  sameAs: [
    "https://calendly.com/licenciadavivianabaccarat/sesion-con-la-lic-viviana-baccarat",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#viviana-baccarat`,
  name: "Viviana Baccarat",
  honorificPrefix: "Lic.",
  jobTitle: "Psicóloga, Sexóloga Clínica y Especialista en Gestión del Estrés",
  description:
    "Psicóloga con Matrícula Nacional N° 56769. Especialista en terapia psicosexual, disfunciones sexuales y abordaje del estrés crónico. Atención online e internacional.",
  url: `${BASE_URL}/`,
  mainEntityOfPage: `${BASE_URL}/`,
  email: "licenciadavivianabaccarat@gmail.com",
  image: `${BASE_URL}/viviana_baccarat_square.jpg`,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "M.N.",
    value: "56769",
  },
  sameAs: ["https://www.psychologytoday.com/profile/1006195"],
  worksFor: {
    "@type": "LocalBusiness",
    name: "Consultorio Lic. Viviana Baccarat",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belgrano",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Licenciatura en Psicología",
      credentialCategory: "degree",
      recognizedBy: {
        "@type": "Organization",
        name: "Universidad de Ciencias Empresariales y Sociales (UCES)",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Diplomatura en Sexualidad y Calidad de Vida",
      credentialCategory: "postgraduate",
      recognizedBy: {
        "@type": "Organization",
        name: "UCES — auspiciada por la Sociedad Latinoamericana de Medicina Sexual (SLAMS)",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Diplomatura Internacional en Salud Sexual",
      credentialCategory: "postgraduate",
      recognizedBy: {
        "@type": "Organization",
        name: "Asociación Argentina de Sexología y Educación Sexual (AASES)",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Especialización en Abordaje Integrativo del Estrés Crónico",
      credentialCategory: "postgraduate",
      recognizedBy: {
        "@type": "Organization",
        name: "Facultad de Medicina Integrativa Regenera, Barcelona — Western Europe University",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Posgrado en Psicoanálisis",
      credentialCategory: "postgraduate",
      recognizedBy: {
        "@type": "Organization",
        name: "Hospital Dr. Arturo Ameghino, Ministerio de Salud",
      },
    },
  ],
  knowsAbout: [
    "Terapia Sexual",
    "Disfunciones Sexuales",
    "Eyaculación Precoz",
    "Disfunción Eréctil",
    "Vaginismo",
    "Dispareunia",
    "Anorgasmia",
    "Falta de Deseo Sexual",
    "Terapia de Pareja",
    "Gestión del Estrés",
    "Ansiedad de Desempeño",
    "Sistema Nervioso Autónomo",
  ],
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Lic. Viviana Baccarat — Terapia Sexual y Psicología",
  description:
    "Consultorio de psicoterapia sexual y gestión del estrés. Especialista en disfunciones sexuales, terapia de pareja y ansiedad. Sesiones online e internacionales.",
  url: `${BASE_URL}/`,
  medicalSpecialty: ["MentalHealth", "SexualHealthMedicine"],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Terapia Sexual Individual",
      description:
        "Abordaje de disfunciones sexuales: eyaculación precoz, disfunción eréctil, vaginismo, dispareunia, anorgasmia y falta de deseo.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Terapia de Pareja",
      description:
        "Trabajo terapéutico sobre comunicación, intimidad y vida sexual en pareja.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Gestión del Estrés y Ansiedad",
      description:
        "Regulación del sistema nervioso autónomo y abordaje del estrés crónico con impacto en la sexualidad.",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belgrano",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
};

const isBlogArticlePath = (pathname: string) =>
  /^\/blog\/[^/]+\/?$/.test(pathname);

const isHomePath = (pathname: string) => pathname === "/" || pathname === "";

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/`,
  url: `${BASE_URL}/`,
  name: "Sobre mí — Lic. Viviana Baccarat",
  description:
    "Perfil profesional de la Lic. Viviana Baccarat (M.N. 56769): formación, credenciales, áreas de especialización y enfoque clínico.",
  inLanguage: "es-AR",
  mainEntity: { "@id": `${BASE_URL}/#viviana-baccarat` },
  about: { "@id": `${BASE_URL}/#viviana-baccarat` },
};

const stripMarkdown = (text: string) => text.replace(/\*\*/g, "");

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: stripMarkdown(faq.answer),
    },
  })),
};

export default function Head() {
  const pageContext = usePageContext();
  const canonical = `${BASE_URL}${pageContext.urlPathname}`;
  const ogType = isBlogArticlePath(pageContext.urlPathname)
    ? "article"
    : "website";
  const isHome = isHomePath(pageContext.urlPathname);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
        }}
      />

      <link rel="shortcut icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <meta name="theme-color" content="#ff6b35" />
      <meta name="msapplication-TileColor" content="#ff6b35" />

      <meta name="author" content="Lic. Viviana Baccarat" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Lic. Viviana Baccarat" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
      {isHome && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />
      )}
      {isHome && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
