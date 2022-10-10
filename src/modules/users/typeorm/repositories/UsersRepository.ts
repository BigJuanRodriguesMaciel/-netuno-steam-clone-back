import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
    public async findByName(user_name: string)
     {
        const user = await this.findOne({
            where: {
                user_name,
            },
        });

        return user;
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                id,
            },
        });

        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                email,
            },
        });

        return user;
    }

     public async findByPassword(password: string) {
        const user = await this.findOne({
            where: {
                password,
            },
        });

        return user;
    }

    public async findByUserName(user_name: string) {
      const user = await this.findOne({
          where: {
              user_name,
          },
      });

      return user;
  }
}

export default UsersRepository;
