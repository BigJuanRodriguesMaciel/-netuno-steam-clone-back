import Games from '../tyopeorm/entites/Games';
import { getCustomRepository } from 'typeorm';
import GamesRepository from '../tyopeorm/repositories/GamesRepository';

class ListUserService {
    public async execute(): Promise<Games[]> {
        const gamesRepository = getCustomRepository(GamesRepository);

        const games = gamesRepository.find();

        return games;
    }
}

export default ListUserService;