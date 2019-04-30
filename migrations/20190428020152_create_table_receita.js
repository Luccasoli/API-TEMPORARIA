exports.up = function(knex, Promise) {
  return knex.schema.createTable("receita", table => {
    table.increments("id").primary();
    table.string("nome", 50).notNull();
    table.specificType("passos", "text[]").notNull();
    table.integer("qnt_porcoes").notNull();
    table.float("tempo_preparo").notNull();
    table.specificType("imgs", "text[]");

    table
      .integer("autor")
      .references("id")
      .inTable("autor")
      .notNull();
    table
      .integer("prato")
      .references("id")
      .inTable("prato")
      .notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("receita");
};
