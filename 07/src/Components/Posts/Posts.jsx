import React from 'react'

const Posts = ({post}) => {
    const {id, title, content, image} = post;
  return (
    <div className='flex gap-5 items-center py-5 border-b-[1px] border-gray-500'>
      <div className='h-15 w-20 overflow-hidden'>
        <img src={image} alt="" height="100%" width="100%"/>
      </div>
      <div>
        <h3 className='font-semibold leading-4 text-sm'>{title}</h3>
        <p className='font-normal text-sm mt-2'>{content}</p>
      </div>
    </div>
  )
}

export default Posts
// height={50} width={80}