import { useState } from 'react'
import {Header, Footer} from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-black'>
      <Header />
      <Footer />
    </div>
  )
}

export default App
