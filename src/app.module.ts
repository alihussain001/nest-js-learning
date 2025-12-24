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

@Module({
  imports: [EmployeeModule],
  controllers: [AppController, ProductController, BookController, UserController],
  providers: [AppService, ProductService, BookService, UserService],
})
export class AppModule {}
