import React from 'react'
import { useProduct } from '../../Contexts/ProductContext'

const Cartdata = ({item}) => {
    const {handaleCount} = useProduct();
  return (
    <div className='flex justify-between items-center mb-6'>
        <div className='h-16 w-[20%] bg-center bg-cover'
            style={{backgroundImage:`url(${item.image})`}}
        >
        </div>
        <div className='w-[60%] h-16 text-white flex flex-col justify-between'>
            <h1 className='text-sm leading-4'>{item.title}</h1>
            <h3><span><i className="fa-solid fa-dollar-sign"></i></span> {item.price}</h3>
        </div>
        <div className='w-[15%] flex justify-between'>
            <button className='bg-green-400 px-1 rounded-md flex justify-center items-center'
                onClick={() => handaleCount(item, 1)}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
            <span className='font-bold'>{item.quantity}</span>
            <button className='bg-red-400 px-1 rounded-md flex justify-center items-center'
                onClick={() => handaleCount(item, -1)}
            >
                <i className="fa-solid fa-minus"></i>
            </button>
        </div>
    </div>
  )
}

export default Cartdata
