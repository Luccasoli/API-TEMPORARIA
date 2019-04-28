
exports.up = function(knex, Promise) {
    return knex.schema.createTable('admin', table => {
        table.inherits('usuario')
        table.increments('id').primary()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('admin')
};
