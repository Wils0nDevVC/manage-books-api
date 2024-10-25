import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import { Book } from 'src/book/entities/book.entity';

@Schema()
export class Author extends Document {
  
  @ApiProperty({ description: 'Nombre del autor' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ type: [String], description: 'Libros asociados al autor', required: false }) 
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Book' }] }) 
  books: Book[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
