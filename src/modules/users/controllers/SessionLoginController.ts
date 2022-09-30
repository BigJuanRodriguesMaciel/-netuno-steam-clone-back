import { Request, Response } from "express";
import CreateSessionLoginService from "../services/CreateSessionLoginService";

export default class SessionLoginController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createSession = new CreateSessionLoginService();

    const user = await createSession.execute({
      email,
      password
    });

    return res.json(user);
  }
}