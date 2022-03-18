

import React from "react";
// We use card style to style our card component
import style from '../style/Card.module.css'

const CardComponent = ({ data }) => {


    return (
        <div className={style.news}>
          <img className={style.news_img} src={data.urlToImage} />
          <h1 className={style.news__title}>{data.title}</h1>
          <p className={style.news__desc}>{data.description}</p>
          <span className={style.news__author}>{data.author}</span> <br />
          <span className={style.news__published}>{data.publishedAt}</span>
          <span className={style.news__source}>{data.source.name}</span>
        </div>
      );
    }
 
export default CardComponent;