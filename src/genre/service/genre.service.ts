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

  findAll(): Promise<GenreDto[]> {
    return this.genreRepository.find();
  }
}
