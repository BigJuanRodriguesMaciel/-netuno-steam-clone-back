import { Request, Response } from 'express';
import CreateUserService from "../services/CreateUserService";

export default class UsersController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { email, country, user_name, password } = request.body;

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
