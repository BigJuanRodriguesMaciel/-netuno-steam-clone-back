import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('games')
export default class Games {
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

  @Column()
  price: string;

  @Column()
  platforms: string;

  @Column()
  type_availability: string;

  @Column()
  availability: string;

  @Column()
  tag_type: string;
}

