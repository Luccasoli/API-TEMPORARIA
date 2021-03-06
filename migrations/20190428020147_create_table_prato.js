exports.up = function(knex, Promise) {
    return knex.schema.createTable('prato', table => {
        table.increments('id').primary()
        table.string('nome', 50).notNull()
        table.string('tipo', 50).notNull()
        table.specificType('imgs', 'text[]')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('prato')
};
