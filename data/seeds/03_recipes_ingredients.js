exports.seed = function(knex, Promise) {
    return knex("recipes_ingredients").insert([
        {
            ingredient_quantity: "2 Avocados",
            recipe_id: 1,
            ingredient_id: 1
        }, // 1
        {
            ingredient_quantity: "1/4 Cup, Chopped",
            recipe_id: 1,
            ingredient_id: 2
        }, // 2
        {
            ingredient_quantity: "1/4 Cup, Chopped/Picked",
            recipe_id: 1,
            ingredient_id: 3
        }, // 3
        {
            ingredient_quantity: "2 Tablespoons",
            recipe_id: 1,
            ingredient_id: 4
        }, // 4
        {
            ingredient_quantity: "1, Minced",
            recipe_id: 1,
            ingredient_id: 5
        }, // 5
        {
            ingredient_quantity: "Pinch",
            recipe_id: 1,
            ingredient_id: 6
        }, // 6
        {
            ingredient_quantity: "Pinch",
            recipe_id: 1,
            ingredient_id: 7
        }, // 7
        {
            ingredient_quantity: "2 Pinches",
            recipe_id: 1,
            ingredient_id: 12
        }, // 8
        {
            ingredient_quantity: "1 Cup",
            recipe_id: 2,
            ingredient_id: 8
        }, // 9
        {
            ingredient_quantity: "1/4 Cup, Chopped",
            recipe_id: 2,
            ingredient_id: 9
        }, // 10
        {
            ingredient_quantity: "2 Tablespoons",
            recipe_id: 2,
            ingredient_id: 4
        }, // 11
        {
            ingredient_quantity: "3 Cloves, Minced",
            recipe_id: 2,
            ingredient_id: 10
        }, // 12
        {
            ingredient_quantity: "2 Teaspoons",
            recipe_id: 2,
            ingredient_id: 11
        }, // 13
        {
            ingredient_quantity: "2 Teaspoon",
            recipe_id: 2,
            ingredient_id: 6
        }, // 14
        {
            ingredient_quantity: "2 Teaspoon",
            recipe_id: 2,
            ingredient_id: 7
        }, // 15
        {
            ingredient_quantity: "2 Pounds, Peeled & Deveined",
            recipe_id: 2,
            ingredient_id: 12
        } // 16
    ]);
};