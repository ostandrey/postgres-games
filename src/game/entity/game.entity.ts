import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Genre } from '../../genre/entity/genre.entity';
import { Platform } from '../../platform/entity/platform.entity';
import { Publisher } from '../../publisher/entity/publisher.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  release_date: string;

  @ManyToOne((type) => Genre, (genre) => genre.game, {
    primary: true,
    cascade: ['insert'],
  })
  genre: Genre;

  @ManyToOne((type) => Platform, (platform) => platform.game, {
    primary: true,
    cascade: ['insert'],
  })
  platform: Platform;

  @ManyToOne((type) => Publisher, (publisher) => publisher.game, {
    primary: true,
    cascade: ['insert'],
  })
  publisher: Publisher;
}
