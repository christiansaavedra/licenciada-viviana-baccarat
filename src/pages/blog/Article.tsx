import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ArticleCard from "@/components/article-card/ArticleCard";
import { trackEvent } from "@/common/analytics";
import { formatDate } from "@/common/formatDate";
import { getArticleBySlug, type Article as ArticleData } from "./articlesData";
import styles from "./Article.module.css";

// Convierte enlaces con sintaxis [texto](url) en <a> reales.
// El contenido viene siempre de articlesData.ts (fuente estática del repo), nunca de input externo.
const renderParagraph = (text: string, keyPrefix: string) => {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a key={`${keyPrefix}-${i}`} href={match[2]} className={styles.inline_link}>
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
    i++;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
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

  const relatedArticles = article.relatedSlugs
    .map(getArticleBySlug)
    .filter((a): a is ArticleData => a !== undefined);

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
              width={1280}
              height={853}
            />
          </figure>

          <div className={styles.content}>
            {article.content.map((block, i) => {
              if (typeof block === "string") {
                return (
                  <p key={i} className={styles.paragraph}>
                    {renderParagraph(block, `p-${i}`)}
                  </p>
                );
              }
              if ("heading" in block) {
                return (
                  <h2 key={i} className={styles.heading}>
                    {block.heading}
                  </h2>
                );
              }
              return (
                <aside key={i} className={styles.mid_cta}>
                  <p>{block.cta}</p>
                  <a
                    href="/#contacto"
                    onClick={() =>
                      trackEvent("generate_lead_click", {
                        method: "article_mid_cta",
                        article_slug: article.slug,
                      })
                    }
                  >
                    Solicitar una consulta →
                  </a>
                </aside>
              );
            })}
          </div>

          <footer className={styles.footer}>
            <p className={styles.cta}>
              Si lo leído te resonó y querés trabajarlo en terapia, podés{" "}
              <a
                href="/#contacto"
                onClick={() =>
                  trackEvent("generate_lead_click", {
                    method: "article_footer_cta",
                    article_slug: article.slug,
                  })
                }
              >
                solicitar una consulta
              </a>
              .
            </p>
          </footer>
          <hr className={styles.divider} />
          <aside className={styles.author_bio} aria-label="Sobre la autora">
            <p className={styles.author_bio_label}>Sobre la autora</p>
            <div className={styles.author_bio_content}>
              <picture>
                <source srcSet="/viviana_baccarat_square.webp" type="image/webp" />
                <img
                  src="/viviana_baccarat_square.jpg"
                  alt="Foto de la Lic. Viviana Baccarat, Psicóloga M.N. 56769"
                  className={styles.author_bio_avatar}
                  loading="lazy"
                  decoding="async"
                  width="96"
                  height="96"
                />
              </picture>
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

          {relatedArticles.length > 0 && (
            <section className={styles.related} aria-label="Seguir leyendo">
              <h2 className={styles.related_title}>Seguir leyendo</h2>
              <div className={styles.related_grid}>
                {relatedArticles.map((related) => (
                  <ArticleCard
                    key={related.slug}
                    article={related}
                    titleAs="h3"
                  />
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </div>
  );
};

export default Article;
