import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
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
          <h1 className='text-2xl text-center mb-9 font-bold'>Login</h1>
          <div className='flex flex-col gap-4'>
            <input type="email" name="" id="emaill" placeholder='Email' required/>
            <input type="password" name="" id="passs" placeholder='Password' required/>
          </div>
          <div className='mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between  text-sm'>
            <div className='flex gap-2'>
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">Remeber me</label>
            </div>
            <h4 className='text-green-600'>Forgot your password?</h4>
          </div>
          <button className='bg-green-400 w-full mt-4 py-2 rounded-2xl hover:bg-green-600'>Login</button>
          <h4 className='mt-4 text-center'>Don't have an account? <Link to="/signup"><span className='text-green-600'>Sign Up</span></Link></h4>
        </form>
      </div>
    </div>
  )
}

export default Login
