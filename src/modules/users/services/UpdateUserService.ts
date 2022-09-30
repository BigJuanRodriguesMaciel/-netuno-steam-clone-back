import User from '../typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import UsersRepository from "@modules/users/typeorm/repositories/UsersRepository";
import AppError from '@shared/errors/AppError';

interface IRequest {
    user_name: string,
    email: string,
    password: string,
    country: string;
}

class UpdateUserService {
    public async execute({user_name, email, password, country}: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne(user_name);

        if(!user) {
            throw new AppError('User not found')
        }

        const userExists = await usersRepository.findByName(user_name);
        if(userExists && user_name !== user.user_name) {
            throw new AppError("There's already one user with this name!")
        }

        user.user_name = user_name;
        user.email = email;
        user.password = password;
        user.country = country;

        await usersRepository.save(user);

        return user;
    }
}

export default UpdateUserService;