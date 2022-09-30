import { Request, Response } from "express";
import CreateSessionLoginService from "../services/CreateSessionLoginService";

export default class SessionLoginController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { user_name, password } = req.body;

    const createSession = new CreateSessionLoginService();

    const user = await createSession.execute({
      user_name,
      password
    });

    return res.json(user);
  }
}