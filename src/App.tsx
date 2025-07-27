// src/components/App.tsx
import { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm/SearchForm";
import type { Article } from "./types/Article";
import ArticleList from "./ArticleList/ArticleList";

interface ArticlesHttpResponse {
  hits: Article[];
}

export default function App() {

  
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
 
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await axios.get<ArticlesHttpResponse>(
        `https://hn.algolia.com/api/v1/search?query=${topic}`
      );
      console.log(response.data);
      setArticles(response.data.hits);

    } catch {
        setIsError(true);

    } finally {
        setIsLoading(false);
    }
  };
  
return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <p>Loading data, please wait...</p>} 
      
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
    
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
