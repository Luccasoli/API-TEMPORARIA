exports.up = function(knex, Promise) {
    return knex.schema.createTable('usuario', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.boolean('is_admin').notNull()
        table.string('email', 50).notNull()
        table.string('senha').notNull()
        table.specificType('foto_perfil', 'text'),
        table.unique('email')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('usuario')
};
