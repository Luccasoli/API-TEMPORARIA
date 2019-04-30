
exports.up = function(knex, Promise) {
    return knex.schema.createTable('admin', table => {
        table.inherits('usuario')
        table.increments('id').primary()
        table.unique('email')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('admin')
};
