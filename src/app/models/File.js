import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize, // Precisa ser passado como objeto do que a tabela usuário pode receber para o INIT
      }
    );
  }
}

export default File;
