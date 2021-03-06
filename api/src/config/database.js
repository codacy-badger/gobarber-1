require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // created at and updated at in all tables
    underscored: true,
    underscoredAll: true, // UserGroup -> user_group
  },
};
