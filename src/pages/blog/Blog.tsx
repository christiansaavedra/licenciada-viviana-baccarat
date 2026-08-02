import { articles } from "./articlesData";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ArticleCard from "@/components/article-card/ArticleCard";
import styles from "./Blog.module.css";

const BLOG_CRUMBS = [
  { label: "Inicio", to: "/" },
  { label: "Blog" },
];

const Blog = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <Breadcrumbs crumbs={BLOG_CRUMBS} />
        <header className={styles.header}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Reflexiones, lecturas y herramientas sobre sexualidad, estrés y
            bienestar emocional.
          </p>
        </header>

        <div className={styles.grid}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
