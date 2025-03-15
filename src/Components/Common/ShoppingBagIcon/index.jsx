import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useAddToCart from '../../GlobalState/shoppingbagCoounter';


const ShoppingBagIcon = () => {

  const { basket } = useAddToCart();




  return (
    <div>
        <div className='relative'>
                <p className='absolute text-[var(--alternative)] text-l text-[12px] flex justify-center items-center top-[-15px] left-[-10px] border w-5 h-5 rounded-full '>
                  {basket.length}
                </p>
                  <HiOutlineShoppingBag className='text-xl lg:text-2xl text-[var(--mainColor)] cursor-pointer duration-500'/> 
            </div>
    </div>
  )
}

export default ShoppingBagIcon