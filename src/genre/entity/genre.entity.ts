import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Game } from '../../game/entity/game.entity';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @OneToMany((type) => Game, (game) => game.genre, {
    primary: true,
    cascade: ['insert'],
  })
  game: Game[];
}
