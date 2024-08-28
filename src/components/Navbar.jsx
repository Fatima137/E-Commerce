import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from './Modal';
import Login from './Login';
import Register from './Register'; 
import { setSearchTerm } from '../redux/productSlice';
setSearchTerm

const Navbar = () => {
    const products = useSelector(state => state.cart.products);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [search, setSearch]=useState()
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const handleSearch = (e) =>{
        e.preventDefault();
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <nav className='bg-orange-200 shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex items-center justify-between'>
                <div className='text-lg font-bold'>
                    <Link to="/">E-SHOP</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder='Search Product' className='w-full border py-2 px-4' onChange={(e) => setSearch(e.target.value)}/>
                        <FaSearch className='absolute top-3 right-3 text-red-500'/>
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-md'/>
                        {products.length > 0 && (
                            <span className='absolute top-0 text-xs w-3 left-3 bg-amber-700 rounded-full flex justify-center text-white'>
                                {products.length}
                            </span>
                        )}
                    </Link>
                    <button className='hidden md:block' onClick={() => setIsModalOpen(true)}>
                        Login | Register
                    </button>
                    <button className='block md:hidden'>
                        <FaUser/>
                    </button>
                </div>
            </div>
            <div className='flex item-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link to="/" className='hover:underline'>Home</Link>
                <Link to="/shop" className='hover:underline'>Shop</Link>
                <Link to="/" className='hover:underline'>Contact</Link>
                <Link to="/" className='hover:underline'>About</Link>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {isLogin ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
            </Modal>
        </nav>
    );
};

export default Navbar;
