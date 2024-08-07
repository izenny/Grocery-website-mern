import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateQuantity } from "../Redux/CartSlice";

const Product = ({ products }) => {
  const user = useSelector((state) => state.userDetails.userInfo[0]);
  const id = user?._id;
  const cartDetails = useSelector((state) => state.cartDetails.items);

  const dispatch = useDispatch();

  const cartProduct = async (productId) => {
    const cartData = {
      productId: productId,
      quantity: 1,
    };

    try {
      const existingItem = cartDetails.items.find(
        (item) => item.product._id === productId
      );
      console.log("adasdfasfasf", existingItem);
      if (existingItem) {
        dispatch(
          updateQuantity({
            userId: id,
            productId,
            quantity: existingItem.quantity + 1,
          })
        );
      } else {
        dispatch(addItem({ userId: id, productData: cartData }));
      }
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
