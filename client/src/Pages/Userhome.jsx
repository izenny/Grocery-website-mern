// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Navbar from "../Components/Navbar";
// import Home from "../Components/Home";
// import Footer from "../Components/Footer";
// import Categories from "./Categories";
// import Cart from '../Components/Cart'
// const Userhome = () => {
//   return (
//     <div className="h-full ">
//       <div className="flex flex-col ">
//         <div className="w-full">
//           <Navbar />
//         </div>
//         <div class="flex-1  overflow-y-scroll no-scrollbar ">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="categories/" element={<Categories />} />
//             <Route path="newoffers/" element={<Categories />} />
//             <Route path="aboutus/" element={<Categories />} />
//             <Route path="contact/" element={<Categories />} />
//             <Route path="cart/" element={<Cart/>} />
//             <Route path="favorites/" element={<Categories />} />
//             <Route path="search/" element={<Categories />} />
//             <Route path="profile/" element={<Categories />} />
//           </Routes>
//         </div>
//         <div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Userhome;
import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Footer from "../Components/Footer";
import Categories from "./Categories";
import Cart from "../Pages/Cart";
import PlaceOrder from "./PlaceOrder";
import ConfirmOrder from "./ConfirmOrder";

const Userhome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex-1 overflow-y-scroll no-scrollbar">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories/" element={<Categories />} />
          <Route path="newoffers/" element={<Categories />} />
          <Route path="aboutus/" element={<Categories />} />
          <Route path="contact/" element={<Categories />} />
          <Route path="cart/" element={<Cart />} />
          <Route path="placeorder/" element={<PlaceOrder />} />
          <Route path="confirmorder/" element={<ConfirmOrder />} />
          <Route path="favorites/" element={<Categories />} />
          <Route path="search/" element={<Categories />} />
          <Route path="profile/" element={<Categories />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Userhome;
