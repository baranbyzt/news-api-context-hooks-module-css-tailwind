import React from "react";
// our context 
import { NewsContextProvider } from "./contextStore/NewsContext";
// we are importing our router library
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
// out pages
import ErrorPage from "./pages/ErrorPage";
import CardPage from './pages/CardPage'
import MainPage from './pages/MainPage'
// our general css file
import './style/GeneralStyle.css'

function App() {
  return (
    // here we get the data from the container api
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
