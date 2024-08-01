import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import CartProduct from "../Components/CartProduct";

const PlaceOrder = () => {
  // Dummy data for the bill details
  const cartTotal = 2000; // example value
  const deliveryCharge = 100; // example value
  const subtotal = cartTotal + deliveryCharge; // example calculation

  return (
    <div>
      <div className="w-full h-full p-4">
        <div className="text-3xl flex justify-center items-center m-2 p-1 text-green-700">
          <RiShoppingCart2Line />
          <h2 className="text-2xl font-Merriweather pl-4 font-semibold text-orange-500">
            Place Order
          </h2>
        </div>
        <div className=" flex flex-col sm:flex-row">
          <div className="h-full  w-full md:w-1/3 p-4 sm:border-r">
            <div className="flex justify-center items-center">
              <h2 className="text-xl font-Merriweather">Order Summary</h2>
            </div>
            <div className="flex justify-center items-start h-[600px] overflow-y-scroll no-scrollbar">
              <CartProduct />
            </div>
          </div>
          <div className="h-full w-full md:w-2/3 p-4">
            <div className="flex justify-center items-center">
              <h2 className="text-xl font-Merriweather">
                Delivery Information
              </h2>
            </div>
            <div className="m-2 p-2 h-full flex flex-wrap justify-center shadow">
              <div className="flex flex-col m-1">
                <label htmlFor="" className="">
                  Name
                </label>
                <input type="text" placeholder="" className="border " />
              </div>
              <div className="flex flex-col m-1">
                <label htmlFor="" className="">
                  Mobile Number
                </label>
                <input type="text" placeholder="" className="border " />
              </div>
              <div className="flex flex-col m-1">
                <label htmlFor="" className="">
                  Email
                </label>
                <input type="text" placeholder="" className="border " />
              </div>
              <div className="flex flex-col m-1">
                <label htmlFor="" className="">
                  Address
                </label>
                <input type="text" placeholder="" className="border " />
              </div>
              <div className="flex flex-col m-1">
                <label htmlFor="" className="">
                City
                </label>
                <input type="text" placeholder="" className="border " />
              </div>
              <div className="flex flex-col m-1">
                <label htmlFor="" className="">
                  Pin
                </label>
                <input type="text" placeholder="" className="border " />
              </div>
              <div className="flex flex-col m-1">
                <label htmlFor="" className="">
                  District
                </label>
                <input type="text" placeholder="" className="border " />
              </div>
              <div className="flex flex-col m-1">
                <label htmlFor="" className="">
                  State
                </label>
                <input type="text" placeholder="" className="border " />
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <h2 className="text-xl font-Merriweather">Schedule Delivery</h2>
            </div>
            <div className="m-2 flex items-center justify-center p-2 shadow">
              <label htmlFor="delivery-date" className="mr-2">
                Date
              </label>
              <input type="date" id="delivery-date" className="border p-1" />
              <label htmlFor="delivery-time" className="mr-2 ml-3">
                Time: 9am - 6pm
              </label>
            </div>
            <div className="flex justify-center items-center mt-4">
              <h2 className="text-xl font-Merriweather">Payment Method</h2>
            </div>
            <div className="m-2 flex justify-around p-2 shadow">
              <div>
                <input
                  type="radio"
                  name="payment-method"
                  id="online-payment"
                  className="m-1"
                />
                <label htmlFor="online-payment" className="m-1">
                  Online Payment
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment-method"
                  id="cod"
                  className="m-1"
                />
                <label htmlFor="cod" className="m-1">
                  Cash on Delivery
                </label>
              </div>
            </div>
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
              <button className="p-1 m-1 w-1/4 font-Merriweather text-white text-xl flex justify-center items-center hover:scale-105 bg-orange-400 rounded-lg">
                Place order
              </button>
              <button className="p-1 m-1 w-1/4 font-Merriweather text-white text-xl flex justify-center items-center hover:scale-105 bg-orange-400 rounded-lg">
                Cancel order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
