import { Request, Response } from 'express';
import GamesServices from '../services/GamesServices';
import CreateGameService from '../services/CreateGameService'

export default class GamesController {
  public async index(request: Request, response:Response): Promise<Response> {
    const listGames = new GamesServices();

    const games = await listGames.execute();

    return response.json(games)
  }
    public async create(request: Request, response: Response): Promise<Response> {
    const {game_name, game_image, gallery, sub_title, tags, price, platforms  } = request.body;

    const creatGames = new CreateGameService();

    const games = await  creatGames.execute({
      game_name,
      game_image,
      gallery,
      sub_title,
      tags,
      price,
      platforms,
    });

    return response.json(games);
  }
}