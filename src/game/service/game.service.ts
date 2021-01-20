import { Injectable } from '@nestjs/common';
import { GameDto } from '../dto/game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from '../entity/game.entity';
import { Repository } from 'typeorm';

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
