import React, { useEffect, useState } from 'react'
import { useProduct } from '../../Contexts/ProductContext'
import Cartdata from '../Cartdata/Cartdata';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {totalAmount, cart} = useProduct();

  return (
    <div className='w-[39%] bg-gray-800 sticky right-0 top-0 max-h-[90vh] px-6 py-6 rounded-xl'>
        <h1 className='text-white font-semibold mb-4'>Cart</h1>
        <div className='cart max-h-[60vh] overflow-y-scroll'>
            {
                cart.map((item) => {
                    return (
                        <Cartdata item={item} key={item.id} />
                    )
                })
            }
        </div>
        <div className='text-center mb-6'>
            <h1 className='text-xl font-bold text-yellow-400'>Total : <span><i className="fa-solid fa-dollar-sign"></i></span> {totalAmount}</h1>
        </div>
        <div className='text-center'>
            <Link to="/payment">
                <button className='bg-blue-500 text-white px-3 py-1 rounded-lg'>
                    Proceed to payment
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Cart
