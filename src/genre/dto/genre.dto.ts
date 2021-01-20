import { IsString } from 'class-validator';

export class GenreDto {
  @IsString()
  title: string;
}
