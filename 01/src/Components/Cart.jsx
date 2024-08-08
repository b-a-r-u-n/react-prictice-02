import React from 'react'
import { useState, useEffect } from 'react';

const Cart = ({cart, handlingCount}) => {
    const [total, setTotal] = useState(0);
    const totalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.amount;
        })
        setTotal(total);
    }
    useEffect(() => {
        totalPrice();
    })
  return (
    <div className='w-[37vw] bg-red-300 h-[80vh] sticky top-0 px-7 py-6'>
      <h1 className='font-semibold text-[2vw]'>Cart</h1>
      <div className='cart max-h-[60vh] overflow-y-scroll'>
      {
        cart.map((item) => {
            return (
                <div className=' flex items-center justify-between w-[100%] px-4 py-6'>
        <div className='w-[20%] '>
            <img src={item.image} alt="" />
        </div>
        <div className='w-[50%]'>
            <div className='font-semibold'>{item.name}</div>
            <div className='font-bold'>$ {item.price}</div>
        </div>
        <div className='flex justify-between w-[20%]'>
            <button className='bg-green-500 px-2 font-bold'
                onClick={() => handlingCount(item.id, +1)}
            >+</button>
            <span className='font-bold'>{item.amount}</span>
            <button className='bg-red-500 px-2 font-bold'
                onClick={() => handlingCount(item.id, -1)}
            >-</button>
        </div>
      </div>
            )
        })
      }
    </div>
      <h1 className='font-bold text-2xl text-center mt-4'>$ {total}</h1>
    </div>
  )
}

export default Cart
