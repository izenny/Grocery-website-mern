// import React, { useEffect, useState } from "react";
// import productc from "../../public/ProductImages/image-1722088741930.png";
// import { TbShoppingCartMinus, TbShoppingCartPlus } from "react-icons/tb";
// import { MdOutlineRemoveShoppingCart } from "react-icons/md";
// import { productFetchById } from "../Api/ProductApi";
// const CartProduct = (cartItems) => {
//   const [cartItems,setcartItems] = useState()
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const productData = await productFetchById(id,productid);
//         setcartItems(productData);
//       } catch (error) {
//         console.log("error in fetching cart ", error);
//       }
//     };
//     fetchProduct();
//   }, []);
//   return (
//     <div className="h-full w-full p-2 flex flex-wrap">
//       <div className="relative flex m-2 rounded-xl shadow bg-orange-100 justify-around items-center w-full h-[8rem]">
//         <div className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full hover:bg-red-500 cursor-pointer hover:scale-105  p-2 text-xl "><MdOutlineRemoveShoppingCart /></div>
//         <div className="h-full">
//           <img src={productc} alt="" className="h-full w-full object-cover " />
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <h1 className="text-lg font-madimione font-medium">Name</h1>
//           <h2 className="text-sm">Description</h2>
//           <div className="flex ">
//             <h2 className="mr-2">Price</h2>{" "}
//             <h2 className="text-green-500">Instock</h2>
//           </div>
//           <div className="flex-row flex h-fit">
//             <button className="p-1 m-1 w-16 font-Merriweather text-white text-xl flex justify-center items-center hover:scale-105 bg-orange-400 rounded-lg">
//               <TbShoppingCartPlus />
//             </button>
//             <div className="w-16 border m-1 shadow text-center p-1 rounded-lg">
//               1
//             </div>
//             <button className="p-1 m-1 w-16 font-Merriweather text-white flex justify-center text-xl items-center hover:scale-105 bg-orange-400 rounded-lg">
//               <TbShoppingCartMinus />
//             </button>
//           </div>
//         </div>
//         <div className="m-2">
//           <h1 className="text-xl font-semibold">500rs</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartProduct;
import React from "react";
import { TbShoppingCartMinus, TbShoppingCartPlus } from "react-icons/tb";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const CartProduct = ({ cartItems }) => {
  return (
    <div className="h-full w-full p-2 flex flex-wrap">
      {cartItems.map((item, index) => (
        <div key={index} className="relative flex m-2 rounded-xl shadow bg-orange-100 justify-around items-center w-full h-[8rem]">
          <div className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full hover:bg-red-500 cursor-pointer hover:scale-105 p-2 text-xl">
            <MdOutlineRemoveShoppingCart />
          </div>
          <div className="h-full">
            <img src={`../../public/ProductImages/${item.product.image}`} alt={item.product.productname} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-lg font-madimione font-medium">{item.product.productname}</h1>
            <h2 className="text-sm">{item.product.description}</h2>
            <div className="flex">
              <h2 className="mr-2">{`Price: ₹${item.product.price}`}</h2>
              <h2 className="text-green-500">{item.product.inStock ? "In stock" : "Out of stock"}</h2>
            </div>
            <div className="flex-row flex h-fit">
              <button className="p-1 m-1 w-16 font-Merriweather text-white text-xl flex justify-center items-center hover:scale-105 bg-orange-400 rounded-lg">
                <TbShoppingCartPlus />
              </button>
              <div className="w-16 border m-1 shadow text-center p-1 rounded-lg">
                {item.quantity}
              </div>
              <button className="p-1 m-1 w-16 font-Merriweather text-white flex justify-center text-xl items-center hover:scale-105 bg-orange-400 rounded-lg">
                <TbShoppingCartMinus />
              </button>
            </div>
          </div>
          <div className="m-2">
            <h1 className="text-xl font-semibold">{`₹${item.product.price * item.quantity}`}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProduct;
