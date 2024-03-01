import React from 'react'

const CategoryCards = ({title, desc, img}) => {
   
  return (
      <div className='shadow-lg w-72 m-auto py-6 px-5 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
        <div className='w-full m-auto flex justify-center items-center'>
        <img src={img} alt="" className='bg-orange-100 p-5 rounded-full w-28 h-28' />
        </div>
        <div className='mt-5 space-y-1'>
        <h2 className='font-semibold'>{title}</h2>
        <h4>{desc}</h4>
        </div>
      </div>
  )
}

export default CategoryCards
