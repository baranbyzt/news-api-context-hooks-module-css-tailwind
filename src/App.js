import React from "react";
// out context 
import { NewsContextProvider } from "./contextStore/NewsContext";
// we are importing our router library
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
// out pages

import ErrorPage from "./pages/ErrorPage";
import CardPage from './pages/CardPage'
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
       <Route path='*' element={<ErrorPage/>} />
       </Routes>
     </Router>
    </NewsContextProvider>
  );
}

export default App;
