import { IsNumber, IsString } from 'class-validator';

export class GameDto {

  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly release_date: string;
}
