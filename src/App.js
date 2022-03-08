import React from "react";
// out context 
import { NewsContextProvider } from "./contextStore/NewsContext";
// we are importing our router library
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
// out pages
import News from "./contextStore/News";
import ErrorPage from "./pages/ErrorPage";
import CardPage from './pages/CardPage'
import DetailPage from './pages/DetailPage'
import MainPage from './pages/MainPage'

// out general css files
import './style/GeneralStyle.css'

function App() {
  return (
    <NewsContextProvider>
     <Router>
       <Routes>
       <Route path='/' element={<MainPage/>} />
       <Route path='/cards' element={<CardPage/>} />
       <Route path='/detail' element={<DetailPage/>} />
       <Route path='*' element={<ErrorPage/>} />
       <Route path='/news' element={<News/>} />
       </Routes>
     </Router>
    </NewsContextProvider>
  );
}

export default App;


/*

       <Route path='/' element={<News/>} />



*/