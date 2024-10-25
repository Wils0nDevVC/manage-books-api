import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './entities/author.entity';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {

  constructor(
    @InjectModel(Author.name)
    private readonly authorModel: Model<Author>,

  ){

  }

  async create(createAuthorDto: CreateAuthorDto) : Promise<Author>{

    createAuthorDto.name = createAuthorDto.name.toLocaleLowerCase();

    try {
      const author = await this.authorModel.create(createAuthorDto);
      return author;
    } catch (error) {
      this.handleExceptions(error);
    }


  }


  async findAll() :Promise<Author[]> {

    return await this.authorModel.find()
   
  }



  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `El Author ya existe en BD ${JSON.stringify(error.keyValue)}`,
      );
    }
    throw new InternalServerErrorException(
      `No puede actualizar el pokemon - revise el log`,
    );
  }
}
