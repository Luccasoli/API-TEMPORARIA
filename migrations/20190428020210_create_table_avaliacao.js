exports.up = async function(knex, Promise) {
  await knex.schema.createTable("avaliacao", table => {
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
    table.integer("nota").notNull();
    table.primary(["autor", "receita"]);
  });
  await knex.schema.raw(
    'ALTER TABLE "avaliacao" ADD CONSTRAINT "intervalo_notas" CHECK(nota >= 1 AND nota <= 5)'
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("avaliacao");
};
