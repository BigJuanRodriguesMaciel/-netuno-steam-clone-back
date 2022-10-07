import { Request, Response } from 'express';
import ListUserService from '../services/ListGamesService'
import CreateGameService from '../services/CreateGameService'
import ListGamesServices from '../services/ListGamesService';

export default class GamesController {
   public async index(request: Request, response: Response): Promise<Response> {
    const listGame = new ListGamesServices();

    const { tag_type } = request.params;

    console.log(tag_type)

    const games = await listGame.listFree({ tag_type });

    return response.json(games);
   }
    public async create(request: Request, response: Response): Promise<Response> {
    const { game_name, game_image, game_gallery, sub_title, tags, price, platforms, tag_type  } = request.body;

    const createGames = new CreateGameService();

    const games = await  createGames.execute({
      game_name,
      game_image,
      game_gallery,
      sub_title,
      tags,
      price,
      platforms,
      tag_type,
    });
    
    console.log(games);
    return response.json(games);
  }

  //teste
}