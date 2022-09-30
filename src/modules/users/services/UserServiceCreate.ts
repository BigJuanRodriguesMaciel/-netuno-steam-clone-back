import User from '../typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';
import UsersRepository from "@modules/users/typeorm/repositories/UsersRepository";
import AppError from '@shared/errors/AppError';

interface IRequest {
    email: string;
    country: string;
}

class CreateUserService {
    public async execute({ email, country }: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);
        const emailExists = await usersRepository.findByEmail(email);

        if (emailExists) {
            throw new AppError('Email address already used.');
        }

        const user = usersRepository.create({
            email,
            country
        });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;