import React from 'react'

function CategoryCard({ name, description }) {
  return (
    <div className='group flex flex-col space-x-4 px-3 py-4 w-1/4 h-1/4 bg-white shadow-2xl rounded-lg hover:bg-blue-900/65'>
        <h3 className=' text-blue-950/65 font-bold p-2 group-hover:text-white'>{name}</h3>
        <p className=' text-blue-950/45 text-justify group-hover:text-white'>{description}</p>
    </div>
  )
}

export default CategoryCard