import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ofertas')
class Product {
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

export default Product;