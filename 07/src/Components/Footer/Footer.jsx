import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900  px-9 py-5'>
      <div className=' flex justify-between flex-wrap gap-10 text-white'>
      <div className='w-80'>
        <h1 className='text-lg font-bold mb-3'>Quick Links</h1>
        <ul>
          <li className='text-sm'>Home</li>
          <li className='text-sm'>Features</li>
          <li className='text-sm'>Resources</li>
          <li className='text-sm'>Community</li>
          <li className='text-sm'>About Us</li>
        </ul>
      </div>
      <div className=' w-72'>
        <h1 className='text-lg font-bold mb-3'>Legal Links</h1>
        <ul>
          <li className='text-sm'>Privacy Policy</li>
          <li className='text-sm'>Terms of Service</li>
        </ul>
      </div>
      <div className=' w-96'>
        <h1 className='text-lg font-bold mb-3'>Newsletter Signup</h1>
        <div className='flex flex-col gap-4'>
          <input type="text" name="" id="" placeholder='Full Name' className=''/>
          <input type="email" name="" id="" placeholder='Email Address'/>
        </div>
        <button className='bg-green-500 px-4 py-2 mt-4 rounded-lg hover:bg-green-600'>
            Signup
          </button>
      </div>
      <div className='w-80'>
        <h1 className='text-lg font-bold mb-3'>Contact Information</h1>
        <ul>
          <li className='text-sm'>Tokyo, Japan</li>
          <li className='text-sm'>+81-1234-5678</li>
          <li className='text-sm'>tkopedia@mail.com</li>
          <ul className='flex gap-4 text-xl mt-3'>
            <li>
              <button className=''>
                <i className="fa-brands fa-x-twitter"></i>
              </button>
            </li>
            <li>
              <button className=''>
                <i className="fa-brands fa-instagram"></i>
              </button>
            </li>
            <li>
              <button className=''>
                <i className="fa-brands fa-facebook"></i>
              </button>
            </li>
            <li>
              <button className=''>
                <i className="fa-brands fa-linkedin"></i>
              </button>
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <h1 className='text-center mt-4 text-gray-500'>© 2024 DigiWell. All Rights Reserved</h1>
    </div>
  )
}

export default Footer
