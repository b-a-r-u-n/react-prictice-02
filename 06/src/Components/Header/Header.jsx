import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='text-white flex items-center justify-between px-10 bg-black'>
        <Link
            to="/"
        >
        <div 
            className='h-[10vh] w-[10vw] bg-cover bg-center'
            style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png")`}}
        >
            
        </div>
        </Link>
        <div>
            <ul className='flex gap-5 text-lg font-semibold'>
                <li>
                    <NavLink
                        to="/"
                        className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"} hover:text-orange-500`}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                <NavLink
                        to="about"
                        className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"} hover:text-orange-500`}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="github"
                        className={({isActive}) => `${isActive ? "text-orange-500" : "text-white"} hover:text-orange-500`}
                    >
                        Github
                    </NavLink>
                </li>
                <li>...</li>
            </ul>
        </div>
        <div className='flex gap-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>
                Log in
            </button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded'>
                Sign up
            </button>
        </div>
    </nav>
  )
}

export default Header
