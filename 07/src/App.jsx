import { useState } from 'react'
import {Dashboard, Header, Home, Login, Signup} from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Login />
      <Signup />
      <Home />
      <Dashboard />
    </>
  )
}

export default App
