import { Request, Response } from 'express';
import GamesServices from '../services/GamesServices';

export default class GamesController {
  public async index(request: Request, response:Response): Promise<Response> {
    const listGames = new GamesServices();

    const games = await listGames.execute();

    return response.json(games)
  }
    public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }
}