// Update with your config settings.

module.exports = {
    client: "pg",
    debug: true,
    connection:
        "postgres://ybrhnuqzdhcris:7871c825ae02cc858d08c5a39264aa43cd3a9754728cbd951786524029704c8e@ec2-23-21-136-232.compute-1.amazonaws.com:5432/der1sesce7cnhd?ssl=true",
    migrations: {
        tableName: "migrations"
    },
    ssl: true,
    migrations: {
        tableName: "knex_migrations"
    }
};
