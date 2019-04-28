exports.up = function(knex, Promise) {
  return knex.schema.createTable("editar_receita", table => {
    table
      .integer("autor")
      .references("id")
      .inTable("autor")
      .notNull();
    table
      .integer("receita")
      .references("id")
      .inTable("receita")
      .notNull();
    table
      .integer("admin")
      .references("id")
      .inTable("admin")
      .notNull();
    table.integer("aprovacao").notNull(); // TODO: Inserir o CHECK: nota INTEGER NOT NULL CHECK (nota >= 1 AND nota <= 5),
    //knex.schema.raw('ALTER TABLE my_table MODIFY cmdId INT UNSIGNED AUTO_INCREMENT');
    table.string("tipo", 100).notNull();
    table.primary(["autor", "receita", "admin"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("editar_receita");
};
