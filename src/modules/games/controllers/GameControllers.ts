import { Request, Response } from 'express';
import ListUserService from '../services/ListGamesService'
import CreateGameService from '../services/CreateGameService'
import ListGamesServices from '../services/ListGamesService';

export default class GamesController {
   public async index(request: Request, response: Response): Promise<Response> {
    const listUserService = new ListUserService();

<<<<<<< HEAD
    const games = await listUserService.execute();
=======
    const { tag_type } = req.params;

    console.log(tag_type)

    const games = await listGame.listFree({ tag_type });

    return res.json(games);
  }
>>>>>>> 2100d00de5ce298f2a8dbbe2dabf323b881f82d5

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
    return response.json(games);
  }

  // public async ListGamesFree(req: Request, res: Response): Promise<Response> {
  //   const { tag_type } = req.params;
  //   const listGame = new ListGamesServices();

  //   const games = await listGame.listFree({ tag_type });

  //   return res.json(games);
  // }

}