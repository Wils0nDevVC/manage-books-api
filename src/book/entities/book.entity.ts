import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import { Author } from 'src/author/entities/author.entity';

@Schema()
export class Book extends Document {

  @ApiProperty({ description: 'Título del libro' })
  @Prop({ required: true })
  title: string;

  @ApiProperty({ description: 'Número de capítulos en el libro' }) 
  @Prop({ required: true })
  chapters: number;

  @ApiProperty({ description: 'Número de páginas en el libro' })
  @Prop({ required: true })
  pages: number;

  @ApiProperty({ type: [String], description: 'Autores asociados al libro', required: false })
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Author' }] }) 
  authors: Author[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
