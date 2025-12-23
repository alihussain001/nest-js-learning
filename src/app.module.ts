import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, ProductController, BookController],
  providers: [AppService, ProductService, BookService],
})
export class AppModule {}
