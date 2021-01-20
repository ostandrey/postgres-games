import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


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
}
