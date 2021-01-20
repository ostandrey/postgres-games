import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenreDto } from '../dto/genre.dto';
import { Genre } from '../entity/genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  create(genre: GenreDto): Promise<GenreDto> {
    return this.genreRepository.save(genre);
  }

  getAll(): Promise<GenreDto[]> {
    return this.genreRepository.find();
  }

  getOne(id): Promise<GenreDto> {
    return this.genreRepository.findOne(id);
  }

  delete(id) {
    return this.genreRepository.delete(id);
  }

  update(id, updateGenreDto: GenreDto): Promise<GenreDto> {
    return this.genreRepository.save({
      id: Number(id),
      ...updateGenreDto,
    });
  }
}
