
exports.up = function(knex) {
  return (
      knex.schema
          .createTable('recipes', tbl => {
              tbl.increments();
              tbl.string('recipe_name', 128)
                  .unique()
                  .notNullable();
          })

          .createTable('ingredients', tbl => {
              tbl.increments();
              tbl.string('ingredient_name', 128)
                  .unique()
                  .notNullable();
          })

          .createTable('recipes_ingredients', tbl => {
              tbl.increments();
              tbl.integer('recipe_id')
                  .unsigned()
                  .notNullable()
                  .references('id')
                  .inTable('recipes')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
              tbl.integer('ingredient_id')
                  .unsigned()
                  .notNullable()
                  .references('id')
                  .inTable('ingredients')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
              tbl.integer('ingredient_quantity')
                  .notNullable()
          })

          .createTable('instructions', tbl => {
              tbl.increments();
              tbl
                  .integer("instruction_number")
                  .unsigned()
                  .notNullable();
              tbl.text("instruction_description")
                  .notNullable();
              tbl
                  .integer("recipe_id")
                  .references("id")
                  .inTable("recipes")
                  .onDelete("CASCADE")
                  .onUpdate("CASCADE");
          })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
          .dropTableIfExists("instructions")
          .dropTableIfExists("recipe_ingredients")
          .dropTableIfExists("ingredients")
          .dropTableIfExists("recipes")
  )
};
