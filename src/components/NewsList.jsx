import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem.jsx";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=football&apiKey=e8595e4b47e84734a68dd77c856a6b63`
      );
      setArticles(response.data.articles.slice(0, 3));
    };

    getArticles();
  }, []);
  console.log(articles);
  return (
    <div className="flex">
      {articles.map((article, key) => {
        return (
          <NewsItem
            key={key}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
