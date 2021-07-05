const express = require("express");

const Recipes = require("./recipes_model");

const router = express.Router();

router.get("/", (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res
                .status(200)
                .json(recipes);
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({ errorMessage: "Problem with the server. Please try again." });
        });
});

router.get("/:id/shoppingList", (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
        .then(shoppingList => {
            res
                .status(200)
                .json(shoppingList);
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({ errorMessage: "Problem with the server. Please try again." });
        });
});

router.get("/:id/instructions", (req, res) => {
    const { id } = req.params;
    Recipes.getInstructions(id)
        .then(instruct => {
            res
                .status(200)
                .json(instruct);
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({ errorMessage: "Problem with the server. Please try again." });
        });
});

module.exports = router;