import { Router } from 'express'
import GamesController from '../controllers/GameControllers';

const gamesRouter = Router();
const gamesController = new GamesController();


gamesRouter.get('/', gamesController.index);

export default gamesRouter;