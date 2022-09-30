import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import SessionLoginController from "../controllers/SessionLoginController";

const sessionsRouter = Router();
const sessionsController = new SessionLoginController();

sessionsRouter.post('/',
celebrate({
  [Segments.BODY]:{
    user_name: Joi.string().required(),
    password: Joi.string().required(),
    password_confirmation: Joi.string().required().valid(Joi.ref('password')),
  },
}),
sessionsController.create
);

export default sessionsRouter;