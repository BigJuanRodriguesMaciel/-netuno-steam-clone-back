import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity("games")
class Games {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  game_name: string;

  @Column()
  game_image: string;

  @Column()
  game_gallery: string;

  @Column()
  sub_title: string;

  @Column()
  tags: string;

  @Column('decimal')
  price: number;

  @Column()
  platforms: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Games;