import User from "@modules/users/typeorm/entities/User";
import UserRepository  from "@modules/users/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "@config/auth";
import { getCustomRepository } from "typeorm";

interface IRequest {
  user_name: string;
  password: string;
}

interface IResponse {
  user: User,
  token: string
}

class CreateSessionLoginService {
  public async execute({ user_name, password}: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UserRepository);
    const user = await usersRepository.findByName(user_name);

    if (!user) throw new AppError('Incorrect user name/password combination', 401);

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) throw new AppError('Incorrect user name/password combination', 401);
    
    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn
    });

    return {
      user,
      token
    }
  }
}

export default CreateSessionLoginService;