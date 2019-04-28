exports.up = function(knex, Promise) {
  return knex.schema.createTable("avaliacao", table => {
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
    table.integer("nota").notNull(); // TODO: Inserir o CHECK: nota INTEGER NOT NULL CHECK (nota >= 1 AND nota <= 5),
    //knex.schema.raw('ALTER TABLE my_table MODIFY cmdId INT UNSIGNED AUTO_INCREMENT');
    table.primary(["autor", "receita"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("avaliacao");
};
