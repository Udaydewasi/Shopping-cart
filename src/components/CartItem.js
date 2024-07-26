import React from 'react'
import toast from 'react-hot-toast';
import {MdOutlineDeleteOutline} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/CartSlice'

const CartItem = ({item, itemindex}) => {
  const dispatch = useDispatch();

  function removeHandler(){
    dispatch(remove(item.id))
    toast.error("Item Removed");
  }

  return (
    <div className='max-w-[600px] flex flex-col justify-center'>
        <div className='h-px w-1/1 bg-slate-400 ml-5 mb-10'></div>
        <div className='flex flex-wrap justify-center'>

        <div className='flex justify-center items-center ml-5 mb-2'>
            <img src={item.image} alt='img' width={130} height={130}/>
        </div>
        <div className='max-w-[400px] ml-5'>
            <h1 className='font-bold text-lg opacity-80'>{item.title}</h1>
            <h1 className='text-sm opacity-70 mt-5'>{
            item.description.length > 80 ? item.description.substring(1, 80)+"...":
            item.description
            }</h1>

            <div className='flex justify-between mt-5 mb-2'>
              <p className='font-bold text-green-600'>${item.price}</p>
              <div onClick={removeHandler}
              className='bg-red-300 rounded-full w-8 h-8 flex justify-center items-center hover:text-white hover:bg-red-400'>
                <MdOutlineDeleteOutline/>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CartItem;
