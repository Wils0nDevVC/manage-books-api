import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('books') 
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo libro' }) 
  @ApiResponse({ status: 201, description: 'Libro creado exitosamente', type: Book }) 
  @ApiResponse({ status: 400, description: 'Error en la solicitud' })
 async create(@Body() createBookDto: CreateBookDto) : Promise<Book>  {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los libros' }) 
  @ApiResponse({ status: 200, description: 'Lista de libros', type: [Book] })
  findAll() {
    return this.bookService.findAll();
  }

}
