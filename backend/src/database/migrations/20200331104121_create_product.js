
exports.up = function(knex) {
  return knex.schema.createTable('product', table => {
    table.increments('id');
    table.string('product').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('product');
};
