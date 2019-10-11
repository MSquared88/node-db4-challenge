
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_list').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        {recipe_id: 1, ingredient_id: 1, ingredient_quantity: 1},
        {recipe_id: 1, ingredient_id: 2, ingredient_quantity: 1.5},
        {recipe_id: 1, ingredient_id: 3, ingredient_quantity: 1.25},
        {recipe_id: 1, ingredient_id: 4, ingredient_quantity: 3.5},
        {recipe_id: 1, ingredient_id: 5, ingredient_quantity: 1},
        {recipe_id: 1, ingredient_id: 6, ingredient_quantity: 3},
      ]);
    });
};
