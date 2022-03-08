import image from '../assets/404.png'

import style from '../style/MainPage.module.css'
import React, { useContext,useEffect } from "react";
import {NewsContext} from '../contextStore/NewsContext'
import { useNavigate,Link} from "react-router-dom";



const MainPage = () => {

    const { apple,
        tesla,usaNews,teachCrunch,
        wallStreetJournal
        ,pagesSelect,setpageSelect } = useContext(NewsContext);
        let navigate = useNavigate();

const MainApplebtn = async () => {
  await setpageSelect("apple")
     navigate('/cards')
}
const MainTeslabtn =async () => {
    await setpageSelect("tesla")
     navigate('/cards')
}
const MainUsaNewsbtn =async () => {
    await setpageSelect("usenews")
     navigate('/cards')
}
const MainTechCrunchbtn =async () => {
    await setpageSelect("techcrunch")
     navigate('/cards')
}
const MainWallStreetJournalbtn = async() => {
    await setpageSelect("wallstreet")
     navigate('/cards')
}
 


    return ( 
       
   <div className={style.bigwrapper}>
       <h1 className={style.text}>Select Your News</h1>
        <div className={style.wrapper}>
           
           <div className={style.classinc}>
           <div className={style.inner_wrapp}>
           <img src={apple?.articles[0]?.urlToImage} onClick={MainApplebtn} className={style.box_1 } />
           <img src={tesla?.articles[0]?.urlToImage} onClick={MainTeslabtn} className={style.box_2} />
           <img src={usaNews?.articles[0]?.urlToImage} onClick={MainUsaNewsbtn} className={style.box_5} />
           <img src={teachCrunch?.articles[0]?.urlToImage} onClick={MainTechCrunchbtn} className={style.box_5} />
                   </div>
           <img src={wallStreetJournal?.articles[0]?.urlToImage} onClick={MainWallStreetJournalbtn} className={style.box_3} />
          
                  
           </div>
          
                  </div></div>
     );
}
 
export default MainPage;