import React from "react";
import Home from "./Home";
import Edit from "./Edit";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
  );
};

export default Layout;
