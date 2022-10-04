import Games from '../typeorm/entities/Games';
import { getCustomRepository } from 'typeorm';
import GamesRepository from '../typeorm/repositories/GamesRepository';

class ListGamesServices {
    public async execute(): Promise<Games[]> {
        const gamesRepository = getCustomRepository(GamesRepository);

        const games = gamesRepository.find();

        return games;
    }
}

export default ListGamesServices;