import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Games from "../tyopeorm/entites/Games";
import GamesRepository from "../tyopeorm/repositories/GamesRepository";

interface IRequest{ // tipar os dados recebidos da request
    game_name: string;
    game_image: string;
    game_gallery: string;
    sub_title: string;
    tags: string;
    price: number;
    platforms: string;
}

class CreateGameService{
    public async execute({game_name, game_image, game_gallery, sub_title, tags, price, platforms }: IRequest ): Promise<Games> {
        const gamesRepository = getCustomRepository(GamesRepository);
        const gameExists = await gamesRepository.findByName(game_name);

        if (gameExists){
            throw new AppError('Jogo ja existente');
        }

        const game = gamesRepository.create({
            game_name,
            game_image,
            game_gallery,
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