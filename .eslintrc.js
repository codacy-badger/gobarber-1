module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error', // Mostra erros do prettier
    'class-methods-use-this': 'off', // retirar o this, que é requisito para todo metodo da classe
    'no-param-reassign': 'off', // Permite receber parâmetro e fazer alterações nele(sequelize)(ESLINT não permite)
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }]
  }
};
