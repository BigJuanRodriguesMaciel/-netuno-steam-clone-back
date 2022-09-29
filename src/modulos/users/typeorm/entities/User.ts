import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    name_user: string;

    @Column()
    password: string;

    @Column()
    pais: string;

    @Column()
    avatar: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;
}

export default User;
