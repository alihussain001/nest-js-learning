import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService){}
    
    @Get()
    getBooks(){
        return this.bookService.getAllBooks();
    }
    @Get(':id')
    getBooksById(@Param ('id') id : string){
        return this.bookService.getBooksById(Number(id));
    }
}
