import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
    const navigate =useNavigate()
  if (!order) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <p className="text-xl font-semibold text-gray-700">No order information available. Please place an order first.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-4 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thank You for Your Order</h2>
        <p className="text-gray-600 mb-6">Your order has been placed. You will receive a confirmation email shortly.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Order Summary</h3>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Order Number:</span> {order.orderNumber}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Shipping Information</h3>
            <p className="text-gray-600">{order.shippingInformation.address}</p>
            <p className="text-gray-600">{order.shippingInformation.city}</p>
            <p className="text-gray-600">{order.shippingInformation.zip}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Products Ordered</h3>
            {order.products.map((product) => (
              <div key={product.id} className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-800">{product.name} x {product.quantity}</p>
                </div>
                <div>
                  <p className="text-gray-800">${(product.price * product.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between border-t pt-4">
            <span className="text-lg font-semibold text-gray-700">Total Price:</span>
            <span className="text-lg font-semibold text-gray-800">${order.totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="w-1/2 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-800">Order Tracking</button>
          <button className="w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-800" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
