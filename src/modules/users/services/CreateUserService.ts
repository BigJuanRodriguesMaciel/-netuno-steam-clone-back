import User from '../typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import UserRepository from '@modules/users/typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { setInterval } from 'timers';

interface IRequest {
  email: string;
  country: string;
  user_name: string;
  password: string;
}

interface IResponse {
  user?: User,
  token: string;
}

class CreateUserService {
  public async execute({ email, country, user_name, password }: IRequest) {
    const usersRepository = getCustomRepository(UserRepository);
    const user = await usersRepository.findByName(user_name);
    
    const hashedPassword = await hash(password, 8);
    const userCreated = usersRepository.create({
      email,
      country,
      user_name,
      password: hashedPassword,
    });

      await usersRepository.save(userCreated);

      return userCreated;

    //   let token;
    //   setInterval(() => {
    //   token = sign({}, authConfig.jwt.secret, {
    //   subject: user?.id,
    //   expiresIn: authConfig.jwt.expiresIn,
    //  });

    //   return {
    //   userCreated,
    //   token
    //   }
    // }, 200);
  }
}

export default CreateUserService;
