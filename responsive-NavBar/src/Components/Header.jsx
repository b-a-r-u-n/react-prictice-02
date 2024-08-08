import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header>
      <nav className='bg-gray-900 text-white px-7 sm:px-8 py-4 flex justify-between items-center z-30'>
        <Link to="dashboard">
          <div className='w-44'>
            <img src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-apa-itu-startup-pengertian-cara-memulai-dan-1.png" alt=""/>
          </div>
        </Link>
        <div className='hidden sm:block'>
          <ul className='flex gap-4'>
            <NavLink to="/" className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"}`}>
              <li className='font-bold text-lg'>Home</li>
            </NavLink>
            <li className='font-bold text-lg'>About</li>
          </ul>
        </div>
        <div className='hidden sm:block sm:flex gap-4'>
          <Link to="login">
            <button className='bg-green-600 px-2 py-1 rounded-lg text-lg font-bold'>
              Login
            </button>
          </Link>
          <Link to="signup">
            <button className='bg-green-600 px-2 py-1 rounded-lg text-lg font-bold'>
              Signup
            </button>
          </Link>
        </div>
        <button className='change sm:hidden lg:hidden'
          onClick={handleClick}
        >
          {
            menuActive ? 
            <i className="fa-solid fa-xmark text-white text-4xl"></i> :
            <i className="fa-solid fa-bars text-white text-4xl"></i>
          }
        </button>
      </nav>

      <div className={`${menuActive ? "active" : ""} menu bg-gray-900 text-white w-full flex justify-center py-8 absolute sm:hidden z-10`}>
          <ul className='flex flex-col justify-center items-center gap-6'>
            <NavLink to="/" className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"}`}>
              <li className='text-lg font-bold'
                onClick={handleClick}
              >
                Home
              </li>
            </NavLink>
            <li className='text-lg font-bold'>About</li>
            <Link to="login">
              <li>
                <button className='bg-green-600 px-2 py-1 rounded-lg text-lg font-bold' onClick={handleClick}>
                  Login
                </button>
              </li>
            </Link>
            <Link to="signup">
              <li>
                <button className='bg-green-600 px-2 py-1 rounded-lg text-lg font-bold' onClick={handleClick}>
                  Signup
                </button>
              </li>
            </Link>
          </ul>
        </div>
    </header>
  )
}

export default Header