exports.up = async function(knex, Promise) {
  await knex.schema.createTable("editar_receita", table => {
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
    table.integer("aprovacao").notNull(); 
    table.string("tipo", 100).notNull();
    table.primary(["autor", "receita", "admin"]);
  });

  await knex.schema.raw(
    'ALTER TABLE "editar_receita" ADD CONSTRAINT "tipos_aprovacao" CHECK(aprovacao >= 1 AND aprovacao <= 3)'
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("editar_receita");
};
