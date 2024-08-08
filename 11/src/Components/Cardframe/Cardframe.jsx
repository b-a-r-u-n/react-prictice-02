import React from 'react'
import Card from '../Card/Card'
import { useProduct } from '../../Contexts/ProductContext'

const Cardframe = () => {
  const { datas } = useProduct()
  return (
    <div className='w-[60%] bg-slate-600 px-7 py-10 flex justify-evenly flex-wrap gap-y-10'>
      {
        datas.map((data) => {
          return(
            <Card key={data.id} data={data} />
          )
        })
      }
    </div>
  )
}

export default Cardframe
