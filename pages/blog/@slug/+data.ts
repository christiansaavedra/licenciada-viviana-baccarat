import { render, redirect } from "vike/abort";
import { articles, getArticleBySlug } from "@/pages/blog/articlesData";
import type { PageContextServer } from "vike/types";

export function data(pageContext: PageContextServer) {
  const slug = pageContext.routeParams.slug;
  const article = getArticleBySlug(slug);

  if (!article) {
    // Check if it's an old slug — redirect permanently to the new one
    const moved = articles.find((a) => a.oldSlug === slug);
    if (moved) {
      throw redirect(`/blog/${moved.slug}`, 301);
    }
    throw render(404, `Artículo "${slug}" no encontrado.`);
  }

  return article;
}
