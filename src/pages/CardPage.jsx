
import CardComponent from "../components/CardComponent";

import React, { useContext,useEffect } from "react";
import {NewsContext} from '../contextStore/NewsContext'

const CardPage = () => {
    const { apple,
        tesla,usaNews,teachCrunch,
        wallStreetJournal
        ,pagesSelect,setpageSelect } = useContext(NewsContext);

var myData ;
if(pagesSelect == 'apple'){
    myData = apple;
}
else if (pagesSelect == 'tesla'){
    myData = tesla;
        }
        else if (pagesSelect == 'usenews'){
            myData = usaNews;
                }
                else if (pagesSelect == 'techcrunch'){
                    myData = teachCrunch;
                        }
                        else if (pagesSelect == 'wallstreet'){
                            myData = wallStreetJournal;
                                }
    return ( 
        <div className="wrapper_news">

              <h1 className="head__text">News App 👋</h1>
    
    <div className="all__news ">
      {myData
        ? myData.articles.map((news) => (
            <CardComponent data={news} key={news.url} />
          ))
        : "Loading"}
    </div>
        </div>
     );
}
 
export default CardPage;