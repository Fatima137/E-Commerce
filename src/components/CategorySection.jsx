import React from 'react'
import men from '../assets/Images/men.jpg'
import women from '../assets/Images/women.jpg'
import girl from '../assets/Images/girl.jpg'

const categories =[
    {
        title: 'Men',
        imageUrl: men,
    },
    {
        title: 'Women',
        imageUrl: women,
    },
    {
        title: 'Kids',
        imageUrl: girl,
    },
];

const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {categories.map((category,index)=> (
            <div key={index} className='relative h-64 transform transition duration-300 hover:scale-105 cursor-pointer'>
                <img src={category.imageUrl} alt="" className='w-full h-full rounded-lg shadow-md' />
                <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bold'>{category.title}</p>
                    <p className='text-gray-600'>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection