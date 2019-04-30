
exports.up = function(knex, Promise) {
    return knex.schema.createTable('autor', table => {
        table.inherits('usuario')
        table.increments('id').primary()
        table.specificType('tipo', 'text').notNull()
        table.unique('email')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('autor')
};
