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
// import React, { useEffect, useState } from "react";
// import { IoSearch } from "react-icons/io5";
// import { IoCartOutline } from "react-icons/io5";
// import { LuUser2 } from "react-icons/lu";
// import { AiOutlineHeart } from "react-icons/ai";
// import { IoIosLeaf } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const user = useSelector((state) => state.userDetails.userInfo[0]);
//   const cartlength = user && user.cart.length;
  
//   useEffect(()=>{

//   })
//   return (
//     <div className="shadow p-1">
//       <div className="flex h-[4rem] justify-between items-center">
//         <div className="flex items-center w-1/6 justify-center h-full ml-4">
//           <IoIosLeaf className="text-green-800 mr-1 text-3xl" />
//           <h2 className="text-3xl text-orange-500 font-Merriweather">
//             Grocery
//           </h2>
//         </div>
//         <div className="flex-1  h-full">
//           <ul className="flex h-full items-center justify-around font-serif">
//             <Link to={"/"}>
//               {" "}
//               <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
//                 Home
//               </li>
//             </Link>
//             <Link to={"categories/:id"}>
//               <li className=" relative hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
//                 Category
//               </li>
//             </Link>
//             <Link to={"newproducts"}>
//               {" "}
//               <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
//                 New Offers
//               </li>
//             </Link>
//             <Link to={"aboutus"}>
//               <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
//                 About Us
//               </li>
//             </Link>
//             <Link to={"contact"}>
//               <li className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
//                 Contact
//               </li>
//             </Link>
//           </ul>
//         </div>
//         <div className="flex justify-evenly items-center w-1/3 mr-4">
//           <div className="flex relative">
//             <input
//               type="text"
//               name=""
//               id=""
//               className="input shadow-md font-sans  px-5 py-1 rounded-xl w-56 transition-all outline-none"
//             />
//             <IoSearch className="absolute top-2 right-3" />
//           </div>
//           <div className="text-2xl relative shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
//             <IoCartOutline />
//             <div className="absolute -top-2 -right-1 text-white text-xs bg-green-500 font-mono font-bold rounded-full w-6 h-6 flex items-center justify-center">{cartlength}</div>
//           </div>
//           <div className="text-2xl shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
//             <AiOutlineHeart />
//           </div>
//           <div className="text-2xl shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
//             <LuUser2 />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosLeaf } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.userDetails.userInfo[0]);
  const cartLength = user && user.cart.length;

  return (
    <div className="shadow p-1">
      <div className="flex h-[4rem] justify-between items-center">
        <div className="flex items-center w-1/6 justify-center h-full ml-4">
          <IoIosLeaf className="text-green-800 mr-1 text-3xl" />
          <h2 className="text-3xl text-orange-500 font-Merriweather">Grocery</h2>
        </div>
        <div className="flex-1 h-full">
          <ul className="flex h-full items-center justify-around font-serif">
            <Link to="/" className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
              Home
            </Link>
            <Link to="categories" className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
              Category
            </Link>
            <Link to="newoffers" className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
              New Offers
            </Link>
            <Link to="aboutus" className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
              About Us
            </Link>
            <Link to="contact" className="hover:scale-110 hover:text-green-700 transform transition-transform duration-200 cursor-pointer">
              Contact
            </Link>
          </ul>
        </div>
        <div className="flex justify-evenly items-center w-1/3 mr-4">
          <div className="flex relative">
            <input type="text" className="input shadow-md font-sans px-5 py-1 rounded-xl w-56 transition-all outline-none" />
            <IoSearch className="absolute top-2 right-3" />
          </div>
          <Link to="cart" className="text-2xl relative shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
            <IoCartOutline />
            <div className="absolute -top-2 -right-1 text-white text-xs bg-green-500 font-mono font-bold rounded-full w-6 h-6 flex items-center justify-center">{cartLength}</div>
          </Link>
          <Link to="favorites" className="text-2xl shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
            <AiOutlineHeart />
          </Link>
          <Link to="profile" className="text-2xl shadow-md bg-white hover:text-green-700 p-2 rounded-xl cursor-pointer hover:scale-110">
            <LuUser2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
