import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Author } from 'src/author/entities/author.entity';

@Schema()
export class Book extends Document {


  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  chapters: number;

  @Prop({ required: true })
  pages: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Author' }] }) 
  authors: Author[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
