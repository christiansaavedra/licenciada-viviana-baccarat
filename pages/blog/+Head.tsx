import { usePageContext } from "vike-react/usePageContext";
import { BASE_URL } from "../+config";

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
    },
  ],
};

export default function Head() {
  const pageContext = usePageContext();
  const path = pageContext.urlPathname.replace(/\/$/, "");
  if (path !== "/blog") return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
