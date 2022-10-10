import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import CreateUserService from "../services/CreateUserService";

export default class UsersController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { email, country, user_name, password } = request.body;

    if (email) {
      return response.status(404).json({ message: "Email already exists"});
    }

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      email,
      country,
      user_name,
      password
    });

    // console.log("controller",request.body);

    return response.json(user);
  }
}
