import React from 'react'
import Card from './Card'
import Data from './Data'

const Cardframe = ({addToCart}) => {
  return (
    <div className='w-[60vw] bg-slate-400 px-5 py-10 flex justify-between flex-wrap gap-y-9'>
      {
        Data.map((item) => {
            return <Card key={item.id} item={item} addToCart={addToCart}/>
        })
      }
    </div>
  )
}

export default Cardframe
