import { Module } from '@nestjs/common';
import { GenreController } from './controller/genre.controller';
import { GenreService } from './service/genre.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entity/genre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
