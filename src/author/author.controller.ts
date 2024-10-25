import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@ApiTags('authors') 
@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo autor' }) 
  @ApiResponse({ status: 201, description: 'Autor creado exitosamente.', type: Author }) 
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  async create(@Body() createAuthorDto: CreateAuthorDto) : Promise<Author>{ 

    return this.authorService.create(createAuthorDto);

  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los autores' }) 
  @ApiResponse({ status: 200, description: 'Lista de autores', type: [Author] }) 
  async findAll() : Promise<Author[]>{
    return this.authorService.findAll();
  }

 
}
