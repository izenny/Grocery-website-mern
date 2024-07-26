import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddProduct from "./Addproduct";

const Categorymanagement = () => {
  return (
    <div className="w-full h-full">
      <div className=" w-full p-1 flex flex-wrap justify-center m-2">
        <Link to={"viewallproducts"}>
          <button className="bg-orange-500 rounded p-1 pl-2 pr-2 m-2 text-white hover:scale-105 transform duration-100 ease-in-out">
          View all Products
          </button>
        </Link>
        <Link to={"addnewproduct"}>
          <button className="bg-orange-500 rounded p-1 pl-2 pr-2 m-2 text-white hover:scale-105 transform duration-100 ease-in-out">
            Add New Product
          </button>
        </Link>
        <Link to={"updateproduct"}>
          <button className="bg-orange-500 rounded p-1 pl-2 pr-2 m-2 text-white hover:scale-105 transform duration-100 ease-in-out">
            Update Product
          </button>
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="addnewproduct" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default Categorymanagement;
