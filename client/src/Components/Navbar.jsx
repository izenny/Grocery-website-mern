// import React from "react";
// import { IoSearch } from "react-icons/io5";
// import { IoCartOutline } from "react-icons/io5";
// import { LuUser2 } from "react-icons/lu";
// import { AiOutlineHeart } from "react-icons/ai";
// import { IoIosLeaf } from "react-icons/io";
// const Navbar = () => {
//   return (
//     <div className=" bg-slate-50 p-1">
//       <div className="flex  h-[4rem] justify-between items-center ">
//         <div className="flex items-center w-1/6 justify-center h-full ml-4">
//           <img src="" alt="" />
//           <IoIosLeaf className="text-green-800 mr-1 text-3xl"/>
//           <h2 className="text-3xl text-orange-500 font-Merriweather">Grocery</h2>
//         </div>
//         <div className="flex-1  h-full">
//           <ul className="flex  h-full items-center justify-around font-serif">
//             <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer ">
//               Home
//             </li>
//             <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
//               Category
//             </li>
//             <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
//               New Products
//             </li>

//             <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
//               About Us
//             </li>
//             <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
//               Contact
//             </li>
//           </ul>
//         </div>
//         <div className="flex justify-evenly items-center w-1/3 mr-4 ">
//           <div className="flex relative">
//             <input
//               type="text"
//               name=""
//               id=""
//               className="input shadow-lg font-sans border-gray-300 px-5 py-1 rounded-xl w-56 transition-all  outline-none"
//             />
//             <IoSearch className="absolute top-2 right-3 " />
//           </div>

//           <div className="text-2xl bg-white hover:text-green-700 p-2 rounded-xl  cursor-pointer hover:scale-110">
//             <IoCartOutline />
//           </div>
//           <div className="text-2xl bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
//             <AiOutlineHeart />
//           </div>
//           <div className="text-2xl bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
//             <LuUser2 />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosLeaf } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="shadow p-1">
      <div className="flex h-[4rem] justify-between items-center">
        <div className="flex items-center w-1/6 justify-center h-full ml-4">
          <IoIosLeaf className="text-green-800 mr-1 text-3xl" />
          <h2 className="text-3xl text-orange-500 font-Merriweather">
            Grocery
          </h2>
        </div>
        <div className="flex-1  h-full">
          <ul className="flex h-full items-center justify-around font-serif">
            <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
              Home
            </li>
            <li
              className=" relative hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Category
            </li>
            <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
              New Products
            </li>
            <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
              About Us
            </li>
            <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex justify-evenly items-center w-1/3 mr-4">
          <div className="flex relative">
            <input
              type="text"
              name=""
              id=""
              className="input shadow-md font-sans  px-5 py-1 rounded-xl w-56 transition-all outline-none"
            />
            <IoSearch className="absolute top-2 right-3" />
          </div>
          <div className="text-2xl shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
            <IoCartOutline />
          </div>
          <div className="text-2xl shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
            <AiOutlineHeart />
          </div>
          <div className="text-2xl shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
            <LuUser2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
