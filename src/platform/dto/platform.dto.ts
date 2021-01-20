import { IsString } from 'class-validator';

export class PlatformDto {
  @IsString()
  title: string;
}
