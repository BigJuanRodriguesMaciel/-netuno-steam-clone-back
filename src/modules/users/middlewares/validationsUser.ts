import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import userRepository from "../typeorm/repositories/UsersRepository";

 async function ValidationsGame(req: Request, res: Response, next: NextFunction) {
  const { email, user_name } = req.body;

  const userEmail = getCustomRepository(userRepository);

  const emailAlreadyExists = await userEmail.findByEmail(email);

  if (emailAlreadyExists) return res.status(400).json({ message: 'email Already Exists!'});


  const userNameAlreadyExists = await userEmail.findByUserName(user_name);

  if (userNameAlreadyExists) return res.status(400).json({ message: 'User Name Already Exists!'});
  
  return next();

}

export default ValidationsGame;
