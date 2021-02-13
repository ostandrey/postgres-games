import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GameDto } from '../dto/game.dto';
import { Game } from '../entity/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  create(game: GameDto): Promise<GameDto> {
    return this.gameRepository.save(game);
  }

  getAll(request, page: number, items: number, sort): Promise<GameDto[]> {
    if(request.title) {
      const searchString = request.title;
      return this.gameRepository.find({
        relations: ['genre', 'platform', 'publisher'],
        where: {title: Like(`%${searchString}%`)}
      });
    }
    else if(items) {
      if (items == 10 || items == 20 || items == 50) {
        return this.gameRepository.find({
          take: items,
          skip: page * items,
          relations: ['genre', 'platform', 'publisher'],
        })
      }
    }
    else {
      if(sort == 'asc') {
        return this.gameRepository.find({
          order: {
            title: 1,
          },
          relations: ['genre', 'platform', 'publisher'],
        });
      }
      else if(sort == 'desc') {
        return this.gameRepository.find({
          order: {
            title: -1,
          },
          relations: ['genre', 'platform', 'publisher'],
        });
      }
    }
    return this.gameRepository.find({
      relations: ['genre', 'platform', 'publisher'],
    });
  }

  getOne(id): Promise<GameDto> {
    return this.gameRepository.findOne(id);
  }

  delete(id) {
    return this.gameRepository.delete(id);
  }

  update(id, updateGameDto: GameDto): Promise<GameDto> {
    return this.gameRepository.save({
      id: Number(id),
      ...updateGameDto,
    });
  }
}
