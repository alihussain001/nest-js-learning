import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    movies = [
        {
    "id": 1,
    "name": "Inception",
    "releaseDate": "2010-07-16"
  },
  {
    "id": 2,
    "name": "The Dark Knight",
    "releaseDate": "2008-07-18"
  },
  {
    "id": 3,
    "name": "Interstellar",
    "releaseDate": "2014-11-07"
  },
  {
    "id": 4,
    "name": "The Matrix",
    "releaseDate": "1999-03-31"
  },
  {
    "id": 5,
    "name": "Parasite",
    "releaseDate": "2019-05-30"
  },
  {
    "id": 6,
    "name": "Avengers: Endgame",
    "releaseDate": "2019-04-26"
  },
  {
    "id": 7,
    "name": "Gladiator",
    "releaseDate": "2000-05-05"
  },
  {
    "id": 8,
    "name": "Titanic",
    "releaseDate": "1997-12-19"
  },
  {
    "id": 9,
    "name": "Joker",
    "releaseDate": "2019-10-04"
  },
  {
    "id": 10,
    "name": "Forrest Gump",
    "releaseDate": "1994-07-06"
  }
    ];

    getAllMovies(){
        return this.movies;
    }
    getMoviesById(id: number){
        return this.movies.find((movie) => movie.id === id)
    }
}
