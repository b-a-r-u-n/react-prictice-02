import React from 'react'

const CashOnDelivery = () => {
  return (
    <div className='w-[100%] border px-5 py-4 rounded-xl text-white bg-gray-600'>
      <form action="" onClick={(e) => e.preventDefault()}>
        <div className='mb-4'>
            <h1 className='mb-2 text-lg'>Enter Your Name</h1>
            <input type="text" name="" id="number" max="20" placeholder='Ayanokoji' required 
                className='bg-transparent border border-black w-[60%] rounded-full pl-2 py-1 text-sm outline-none'
            />
        </div>
        <div className='mb-4'>
            <h1 className='mb-2 text-lg'>Enter Your Number</h1>
            <input type="number" name="" id="number" max="20" placeholder='1234567890' required 
                className='bg-transparent border border-black w-[60%] rounded-full pl-2 py-1 text-sm outline-none'
            />
        </div>
        <div className='mb-4 flex justify-between flex-wrap gap-y-4'>
          <div className='w-[50%]'>
            <h1 className='text-lg mb-2'>Enter your State</h1>
            {/* <select name="" id="" className='bg-transparent border border-black w-[60%] rounded'>
                {
                  state.map((x) => {
                    return <option key={x} value={x}>{x}</option>
                  })
                }
            </select> */}
            <input type="text" name="" id="number" max="20" placeholder='Odisha' required 
                className='bg-transparent border border-black w-[50%] rounded-full pl-2 py-1 text-sm outline-none'
            />
          </div>
          <div className='w-[50%]'>
            <h1 className='text-lg mb-2'>Enter your City</h1>
            {/* <select name="" id="" className='bg-transparent border border-black w-[60%] rounded'>
                {
                  state.map((x) => {
                    return <option key={x} value={x}>{x}</option>
                  })
                }
            </select> */}
            <input type="text" name="" id="number" max="20" placeholder='Bhubaneswar' required 
                className='bg-transparent border border-black w-[50%] rounded-full pl-2 py-1 text-sm outline-none'
            />
          </div>
          <div className='w-[50%]'>
            <h1 className='text-lg mb-2'>Enter your Pincode</h1>
            {/* <select name="" id="" className='bg-transparent border border-black w-[60%] rounded'>
                {
                  state.map((x) => {
                    return <option key={x} value={x}>{x}</option>
                  })
                }
            </select> */}
            <input type="text" name="" id="number" max="20" placeholder='Bhubaneswar' required 
                className='bg-transparent border border-black w-[50%] rounded-full pl-2 py-1 text-sm outline-none'
            />
          </div>
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

export default CashOnDelivery
