import Games from '../typeorm/entities/Games';
import { getCustomRepository } from 'typeorm';
import GamesRepository from '../typeorm/repositories/GamesRepository';

interface IRequest {
  tag_type: string;
}
class ListGamesServices {
    public async execute(): Promise<Games[]> {
        const gamesRepository = getCustomRepository(GamesRepository);

        const games = gamesRepository.find();

        return games;
    }
    public async listFree({ tag_type }: IRequest){
      const gamesRepository = getCustomRepository(GamesRepository);

      const games = gamesRepository.findByTagName(tag_type);

      return games;
  }

}

export default ListGamesServices;