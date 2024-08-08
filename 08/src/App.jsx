import React, { useState } from 'react'
import UserContextsProvider from './Contexts/UserContextsProvider'
import Login from './Contexts/Components/Login'
import User from './Contexts/Components/User'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-gray-500'>
      <UserContextsProvider>
        <div className='h-screen flex flex-col justify-center items-center'>
          <Login />
          <User />
        </div>
    </UserContextsProvider>
    </div>
  )
}

export default App
