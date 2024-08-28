import React from 'react'
import { FaHeadset, FaLock, FaMoneyBill, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className='text-3xl text-amber-800'/>,
            title: 'Free Shipping',
            decription: 'Get Your orders delivered with no extra cost',
        },
        {
            icon: <FaHeadset className='text-3xl text-amber-800'/>,
            title: 'Support 24/7',
            decription: 'We are here to assist you anytime',
        },
        {
            icon: <FaMoneyBill className='text-3xl text-amber-800'/>,
            title: '100% Money Back',
            decription: 'Full refund if you are not satisfied',
        },
        {
            icon: <FaLock className='text-3xl text-amber-800'/>,
            title: 'Secure Payment',
            decription: 'Your payment information is safe with us',
        },
        {
            icon: <FaTag className='text-3xl text-amber-800'/>,
            title: 'Discount',
            decription: 'Enjoy the best product on our products',
        },
    ]
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {infoItems.map((item , index)=>(
                <div key = {index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition duration-300 hover:scale-105'>
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.decription}</p>
                </div>    
            ))}
        </div>
    </div>
  )
}

export default InfoSection