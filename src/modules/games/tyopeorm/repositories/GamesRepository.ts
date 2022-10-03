import { EntityRepository, Repository } from 'typeorm';
import Games from '../entites/Games';

@EntityRepository(Games)
 class GamesRepository extends Repository<Games> {
  public async findByName(game_name: string): Promise<Games | undefined> {
    const game = this.findOne({
      where: {
        game_name,
      },
    });

    return game;
  }
}

export default GamesRepository