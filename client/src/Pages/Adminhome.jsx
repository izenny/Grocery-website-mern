import React from "react";
import AddProduct from "../Admin/Addproduct";
import Adminbar from "../Admin/Adminbar";

import Orders from "../Admin/Orders";

import Coustomers from "../Admin/Coustomers";

import { Route, Routes } from "react-router-dom";
import Categorymanagement from "../Admin/Categorymanagement";

const Adminhome = () => {
  return (
    <div className="h-full ">
      <div className="flex flex-col h-full">
        <div className="">
          <Adminbar />
        </div>
        <div class="flex-1 overflow-y-scroll no-scrollbar">
          <Routes>
            <Route path="usermanagement" element={<Coustomers />} />
            <Route path="categorymanagement/*" element={<Categorymanagement />} />
            <Route path="ordermanagement" element={<Orders />} />
            <Route path="inventory" element={<AddProduct />} />
            <Route path="discountsandoffers" element={<AddProduct />} />
            <Route path="reportsandanaltics" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
