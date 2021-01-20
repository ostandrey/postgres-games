import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
  getAll(): Promise<GenreDto[]> {
    return this.genreService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id): Promise<GenreDto> {
    return this.genreService.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id) {
    return this.genreService.delete(id);
  }

  @Put('/:id')
  update(@Param('id') id, @Body() updateGenreDto: GenreDto) {
    return this.genreService.update(id, updateGenreDto);
  }
}
