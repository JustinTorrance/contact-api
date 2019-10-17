
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('contacts', function(table) {
      table.string('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.integer('phone');
      table.string('email');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('contacts')
  ]);
};
