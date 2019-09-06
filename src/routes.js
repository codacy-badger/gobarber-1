import { Router } from 'express'; // Separa a parte de roteamento
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// Middlewares
import authMiddleware from './app/middlewares/auth';
import access from './app/middlewares/access';

// Utiliza apenas o módulo Router
const routes = new Router();

//

routes.use(access);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/users/:email', UserController.index);

// Routes from now on, will use this middleware(global from this point)
routes.use(authMiddleware);

routes.put('/users', authMiddleware, UserController.update);

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
