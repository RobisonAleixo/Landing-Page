
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('telefone').notNullable();
    table.string('message').notNullable();
    table.date('contactDate').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
