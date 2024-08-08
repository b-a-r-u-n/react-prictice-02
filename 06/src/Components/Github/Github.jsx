import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData();
  return (
    <div className='bg-gray-900 min-h-screen flex justify-center items-center'>
      <div className='p-4 bg-gray-400'>
        <img className='rounded-full' src={data.avatar_url} alt="" width={300}/>
        <h1>{data.followers}</h1>
      </div>
    </div>
  )
}

export default Github

export const fetchedData = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}



