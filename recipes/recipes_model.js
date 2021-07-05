const db = require("../data/db");

function getRecipes() {
    return db("recipes");
}

function getShoppingList(id) {
    return db("recipes_ingredients as rs")
        .join("ingredients as i", "rs.ingredient_id", "i.id")
        .select("ingredient_name", "rs.ingredient_quantity")
        .where({ recipe_id: id });
}

function getInstructions(id) {
    return db("instructions as i")
        .select("i.instruction_number", "i.instruction_description")
        .where({ recipe_id: id });
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};