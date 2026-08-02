import { formatDate } from "@/common/formatDate";
import type { Article } from "@/pages/blog/articlesData";
import styles from "./ArticleCard.module.css";

type Props = {
  article: Article;
  titleAs?: "h2" | "h3";
};

const ArticleCard = ({ article, titleAs: TitleTag = "h2" }: Props) => {
  return (
    <article className={styles.card}>
      <a href={`/blog/${article.slug}`} className={styles.cardLink}>
        <div className={styles.imageWrapper}>
          <img
            src={article.image}
            alt={article.imageAlt}
            className={styles.cardImage}
            loading="lazy"
            decoding="async"
            width={1280}
            height={853}
          />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.meta}>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className={styles.dot}>·</span>
            <span>{article.readTime} de lectura</span>
          </div>
          <TitleTag className={styles.cardTitle}>{article.title}</TitleTag>
          <p className={styles.cardExcerpt}>{article.excerpt}</p>
          <span className={styles.readMore}>Leer artículo →</span>
        </div>
      </a>
    </article>
  );
};

export default ArticleCard;
