import { Request, Response } from 'express';
import ListUserService from '../services/ListGamesService'
import CreateGameService from '../services/CreateGameService'
import ListGamesServices from '../services/ListGamesService';

export default class GamesController {
   public async index(request: Request, response: Response): Promise<Response> {
    const listUserService = new ListUserService();

    const games = await listUserService.execute();

    return response.json(games);
   }
    public async create(request: Request, response: Response): Promise<Response> {
    const { game_name, game_image, game_gallery, sub_title, tags, price, platforms  } = request.body;

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
    return response.json(games);
  }
}