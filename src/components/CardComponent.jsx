import React from "react";
import '../style/GeneralStyle.css'

const CardComponent = ({ data }) => {


    return (
        <div className="news">
          <img className="news_img" src={data.urlToImage} />
          <h1 className="news__title">{data.title}</h1>
          <p className="news__desc">{data.description}</p>
          <span className="news__author">{data.author}</span> <br />
          <span className="news__published">{data.publishedAt}</span>
          <span className="news__source">{data.source.name}</span>
        </div>
      );
    }
 
export default CardComponent;