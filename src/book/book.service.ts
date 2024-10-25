import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Author } from 'src/author/entities/author.entity';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @InjectModel(Author.name) private authorModel: Model<Author>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    try {
      const { authors, ...bookData } = createBookDto;

      if (authors && authors.length > 0) {
        const foundAuthors = await this.authorModel
          .find({ id: { $in: authors } })
          .exec();
        const createdBook = new this.bookModel({
          ...bookData,
          authors: foundAuthors.map((author) => author._id),
        });
        return createdBook.save();
      }

      const createdBook = new this.bookModel(bookData);
      return createdBook.save();
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    return await this.bookModel.find().populate('authors').exec();
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `El libro ya existe en BD ${JSON.stringify(error.keyValue)}`,
      );
    }
  }
}
