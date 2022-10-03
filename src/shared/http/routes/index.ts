import gamesRouter from "@modules/games/routes/game.routes";
import sessionLoginRouter from "@modules/users/routes/login.routes";
import usersRouter from "@modules/users/routes/user.routes";

import { Router } from "express";
const routes  = Router();

routes.use('/games', gamesRouter);

routes.use('/users', usersRouter);
routes.use('/login', sessionLoginRouter);



export default routes;