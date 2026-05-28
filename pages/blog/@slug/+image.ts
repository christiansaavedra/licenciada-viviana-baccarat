import type { Article } from "@/pages/blog/articlesData";

const BASE_URL = "https://sexualidadenfoco.com.ar";

export function image(pageContext: { data: Article }) {
  return `${BASE_URL}${pageContext.data.image}`;
}
