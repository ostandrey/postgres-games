import { Body, Controller, Get, Post } from '@nestjs/common';
import { GenreService } from '../service/genre.service';
import { GenreDto } from '../dto/genre.dto';

@Controller('genres')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Post('/')
  create(@Body() genreDto: GenreDto): Promise<GenreDto> {
    return this.genreService.create(genreDto);
  }

  @Get('/')
  findAll(): Promise<GenreDto[]> {
    return this.genreService.findAll();
  }
}
