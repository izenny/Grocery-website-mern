import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosLeaf } from "react-icons/io";
import { Link } from "react-router-dom";
const Adminbar = () => {
  return (
    <div className="shadow p-1">
      <div className="flex  flex-col md:flex-row h-[4rem] justify-between items-center">
        <div className="flex items-center w-1/6 justify-center h-full ml-4">
          <IoIosLeaf className="text-green-800 mr-1 text-3xl" />
          <Link to={"/"}>
            <h2 className="text-3xl text-orange-500 font-Merriweather">
              Grocery
            </h2>
          </Link>
        </div>
        <div className="flex-1 text-[.9em]  h-full">
          <ul className="flex h-full items-center justify-around font-serif">
            <Link to={"/usermanagement"}>
              <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
                User Management
              </li>
            </Link>
            <Link to={"/categorymanagement"}>
              <li className=" relative hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
                Category Management
              </li>
            </Link>

            <Link to={"/ordermanagement"}>
              <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
                Order Management
              </li>
            </Link>

            <Link to={"/inventorymanagement"}>
              <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
                Inventory Management
              </li>
            </Link>

            <Link to={"/discountsandoffers"}>
              <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
                Discounts and Offers
              </li>
            </Link>

            <Link to={"/reportsandanaltics"}>
              <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
                Reports and Analytics
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex justify-evenly items-center w-1/6 mr-4">
          <Link to={"/settings"}>
            {" "}
            <div className="text-2xl shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
              <AiOutlineSetting />
            </div>
          </Link>

          <Link to={"/customerservice"}>
            <div className="text-2xl shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
              <RiCustomerService2Line />
            </div>
          </Link>

          <Link to={"/profile"}>
            <div className="text-2xl shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
              <LuUser2 />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Adminbar;
