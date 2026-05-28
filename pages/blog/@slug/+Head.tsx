import { usePageContext } from "vike-react/usePageContext";
import type { Article } from "@/pages/blog/articlesData";

const BASE_URL = "https://sexualidadenfoco.com.ar";

export default function Head() {
  const pageContext = usePageContext();
  const article = (pageContext as { data: Article }).data;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription || article.excerpt,
    image: `${BASE_URL}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Viviana Baccarat",
      url: BASE_URL,
      jobTitle: "Psicóloga y Sexóloga Clínica",
    },
    publisher: {
      "@type": "Person",
      name: "Lic. Viviana Baccarat",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${article.slug}`,
    },
    inLanguage: "es-AR",
    keywords: article.title
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 4)
      .join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
