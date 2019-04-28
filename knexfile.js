// Update with your config settings.
module.exports = {
  client: "postgresql",
  connection: {
    database: "sistema_receitas",
    user: "postgres",
    password: "secret"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
