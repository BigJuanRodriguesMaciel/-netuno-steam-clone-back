import { Router } from 'express'
import GamesController from '../controllers/GameControllers';
import middleware from "@shared/http/middlewares/isAuthenticated";

const gamesRouter = Router();
const gamesController = new GamesController();

gamesRouter.post('/', gamesController.create);
gamesRouter.use(middleware);
gamesRouter.get('/store/:tag_type', gamesController.index);
gamesRouter.get('/library/:tag_type', gamesController.list);

//teste


export default gamesRouter;