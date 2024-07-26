import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import {add, remove} from '../redux/Slices/CartSlice'


export const Product = ({post}) => {
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    function addHandler(){
        dispatch(add(post));
        toast.success("Item added to Cart");
    }
    function removeHandler(){
        dispatch(remove(post.id));
        toast.error("Item romoved from Cart");
    }

  return (
    <div className='flex flex-col w-[270px] ml-5 shadow-xl p-2 rounded-lg mt-10 border hover:scale-110 duration-500 bg-white hover:shadow-black hover:drop-shadow-2xl'>
        <div className='mt-2'>
            <p className='font-bold'>
            {
                post.title.length > 25 ? post.title.substring(1, 25)+"...":
                post.title
            }</p>
        </div>
        <div>
            <p className='text-sm opacity-70 mt-1'>{
            post.description.length > 75 ? post.description.substring(1, 75)+"...":
            post.description
            }</p>
        </div>
        <div className='flex justify-center items-center mt-2 w-full h-full'>
            <img src={post.image} alt='img'width={120} height={120}/>
        </div>
        <div className='flex justify-between mt-5'>
            <p className='font-bold text-green-600'>${post.price}</p>
            <button className='border-black border-2 rounded-xl pl-1 pr-1 mb-1 hover:bg-slate-900 hover:text-white'>
                {
                    cart.some((p) => p.id === post.id) ? 
                    <button onClick={removeHandler}
                    className='uppercase'> Remove Item </button> :
                    <button onClick={addHandler}
                    className='uppercase'> Add to Cart </button>
                }
            </button>
        </div>
    </div>
  )
}
