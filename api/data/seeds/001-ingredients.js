
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'eggs'},
        {name: 'flour'},
        {name: 'milk'},
        {name: 'baking powder'},
        {name: 'sugar'},
        {name: 'butter'},
      ]);
    });
};
