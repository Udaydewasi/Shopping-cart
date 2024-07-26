import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const {cart} = useSelector((state) => state);
  return (
    <div className='w-full h-16 fixed flex justify-between border-b-2 bg-slate-900 text-white items-center z-10'>
        <NavLink to='/'>
            <div className='ml-16'>
                <img src='logo.png' alt='logo' width={100} height={100}/>
            </div>
        </NavLink>
        <div className='flex gap-4 mr-16 text-lg relative'>
            <NavLink to='/'>
            <p className='font-semibold'>Home</p>
            </NavLink>
            <NavLink to='/cart' className='mt-1'>
                <FaShoppingCart />
            </NavLink>
            {
                cart.length > 0 &&
                <p className='absolute bg-green-700 rounded-full w-5 h-5 flex justify-center items-center
                    ml-20 -top-3 moving-number'>
                    {cart.length}
                </p>
            } 
        </div>

    </div>
  )
}

export default Navbar;