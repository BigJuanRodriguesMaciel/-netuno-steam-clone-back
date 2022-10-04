import { Router } from 'express'
import GamesController from '../controllers/GameControllers';

const gamesRouter = Router();
const gamesController = new GamesController();


gamesRouter.get('/store/:tag_type', gamesController.index);
// gamesRouter.get('/library/:tag_type');



gamesRouter.post('/', gamesController.create);

export default gamesRouter;