import { Link } from "react-router-dom";
import { articles } from "./articlesData";
import styles from "./Blog.module.css";

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Blog = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Reflexiones, lecturas y herramientas sobre sexualidad, estrés y
            bienestar emocional.
          </p>
        </header>

        <div className={styles.grid}>
          {articles.map((article) => (
            <article key={article.slug} className={styles.card}>
              <Link to={`/blog/${article.slug}`} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.meta}>
                    <time dateTime={article.date}>
                      {formatDate(article.date)}
                    </time>
                    <span className={styles.dot}>·</span>
                    <span>{article.readTime} de lectura</span>
                  </div>
                  <h2 className={styles.cardTitle}>{article.title}</h2>
                  <p className={styles.cardExcerpt}>{article.excerpt}</p>
                  <span className={styles.readMore}>Leer artículo →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
