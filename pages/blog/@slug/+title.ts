import type { Article } from "@/pages/blog/articlesData";

export function title(pageContext: { data: Article }) {
  return pageContext.data.metaTitle || pageContext.data.title;
}
