const db = require('../api/data/db-config')

module.exports = {
    getRecipes, 
    getShoppingList, 
    getInstructions,
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipeId) {
    return db('recipes as r')
        .where('recipe_id', '=', recipeId)
        .join('shopping_list as sl', 'sl.recipe_id', '=', 'r.id')
        .join('ingredients as i', 'i.id', '=', 'sl.ingredient_id')
        .select( "r.name as recipeName",'i.name as ingredientName','ingredient_quantity')

}

function getInstructions(id) {
    return db('recipes').select('name', 'instuctions')
}