import React from 'react'
import { useState } from 'react'
import Author1 from '../../Assets/Images/author1.jpeg'
import Author2 from '../../Assets/Images/author2.jpeg'
import Author3 from '../../Assets/Images/author3.jpeg'
import Author4 from '../../Assets/Images/author4.jpeg'
import Author5 from '../../Assets/Images/author5.jpeg'
import Author6 from '../../Assets/Images/author6.jpeg'
import Author7 from '../../Assets/Images/author7.jpeg'
import Author8 from '../../Assets/Images/author8.jpeg'
import Author9 from '../../Assets/Images/author9.jpeg'
import Author10 from '../../Assets/Images/author10.jpeg'
import AuthorCard from './author-card'

function Authors() {
    const [bookAuthors, setBookAuthors] = useState([
        {
            "id": 1,
            "name": "J.K. Rowling",
            "bio": "British author, best known for the Harry Potter series.",
            "dateOfBirth": "1965-07-31",
            "nationality": "British",
            "image": Author1
        },
        {
            "id": 2,
            "name": "George Orwell",
            "bio": "English novelist and essayist, known for '1984' and 'Animal Farm'.",
            "dateOfBirth": "1903-06-25",
            "nationality": "British",
            "image": Author2
        },
        {
            "id": 3,
            "name": "Isaac Newton",
            "bio": "English mathematician and physicist, author of 'Philosophiæ Naturalis Principia Mathematica'.",
            "dateOfBirth": "1643-01-04",
            "nationality": "British",
            "image": Author3
        },
        {
            "id": 4,
            "name": "Jane Austen",
            "bio": "English novelist known for works like 'Pride and Prejudice' and 'Sense and Sensibility'.",
            "dateOfBirth": "1775-12-16",
            "nationality": "British",
            "image": Author4
        },
        {
            "id": 5,
            "name": "Mark Twain",
            "bio": "American writer known for 'The Adventures of Tom Sawyer' and 'Adventures of Huckleberry Finn'.",
            "dateOfBirth": "1835-11-30",
            "nationality": "American",
            "image": Author5
        },
        {
            "id": 6,
            "name": "Charles Dickens",
            "bio": "English writer and social critic, famous for 'A Tale of Two Cities' and 'Great Expectations'.",
            "dateOfBirth": "1812-02-07",
            "nationality": "British",
            "image": Author6
        },
        {
            "id": 7,
            "name": "Leo Tolstoy",
            "bio": "Russian author known for 'War and Peace' and 'Anna Karenina'.",
            "dateOfBirth": "1828-09-09",
            "nationality": "Russian",
            "image": Author7
        },
        {
            "id": 8,
            "name": "Gabriel García Márquez",
            "bio": "Colombian novelist, known for 'One Hundred Years of Solitude' and 'Love in the Time of Cholera'.",
            "dateOfBirth": "1927-03-06",
            "nationality": "Colombian",
            "image": Author8
        },
        {
            "id": 9,
            "name": "Arthur conan doyle",
            "bio": "Sir Arthur Ignatius Conan Doyle KStJ, DL was a British writer and physician.",
            "dateOfBirth": "1859-05-22",
            "nationality": "British",
            "image": Author9
        },
        {
            "id": 10,
            "name": "Agatha Christie",
            "bio": "British writer, famous for her detective novels, especially those revolving around Hercule Poirot.",
            "dateOfBirth": "1890-09-15",
            "nationality": "British",
            "image": Author10
        }
    ]);
    
  return (
    <div className=' px-2 py-2'>
        <h1 className='font-semibold text-[30px] mb-[17px] ml-4'>Book Authors</h1>
        <div className='flex flex-wrap justify-evenly'>
            {bookAuthors.length > 0 && bookAuthors.map((author) => {
                return (
                    <AuthorCard
                        key={author.id}
                        image={author.image}
                        name={author.name}
                        dateOfBirth={author.dateOfBirth}
                        nationality={author.nationality}
                        bio={author.bio}
                    />
                );
            })}
        </div>
    </div>
    
  )
}

export default Authors