import 'reflect-metadata';
import express, {Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from '.';
//import AppError from './../errors/AppError';
import './../typeorm'; 
import { Router } from "express";


const routes  = Router();

export default routes;