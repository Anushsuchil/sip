import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
// import Breadcrumbs from './components/Breadcrumbs';

function App(){
  return(
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App
