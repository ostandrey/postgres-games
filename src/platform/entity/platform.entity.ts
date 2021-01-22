import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from '../../game/entity/game.entity';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @OneToMany((type) => Game, (game) => game.platform, {
    primary: true,
    cascade: ['insert'],
  })
  game: Game[];
}
