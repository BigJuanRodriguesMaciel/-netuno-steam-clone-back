import { Request, Response } from 'express';
import GamesServices from '../services/GamesServices';

export default class GamesController {
  public async index(request: Request, response:Response): Promise<Response> {
    const listGames = new GamesServices();

    const games = await listGames.execute();

    return response.json(games)
  }
    public async create(request: Request, response: Response): Promise<Response> {
    const {name, image, gallery, sub_title, tags, price, platforms  } = request.body;

    const creatGAmes = new CreateGameService();

    const product = await createProduct.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }
}