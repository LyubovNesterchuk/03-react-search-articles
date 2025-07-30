import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import type { Article } from "../../types/Article";
import { fetchArticles } from "../../services/articleService";
import Loader from "../Loader/Loader";
import Title from "../Title/Title";
import ArticleList from "../ArticleList/ArticleList";


export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setArticles([]);
      setIsLoading(true);
      setIsError(false);
      const data = await fetchArticles(topic);
      setArticles(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Title/>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <Loader/>}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}