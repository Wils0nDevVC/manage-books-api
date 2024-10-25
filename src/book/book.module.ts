import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './entities/book.entity';
import { ConfigModule } from '@nestjs/config';
import { Author, AuthorSchema } from 'src/author/entities/author.entity';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }])
  
  
  ],
    
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
