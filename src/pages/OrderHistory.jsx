import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
  const orders = useSelector(state => state.orders);

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-semibold mb-6'>Order History</h2>
      {orders.length > 0 ? (
        <div className='space-y-4'>
          {orders.map((order) => (
            <div key={order.id} className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex justify-between items-center mb-4'>
                <div>
                  <p className='text-sm text-gray-500'>Order #{order.id}</p>
                  <p className='text-xs text-gray-400'>{new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className='text-right'>
                  <p className='text-sm font-semibold'>{order.status}</p>
                  <p className='text-sm font-bold'>${order.totalPrice.toFixed(2)}</p>
                </div>
              </div>
              <div className='border-t pt-4'>
                {order.items.map((item) => (
                  <div key={item.id} className='flex justify-between mb-2'>
                    <p>{item.name}</p>
                    <p>${item.price} x {item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-500'>You have no orders yet.</p>
      )}
    </div>
  );
};

export default OrderHistory;
