import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Footer from "../Components/Footer";
import Categories from "./Categories";

const Userhome = () => {
  return (
    <div className="h-full ">
      <div className="flex flex-col ">
        <div className="">
          <Navbar />
        </div>
        <div class="flex-1 overflow-y-scroll no-scrollbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories/>}/>
          </Routes>
        </div>
        <div>
        <Footer/>
      </div>
      </div>
    </div>
  );
};

export default Userhome;
