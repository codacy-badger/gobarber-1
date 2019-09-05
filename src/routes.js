import { Router } from 'express'; // Separa a parte de roteamento
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// Utiliza apenas o módulo Router
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/users/:email', UserController.index);

// Alteração no banco de dados deve ser assíncrona
/* routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Amanda',
    email: 'mandinha_rbd_2008@gmail.com',
    password_hash: 'tururu',
  });
  res.json(user);
});
*/
export default routes;
