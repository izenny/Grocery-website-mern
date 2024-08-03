import React from 'react';

const ConfirmOrder = ({ orderDetails }) => {
  // Check if orderDetails is defined
  // if (!orderDetails) {
  //   return <div className="p-4">Loading...</div>;
  // }

  return (
    <div className="p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Confirm Order</h2>
          <div className="space-y-2">
            <p className="text-lg"><span className="font-semibold">Name:</span> {orderDetails.name}</p>
            <p className="text-lg"><span className="font-semibold">Mobile Number:</span> {orderDetails.mobileNumber}</p>
            <p className="text-lg"><span className="font-semibold">Email:</span> {orderDetails.email}</p>
            <p className="text-lg"><span className="font-semibold">Address:</span> {orderDetails.address}</p>
            <p className="text-lg"><span className="font-semibold">City:</span> {orderDetails.city}</p>
            <p className="text-lg"><span className="font-semibold">Pin:</span> {orderDetails.pin}</p>
            <p className="text-lg"><span className="font-semibold">District:</span> {orderDetails.district}</p>
            <p className="text-lg"><span className="font-semibold">State:</span> {orderDetails.state}</p>
            <p className="text-lg"><span className="font-semibold">Delivery Date:</span> {orderDetails.deliveryDate}</p>
            <p className="text-lg"><span className="font-semibold">Payment Method:</span> {orderDetails.paymentMethod}</p>
            <div className="flex justify-between mt-4">
              <span className="text-lg font-semibold">Cart Total:</span>
              <span className="text-lg">₹{orderDetails.cartTotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Delivery Charge:</span>
              <span className="text-lg">₹{orderDetails.deliveryCharge}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-lg">Subtotal:</span>
              <span className="text-lg">₹{orderDetails.subtotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
