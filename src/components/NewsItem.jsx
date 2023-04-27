import React from "react";

const NewsItem = ({ title, author, url, publishedAt, urlToImage }) => {
  return (
    <div className="news-app border-4 border-pink-500">
      <div className="news-item">
        <img className="h-96" src={urlToImage} alt="image" />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default NewsItem;
