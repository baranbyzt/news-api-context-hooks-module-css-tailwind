import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";


function News(props) {
  const { apple,
    tesla,usaNews,teachCrunch,
    wallStreetJournal } = useContext(NewsContext);

  return (
  <>
    <div >
      <h1 className="head__text">News App 👋</h1>
    
      <div className="all__news a5">
        {teachCrunch
          ? teachCrunch.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>

      <div className="all__news a4">
        {usaNews
          ? usaNews.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    
      <div className="all__news a2">
        {wallStreetJournal
          ? wallStreetJournal.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>

      <div className="all__news a3">
        {tesla
          ? tesla.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    
      <div className="all__news a1">
        {apple
          ? apple.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>

    </div>

  </>
  );
}

export default News;


/*

    <div className="all__news a3">
        {apple
          ? apple.articles.map((news) => (
              <NewsArticle apple={news} key={news.url} />
            ))
          : "Loading"}
      </div>

      <div className="all__news a4">
        {apple
          ? apple.articles.map((news) => (
              <NewsArticle apple={news} key={news.url} />
            ))
          : "Loading"}
      </div>

      <div className="all__news a5">
        {apple
          ? apple.articles.map((news) => (
              <NewsArticle apple={news} key={news.url} />
            ))
          : "Loading"}
      </div>

*/