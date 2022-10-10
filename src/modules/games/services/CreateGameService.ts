import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Games from "../typeorm/entities/Games";
import GamesRepository from "../typeorm/repositories/GamesRepository";

interface IRequest { // tipar os dados recebidos da request
    game_name: string;
    game_image: string;
    game_gallery: string;
    sub_title: string;
    tags: string;
    price: string;
    platforms: string;
    type_availability: string;
    availability: string;
    tag_type: string;
}

class CreateGameService{
    public async execute({ game_name, game_image, game_gallery, sub_title, tags, price, platforms, type_availability, availability, tag_type }: IRequest ): Promise<Games> {
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
            type_availability,
            availability,
            tag_type
        });
        
        await gamesRepository.save(game);

        return game;
    }
}

export default CreateGameService;
//teste