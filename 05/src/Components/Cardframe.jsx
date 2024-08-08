import React from 'react'
import Card from './Card'

const Cardframe = ({dataInfo}) => {
  return (
    <>
      <h1 className='text-white text-3xl font-semibold text-center py-5'>Photos</h1>
      <div className='flex justify-around flex-wrap gap-6'>
      {
        dataInfo.map((item,index) => {
          return (
            <Card key={item.id} item={item}/>
          )
        })
      }
      </div>
    </>
  )
}

export default Cardframe
