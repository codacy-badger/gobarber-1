import { Router } from 'express'; // Separa a parte de roteamento
import User from './app/models/User';

// Utiliza apenas o módulo Router
const routes = new Router();

// Alteração no banco de dados deve ser assíncrona
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Joao Victor Farias',
    email: 'victorfarias.new@gmail.com',
    password_hash: '123',
  });
  res.json(user);
});

export default routes;
