exports.seed = function(knex, Promise) {
    return knex("recipes").insert([
        {
            recipe_name: "Guacamole" // 1
        },
        {
            recipe_name: "Grilled Marinated Shrimp" // 2
        }
    ]);
};