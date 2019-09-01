import { Router } from 'express'; // Separa a parte de roteamento

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'hello' }));

export default routes;
