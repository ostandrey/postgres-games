import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from '../../game/entity/game.entity';

@Entity()
export class Publisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany((type) => Game, (game) => game.publisher, {
    primary: true,
    cascade: ['insert'],
  })
  game: Game[];
}
