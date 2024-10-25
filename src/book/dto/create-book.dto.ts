import { IsArray, IsInt, IsMongoId, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateBookDto {


  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @Min(0)
  chapters: number;

  @IsInt()
  @Min(0)
  pages: number;

  @IsArray()
  @IsOptional()
  @IsMongoId({ each: true }) // Validar que cada autor sea un ObjectId
  authors?: string[];

}
