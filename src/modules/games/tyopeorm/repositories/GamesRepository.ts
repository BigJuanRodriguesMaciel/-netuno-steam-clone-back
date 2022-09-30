import { EntityRepository, Repository } from 'typeorm';
import Games from '../entites/Games';

@EntityRepository(Games)
export class GamesRepository extends Repository<Games> {
  public async findByName(name: string): Promise<Games | undefined> {
    const game = this.findOne({
      where: {
        name,
      },
    });

    return game;
  }
}