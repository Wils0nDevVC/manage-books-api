import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsMongoId, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateBookDto {

  @ApiProperty({
    description: 'El título del libro',
    example: 'El Alquimista', // Ejemplo de título de libro
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Número de capítulos del libro',
    example: 11, 
  })
  @IsInt()
  @Min(0)
  chapters: number;

  @ApiProperty({
    description: 'Número de páginas del libro',
    example: 208,
  })
  @IsInt()
  @Min(0)
  pages: number;

  @ApiProperty({
    description: 'Array de IDs de autores asociados al libro (ObjectId de MongoDB)',
    example: ['671af24789cc951a3d44cb2f'], // Ejemplo de ID de autor
    required: false,
  })
  @IsArray()
  @IsOptional()
  @IsMongoId({ each: true }) // Validar que cada autor sea un ObjectId
  authors?: string[];

}
