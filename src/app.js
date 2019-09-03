// O Node ainda não lê algumas funcionalidades novas, já disponíveis no react
// como o import.
// Então nós temos que utilizar aplicações que transpilam isso para nós
// Temos o Babel por exemplo, mas irei utilizar o Sucrase por ser mais rápido.
import express from 'express';
// Importar as rotas de outro arquivo, para modularizar
import routes from './routes';
import './database';
// Utilizar classes para representar funcionalidades da aplicação no backend
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server;
// Com o sucrase
export default new App().server;
