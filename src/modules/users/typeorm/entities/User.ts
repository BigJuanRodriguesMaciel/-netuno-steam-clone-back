import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @Column()
    country: string;

    @Column()
    avatar: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;
}

export default User;
