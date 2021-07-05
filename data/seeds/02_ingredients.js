exports.seed = function(knex, Promise) {
    return knex("ingredients").insert([
        {
            ingredient_name: "Avocados" // 1
        },
        {
            ingredient_name: "Onion" // 2
        },
        {
            ingredient_name: "Cilantro" // 3
        },
        {
            ingredient_name: "Lime" // 4
        },
        {
            ingredient_name: "Serano" // 5
        },
        {
            ingredient_name: "Salt" // 6
        },
        {
            ingredient_name: "Pepper" // 7
        },
        {
            ingredient_name: "Olive Oil" // 8
        },
        {
            ingredient_name: "Parsley" // 9
        },
        {
            ingredient_name: "Garlic" // 10
        },
        {
            ingredient_name: "Oregano" // 11
        },
        {
            ingredient_name: "Shrimp" // 12
        },
        {
            ingredient_name: "Cumin" // 13
        }
    ]);
};