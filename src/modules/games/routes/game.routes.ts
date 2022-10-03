import { Router } from 'express'
import GamesController from '../controllers/GameControllers';

const gamesRouter = Router();
const gamesController = new GamesController();


gamesRouter.get('/', gamesController.index);
gamesRouter.post('/', gamesController.create)

export default gamesRouter;