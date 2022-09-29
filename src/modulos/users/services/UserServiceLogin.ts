import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';
import  auth  from '../../../config/auth'
import { sign } from 'jsonwebtoken'

interface IRequest {
    name_user: string;
    password: string;
}

interface IResponse {
    user: User;
    token: string;
}

class CreateSessionsService {
    public async execute({ name_user, password }: IRequest): Promise<IResponse> {
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findByPassword(password)

        // if (!user) {
        //     throw new AppError('Incorrect email/password combination', 401);
        // }

        const passwordConfined = await compare(password, user?.password);

        // if (!passwordConfined) {
        //     throw new AppError('Incorrect email/password combination', 401);
        // }

        const token = sign({}, auth.jwt.secret, {
            subject: user?.id,
            expiresIn: auth.jwt.expiresIn,
        });

        return {
            user,
            token,
        };
    }
}

export default CreateSessionsService;