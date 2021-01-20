import { Controller, Post, Get, Body } from '@nestjs/common';
import { GameService } from '../service/game.service';
import { GameDto } from '../dto/game.dto';

@Controller('games')
export class GameController {

  constructor(private gameService: GameService) {}

  @Post('/')
  create(@Body() gameDto: GameDto): Promise<GameDto> {
    return this.gameService.create(gameDto);
  }

  @Get('/')
  findAll(): Promise<GameDto[]> {
    return this.gameService.findAll();
  }
}
