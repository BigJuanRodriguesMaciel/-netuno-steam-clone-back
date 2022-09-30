import User from '../typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import UsersRepository from "@modules/users/typeorm/repositories/UsersRepository";
import AppError from '@shared/errors/AppError';

interface IRequest {
    id: string;
} 

class ShowUserService {
    public async execute({id}: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne(id);

        if(!user) {
            throw new AppError('User not found')
        }

        return user;
    }
}

export default ShowUserService;