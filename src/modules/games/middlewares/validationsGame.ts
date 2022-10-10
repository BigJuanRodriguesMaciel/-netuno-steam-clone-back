import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import GamesRepository from "../typeorm/repositories/GamesRepository";

 async function ValidationsGame(req: Request, res: Response, next: NextFunction) {
  const { game_name } = req.body;

  const gameName = getCustomRepository(GamesRepository);

  const gameNameAlreadyExists = await gameName.findByName(game_name);

  if (gameNameAlreadyExists) {
    return res.status(400).json({ message: 'Game Already Exists!'});
  }

  return next();

    
}

export default ValidationsGame;
