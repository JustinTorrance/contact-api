exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('contacts').insert({id: '1', first_name: 'Richard', last_name: 'Simmons', phone: 0000023, email:'rs@gm.com'}),
        knex('contacts').insert({id: '2', first_name: 'Liz', last_name: 'Zo', phone: 2324343, email:'lz@gm.com'}),
        knex('contacts').insert({id: '3', first_name: 'Bob', last_name: 'Barker', phone: 888888, email:'bb@gm.com'})
      ]);
    });
};