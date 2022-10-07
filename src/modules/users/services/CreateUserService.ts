import User from '../typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
<<<<<<< HEAD
import UserRepository from '@modules/users/typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
=======
import UsersRepository from "@modules/users/typeorm/repositories/UsersRepository";
// import AppError from '@shared/errors/AppError';
>>>>>>> 3ce10b0c14879f470b8fa59f483e4c6e7b4f0c7f
import { hash } from 'bcryptjs';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

interface IRequest {
  email: string;
  country: string;
  user_name: string;
  password: string;
}

// interface IResponse {
//   user?: User,
//   token: string;
// }

class CreateUserService {
  public async execute({ email, country, user_name, password }: IRequest): Promise<User | undefined> {
    const usersRepository = getCustomRepository(UserRepository);
    const emailExists = await usersRepository.findByEmail(email);
       const user = await usersRepository.findByName(user_name);
    
    const hashedPassword = await hash(password, 8);
    const userCreated = usersRepository.create({
      email,
      country,
      user_name,
      password: hashedPassword,
    });

      await usersRepository.save(userCreated);

      return user;

    // const passwordConfirmed = await compare(password, user?.password);

    // if (!passwordConfirmed)
    //   throw new AppError('Incorrect user name/password combination', 401);
    // const id = user?.id.toString();

    // const token = sign({}, authConfig.jwt.secret, {
    //   subject: id,
    //   expiresIn: authConfig.jwt.expiresIn,
    // });
     
    

    // return {
    //   user,
    //   token
    // };
  }
}

export default CreateUserService;
