import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
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

  getAll(): Promise<GameDto[]> {
    return this.gameRepository.find();
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
