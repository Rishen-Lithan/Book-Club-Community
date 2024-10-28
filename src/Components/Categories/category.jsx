import React, { useState } from 'react'
import CategoryCard from './category-card';

function Category() {
  const [category, setCategory] = useState([
    {
      id: 1,
      categoryName: "Fiction",
      description: "Dive into imaginative worlds and captivating stories that transport you to places beyond reality, filled with intriguing characters and unforgettable adventures."
    },
    {
      id: 2,
      categoryName: "Non-Fiction",
      description: "Explore real-life experiences, factual accounts, and insightful perspectives on various subjects, from history to science, to broaden your understanding of the world."
    },
    {
      id: 3,
      categoryName: "Science",
      description: "Discover the wonders of the universe, groundbreaking research, and the intricate workings of nature, presented in a way that fuels curiosity and expands knowledge."
    },
    {
      id: 4,
      categoryName: "History",
      description: "Travel back in time with engaging narratives and detailed accounts that bring historical events, influential figures, and cultural movements to life."
    },
    {
      id: 5,
      categoryName: "Adventure",
      description: "Embark on thrilling journeys across exotic landscapes, face incredible challenges, and experience heart-pounding tales of courage, resilience, and discovery."
    },
    {
      id: 6,
      categoryName: "Novels",
      description: "Enjoy a wide variety of compelling stories that range from contemporary drama to timeless romance, offering readers deep insights into the human experience."
    }
  ]);
  
  return (
    <div className="h-screen bg-white">
        <div className="bg-blue-900/65 h-1/4 flex flex-col items-start justify-center">
          <h1 className="font-semibold text-[40px] ml-10 text-gray-100">Book Categories</h1>
          <p className='ml-10 text-gray-100 font-semibold mt-2'>
            Explore our diverse collection of books across genres, from timeless classics to the latest bestsellers - find your next great read today!
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center h-3/4 gap-4 p-4">
          {category.map((bookCategory) => (
            <CategoryCard key={bookCategory.id} name={bookCategory.categoryName} description={bookCategory.description} />
          ))}
        </div>
    </div>

  )
}

export default Category