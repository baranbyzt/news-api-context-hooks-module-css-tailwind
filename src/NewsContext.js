import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

const Api_Apple = 'https://newsapi.org/v2/everything?q=apple&from=2022-03-04&to=2022-03-04&sortBy=popularity&apiKey=aca1994a2d7f4b9c9fc3a580219906c8';
const Api_Tesla = 'https://newsapi.org/v2/everything?q=tesla&from=2022-02-06&sortBy=publishedAt&apiKey=aca1994a2d7f4b9c9fc3a580219906c8';
const Api_UsaNews = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aca1994a2d7f4b9c9fc3a580219906c8';
const Api_TeachCrunch = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aca1994a2d7f4b9c9fc3a580219906c8';
const Api_WallStreetJournal = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=aca1994a2d7f4b9c9fc3a580219906c8';

export const NewsContextProvider = (props) => {
  
  const [apple,setApple] = useState(null)
  const [tesla,setTesla] = useState(null)
  const [usaNews,setUsaNews] = useState(null)
  const [teachCrunch,setTeachCrunch] = useState(null)
  const [wallStreetJournal,setWallStreetJournal] = useState(null)

  const fecthApple = () => {
    axios
      .get(
        Api_Apple
      )
      .then((response) => setApple(response.data))
      .catch((error) => console.log(error));
  }
  const fecthwall = () => {
    axios
      .get(
        Api_WallStreetJournal
      )
      .then((response) => setWallStreetJournal(response.data))
      .catch((error) => console.log(error));
  }
  const fecthTesla = () => {
    axios
      .get(
        Api_Tesla
      )
      .then((response) => setTesla(response.data))
      .catch((error) => console.log(error));
  }
  const fecthUsaNews = () => {
    axios
      .get(
        Api_UsaNews
      )
      .then((response) => setUsaNews(response.data))
      .catch((error) => console.log(error));
  }
  const fecthTeachCrunch = () => {
    axios
      .get(
        Api_TeachCrunch
      )
      .then((response) => setTeachCrunch(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fecthApple()
     fecthwall()
    fecthTesla()
      fecthUsaNews()
     fecthTeachCrunch()
  }, []);

  return (
    <NewsContext.Provider value={{ apple,tesla,wallStreetJournal,usaNews,teachCrunch }}>
      {props.children}
    </NewsContext.Provider>
  );
};
