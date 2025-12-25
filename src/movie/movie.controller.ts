import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService : MovieService){}

    @Get()
    getMovies(){
        return this.movieService.getAllMovies();
    }
    @Get(':id')
    getMoviesById(@Param('id') id:string){
        return this.movieService.getMoviesById(Number(id));
    }
}

