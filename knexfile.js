// Update with your config settings.
module.exports = {
  client: "postgresql",
  connection: {
    database: "db9v990ido02c6",
    user: "qbyvbqnovxmbex",
    port: process.env.POSTGRES_PORT || 5432,
    password: "3640c8f6fcc69c931a6694f708d8c775f3193a339171d455fabbeebe06773492"
  },
  pool: {
    min: 2,
    max: 10,
    afterCreate: function(conn, cb) {
      conn.query('SET timezone="UTC";', function(err) {
        if (err) {
          cb(err, conn);
        } else {
          // set trigram search match similarity limit
          conn.query("SELECT set_limit(0.01);", function(err) {
            cb(err, conn);
          });
        }
      });
    }
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
