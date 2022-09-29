import 'reflect-metadata';
import { Router } from 'express';
import express from 'express'
import routes from './routes';
import '@shared/typeorm';

const app = express();
app.use(express.json())

app.use(routes)

const routes = Router();
routes.get('/', (req, res) => {
   return res.json("hello world")
 })

 app.listen(3000)
