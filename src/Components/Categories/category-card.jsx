import React from 'react'

function CategoryCard({ name, description }) {
  return (
    <div className='flex flex-col w-1/4 px-3 py-4 space-x-4 bg-white rounded-lg shadow-2xl group h-[40%] hover:bg-blue-900/65'>
        <h3 className='p-2 font-bold text-blue-950/65 group-hover:text-white'>{name}</h3>
        <p className='text-justify text-blue-950/45 group-hover:text-white'>{description}</p>
    </div>
  )
}

export default CategoryCard