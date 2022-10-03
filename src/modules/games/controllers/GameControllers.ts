import { Request, Response } from 'express';
import CreateGameService from '../services/CreateGameService'

export default class GamesController {
    public async create(request: Request, response: Response): Promise<Response> {
    const {game_name, game_image, game_gallery, sub_title, tags, price, platforms  } = request.body;

    const createGames = new CreateGameService();

    const games = await  createGames.execute({
      game_name,
      game_image,
      game_gallery,
      sub_title,
      tags,
      price,
      platforms,
    });
    console.log(games);
    return response.json(games);
  }
}