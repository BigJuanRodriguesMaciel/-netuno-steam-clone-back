import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';

interface IRequest {
    email: string;
    pais: string;
}

class UserServiceCreate {
    public async execute({ email, pais }: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);
        //const emailExists = await usersRepository.findByEmail(email);

        // if (emailExists) {
        //     throw new AppError('Email address already used.');
        // }

        // const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            email,
            pais
        });

        await usersRepository.save(user);

        return user;
    }
}

export default UserServiceCreate;