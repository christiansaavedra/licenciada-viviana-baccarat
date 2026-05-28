import { useData } from "vike-react/useData";
import Article from "@/pages/blog/Article";
import type { Article as ArticleData } from "@/pages/blog/articlesData";

export default function Page() {
  const article = useData<ArticleData>();

  return <Article article={article} />;
}
