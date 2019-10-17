exports.up = function(knex) {
  return knex.schema.table('contacts', function(table) {
    table.string('phone_num');
  })  
};

exports.down = function(knex) {
  return knex.schema.table('contacts', function(table) {
    table.dropColumn('phone_num');
  })
};