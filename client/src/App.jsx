// import React from "react";
// import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";
// import Footer from "./Components/Footer";
// import Product from "./Components/Product";
// import Categorybar from "./Components/Categorybar";
// import Categories from "./Pages/Categories";
// import Login from "./Account/Login";
// import Signup from "./Account/Signup";
// import AddProduct from "./Admin/Addproduct";
// import Adminbar from "./Admin/Adminbar";
// import Adminhome from "./Pages/Adminhome";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Coustomers from "./Admin/Coustomers";

// import Categorymanagement from "./Admin/Categorymanagement";

// const App = () => {
//   return (
//     <BrowserRouter>

//       <div className="h-screen w-full overflow-auto no-scrollbar  ">
//         <Routes>
//           <Route path="/" element={<Adminhome />}>
//             <Route path="/usermanagement" element={<Coustomers />} />
//             <Route path="/categorymanagement" element={<Categorymanagement />}>
//               <Route
//                 path="/categorymanagement/createnewcategory"
//                 element={<AddProduct />}
//               />
//               <Route
//                 path="/categorymanagement/addnewproduct"
//                 element={<AddProduct />}
//               />
//               <Route
//                 path="/categorymanagement/updateproduct"
//                 element={<AddProduct />}
//               />
//             </Route>
//             <Route path="/ordermanagement" element={<AddProduct />} />
//             <Route path="/inventorymanagement" element={<AddProduct />} />
//             <Route path="/discountsandoffers" element={<AddProduct />} />
//             <Route path="/reportsandanaltics" element={<AddProduct />} />
//             {/* <Route path="/categorymanagement" element={<AddProduct/>} /> */}
//             {/* <Route path="/categorymanagement" element={<AddProduct/>} /> */}
//           </Route>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
import React from 'react'
import Signup from './Account/Signup'
import Login from './Account/Login'
import AddProduct from "./Admin/Addproduct";

const App = () => {
  return (
    <div>
      {/* <Signup/>
      <Login/> */}
      <AddProduct />
    </div>
  )
}

export default App