import React, { useState } from 'react'
import Book1 from '../../Assets/Images/book1.jpeg';
import Book2 from '../../Assets/Images/book2.jpeg';
import Book3 from '../../Assets/Images/book3.jpeg';
import Book4 from '../../Assets/Images/book4.jpeg';
import Book5 from '../../Assets/Images/book5.jpeg';
import Book6 from '../../Assets/Images/book6.jpeg';
import Book7 from '../../Assets/Images/book7.jpeg';
import Book8 from '../../Assets/Images/book8.jpeg';
import Book9 from '../../Assets/Images/book9.jpeg';
import Book10 from '../../Assets/Images/book10.jpeg';
import BookCard from './books-card';

function Books() {
  const [books, setBooks] = useState([
    {
        "id": 1,
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "category": "Fantasy",
        "price": 29.99,
        "isbn": "978-0747532699",
        "publishedDate": "1997-06-26",
        "summary": "A young wizard embarks on his journey at Hogwarts School of Witchcraft and Wizardry.",
        "stockQuantity": 50,
        "image": Book1
    },
    {
        "id": 2,
        "title": "1984",
        "author": "George Orwell",
        "category": "Dystopian",
        "price": 19.99,
        "isbn": "978-0451524935",
        "publishedDate": "1949-06-08",
        "summary": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        "stockQuantity": 35,
        "image": Book2
    },
    {
        "id": 3,
        "title": "Philosophiae Naturalis Principia Mathematica",
        "author": "Isaac Newton",
        "category": "Science",
        "price": 49.99,
        "isbn": "978-0198503644",
        "publishedDate": "1687-07-05",
        "summary": "Isaac Newton's work laying the foundation for classical mechanics.",
        "stockQuantity": 20,
        "image": Book3
    },
    {
        "id": 4,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "category": "Fiction",
        "price": 24.99,
        "isbn": "978-0061120084",
        "publishedDate": "1960-07-11",
        "summary": "A novel about the serious issues of rape and racial inequality.",
        "stockQuantity": 40,
        "image": Book4
    },
    {
        "id": 5,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "category": "Fiction",
        "price": 15.99,
        "isbn": "978-0743273565",
        "publishedDate": "1925-04-10",
        "summary": "A story about the young and mysterious millionaire Jay Gatsby and his passion for the beautiful Daisy Buchanan.",
        "stockQuantity": 30,
        "image": Book5
    },
    {
        "id": 6,
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "category": "Adventure",
        "price": 18.99,
        "isbn": "978-1503280786",
        "publishedDate": "1851-10-18",
        "summary": "Captain Ahab's obsessive quest to kill the giant white sperm whale, Moby Dick.",
        "stockQuantity": 25,
        "image": Book6
    },
    {
        "id": 7,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "category": "Romance",
        "price": 10.99,
        "isbn": "978-1503290563",
        "publishedDate": "1813-01-28",
        "summary": "A romantic novel of manners that explores issues of marriage, money, and social class.",
        "stockQuantity": 45,
        "image": Book7
    },
    {
        "id": 8,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "category": "Fiction",
        "price": 22.99,
        "isbn": "978-0316769488",
        "publishedDate": "1951-07-16",
        "summary": "A story about teenage angst and alienation.",
        "stockQuantity": 37,
        "image": Book8
    },
    {
        "id": 9,
        "title": "The Odyssey",
        "author": "Homer",
        "category": "Epic",
        "price": 25.99,
        "isbn": "978-0140268867",
        "publishedDate": "800 BC",
        "summary": "The epic journey of Odysseus as he returns home after the Trojan War.",
        "stockQuantity": 15,
        "image": Book9
    },
    {
        "id": 10,
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "category": "Historical Fiction",
        "price": 39.99,
        "isbn": "978-1400079988",
        "publishedDate": "1869-01-01",
        "summary": "A novel that chronicles the French invasion of Russia and its impact on Tsarist society.",
        "stockQuantity": 20,
        "image": Book10
    }
  ]);

  return (
    <div>
      <h1 className='bg-blue-950/75 p-4 h-20 flex flex-col justify-center text-gray-200 text-2xl font-semibold'>Our Popular Book Collection</h1>
      <div className='flex flex-wrap justify-evenly'>
        {books.length > 0 && books.map((book) => {
          return (
            <BookCard
              key={book.id}
              image={book.image}
              title={book.title}
              isbn={book.isbn}
              publishedDate={book.publishedDate}
              summary={book.summary}
              stockQuantity={book.stockQuantity}
              author={book.author}
              category={book.category}
            />
          )
        })}
      </div>
      
    </div>
  )
}

export default Books