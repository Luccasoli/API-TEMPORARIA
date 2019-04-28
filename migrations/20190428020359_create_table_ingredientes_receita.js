exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredientes_receita", table => {
    table
      .integer("ingrediente")
      .references("id")
      .inTable("ingrediente")
      .notNull();
    table
      .integer("receita")
      .references("id")
      .inTable("receita")
      .notNull();
    table.float("calorias").notNull();
    table.primary(["ingrediente", "receita"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("ingredientes_receita");
};
