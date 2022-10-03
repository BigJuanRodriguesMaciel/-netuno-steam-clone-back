import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('games')
class Games {
  findById(name: string) {
      throw new Error("Method not implemented.");
  }
  create(arg0: { name: string; image: string; gallery: string; sub_title: string; tags: string; price: number; platforms: string; }) {
      throw new Error("Method not implemented.");
  }
  save(game: any) {
      throw new Error("Method not implemented.");
  }
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  game_name: string;

  @Column()
  game_image: string;

  @Column('int')
  game_gallery: string;

  @Column('')
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