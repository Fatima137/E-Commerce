import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProductManagement = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: updatedProduct });
    setEditingProduct(null);
  };

  return (
    <div>
      <h3 className='text-xl font-semibold mb-4'>Product Management</h3>
      <div className='space-y-4'>
        {products.map((product) => (
          <div key={product.id} className='flex justify-between items-center bg-white p-4 rounded shadow-md'>
            <div>
              <h4 className='font-semibold'>{product.name}</h4>
              <p className='text-sm text-gray-500'>${product.price.toFixed(2)}</p>
            </div>
            <div className='flex space-x-4'>
              <button onClick={() => handleEdit(product)} className='text-blue-600 hover:text-blue-800'>
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(product.id)} className='text-red-600 hover:text-red-800'>
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      {editingProduct && (
        <div className='mt-6'>
          <h4 className='text-lg font-semibold'>Edit Product</h4>
          <input
            type='text'
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
            className='border p-2 w-full mb-2'
            placeholder='Product Name'
          />
          <input
            type='number'
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })}
            className='border p-2 w-full mb-2'
            placeholder='Product Price'
          />
          <button onClick={() => handleSave(editingProduct)} className='bg-blue-600 text-white py-2 px-4 rounded'>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
