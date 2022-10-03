import User from '../typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import UsersRepository from "@modules/users/typeorm/repositories/UsersRepository";
import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';

interface IRequest {
    email: string;
    country: string;
    user_name: string;
    password: string;
}

class CreateUserService {
    public async execute({ email, country, user_name, password }: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);
        const emailExists = await usersRepository.findByEmail(email);

        if (emailExists) throw new AppError('Email address already used.');
        const hashedPassword = await hash(password, 8);
        const user = usersRepository.create({
            email,
            country,
            user_name,
            password: hashedPassword
        });
        console.log("service", user);
        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;