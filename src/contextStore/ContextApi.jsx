
import React,{useContext,useState,useEffect, createContext} from "react";
import axios from "axios";
import App from "../App";

const Api_Apple = 'https://newsapi.org/v2/everything?q=apple&from=2022-03-04&to=2022-03-04&sortBy=popularity&apiKey=aca1994a2d7f4b9c9fc3a580219906c8';
const Api_Tesla = 'https://newsapi.org/v2/everything?q=tesla&from=2022-02-06&sortBy=publishedAt&apiKey=aca1994a2d7f4b9c9fc3a580219906c8';
const Api_UsaNews = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aca1994a2d7f4b9c9fc3a580219906c8';
const Api_TeachCrunch = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aca1994a2d7f4b9c9fc3a580219906c8';
const Api_WallStreetJournal = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=aca1994a2d7f4b9c9fc3a580219906c8';

export const MainContext = createContext();


const ContextApi = () => {

    const [apple,setApple] = useState(null)
    const [tesla,setTesla] = useState(null)
    const [usaNews,setUsaNews] = useState(null)
    const [teachCrunch,setTeachCrunch] = useState(null)
    const [wallStreetJournal,setWallStreetJournal] = useState(null)

    const fetchApple = async () => {
        const response = await axios.get(Api_Apple);
        setApple(response.data.articles)
    }
    const fetchTesla = async () => {
        const response = await axios.get(Api_Tesla);
        setTesla(response.data.articles)
    }
    const fetchUsaNews = async () => {
        const response = await axios.get(Api_UsaNews);
        setUsaNews(response.data.articles)
    }
    const fetchTeachCrunch = async () => {
        const response = await axios.get(Api_TeachCrunch);
        setTeachCrunch(response.data.articles)
    }
    const fetchWalolStreetJournal = async () => {
        const response = await axios.get(Api_WallStreetJournal);
        setWallStreetJournal(response.data.articles)
    }



    return ( 
      <MainContext.Provider
      value={{
          fetchApple,
          fetchTesla,
          fetchUsaNews,
          fetchTeachCrunch,
          fetchWalolStreetJournal,
          apple,
          tesla,
          usaNews,
          teachCrunch,
          wallStreetJournal
      }}
      >

<App/>

      </MainContext.Provider>
     );
}
 
export default ContextApi;
