import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import CartProduct from "./CartProduct";

const Cart = () => {
  // Dummy data for the bill details
  const cartTotal = 2000; // example value
  const deliveryCharge = 100; // example value
  const subtotal = cartTotal + deliveryCharge; // example calculation
  return (
    <div className="w-full h-full p-4">
      <div className="text-3xl flex justify-center items-center m-2 p-1 text-green-700">
        <RiShoppingCart2Line />
        <h2 className="text-2xl font-Merriweather pl-4 font-semibold text-orange-500">
          My Cart
        </h2>
      </div>
      <div className="flex">
        <div className="w-2/3 flex justify-center h-[500px] overflow-y-scroll no-scrollbar">
          <CartProduct />
        </div>
        <div className="w-1/3">
          <div className="flex justify-center items-center mt-4">
            <h2 className="text-xl font-Merriweather">Bill </h2>
          </div>
          <div className="m-2 p-2 border  font-Merriweather shadow">
            <div className="flex justify-between">
              <span className="text-lg">Cart Total:</span>
              <span className="text-lg">₹{cartTotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">Delivery Charge:</span>
              <span className="text-lg">₹{deliveryCharge}</span>
            </div>
            <div className="flex justify-between  font-semibold">
              <span className="text-lg">Subtotal:</span>
              <span className="text-lg">₹{subtotal}</span>
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <button className="p-1 m-1 w-1/3 font-Merriweather text-white text-xl flex justify-center items-center hover:scale-105 bg-orange-400 rounded-lg">
              Place order
            </button>
            <button className="p-1 m-1 w-1/3 font-Merriweather text-white text-xl flex justify-center items-center hover:scale-105 bg-orange-400 rounded-lg">
              Remove All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
