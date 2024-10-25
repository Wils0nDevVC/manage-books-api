import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Book } from 'src/book/entities/book.entity';

@Schema()
export class Author extends Document {
  
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Book' }] }) 
  books: Book[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
