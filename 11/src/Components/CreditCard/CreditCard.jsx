import React from 'react'

const CreditCard = () => {
  return (
    <div className='w-[100%] border px-5 py-4 rounded-xl text-white bg-gray-600'>
      <form action="" onClick={(e) => e.preventDefault()}>
        <div className='mb-4'>
            <h1 className='mb-2'>Enter Your Card Number</h1>
            <input type="number" name="" id="number" maxLength="12" placeholder='111122223333' required 
                className='bg-transparent border border-black w-[50%] rounded-full pl-2 py-1 text-sm outline-none'
            />
        </div>
        <div className='mb-4'>
            <h1 className='mb-2'>Enter Your Card Expairy Date</h1>
            <input type="number" name="" id="" max="12" placeholder='01/24' required 
                className='bg-transparent border border-black w-[50%] rounded-full pl-2 py-1 text-sm outline-none'
            />
        </div>
        <div className='mb-4'>
            <h1 className='mb-2'>Enter Your Card CVV</h1>
            <input type="number" name="" id="" max="3" placeholder='111' required
                className='bg-transparent border border-black w-[50%] rounded-full pl-2 py-1 text-sm outline-none'
            />
        </div>
        <div>

        </div>
        <div className='text-center'>
            <button type="submit"
                className='bg-blue-600 px-3 py-2 rounded-xl outline-none'
            >
                Confirm Payment
            </button>
        </div>
      </form>
    </div>
  )
}

export default CreditCard
