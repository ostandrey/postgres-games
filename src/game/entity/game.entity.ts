import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Genre } from '../../genre/entity/genre.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column()
  release_date: string;

  @ManyToOne((type) => Genre, (genre) => genre.game, {
    primary: true,
    cascade: ['insert'],
  })
  genre: Genre;
}
