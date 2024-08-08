import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='h-screen'
        style={{backgroundColor: color}}
      >

      </div>

      <div className='w-screen fixed bottom-8 flex flex-wrap justify-center items-center'>
        <div className='bg-white px-5 py-2 rounded-full flex flex-wrap justify-center items-center gap-x-5'>
          <button
            className='bg-[red] text-white px-5 py-1 rounded-full'
            onClick={() => setColor("red")}
          >Red</button>
          <button
            className='bg-[black] text-white px-5 py-1 rounded-full'
            onClick={() => setColor("black")}
          >black</button>
          <button
            className='bg-[blue] text-white px-5 py-1 rounded-full'
            onClick={() => setColor("blue")}
          >blue</button>
          <button
            className='bg-[green] text-white px-5 py-1 rounded-full'
            onClick={() => setColor("green")}
          >green</button>
          <button
            className='bg-[pink] text-white px-5 py-1 rounded-full'
            onClick={() => setColor("pink")}
          >pink</button>
          <button
            className='bg-[yellow] text-black px-5 py-1 rounded-full'
            onClick={() => setColor("yellow")}
          >yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
