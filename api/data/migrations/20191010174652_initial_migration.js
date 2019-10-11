
exports.up = function(knex) {
   return knex.schema.createTable('ingredients', tbl => {
        tbl
            .increments();
        tbl
            .string('name', 128)
            .notNullable()
            .unique();

    })
    .createTable('recipes', tbl => {
    tbl
        .increments();
    tbl
        .string('name', 128)
        .notNullable()
        .unique();
    tbl 
        .text('instructions')
    })
    .createTable('shopping_list', tbl => {
        tbl
            .increments();
        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl
            .float('ingredient_quantity')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('shopping_list');
};
