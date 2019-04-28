exports.up = function(knex, Promise) {
    return knex.schema.createTable('usuario', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('email', 50).notNull().unique()
        table.string('senha').notNull()
        table.specificType('foto_perfil', 'text')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('usuario')
};
