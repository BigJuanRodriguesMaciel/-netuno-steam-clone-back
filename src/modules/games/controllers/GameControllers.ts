import { Request, Response } from 'express';
import ListUserService from '../services/ListGamesService'
import CreateGameService from '../services/CreateGameService'
import ListGamesServices from '../services/ListGamesService';
import  ValidationsGame  from '../middlewares/validationsGame';
import { getCustomRepository } from 'typeorm';
import GamesRepository from '../typeorm/repositories/GamesRepository';

export default class GamesController {
   public async index(request: Request, response: Response): Promise<Response> {
    const listGame = new ListGamesServices();

    const { tag_type } = request.params;

    const games = await listGame.listFree({ tag_type });
    
    return response.json(games);
    
   }
   public async list(request: Request, response: Response): Promise<Response> {
    const listLibrary = new ListGamesServices();

    const { tag_type } = request.params;

    const games = await listLibrary.listFree({ tag_type });
    
    return response.json(games);
    
   }
   
    public async create(request: Request, response: Response) {
    const { game_name, game_image, game_gallery, sub_title, tags, price, platforms, type_availability, availability, tag_type  } = request.body;
  //   const gameName = getCustomRepository(GamesRepository);

  // const gameNameAlreadyExists = await gameName.find(game_name);

  // if (gameNameAlreadyExists) {
  //   return ({ message: 'Game Already Exists!'});
  // }
    const createGames = new CreateGameService();

    const games = await  createGames.execute({
      game_name,
      game_image,
      game_gallery,
      sub_title,
      tags,
      price,
      platforms,
      type_availability,
      availability,
      tag_type,
    });
    
    return response.json(games);
  }

}