import { Routes, Route } from "react-router-dom";

import "../assets/css/style.css";

import Home from "./Home";
import LAgence from "./LAgence";
import Contact from "./Contact";


const Main = () => {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LAgence" element={<LAgence />} />
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
     
    </>
  );
};

export default Main;
