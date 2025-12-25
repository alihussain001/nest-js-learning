import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { EmployeeModule } from './employee/employee.module';
import { MovieService } from './movie/movie.service';
import { MovieController } from './movie/movie.controller';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [EmployeeModule, CategoryModule],
  controllers: [AppController, ProductController, BookController, UserController, MovieController],
  providers: [AppService, ProductService, BookService, UserService, MovieService],
})
export class AppModule {}
