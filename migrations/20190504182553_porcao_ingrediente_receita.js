exports.up = function(knex, Promise) {
  return knex.schema.raw(
    "ALTER TABLE ingredientes_receita ADD COLUMN quantidade VARCHAR(100)"
  );
};

exports.down = function(knex, Promise) {
//   return knex.schema.raw(
//     "ALTER TABLE `Employees` CHANGE COLUMN `added_date` `added_date` DATE DEFAULT NULL"
//   );
};
