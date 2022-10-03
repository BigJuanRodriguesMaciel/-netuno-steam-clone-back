import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Games from "../tyopeorm/entites/Games";

interface IRequest{ // tipar os dados recebidos da request
    name: string;
    image: string;
    gallery: string;
    sub_title: string;
    tags: string;
    price: number;
    platforms: string;
}

class CreateGameService{
    public async execute({name, image, gallery, sub_title, tags, price, platforms }: IRequest ): Promise<any> {
        const GamesRepository = getCustomRepository(Games);
        const GameExists = await GamesRepository.findById(name);

        if (GameExists){
            throw new AppError('Jogo ja existente');
        }

        const game = GamesRepository.create({
            name,
            image,
            gallery,
            sub_title,
            tags,
            price,
            platforms,
        });

        await GamesRepository.save(game);

        return game;
    }
}

export default CreateGameService;