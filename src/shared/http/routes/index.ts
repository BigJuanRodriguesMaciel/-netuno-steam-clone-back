import sessionsRouter from "@modules/users/routes/login.routes";
import usersRouter from "@modules/users/routes/user.routes";

import { Router } from "express";
const routes  = Router();

routes.use('/users', usersRouter);
routes.use('/login', sessionsRouter);

export default routes;