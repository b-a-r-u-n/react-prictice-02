import React, { useState } from 'react'
import CashOnDelivery from '../CashOnDelivery.jsx/CashOnDelivery';
import CreditCard from '../CreditCard/CreditCard';

const Payment = () => {
    const [isCash, setIsCash] = useState(true);
  return (
    <div className='w-[50%] bg-gray-600 px-28 py-8 text-white rounded-2xl'>
      <div className='flex justify-center gap-20 mb-5'>
        <div>
            <input type="radio" name="payment" id="cash" checked={isCash} onChange={() => setIsCash(!isCash)}/>
            <label htmlFor="cash" className='text-2xl ml-2'>Cash on delivery</label>
        </div>
        <div>
            <input type="radio" name="payment" id="online" checked={!isCash} onChange={() => setIsCash(!isCash)}/>
            <label htmlFor="online" className='text-2xl ml-2'>Credit Card</label>
        </div>
      </div>
      <div className='w-full'>
        {
            isCash ? <CashOnDelivery /> : <CreditCard /> 
        }
      </div>
    </div>
  )
}

export default Payment
