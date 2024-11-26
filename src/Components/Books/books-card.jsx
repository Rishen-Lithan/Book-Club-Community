import React from 'react'

function BookCard({ image, title, isbn, publishedDate, summary, stockQuantity, author, category}) {
  return (
    <div className='flex flex-col justify-evenly h-auto p-4 shadow-2xl w-80 rounded-xl hover:shadow-blue-950/65 m-4'>
        <img src={image} alt={title} className='self-center object-contain p-2 cursor-pointer w-fit h-60' />
        <h1 className='text-base text-center text-blue-950/85 font-extrabold'>{title ? title : 'Not Available'}</h1>
        <h4 className='mt-2 text-blue-950/55 font-bold'>ISBN - {isbn ? isbn : 'N/A'}</h4>
        <div className='flex flex-row justify-between'>
            <p className={`${category === 'Fiction' ? 'text-pink-600/70 font-bold' : 'text-teal-950/75 font-bold'}`}>{category ? category : 'N/A'}</p>
            <p className={`${stockQuantity < 25 ? 'bg-rose-700/65 border-solid border-2 border-rose-700/65 hover:bg-white hover:text-rose-700/65 hover:border-solid hover:border-rose-700 hover:border-2 hover:font-semibold text-white cursor-default' : 'bg-blue-900/75 hover:bg-white hover:border-2 hover:border-blue-900/75 hover:border-solid hover:font-semibold border-2 border-solid border-blue-900/75 text-white hover:text-blue-900/75 cursor-default'} w-24 text-center rounded-md p-1`}>
              Qty : {stockQuantity ? stockQuantity : 0}
            </p>
        </div>
        <h4 className='text-blue-950/65 font-bold'>Author : {author ? author : 'N/A'}</h4>
    </div>
  )
}

export default BookCard
