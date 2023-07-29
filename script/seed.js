"use strict";

const {
  db,
  models: { User, Recipe, UserRecipe, Ingredient, RecipeIngredient },
} = require("../server/db");
const { faker } = require("@faker-js/faker");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  let users = [];

  for (let i = 0; i < 100; i++) {
    let newUser = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: "123",
    };
    users.push(newUser);
  }

  await Promise.all(users.map((user) => User.create(user)));



  const ingredients = await Promise.all([
    Ingredient.create({ name: "Cereal", category: "Grains" }),
    Ingredient.create({ name: "Milk", category: "Essentials" }),
    Ingredient.create({ name: "Flour", category: "Essentials" }),
    Ingredient.create({ name: "Sugar", category: "Essentials" }),
    Ingredient.create({ name: "Baking Powder", category: "Essentials" }),
    Ingredient.create({ name: "Soy Sauce", category: "Condiments" }),
    Ingredient.create({ name: "Plant-Based Milk", category: "Essentials" }),
    Ingredient.create({ name: "Vanilla Extract", category: "Essentials" }),
    Ingredient.create({ name: "Egg Replacement", category: "Essentials" }),
    Ingredient.create({ name: "Salt", category: "Essentials" }),
    Ingredient.create({ name: "Avocado", category: "Fruits" }),
    Ingredient.create({ name: "Salsa", category: "Condiments" }),
    Ingredient.create({ name: "Lime", category: "Fruits" }),
    Ingredient.create({ name: "Tofu", category: "Proteins" }),
    Ingredient.create({ name: "Broccoli", category: "Vegetables" }),
    Ingredient.create({ name: "Carrots", category: "Vegetables" }),
    Ingredient.create({ name: "Snap Peas", category: "Vegetables" }),
    Ingredient.create({ name: "Bell Peppers", category: "Vegetables" }),
    Ingredient.create({ name: "Rice", category: "Grains" }),
    Ingredient.create({ name: "Garlic Powder", category: "Essentials" }),
    Ingredient.create({ name: "Ground Cumin", category: "Essentials" }),
    Ingredient.create({ name: "Chili Powder", category: "Essentials" }),
    Ingredient.create({ name: "Ginger", category: "Spices" }),
    Ingredient.create({ name: "Maple Syrup", category: "Syrups" }),
    Ingredient.create({ name: "Sesame Oil", category: "Oils" }),
    Ingredient.create({ name: "Almond Milk", category: "Nondairy Milks" }),
    Ingredient.create({ name: "Cocoa Powder", category: "Essentials" }),
    Ingredient.create({ name: "Baking Soda", category: "Essentials" }),
    Ingredient.create({ name: "Quinoa", category: "Grains" }),
    Ingredient.create({ name: "Coconut Milk", category: "Essentials" }),
    Ingredient.create({ name: "Cornstarch", category: "Essentials" }),
    Ingredient.create({ name: "Agave Nectar", category: "Syrups" }),
    Ingredient.create({ name: "Nutritional Yeast", category: "Essentials" }),
    Ingredient.create({ name: "Tamari", category: "Condiments" }),
    Ingredient.create({ name: "Cashews", category: "Nuts" }),
    Ingredient.create({ name: "Olive Oil", category: "Oils" }),
    Ingredient.create({ name: "Peanut Butter", category: "Nuts" }),
    Ingredient.create({ name: "Tomatoes", category: "Vegetables" }),
    Ingredient.create({ name: "Coconut Oil", category: "Oils" }),
    Ingredient.create({ name: "Red Onion", category: "Vegetables" }),
    Ingredient.create({ name: "Cauliflower", category: "Vegetables" }),
    Ingredient.create({ name: "Zucchini", category: "Vegetables" }),
    Ingredient.create({ name: "Pumpkin Seeds", category: "Nuts" }),
    Ingredient.create({ name: "Paprika", category: "Spices" }),
    Ingredient.create({ name: "Cayenne Pepper", category: "Spices" }),
    Ingredient.create({ name: "Rice Vinegar", category: "Condiments" }),
    Ingredient.create({ name: "Peanuts", category: "Nuts" }),
    Ingredient.create({ name: "Hemp Seeds", category: "Seeds" }),
    Ingredient.create({ name: "Kale", category: "Vegetables" }),
    Ingredient.create({ name: "Chia Seeds", category: "Seeds" }),
    Ingredient.create({ name: "Coconut Flakes", category: "Nuts" }),
    Ingredient.create({ name: "Tahini", category: "Nuts" }),
    Ingredient.create({ name: "Black Beans", category: "Legumes" }),
    Ingredient.create({ name: "White Beans", category: "Legumes" }),
    Ingredient.create({ name: "Chickpeas", category: "Legumes" }),
    Ingredient.create({ name: "Lentils", category: "Legumes" }),
    Ingredient.create({ name: "Balsamic Vinegar", category: "Condiments" }),
    Ingredient.create({ name: "Sriracha Sauce", category: "Condiments" }),
    Ingredient.create({ name: "Turmeric", category: "Spices" }),
    Ingredient.create({ name: "Mustard", category: "Condiments" }),
    Ingredient.create({ name: "Artichokes", category: "Vegetables" }),
    Ingredient.create({ name: "Spinach", category: "Vegetables" }),
    Ingredient.create({ name: "Arugula", category: "Vegetables" }),
    Ingredient.create({ name: "Pine Nuts", category: "Nuts" }),
    Ingredient.create({ name: "Brown Rice", category: "Grains" }),
    Ingredient.create({ name: "Quinoa Flour", category: "Flours" }),
    Ingredient.create({ name: "Coconut Flour", category: "Flours" }),
    Ingredient.create({ name: "Almond Flour", category: "Flours" }),
    Ingredient.create({ name: "Cashew Milk", category: "Nondairy Milks" }),
    Ingredient.create({ name: "Oat Milk", category: "Nondairy Milks" }),
    Ingredient.create({ name: "Hazelnuts", category: "Nuts" }),
    Ingredient.create({ name: "Corn", category: "Vegetables" }),
    Ingredient.create({ name: "Parsley", category: "Herbs" }),
    Ingredient.create({ name: "Cilantro", category: "Herbs" }),
    Ingredient.create({ name: "Rosemary", category: "Herbs" }),
    Ingredient.create({ name: "Thyme", category: "Herbs" }),
    Ingredient.create({ name: "Sage", category: "Herbs" }),
    Ingredient.create({ name: "Cumin Seeds", category: "Seeds" }),
    Ingredient.create({ name: "Coriander Seeds", category: "Seeds" }),
    Ingredient.create({ name: "Oregano", category: "Herbs" }),
    Ingredient.create({ name: "Parsley", category: "Herbs" }),
    Ingredient.create({ name: "Cilantro", category: "Herbs" }),
    Ingredient.create({ name: "Pumpkin Puree", category: "Vegetables" }),
    Ingredient.create({ name: "Coconut Cream", category: "Nuts" }),
    Ingredient.create({ name: "Sunflower Seeds", category: "Seeds" }),
    Ingredient.create({ name: "Pomegranate Seeds", category: "Fruits" }),
    Ingredient.create({ name: "Apple Cider Vinegar", category: "Condiments" }),
    Ingredient.create({ name: "Mango", category: "Fruits" }),
    Ingredient.create({ name: "Basil", category: "Herbs" }),
    Ingredient.create({ name: "Chives", category: "Herbs" }),
    Ingredient.create({ name: "Mint", category: "Herbs" }),
    Ingredient.create({ name: "Dijon Mustard", category: "Condiments" }),
    Ingredient.create({ name: "Red Pepper Flakes", category: "Spices" }),
  ]);
  

  const recipes = await Promise.all([
    Recipe.create({
      name: "Pancakes",
      instructions: `Sift flour, sugar, baking powder, 
    and salt into a bowl. Add your plant-based milk, vanilla, and egg replacement. 
    Mix well. Preheat your frying pan and using a ladle, pour about 1/4 cup into the 
    pan. Cook for 2 minutes each side or until golden brown.`,
      servingSize: 4,
      category: "Breakfast",
      allergyInfo: "Nut free",
    }),
    Recipe.create({
      name: "Cereal",
      instructions: `Pour your cereal into a bowl. Add your
    milk of choice.`,
      servingSize: 1,
      category: "Breakfast",
      allergyInfo: "Nut free",
    }),
    Recipe.create({
      name: "Burrito Bowl",
      instructions: `Cook rice according to package instructions. 
        In a separate pan, sauté chopped bell peppers, onions, and black beans until tender. 
        Season with cumin, chili powder, garlic powder, and salt. 
        Serve the sautéed mixture over the cooked rice. Top with sliced avocado, salsa, and lime.`,
      servingSize: 2,
      category: "Lunch",
      allergyInfo: "Gluten-free",
    }),
    Recipe.create({
      name: "Veggie Stir-Fry",
      instructions: `Heat sesame oil in a wok or skillet. 
        Add sliced tofu and cook until browned. 
        Add broccoli, carrots, snap peas, and bell peppers. 
        Stir in a sauce made of soy sauce, garlic, ginger, and maple syrup. 
        Serve over cooked rice or noodles.`,
      servingSize: 3,
      category: "Dinner",
      allergyInfo: "Soy-free",
    }),
    Recipe.create({
      name: "Chocolate Cake",
      instructions: `Preheat oven to 350°F (175°C). 
        In a bowl, mix flour, sugar, cocoa powder, baking soda, and salt. 
        Add vegetable oil, vanilla extract, and almond milk. 
        Mix until well combined. Pour the batter into a greased cake pan. 
        Bake for 25-30 minutes or until a toothpick comes out clean.`,
      servingSize: 8,
      category: "Dessert",
      allergyInfo: "Nut-free",
    }),
    Recipe.create({
      name: "Buddha Bowl",
      instructions: `Cook quinoa according to package instructions. 
      In a separate pan, sauté chickpeas, spinach, and diced tomatoes until heated through. 
      Season with garlic powder, cumin, and turmeric. 
      Serve the sautéed mixture over the cooked quinoa. 
      Top with sliced avocado, tahini dressing, and a sprinkle of sesame seeds.`,
      servingSize: 2,
      category: "Lunch",
      allergyInfo: "Gluten-free",
    }),
    await Recipe.create({
      name: "Vegan Lentil Shepherd's Pie",
      instructions: `Cook lentils according to package instructions. 
      In a separate pan, sauté diced carrots, onions, and garlic until softened. 
      Add cooked lentils, vegetable broth, tomato paste, and a dash of soy sauce. 
      Simmer until the mixture thickens. 
      Transfer the lentil mixture to a baking dish and top with mashed potatoes. 
      Bake in the oven until the potatoes are golden brown.`,
      servingSize: 6,
      category: "Dinner",
      allergyInfo: "Soy-free",
    }),
    await Recipe.create({
      name: "Caesar Salad",
      instructions: `In a large bowl, toss chopped romaine lettuce with vegan Caesar dressing until well coated. 
      Add vegan croutons, cherry tomatoes, and vegan parmesan cheese. 
      Serve chilled.`,
      servingSize: 4,
      category: "Salad",
      allergyInfo: "Soy-free",
    }),
    Recipe.create({
      name: "Tofu Scramble",
      instructions: `Crumble tofu and sauté with turmeric and nutritional yeast. 
        Add chopped spinach and red onion. Cook until heated through and serve.`,
      servingSize: 2,
      category: "Breakfast",
      allergyInfo: "Gluten-free",
    }),
    Recipe.create({
      name: "Lentil Curry",
      instructions: `In a pot, sauté onions, garlic, and ginger. 
        Add cooked lentils, diced tomatoes, coconut milk, and vegetable broth. 
        Season with curry powder, cumin, and turmeric. 
        Simmer until the flavors meld together. Serve over rice.`,
      servingSize: 4,
      category: "Dinner",
      allergyInfo: "Nut-free",
    }),
    Recipe.create({
      name: "Sweet Potato and Black Bean Burritos",
      instructions: `Roast sweet potato until tender. 
        In a pan, sauté black beans with onions, garlic, and cumin. 
        Assemble burritos with sweet potato, black bean mixture, avocado slices, 
        and vegan cheese. Roll them up and enjoy!`,
      servingSize: 3,
      category: "Lunch",
      allergyInfo: "Nut-free",
    }),
    Recipe.create({
      name: "Coconut Curry Noodles",
      instructions: `Cook rice noodles according to package instructions. 
        In a pan, sauté vegetables (carrots, bell peppers, snap peas) with curry paste and coconut milk. 
        Toss cooked noodles with the curry mixture and serve.`,
      servingSize: 2,
      category: "Dinner",
      allergyInfo: "Gluten-free",
    }),
    Recipe.create({
      name: "Mediterranean Quinoa Salad",
      instructions: `Cook quinoa according to package instructions. 
        Toss cooked quinoa with chopped cucumbers, cherry tomatoes, olives, red onion, 
        and a lemon-herb vinaigrette. Garnish with fresh parsley.`,
      servingSize: 4,
      category: "Salad",
      allergyInfo: "Gluten-free, Nut-free",
    }),
    Recipe.create({
      name: "Chocolate Avocado Mousse",
      instructions: `In a blender, blend ripe avocados, cocoa powder, agave nectar, 
        and almond milk until smooth. Chill the mixture in the refrigerator for a few hours. 
        Serve with coconut flakes and sliced strawberries.`,
      servingSize: 4,
      category: "Dessert",
      allergyInfo: "Nut-free",
    })
  ]);

  const recipeIngredients = await Promise.all([
    RecipeIngredient.create({
      recipeId: recipes[0].id,
      ingredientId: ingredients[2].id, // Flour
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[0].id,
      ingredientId: ingredients[4].id, // Baking Powder
      amount: "1 Tsp",
    }),
    RecipeIngredient.create({
      recipeId: recipes[0].id,
      ingredientId: ingredients[3].id, // Sugar
      amount: "2 Tbsp",
    }),
    RecipeIngredient.create({
      recipeId: recipes[0].id,
      ingredientId: ingredients[27].id, // Almond Milk
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[0].id,
      ingredientId: ingredients[7].id, // Vanilla Extract
      amount: "1 Tsp",
    }),
    RecipeIngredient.create({
      recipeId: recipes[0].id,
      ingredientId: ingredients[8].id, // Egg Replacement
      amount: "1 Tbsp",
    }),
    RecipeIngredient.create({
      recipeId: recipes[0].id,
      ingredientId: ingredients[5].id, // Salt
      amount: "1/4 Tsp",
    }),
    RecipeIngredient.create({
      recipeId: recipes[0].id,
      ingredientId: ingredients[6].id, // Plant-Based Milk
      amount: "2 Tbsp",
    }),
    RecipeIngredient.create({
      recipeId: recipes[0].id,
      ingredientId: ingredients[9].id, // Baking Soda
      amount: "1/2 Tsp",
    }),

    // Ingredients for Cereal
    RecipeIngredient.create({
      recipeId: recipes[1].id,
      ingredientId: ingredients[0].id, // Cereal
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[1].id,
      ingredientId: ingredients[1].id, // Milk
      amount: "1 Cup",
    }),

    // Ingredients for Vegan Burrito Bowl
    RecipeIngredient.create({
      recipeId: recipes[2].id,
      ingredientId: ingredients[17].id, // Snap Peas
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[2].id,
      ingredientId: ingredients[16].id, // Carrots
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[2].id,
      ingredientId: ingredients[10].id, // Avocado
      amount: "1",
    }),
    RecipeIngredient.create({
      recipeId: recipes[2].id,
      ingredientId: ingredients[11].id, // Salsa
      amount: "1/4 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[2].id,
      ingredientId: ingredients[12].id, // Lime
      amount: "1",
    }),

    // Ingredients for Veggie Stir-Fry
    RecipeIngredient.create({
      recipeId: recipes[3].id,
      ingredientId: ingredients[13].id, // Tofu
      amount: "1 Block",
    }),
    RecipeIngredient.create({
      recipeId: recipes[3].id,
      ingredientId: ingredients[14].id, // Broccoli
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[3].id,
      ingredientId: ingredients[15].id, // Carrots
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[3].id,
      ingredientId: ingredients[17].id, // Snap Peas
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[3].id,
      ingredientId: ingredients[18].id, // Bell Peppers
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[3].id,
      ingredientId: ingredients[19].id, // Rice
      amount: "2 Cups",
    }),

    // Ingredients for Vegan Chocolate Cake
    RecipeIngredient.create({
      recipeId: recipes[4].id,
      ingredientId: 3, // Flour 
      amount: "1 1/2 Cups",
    }),
    RecipeIngredient.create({
      recipeId: recipes[4].id,
      ingredientId: 4, // Sugar 
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[4].id,
      ingredientId: 27, // Cocoa Powder
      amount: "1/2 Cup",
    }),
    RecipeIngredient.create({
      recipeId: recipes[4].id,
      ingredientId: 28, // Baking Soda 
      amount: "1 Tsp",
    }),
    RecipeIngredient.create({
      recipeId: recipes[4].id,
      ingredientId: 10, // Salt
      amount: "1/2 Tsp",
    }),
  
    RecipeIngredient.create({
      recipeId: recipes[4].id,
      ingredientId: 8, // Vanilla Extract 
      amount: "2 Tsp",
    }),
    RecipeIngredient.create({
      recipeId:  6,
      ingredientId: ingredients[35].id, // Quinoa
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId:  6,
      ingredientId: ingredients[49].id, // Chickpeas
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId:  6,
      ingredientId: ingredients[63].id, // Spinach
      amount: "2 Cups",
    }),
    RecipeIngredient.create({
      recipeId:  6,
      ingredientId: ingredients[66].id, // Tomatoes
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: 6,
      ingredientId: ingredients[48].id, // Avocado
      amount: "1",
    }),
    RecipeIngredient.create({
      recipeId:  6,
      ingredientId: ingredients[70].id, // Sesame Seeds
      amount: "1 Tbsp",
    }),
    RecipeIngredient.create({
      recipeId:  6,
      ingredientId: ingredients[62].id, // Cumin Seeds
      amount: "1 Tsp",
    }),
    RecipeIngredient.create({
      recipeId:  6,
      ingredientId: ingredients[61].id, // Coriander Seeds
      amount: "1 Tsp",
    }),
    RecipeIngredient.create({
      recipeId:  6,
      ingredientId: ingredients[69].id, // Turmeric
      amount: "1 Tsp",
    }),
    RecipeIngredient.create({
      recipeId: 7,
      ingredientId: ingredients[53].id, // Lentils
      amount: "2 Cups",
    }),
    RecipeIngredient.create({
      recipeId: 7,
      ingredientId: ingredients[16].id, // Carrots
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: 7,
      ingredientId: ingredients[59].id, // Vegetable Broth
      amount: "1 1/2 Cups",
    }),
    RecipeIngredient.create({
      recipeId: 7,
      ingredientId: ingredients[71].id, // Tomato Paste
      amount: "2 Tbsp",
    }),
    RecipeIngredient.create({
      recipeId: 7,
      ingredientId: ingredients[5].id, // Salt
      amount: "1/2 Tsp",
    }),
    RecipeIngredient.create({
      recipeId: 7,
      ingredientId: ingredients[4].id, // Baking Powder
      amount: "1/4 Tsp",
    }),
    RecipeIngredient.create({
      recipeId: 7,
      ingredientId: ingredients[65].id, // Potatoes
      amount: "4 Cups",
    }),
    RecipeIngredient.create({
      recipeId: 7,
      ingredientId: ingredients[72].id, // Soy Sauce
      amount: "1 Tbsp",
    }),
    RecipeIngredient.create({
      recipeId: 8,
      ingredientId: ingredients[20].id, // Romaine Lettuce
      amount: "6 Cups",
    }),
    RecipeIngredient.create({
      recipeId: 8,
      ingredientId: ingredients[73].id, // Vegan Caesar Dressing
      amount: "1/2 Cup",
    }),
    RecipeIngredient.create({
      recipeId: 8,
      ingredientId: ingredients[74].id, // Vegan Croutons
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: 8,
      ingredientId: ingredients[66].id, // Tomatoes
      amount: "1 Cup",
    }),
    RecipeIngredient.create({
      recipeId: 8,
      ingredientId: ingredients[75].id, // Vegan Parmesan Cheese
      amount: "1/2 Cup",
    }),
  ]);

  const userRecipeList = await Promise.all([
    UserRecipe.create({ 
    userId: 1, recipeId: 2}),
    UserRecipe.create({ 
      userId: 2, recipeId: 3}),    
      UserRecipe.create({ 
        userId: 5, recipeId: 1}),
    ]); 

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
