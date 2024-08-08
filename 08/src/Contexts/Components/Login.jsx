import React, { useContext, useState } from 'react'
import UserContexts from '../UserContexts';

const Login = () => {
    const {data, setData} = useContext(UserContexts);
    const [userName, setUserName] = useState("");
    const clickHandale = () => {
        console.log(userName);
        let arr = [1, 2, 3, 4, "hello", "tor"];
        console.log(arr);
        console.log(typeof(arr));
        setData(userName);
    }
  return (
    <div>
      <input type="text" name="" id="name" placeholder='User name' onChange={(e) => setUserName(e.target.value)}/>
      <input type="password" name="" id="pass" placeholder='password' className='mt-3 ml-3'/>
      <button className='bg-blue-600 text-white px-2 ml-5' onClick={clickHandale}>Click</button>
    </div>
  )
}

export default Login
