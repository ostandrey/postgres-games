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

  findAll(): Promise<GameDto[]> {
    return this.gameRepository.find();
  }
}
