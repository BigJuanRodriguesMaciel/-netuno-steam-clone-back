import { EntityRepository, Repository } from 'typeorm';
import Games from '../entities/Games';

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

  public async findById(id: string): Promise<Games | undefined> {
    const game = await this.findOne({
        where: {
            id,
        },
    });

    return game;
}

}

export default GamesRepository