module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // created at and updated at in all tables
    underscored: true,
    underscoredAll: true, // UserGroup -> user_group
  },
};
