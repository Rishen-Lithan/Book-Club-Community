import React from 'react'

function AuthorCard({ name, bio, dateOfBirth, nationality, image}) {
  return (
    <div className='w-80 h-auto p-4 flex flex-col justify-between mb-4 rounded-md shadow-lg hover:shadow-gray-700'>
        <img src={image} alt={name} className=' cursor-pointer object-contain w-60 h-60 mt-2 self-center' />
        <h1 className=' text-black font-bold text-lg'>{name}</h1>
        <div className=' flex flex-row justify-between'>
            <p className=' text-gray-600 font-medium'>{dateOfBirth}</p>
            <p className={`w-24 text-center rounded text-gray-100 px-2 ${nationality === 'British' ? 'bg-blue-900/75' : 'bg-teal-700/75'}`}>
              {nationality}
            </p>
        </div>
        <p className=' text-justify text-gray-400 mt-[10px]'>{bio}</p>
    </div>
  )
}

export default AuthorCard