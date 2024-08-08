import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='h-screen bg-cover bg-no-repeat flex justify-center items-center'
      style={{backgroundImage:`url("https://images.unsplash.com/photo-1680946496238-5272d3c407fc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}
    >
      <div className='blurr w-4/5 sm:w-2/6 text-white px-10 py-8 rounded-3xl'>
        <form action=""
          onClick={(e) => {
            // e.preventDefault();
          }}
        >
        <h1 className='text-2xl text-center mb-9 font-bold'>Sign Up</h1>
        <div className='flex flex-col gap-4'>
          <input type="text" name="" id="uname" placeholder='Username' required/>
          <input type="email" name="" id="email" placeholder='Email' required/>
          <input type="password" name="" id="pass" placeholder='Password' required/>
        </div>
        <button className='bg-green-400 w-full mt-4 py-2 rounded-2xl hover:bg-green-600'>Sign up</button>
        <h4 className='mt-4 text-center'>Alredy have an account? <Link to="/login"><span className='text-green-600'>Login</span></Link></h4>
        </form>
      </div>
    </div>
  )
}

export default Signup
