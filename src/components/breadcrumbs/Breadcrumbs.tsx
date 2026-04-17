import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

const BASE_URL = "https://licenciada-viviana-baccarat-o764.vercel.app";

export type Crumb = {
  label: string;
  to?: string; // sin `to` = item activo (último)
};

type Props = {
  crumbs: Crumb[];
};

const Breadcrumbs = ({ crumbs }: Props) => {
  // Inyectar JSON-LD BreadcrumbList
  useEffect(() => {
    const id = "breadcrumb-jsonld";
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.label,
        ...(crumb.to ? { item: `${BASE_URL}${crumb.to}` } : {}),
      })),
    };

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [crumbs]);

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.list}>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className={styles.item}>
              {!isLast && crumb.to ? (
                <>
                  <Link to={crumb.to} className={styles.link}>
                    {crumb.label}
                  </Link>
                  <span className={styles.sep} aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <span className={styles.current} aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
