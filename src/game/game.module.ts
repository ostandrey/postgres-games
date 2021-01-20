import { Module } from '@nestjs/common';
import { GameController } from './controller/game.controller';
import { GameService } from './service/game.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entity/game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Game
  ])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
