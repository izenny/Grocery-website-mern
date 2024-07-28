// import React from "react";
// import Navbar from "../Components/Navbar";
// import Categorybar from "../Components/Categorybar";
// import Product from "../Components/Product";
// import Footer from "../Components/Footer";

// const Categories = () => {
//   return (

//     <div className="h-full ">
//       <div className="flex flex-col h-full">
//         <div class="flex-1 flex overflow-y-scroll no-scrollbar">
//           <div className="w-[20%]">
//             <Categorybar />
//           </div>
//           <div className="flex-1">
//             <Product />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;
import React from "react";

import Categorybar from "../Components/Categorybar";
import Product from "../Components/Product";

const Categories = () => {
  return (
    <div className="h-full ">
      <div class="flex overflow-y-scroll no-scrollbar">
        <div className="w-[20%]">
          <Categorybar />
        </div>
        <div className="flex-1">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Categories;
