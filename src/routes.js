import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Gustavo Daneluti',
    email: 'gustavo_daneluti@hotmail.com',
    password_hash: '12345'
  });

  res.json(user);
});

export default routes;
