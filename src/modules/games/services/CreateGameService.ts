import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Games from "../tyopeorm/entites/Games";
import GamesRepository from "../tyopeorm/repositories/GamesRepository";

interface IRequest{ // tipar os dados recebidos da request
    game_name: string;
    game_image: string;
    gallery: string;
    sub_title: string;
    tags: string;
    price: number;
    platforms: string;
}

class CreateGameService{
    public async execute({name, image, gallery, sub_title, tags, price, platforms }: IRequest ): Promise<Games> {
        const gamesRepository = getCustomRepository(GamesRepository);
        const gameExists = await gamesRepository.findByName();

        if (gameExists){
            throw new AppError('Jogo ja existente');
        }

        const game = gamesRepository.create({
            name,
            image,
            gallery,
            sub_title,
            tags,
            price,
            platforms,
        });

        await gamesRepository.save(game);

        return game;
    }
}

export default CreateGameService;