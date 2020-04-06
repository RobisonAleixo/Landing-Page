
exports.up = function(knex) {
  return knex.schema.createTable('contact', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('message').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contact')
};
