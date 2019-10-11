const express = require('express')

server = express()

const RecipesDb = require('./recipes-model')

server.use(express.json())

server.get('/api/recipes/', (req, res) => {
    RecipesDb.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => res.status(500).json({message: 'internal database error', errMessage: err}))
})

server.get('/api/recipes/:id/shoppingList', (req,res) => {
    RecipesDb.getShoppingList(req.params.id)
    .then(lists => {
        res.status(200).json(lists)
    })
    .catch(err => res.status(500).json({message: 'internal database error', errMessage: err}))
})


// server.get('/api/recipes/:id/instructions') {
    
// }


// server.get('api/ingredients/:id/recipes') {
    
// }

module.exports = server