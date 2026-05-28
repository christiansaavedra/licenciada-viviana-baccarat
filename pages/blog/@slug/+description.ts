import type { Article } from "@/pages/blog/articlesData";

export function description(pageContext: { data: Article }) {
  return pageContext.data.metaDescription || pageContext.data.excerpt;
}
