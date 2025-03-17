import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/Layout/NavBar'
import useAddToCart from '../../Components/GlobalState/shoppingbagCoounter'

const ShoppingBag = () => {

  const {basket, changeProductCount, deleteBasketProduct} = useAddToCart();
  const [basketTotalPrice, setBasketTotalPrice] = useState(0)

  useEffect(() => {
    let sum = 0
    basket.forEach(({totalPrice}) => {
      sum += totalPrice
    });
    setBasketTotalPrice(sum)
  },[basket])


  const deleteProduct = (id) => {
    const isAgree = confirm("Are you sure")
    if (isAgree) {
      deleteBasketProduct(id);
    }
  }



  return (
    <div>
        <NavBar/>
        <div>
          <h2 className='mb-10 w-[80%] mx-auto'>My Basket</h2>

          {
          !basket.length ? (<p>not found</p>) : (
            <div className='grid gap-2.5 mb-5'>
              {
                basket.map(({id, count, title, images, price, description, totalPrice}) => {
                  return <div key={id} className='border grid grid-cols-2 items-center md:w-[80%] mx-auto md:h-[40vh] px-10 py-2'>
                    <div className='w-[200px]'>
                      <img src={images[0]} alt="" />
                    </div>
            {/* ------------------------------- */}
                    <div className='flex flex-col gap-1'>
                      <h2>{title}</h2>
                      <h2 className='md:text-sm'>{description}</h2>
                      <h2 className='text-[20px] text-[var(--productTitle)]'>€{price}</h2>
            {/* ------------Buttons------------------- */}
                      <div className='flex gap-1'>
                        <button className='text-white bg-pink-600 w-5 h-5 flex justify-center  items-center cursor-pointer' onClick={() => changeProductCount(id, "-")}>-</button>
                        <span>{count}</span>
                        <button className='text-white bg-pink-600 w-5 h-5 flex justify-center  items-center cursor-pointer' onClick={() => changeProductCount(id, "+")}>+</button>
                      </div>
                      <div className='flex justify-between'>
                      <p className='text-[20px] text-[var(--mainColor)]'>Total Price: €{totalPrice}</p>
                      <button onClick={() => deleteProduct(id)} >Delete</button>
                      </div>
                    </div>
            {/* ------------------------------- */}
                  </div>
                })
              }
            </div>
          )
        }
          <div className='mb-10 w-[80%] mx-auto border-2 pl-5 flex gap-5'>
            Total Price: {basketTotalPrice}
            <button className='border'>Buy It</button>
          </div>
        </div>
    </div>
  )
}

export default ShoppingBag