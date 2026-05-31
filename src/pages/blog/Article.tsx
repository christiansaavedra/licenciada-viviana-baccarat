import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import type { Article as ArticleData } from "./articlesData";
import styles from "./Article.module.css";

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

type Props = {
  article: ArticleData;
};

const Article = ({ article }: Props) => {
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
          </header>

          <figure className={styles.figure}>
            <img
              src={article.image}
              alt={article.imageAlt}
              className={styles.image}
              fetchPriority="high"
              decoding="async"
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
              <a href="/#contacto">solicitar una consulta</a>.
            </p>
          </footer>
          <hr className={styles.divider} />
          <aside className={styles.author_bio} aria-label="Sobre la autora">
            <p className={styles.author_bio_label}>Sobre la autora</p>
            <div className={styles.author_bio_content}>
              <img
                src="/viviana_baccarat_square.jpg"
                alt="Foto de la Lic. Viviana Baccarat, Psicóloga M.N. 56769"
                className={styles.author_bio_avatar}
                loading="lazy"
                decoding="async"
                width="96"
                height="96"
              />
              <div>
                <p className={styles.author_bio_name}>
                  <strong>Lic. Viviana Baccarat</strong>
                </p>
                <p className={styles.author_bio_creds}>
                  Psicóloga | Especialista en{" "}
                  <strong>Sexología Clínica y Terapia de Pareja</strong>
                  <br />
                  <span className={styles.author_bio_license}>M.N. 56769</span>
                </p>
                <a href="/#sobre-mi" className={styles.author_bio_link}>
                  Ver perfil profesional completo →
                </a>
              </div>
            </div>
          </aside>
        </article>
      </div>
    </div>
  );
};

export default Article;
