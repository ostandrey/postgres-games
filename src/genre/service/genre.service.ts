import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
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

  getAll(request, page: number, items: number, sort): Promise<GenreDto[]> {
    if(request.title) {
      const searchString = request.title;
      return this.genreRepository.find({title: Like(`%${searchString}%`)});
    }
    else if(items) {
      if (items == 10 || items == 20 || items == 50) {
        return this.genreRepository.find({
          take: items,
          skip: page * items,
        })
      }
    }
    else {
      if(sort == 'asc') {
        return this.genreRepository.find({
          order: {
            title: 1,
          }
        });
      }
      else if(sort == 'desc') {
        return this.genreRepository.find({
          order: {
            title: -1,
          }
        });
      }
    }
    return this.genreRepository.find()
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
