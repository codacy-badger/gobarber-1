import { Router } from 'express'; // Separa a parte de roteamento
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

// Middlewares
import authMiddleware from './app/middlewares/auth';
import access from './app/middlewares/access';

// Utiliza apenas o módulo Router
const routes = new Router();
const upload = multer(multerConfig);

// Access log
routes.use(access);
// Routes
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Routes from now on, will use this middleware(global from this point)
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/users/', UserController.index);

routes.get('/providers', ProviderController.index);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/appointments', AppointmentController.store);
export default routes;
