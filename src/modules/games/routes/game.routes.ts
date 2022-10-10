import { Router } from 'express'
import GamesController from '../controllers/GameControllers';
import middleware from "@shared/http/middlewares/isAuthenticated";
import validationsGame from '../middlewares/validationsGame';

const gamesRouter = Router();
const gamesController = new GamesController();

gamesRouter.use(validationsGame);
gamesRouter.post('/', gamesController.create);

gamesRouter.use(middleware);

gamesRouter.get('/store/:tag_type', gamesController.index);
gamesRouter.get('/library/:tag_type', gamesController.list);


export default gamesRouter;