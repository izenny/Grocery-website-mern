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
// import { useSelector } from "react-redux";
// import Userhome from "./Pages/Userhome";

// const App = () => {
//   const user = useSelector((state) => state.userDetails.userInfo[0]);
//   console.log("userr", user);
//   const renderHomePage = () => {
//     if (user?.role === "admin") {
//       return <Adminhome />;
//     }
//     return <Userhome />;
//   };
//   return (
//     <BrowserRouter>
//       <div className="h-screen w-full overflow-auto no-scrollbar  ">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/home" element={renderHomePage()}>
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
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
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
// import Coustomers from "./Admin/Coustomers";
// import Categorymanagement from "./Admin/Categorymanagement";
// import Userhome from "./Pages/Userhome";
// import Account from "./Account/Account";

// const App = () => {
//   const user = useSelector((state) => state.userDetails.userInfo[0]);
//   const token = user && user.token;
//   console.log("userr", user);

//   const renderHomePage = () => {
//     if (user?.role === "admin") {
//       return <Adminhome />;
//     }
//     return <Userhome />;
//   };

//   return (
//     <BrowserRouter>
//       <div className="h-screen w-full overflow-auto no-scrollbar">
//         <Routes>
//           {token ? (
//             <Route path="/*" element={renderHomePage()} >
//               <Route />
//             </Route>
//           ) : (
//             <Route path="/*" element={<Account/>} />
//           )}
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Categorybar from "./Components/Categorybar";
import Categories from "./Pages/Categories";
import Login from "./Account/Login";
import Signup from "./Account/Signup";
import AddProduct from "./Admin/Addproduct";
import Adminbar from "./Admin/Adminbar";
import Adminhome from "./Pages/Adminhome";
import Coustomers from "./Admin/Coustomers";
import Categorymanagement from "./Admin/Categorymanagement";
import Userhome from "./Pages/Userhome";
import Account from "./Account/Account";

const App = () => {
  const user = useSelector((state) => state.userDetails.userInfo[0]);
  const token = user && user.token;
  console.log("userrA", user);
  console.log('');

  const renderHomePage = () => {
    if (user?.role === "admin") {
      return <Adminhome />;
    } else {
      return <Userhome />;
    }
  };

  return (
    <BrowserRouter>
      <div className="h-screen w-full overflow-auto no-scrollbar">
        <Routes>
          {token ? (
            <Route path="/" element={renderHomePage()}>
              <Route path="categories/" element={<Categories/>}>
              </Route>
              
            </Route>
          ) : (
            <Route path="/*" element={<Account />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
