import { Request, Response } from 'express';
import CreateUserService from "../services/CreateUserService";

export default class UsersController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { email, country } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      email,
      country
    });

    console.log(request.body);

    return response.json(user);
  }
}
