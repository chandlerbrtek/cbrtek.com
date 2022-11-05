import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Edu from "./pages/Edu";
import Work from "./pages/Work";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";


const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}/>
      <Route path='/education' element={<Edu/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Main;
