/* eslint-disable no-console */
// O Node ainda não lê algumas funcionalidades novas, já disponíveis no react
// como o import.
// Então nós temos que utilizar aplicações que transpilam isso para nós
// Temos o Babel por exemplo, mas irei utilizar o Sucrase por ser mais rápido.
import express from 'express';
import path from 'path';
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
    // Rota estática para servidor de arquivos
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server;
// Com o sucrase
export default new App().server;
