// O Node ainda não lê algumas funcionalidades novas, já disponíveis no react
// como o import.
// Então nós temos que utilizar aplicações que transpilam isso para nós
// Temos o Babel por exemplo, mas irei utilizar o Sucrase por ser mais rápido.
import 'dotenv/config';

import express from 'express';
import path from 'path';
// Importar as rotas de outro arquivo, para modularizar
import * as Sentry from '@sentry/node';
import Youch from 'youch';
import sentryConfig from './config/sentry';
import 'express-async-errors';

import routes from './routes';

import './database';

// Utilizar classes para representar funcionalidades da aplicação no backend
class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    // Rota estática para servidor de arquivos
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

// module.exports = new App().server;
// Com o sucrase
export default new App().server;
