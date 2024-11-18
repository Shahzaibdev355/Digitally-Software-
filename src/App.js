import React from "react";

import{ BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./components/Main";


function App() {
  return (
    <>
    {/* <ParallaxProvider> */}

    {/* <SmoothScrollbarWrapper> */}
  
      <BrowserRouter>



        <Routes>

          <Route path="/*" element={<Main/>}></Route>

        </Routes>
      
      </BrowserRouter>
      {/* </ParallaxProvider> */}

      {/* </SmoothScrollbarWrapper> */}
    </>
  );
}

export default App;
