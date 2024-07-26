import React from "react";
import Navbar from "../Components/Navbar";
import Categorybar from "../Components/Categorybar";
import Product from "../Components/Product";
import Footer from "../Components/Footer";

const Categories = () => {
  return (
    // <div className='h-screen'>
    //     <div><Navbar/></div>
    //     <div className='flex h-full bg-slate-100 '>
    //         <div className='w-[20%] h-full' ><Categorybar/></div>
    //         <div className=' flex-1 h-full'><Product/></div>
    //     </div>
    //     <div><Footer/></div>
    // </div>
    <div className="h-full ">
      <div className="flex flex-col h-full">
        <div className="">
          <Navbar />
        </div>
        <div class="flex-1 flex overflow-y-scroll no-scrollbar">
          <div className="w-[20%]">
            <Categorybar />
          </div>
          <div className="flex-1">
            <Product />
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Categories;
