import React, { useState } from 'react';
import ProductManagement from './ProductManagement';
import UserManagement from './UserManagement';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-semibold mb-6'>Admin Panel</h2>
      <div className='flex space-x-8 mb-6'>
        <button
          className={`py-2 px-4 ${activeTab === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('products')}
        >
          Manage Products
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'users' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('users')}
        >
          Manage Users
        </button>
      </div>

      {activeTab === 'products' && <ProductManagement />}
      {activeTab === 'users' && <UserManagement />}
    </div>
  );
};

export default AdminPanel;
