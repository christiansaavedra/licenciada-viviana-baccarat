import { usePageContext } from "vike-react/usePageContext";
import { faqs } from "@/components/page-sections/home/faq/faqData";
import { BASE_URL } from "./+config";

const GA_ID = "G-J2PRKE208R";

const BUSINESS_ID = `${BASE_URL}/#consultorio`;
const PERSON_ID = `${BASE_URL}/#viviana-baccarat`;

const GOOGLE_BUSINESS_URL = "https://maps.app.goo.gl/8Nbf6bJpHzodEEMLA";

const SAME_AS = [
  "https://www.psychologytoday.com/ar/psicologos/viviana-baccarat-sexologa-buenos-aires-ba/1006195",
  "https://psicologiaymente.com/psicologos/2104373/viviana-baccarat",
  "https://www.linkedin.com/in/viviana-b-4324b61b9",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "@id": BUSINESS_ID,
  name: "Sexualidad en Foco",
  alternateName: "Lic. Viviana Baccarat — Psicóloga y Sexóloga Clínica",
  description:
    "Psicoterapia sexual individual y de pareja. Tratamiento de ansiedad de rendimiento, disfunciones sexuales y estrés. Atención presencial en Buenos Aires y online.",
  url: `${BASE_URL}/`,
  telephone: "+5491155936542",
  email: "licenciadavivianabaccarat@gmail.com",
  image: `${BASE_URL}/og-image.jpg`,
  priceRange: "$$",
  founder: { "@id": PERSON_ID },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ciudad Autónoma de Buenos Aires" },
    "Online",
  ],
  serviceType: [
    "Terapia Sexual",
    "Terapia Sexual de Pareja",
    "Gestión del Estrés y Ansiedad",
    "Psicoterapia Online",
  ],
  hasMap: GOOGLE_BUSINESS_URL,
  sameAs: [...SAME_AS, GOOGLE_BUSINESS_URL],
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
      name: "Terapia Sexual de Pareja",
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
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
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
  sameAs: SAME_AS,
  worksFor: { "@id": BUSINESS_ID },
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
      name: "Diplomatura en Abordaje Integrativo del Estrés Crónico: regulación del sistema nervioso autónomo y eje HPA",
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
    "Terapia Sexual de Pareja",
    "Gestión del Estrés",
    "Ansiedad de Desempeño",
    "Sistema Nervioso Autónomo",
  ],
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
var internal = false;
try {
  if (location.hostname !== '${new URL(BASE_URL).hostname}' || /(^|\\.)vercel\\.com$/.test(document.referrer ? new URL(document.referrer).hostname : '')) {
    localStorage.setItem('ga_internal', '1');
  }
  internal = localStorage.getItem('ga_internal') === '1';
} catch (e) {}
gtag('config', '${GA_ID}', internal ? { traffic_type: 'internal' } : {});`,
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
