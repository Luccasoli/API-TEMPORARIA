exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingrediente', table => {
        table.increments('id').primary()
        table.string('nome', 100).notNull()
        table.float('calorias')
        table.specificType('img', 'text')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ingrediente')
};
