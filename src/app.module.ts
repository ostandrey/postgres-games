import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game/entity/game.entity';
import { GenreModule } from './genre/genre.module';
import { Genre } from './genre/entity/genre.entity';
import { PlatformModule } from './platform/platform.module';
import { Platform } from './platform/entity/platform.entity';
import { PublisherModule } from './publisher/publisher.module';
import { Publisher } from './publisher/entity/publisher.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'postgres-games',
      entities: [Game, Genre, Platform, Publisher],
      synchronize: true,
    }),
    GameModule,
    GenreModule,
    PlatformModule,
    PublisherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
