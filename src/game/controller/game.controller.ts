import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Put, Query,
} from '@nestjs/common';
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
  getAll(@Query() query: string, @Query('page') page: number, @Query('items_per_page') items: number,): Promise<GameDto[]> {
    return this.gameService.getAll(query, page, items);
  }

  @Get('/:id')
  getOne(@Param('id') id): Promise<GameDto> {
    return this.gameService.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id) {
    return this.gameService.delete(id);
  }

  @Put('/:id')
  update(@Param('id') id, @Body() updateGameDto: GameDto): Promise<GameDto> {
    return this.gameService.update(id, updateGameDto);
  }
}
