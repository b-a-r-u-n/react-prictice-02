import React, { useState } from 'react'
import logo from '../../Images/logo.png'
import { useProduct } from '../../Contexts/ProductContext'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [inputVal, setInputVal] = useState("");
  const {search} = useProduct();

  return (
    <nav className='h-[10vh] px-10 bg-gray-400 text-black flex items-center justify-between'>
      <Link to="/">
        <div 
          className='h-[10vh] w-[5vw] bg-center bg-contain bg-no-repeat'
          style={{backgroundImage:`url(${logo})`}}
        ></div>
      </Link>
      <div>
        <ul className='flex gap-5 text-xl font-bold'>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      <div className='h-8 flex rounded-xl'>
        <input 
          type="text" 
          placeholder="Search"
          className='h-full w-40 rounded-l-xl pl-3 outline-none'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className='bg-green-500 text-white font-bold px-2 h-full rounded-r-xl'
          onClick={() => search(inputVal)}
        >
          Search
        </button>
      </div>
    </nav>
  )
}

export default NavBar
