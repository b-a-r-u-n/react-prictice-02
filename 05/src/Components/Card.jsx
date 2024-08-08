import React from 'react'

const Card = ({item}) => {
    const {id,title,url} = item;
  return (
    <div className='w-full py-5 px-4 border-white border-2 sm:w-[22%] flex flex-col items-center gap-4'>
        <div className='h-52 w-52 bg-contain'
            style={{backgroundImage: `url(${url})`}}
        >
            
        </div>
        <h1 className='text-white text-center'>{title}</h1>
    </div>
  )
}

export default Card
