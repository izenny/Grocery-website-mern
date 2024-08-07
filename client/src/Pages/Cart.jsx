import React, { useEffect, useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { TbShoppingCartMinus, TbShoppingCartPlus } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeItem, updateQuantity } from "../Redux/CartSlice";

const Cart = () => {
  const user = useSelector((state) => state.userDetails.userInfo[0]);
  const id = user?._id;
  const cart = useSelector((state) => state.cartDetails.items);
  const deliveryCharge = 20;
  const dispatch = useDispatch();
  const subtotal = cart?.totalPrice ? cart.totalPrice + deliveryCharge : deliveryCharge;
  useEffect(() => {
    if (id) {
      dispatch(fetchCart(id));
    }
  }, [id, dispatch]);

  const handleRemoveItem = (productId) => {
    dispatch(removeItem({ userId: id, productId }));
  };

  const handleQuantityChange = (productId, amount) => {
    const item = cart.items.find((item) => item.product._id === productId);
    if (item) {
      const newQuantity = item.quantity + amount;
      if (newQuantity > 0) {
        dispatch(updateQuantity({ userId: id, productId, quantity: newQuantity }));
      }
    }
  };



  return (
    <div className="w-full h-full p-4">
      <div className="text-3xl flex justify-center items-center p-1 text-green-700">
        <RiShoppingCart2Line />
        <h2 className="text-2xl font-Merriweather pl-4 font-semibold text-orange-500">
          My Cart
        </h2>
      </div>
      <div className="">
        {cart?.items?.length ? (
          <>
            <div className="flex flex-wrap justify-center overflow-y-scroll no-scrollbar">
              {cart?.items.map((item, index) => (
                <div key={index} className="relative flex m-2 rounded-xl shadow bg-orange-100 justify-around items-center w-full md:w-1/3 h-[8rem]">
                  <div
                    className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full hover:bg-red-500 cursor-pointer hover:scale-105 p-2 text-xl"
                    onClick={() => handleRemoveItem(item.product._id)}
                  >
                    <MdOutlineRemoveShoppingCart />
                  </div>
                  <div className="h-full flex flex-wrap">
                    <img
                      src={`../../public/ProductImages/${item.product.image}`}
                      alt={item.product.productname}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-lg font-madimione font-medium">{item.product.productname}</h1>
                    <h2 className="text-sm">{item.product.description}</h2>
                    <div className="flex">
                      <h2 className="mr-2">{`Price: ₹${item.product.price}`}</h2>
                      <h2 className="text-green-500">{item.product.Stock <= 0 ? "In stock" : "Out of stock"}</h2>
                    </div>
                    <div className="flex-row flex h-fit">
                      <button
                        className="p-1 m-1 w-16 font-Merriweather text-white text-xl flex justify-center items-center hover:scale-105 bg-orange-400 rounded-lg"
                        onClick={() => handleQuantityChange(item.product._id, 1)}
                      >
                        <TbShoppingCartPlus />
                      </button>
                      <div className="w-16 border m-1 shadow text-center p-1 rounded-lg">{item?.quantity}</div>
                      <button
                        className="p-1 m-1 w-16 font-Merriweather text-white flex justify-center text-xl items-center hover:scale-105 bg-orange-400 rounded-lg"
                        onClick={() => handleQuantityChange(item.product._id, -1)}
                      >
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
            <div className="m-2 p-2 border flex justify-center font-Merriweather shadow">
              <div className="w-1/2">
                <div className="flex justify-between">
                  <span className="text-lg">Cart Total:</span>
                  <span className="text-lg">₹{cart.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg">Delivery Charge:</span>
                  <span className="text-lg">₹{deliveryCharge}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-lg">Subtotal:</span>
                  <span className="text-lg">₹{subtotal}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-around items-center mt-4">
              <button className="p-1 m-1 w-1/3 font-Merriweather text-white text-xl flex justify-center items-center hover:scale-105 bg-orange-400 rounded-lg">Place order</button>
              <button className="p-1 m-1 w-1/3 font-Merriweather text-white text-xl flex justify-center items-center hover:scale-105 bg-orange-400 rounded-lg">Remove All</button>
            </div>
          </>
        ) : (
          <div className="text-center flex justify-center items-center text-lg font-Merriweather">Your cart is empty.</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
