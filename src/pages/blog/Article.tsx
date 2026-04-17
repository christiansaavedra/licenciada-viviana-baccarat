import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getArticleBySlug } from "./articlesData";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import styles from "./Article.module.css";

const BASE_URL = "https://licenciada-viviana-baccarat-o764.vercel.app";

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  // Article JSON-LD
  useEffect(() => {
    if (!article) return;
    const id = "article-jsonld";
    document.getElementById(id)?.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
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

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [article]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const crumbs = [
    { label: "Inicio", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: article.title },
  ];

  return (
    <div className={styles.page}>
      <div className="container">
        <Breadcrumbs crumbs={crumbs} />

        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span className={styles.dot}>·</span>
              <span>{article.readTime} de lectura</span>
            </div>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.subtitle}>{article.subtitle}</p>
            <p className={styles.author}>Por {article.author}</p>
          </header>

          <figure className={styles.figure}>
            <img
              src={article.image}
              alt={article.imageAlt}
              className={styles.image}
            />
          </figure>

          <div className={styles.content}>
            {article.content.map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <footer className={styles.footer}>
            <p className={styles.cta}>
              Si lo leído te resonó y querés trabajarlo en terapia, podés{" "}
              <Link to="/#contacto">solicitar una consulta</Link>.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Article;
