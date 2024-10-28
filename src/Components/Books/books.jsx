import React, { useState } from 'react'

function books() {
    const books = useState([
        {
            "id": 1,
            "title": "Harry Potter and the Philosopher's Stone",
            "authorId": 1,
            "categoryId": 1,
            "price": 29.99,
            "isbn": "978-0747532699",
            "publishedDate": "1997-06-26",
            "summary": "A young wizard embarks on his journey at Hogwarts School of Witchcraft and Wizardry.",
            "stockQuantity": 50
          },
          {
            "id": 2,
            "title": "1984",
            "authorId": 2,
            "categoryId": 1,
            "price": 19.99,
            "isbn": "978-0451524935",
            "publishedDate": "1949-06-08",
            "summary": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
            "stockQuantity": 35
          },
          {
            "id": 3,
            "title": "Philosophiæ Naturalis Principia Mathematica",
            "authorId": 3,
            "categoryId": 3,
            "price": 49.99,
            "isbn": "978-0198503644",
            "publishedDate": "1687-07-05",
            "summary": "Isaac Newton's work laying the foundation for classical mechanics.",
            "stockQuantity": 20
          }
    ]);
  return (
    <div>books</div>
  )
}

export default books