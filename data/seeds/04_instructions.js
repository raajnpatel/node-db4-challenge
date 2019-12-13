exports.seed = function(knex, Promise) {
    return knex("instructions").insert([
        {
            instruction_number: 1,
            instruction_description: "Mash Avocados in a bowl.",
            recipe_id: 1
        }, // 1
        {
            instruction_number: 2,
            instruction_description: "Mix  Onion, Cilantro, Lime Juice, Serano, and Cumin into the bowl and mix until well combined.",
            recipe_id: 1
        }, // 1
        {
            instruction_number: 1,
            instruction_description: "In a mixing bowl, mix together Olive Oil, Parsley, Lemon Juice, Garlic, Oregano, Salt, and Pepper.",
            recipe_id: 2
        }, // 1
        {
            instruction_number: 2,
            instruction_description: "Pour the bowl into a large resealable plastic bag with Shrimp. Seal, and marinate in the refrigerator for 2 hours.",
            recipe_id: 2
        }, // 2
        {
            instruction_number: 3,
            instruction_description: "Place shrimp on pan, using your pan of choice.",
            recipe_id: 2
        }, // 3
        {
            instruction_number: 4,
            instruction_description: "Cook Shrimp for 5 minutes per side, or until opaque. Use remaining marinade as baste.",
            recipe_id: 2
        } // 4
    ]);
};