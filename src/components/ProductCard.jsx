import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

export const ProductCard = ({product}) => {
  const dispatch1 = useDispatch()
  const handleAddToCart = (e , dispatch) =>{
    e.stopPropagation()
    e.preventDefault()
    dispatch1(addToCart(product))
    alert("Product Added Succesfully!")
  
  }
  return (
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
        <img src={product.image} alt="" className='w-full h-48 object-contain mb-4'/>
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>

        </div>
        <div class="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-amber-800 group text-white text-sm rounded-full hover:w-32 hover:bg-amber-800 transform transition" onClick={(e) => handleAddToCart(e, product)}>   
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add to Cart</span>

        </div>
    </div>
  )
}
