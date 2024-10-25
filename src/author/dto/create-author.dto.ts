import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAuthorDto {

  @ApiProperty({
    description: 'El nombre del autor',
    example: 'J.K. Rowling', 
  })
  @IsString()
  @IsNotEmpty()
  name: string; 

  
  @ApiProperty({
    description: 'Array de IDs de libros asociados al autor (ObjectId de MongoDB)',
    example: ['671af24789cc951a3d44cb2f'], 
    required: false,
  })
  @IsArray()
  @IsOptional()
  @IsMongoId({ each: true }) 
  books?: string[]; 
}
