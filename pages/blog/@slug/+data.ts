import { render } from "vike/abort";
import { getArticleBySlug } from "@/pages/blog/articlesData";
import type { PageContextServer } from "vike/types";

export function data(pageContext: PageContextServer) {
  const slug = pageContext.routeParams.slug;
  const article = getArticleBySlug(slug);
  if (!article) {
    throw render(404, `Artículo "${slug}" no encontrado.`);
  }
  return article;
}
