import React from 'react'

function BookCard({ image, title, isbn, publishedDate, summary, stockQuantity, author, category}) {
  return (
    <div className='flex flex-col justify-between h-auto p-4 shadow-2xl w-80 rounded-xl hover:shadow-blue-950/65'>
        <img src={image} alt={title} className='self-center object-contain p-2 cursor-pointer w-fit h-60' />
        <h1 className='text-xl text-center text-blue-950/85'>{title ? title : 'Not Available'}</h1>
        <h4>ISBN - {isbn ? isbn : 'N/A'}</h4>
        <div>
            <p>{category ? category : 'N/A'}</p>
            <p>{stockQuantity ? stockQuantity : 0}</p>
        </div>
        <h4>Author : {author ? author : 'N/A'}</h4>
    </div>
  )
}

export default BookCard
