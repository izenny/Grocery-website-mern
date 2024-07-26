import React from "react";

const Categorybar = () => {
  return (
    <div className="h-full w-full">
      <div className="m-1 h-full flex flex-col justify-center">
      <div className=" w-full flex justify-center p-3 text-lg font-Merriweather m-1 shadow rounded-xl hover:scale-105 transform cursor-pointer ease-in-out hover:bg-orange-400 duration-200 hover:text-white items-center ">
          <h2>All</h2>
        </div>
        <div className=" w-full flex justify-center p-3 text-lg font-Merriweather m-1 shadow rounded-xl hover:scale-105 transform cursor-pointer ease-in-out hover:bg-orange-400 duration-200 hover:text-white items-center ">
          <h2>Vegitables</h2>
        </div>
        <div className=" w-full flex justify-center p-3 text-lg font-Merriweather m-1 shadow rounded-xl hover:scale-105 transform cursor-pointer ease-in-out hover:bg-orange-400 duration-200 hover:text-white items-center ">
          <h2>Fruits</h2>
        </div>
        <div className=" w-full flex justify-center p-3 text-lg font-Merriweather m-1 shadow rounded-xl hover:scale-105 transform cursor-pointer ease-in-out hover:bg-orange-400 duration-200 hover:text-white items-center ">
          <h2>Dairy & Eggs</h2>
        </div>
        <div className=" w-full flex justify-center p-3 text-lg font-Merriweather m-1 shadow rounded-xl hover:scale-105 transform cursor-pointer ease-in-out hover:bg-orange-400 duration-200 hover:text-white items-center ">
          <h2>Meat & Seafood</h2>
        </div>
        <div className=" w-full flex justify-center p-3 text-lg font-Merriweather m-1 shadow rounded-xl hover:scale-105 transform cursor-pointer ease-in-out hover:bg-orange-400 duration-200 hover:text-white items-center ">
          <h2>Bakery & Bread</h2>
        </div>
        <div className=" w-full flex justify-center p-3 text-lg font-Merriweather m-1 shadow rounded-xl hover:scale-105 transform cursor-pointer ease-in-out hover:bg-orange-400 duration-200 hover:text-white items-center ">
          <h2>Pantry Staples</h2>
        </div>
        <div className=" w-full flex justify-center p-3 text-lg font-Merriweather m-1 shadow rounded-xl hover:scale-105 transform cursor-pointer ease-in-out hover:bg-orange-400 duration-200 hover:text-white items-center ">
          <h2>Snacks & Beverages</h2>
        </div>
        <div className=" w-full flex justify-center p-3 text-lg font-Merriweather m-1 shadow rounded-xl hover:scale-105 transform cursor-pointer ease-in-out hover:bg-orange-400 duration-200 hover:text-white items-center ">
          <h2>Household Supplies</h2>
        </div>
      </div>
    </div>
  );
};

export default Categorybar;
