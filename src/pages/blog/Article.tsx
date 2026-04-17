import { Link, useParams, Navigate } from "react-router-dom";
import { getArticleBySlug } from "./articlesData";
import styles from "./Article.module.css";

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

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/blog" className={styles.back}>
          ← Volver al blog
        </Link>

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
