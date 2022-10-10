import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from "../controllers/UsersController";
// import ValidationsUser from '../middlewares/validationsUser';

const usersRouter = Router();
const usersController = new UsersController();

// usersRouter.use(ValidationsUser);

usersRouter.post('/',
celebrate({
  [Segments.BODY]:{
    email: Joi.string().email().required(),
    country: Joi.string().required(),
    user_name: Joi.string().required(),
    password: Joi.string().required(),
  },
}),
usersController.create
);


export default usersRouter;