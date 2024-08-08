import React from 'react'
import { useProduct } from '../../Contexts/ProductContext';

const Card = ({data}) => {
  const {image, title, price} = data;
  const {addToCart} = useProduct();
  return (
    <div className='card min-h-[60vh] w-[45%] rounded-2xl overflow-hidden'>
      <div className='h-[50%] bg-center bg-contain bg-no-repeat bg-white'
        style={{backgroundImage:`url("${image}")`}}
      >
      </div>
      <div className='bg-green-400 h-[50%] px-5 py-4 flex flex-col justify-between '>
        <h1 className='leading-5 text-xl font-semibold'>{title}</h1>
        <h2 className='font-bold text-2xl'><span><i className="fa-solid fa-dollar-sign"></i></span> {price}</h2>
        <button className='bg-slate-500 px-3 py-1 text-xl rounded-xl font-bold'
          onClick={() => addToCart(data)}
        >
            Add to cart
        </button>
      </div>
    </div>
  )
}

export default Card
