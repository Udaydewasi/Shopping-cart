import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';


const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [Totalamount, setTotalamount] = useState(0);

  useEffect(() => {
    setTotalamount((cart.reduce((acc, curr) => acc + curr.price , 0))
  );
  }, [cart])
  return (
    <div className='mt-9 max-h-full flex justify-center'>
      {
        cart.length > 0 ? 
        (<div className='flex flex-wrap'>
          <div className=''>
          {
            cart.map((item, index) => {
              return <CartItem key ={item.id} item = {item} itemIndex = {index}/>
            })
          }
          </div>
  
          <div className='max-w-full flex flex-col justify-between ml-10 mt-5'>
            <div>
              <div className='uppercase font-semibold text-xl text-green-700'>Your Cart</div>
              <div className='uppercase font-bold text-5xl text-green-700'>Summary</div>
              <p className='font-bold text-xl opacity-70 mt-5'>Tatal Items: <span className='opacity-100 font-medium'>{cart.length}</span>
                </p>
            </div>


          <div className='w-full'>
            <p className='font-bold text-xl parent mt-5'>
              Total Amount: 
              <span className='child'> ${Totalamount}</span> 
            </p>
  
              <button className='w-[400px] bg-green-700 rounded-md p-1 mb-10 font-bold text-white text-lg mt-5'>
                CheckOut Now
              </button>
          </div>

        </div>

        </div>):
        (<div className='h-full flex flex-col justify-center items-center mt-56'>
          <p className='font-bold text-lg opacity-80 mb-5'>Your Cart is Empty!</p>
          <Link to='/'>

          <button className='bg-green-700 p-2 rounded-full w-40'>
            Shop Now
          </button>
          </Link>
          </div>)
      }
    </div>
  )
}

export default Cart;
