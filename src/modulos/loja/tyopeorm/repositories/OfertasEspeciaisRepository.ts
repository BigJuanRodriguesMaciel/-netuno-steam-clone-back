import { EntityRepository, Repository } from 'typeorm';
import ofertas from '../entites/OfertasEspeciais';

@EntityRepository(ofertas)
export class OfertasEspeciaisRepository extends Repository<ofertas> {
  public async findByName(name: string): Promise<ofertas | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}