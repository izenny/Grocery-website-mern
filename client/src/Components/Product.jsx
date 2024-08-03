// import React from "react";

// const Product = ({ productName, description, price, image }) => {
//   return (
//     <div className="m-1 flex h-full  overflow-y-scroll no-scrollbar justify-around flex-wrap ">
//       <div className="m-6 relative ">
//         <div className="w-[200px] h-[130px] p-2  bg-white shadow  rounded-lg">
//           <div className=" flex justify-center flex-col items-center">
//             <h2 className="text-2xl font-Merriweather ">{productName}</h2>
//             <p className="text-xs ">{description}</p>
//             <h1 className="text-lg ">{price} rs</h1>
//           </div>
//           <div className="">
//             <button className="p-1 m-1 w-16 font-Merriweather text-white hover:scale-105 bg-orange-500 rounded-lg">
//               Buy
//             </button>
//             <button className="p-1 m-1 w-16 font-Merriweather text-white hover:scale-105 bg-orange-500 rounded-lg">
//               Cart
//             </button>
//           </div>
//         </div>
//         <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
//           <img src={image} alt="" className="h-full w-full object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
import React from "react";
import { useSelector } from "react-redux";
import { addtoCart } from "../Api/CartApi";
const Product = ({ products }) => {
  const user = useSelector((state) => state.userDetails.userInfo[0]);
  const id = user?._id;
  const cartProduct = async (productid) => {
    const cartData = {
      productId: productid,
      quantity: 1,
    };

    try {
      await addtoCart(id, cartData);
      console.log("Product added to cart successfully");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  return (
    <div className="m-1 flex h-full overflow-y-scroll no-scrollbar justify-around flex-wrap">
      {products.map((product) => (
        <div key={product._id} className="m-6 relative">
          <div className="w-[200px] h-[130px] p-2 bg-white shadow rounded-lg">
            <div className="flex justify-center flex-col items-center">
              <h2 className="text-2xl font-Merriweather">
                {product.productname}
              </h2>
              <p className="text-xs">{product.description}</p>
              <h1 className="text-lg">{product.price} rs</h1>
            </div>
            <div className="">
              <button className="p-1 m-1 w-16 font-Merriweather text-white hover:scale-105 bg-orange-500 rounded-lg">
                Buy
              </button>
              <button
                onClick={() => cartProduct(product._id)}
                className="p-1 m-1 w-16 font-Merriweather text-white hover:scale-105 bg-orange-500 rounded-lg"
              >
                Cart
              </button>
            </div>
          </div>
          <div className="absolute w-[100px] h-[100px] rounded-xl top-[60px] left-[130px]">
            <img
              src={`../../public/ProductImages/${product.image}`}
              alt={product.productName}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
