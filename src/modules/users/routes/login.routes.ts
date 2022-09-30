import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import SessionLoginController from "../controllers/SessionLoginController";

const sessionsRouter = Router();
const sessionsController = new SessionLoginController();

sessionsRouter.post('/',
celebrate({
  [Segments.BODY]:{
    email: Joi.string().email().required(),
    password: Joi.string().required()
  },
}),
sessionsController.create
);

export default sessionsRouter;