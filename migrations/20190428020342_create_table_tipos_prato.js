exports.up = function(knex, Promise) {
  return knex.schema.createTable("tipos_prato", table => {
    table
      .integer("prato")
      .references("id")
      .inTable("prato")
      .notNull();
    table
      .integer("tipo_prato")
      .references("id")
      .inTable("tipo_prato")
      .notNull();
    table.primary(["prato", "tipo_prato"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("tipos_prato");
};
