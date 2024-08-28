import React from 'react'
import { useSelector } from 'react-redux'
import { ProductCard } from '../components/ProductCard'


const FilterData = () => {
    const filterProducts = useSelector(state => state.product.filteredData)
  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
        {filterProducts.lenght>0 ?
        <>
        <h2 className='text-2xl font-bold mb-6 text-center'>All Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
          {filterProducts.map(((product) => (
            <ProductCard product={product}/>
          )))}
        </div>
        </>
        :
        <div>
            <h1 className='text-align-center'>No Product Found</h1>
        </div>
}

      </div>
  )
}

export default FilterData