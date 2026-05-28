import { articles } from "@/pages/blog/articlesData";

export function onBeforePrerenderStart() {
  return articles.map((article) => `/blog/${article.slug}`);
}
