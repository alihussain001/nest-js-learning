import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    private books = [
        {
    "id": 1,
    "name": "Clean Code",
    "author": "Robert C. Martin"
  },
  {
    "id": 2,
    "name": "The Pragmatic Programmer",
    "author": "Andrew Hunt & David Thomas"
  },
  {
    "id": 3,
    "name": "Design Patterns",
    "author": "Erich Gamma et al."
  },
  {
    "id": 4,
    "name": "You Don't Know JS",
    "author": "Kyle Simpson"
  },
  {
    "id": 5,
    "name": "Refactoring",
    "author": "Martin Fowler"
  },
  {
    "id": 6,
    "name": "Introduction to Algorithms",
    "author": "Thomas H. Cormen"
  },
  {
    "id": 7,
    "name": "JavaScript: The Good Parts",
    "author": "Douglas Crockford"
  },
  {
    "id": 8,
    "name": "Effective TypeScript",
    "author": "Dan Vanderkam"
  },
  {
    "id": 9,
    "name": "Domain-Driven Design",
    "author": "Eric Evans"
  },
  {
    "id": 10,
    "name": "Eloquent JavaScript",
    "author": "Marijn Haverbeke"
  }
    ];

    getAllBooks(){
        return this.books;
    }
    getBooksById(id:number){
        return this.books.find((book) => book.id === id)
    }
}
