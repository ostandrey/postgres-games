import { IsString } from 'class-validator';

export class PublisherDto {
  @IsString()
  title: string;
}
