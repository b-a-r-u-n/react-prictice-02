import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const {id} = useParams();
  return (
    <div className='bg-gray-900 min-h-screen flex justify-center items-center'>
      <h1 className='text-3xl text-orange-500 bg-green-200'>
        id = {id}
      </h1>
    </div>
  )
}

export default Params
