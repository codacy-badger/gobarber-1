import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // conexão com a base de dados
    // connection é o que está sendo esperado dentro do método init, dos nossos models
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
