import React from 'react'
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-orange-200 text-black py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-4xl font-semibold text-'>DraziaMania</h3>
          <p className='mt-4'>Your one-stop for all your needs.Shop with us and experience the best online shopping experience</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to='/' className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to='/shop' className='hover:underline'>Shop</Link>
            </li>
            <li>
              <Link to='/contact' className='hover:underline'>Contact</Link>
            </li>
            <li>
              <Link to='/about' className='hover:underline'>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-sembibold'>Follow Us</h4>
          <div  className='flex space-x-4 mt-4'>
            <a href="" className='hover:text-gray-400'><FaFacebook/></a>
            <a href="" className='hover:text-gray-400'><FaTwitter/></a>
            <a href="" className='hover:text-gray-400'><FaGithub/></a>
            <a href="" className='hover:text-gray-400'><FaLinkedinIn/></a>
          </div>
          <form className='flex item-center justify-center mt-8'>
            <input type="email" placeholder='Enter Email' className='w-full p-2 bg-white border border-gray-600'/>
            <button className='bg-amber-700 text-black px-4 py-2 rounded-r-lg border-black'>Subscribe</button>
          </form>
        </div>
        </div>
        <div className='mt-8 border-t border-amber-800 pt-4'>
          <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <p>&copy; 2024 DraziaMania All rights reserved</p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a href="" className='hover:underline'>Privacy Policy</a>
              <a href="" className='hover:underline'>Terms & Conditions</a>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer