import { getCustomRepository } from "typeorm";
import Games from '../tyopeorm/entites/Games'
import GamesRepository  from '@modules/games/tyopeorm/repositories/GamesRepository'

class GamesServices {
  public async execute( ): Promise<Games[]> {
    const gamesRepository = getCustomRepository(GamesRepository);
    
    const games = gamesRepository.find();

    return games;
  }
}

export default GamesServices;