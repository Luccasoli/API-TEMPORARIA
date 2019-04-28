exports.up = function(knex, Promise) {
    return knex.schema.createTable('tipo_prato', table => {
        table.increments('id').primary()
        table.string('nome', 100).notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tipo_prato')
};
