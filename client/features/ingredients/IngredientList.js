


export const ingredients = [
    { name: "Black Beans", category: "Legumes" },
  { name: "Chickpeas", category: "Legumes" },
  { name: "Kidney Beans", category: "Legumes" },
  { name: "Lentils", category: "Legumes" },
  { name: "Tempeh", category: "Legumes" },
  { name: "Tofu", category: "Legumes" },
  { name: "White Beans", category: "Legumes" },

  { name: "Almond Flour", category: "Baking" },
  { name: "Baking Powder", category: "Baking" },
  { name: "Baking Soda", category: "Baking" },
  { name: "Chocolate Chips", category: "Baking" },
  { name: "Cocoa Powder", category: "Baking" },
  { name: "Coconut Flakes", category: "Baking" },
  { name: "Coconut Flour", category: "Baking" },
  { name: "Cornstarch", category: "Baking" },
  { name: "Egg Replacement", category: "Baking" },
  { name: "Flour", category: "Baking" },
  { name: "Vanilla Extract", category: "Baking" },

  { name: "Brown Rice", category: "Grains" },
  { name: "Buckwheat", category: "Grains" },
  { name: "Cereal", category: "Grains" },
  { name: "Couscous", category: "Grains" },
  { name: "Oatmeal", category: "Grains" },
  { name: "Pasta", category: "Grains" },
  { name: "Quinoa", category: "Grains" },
  { name: "Rice", category: "Grains" },
  { name: "Spaghetti", category: "Grains" },

  { name: "Arugula", category: "Vegetables" },
  { name: "Artichoke", category: "Vegetables" },
  { name: "Bell Pepper", category: "Vegetables" },
  { name: "Broccoli", category: "Vegetables" },
  { name: "Carrots", category: "Vegetables" },
  { name: "Cauliflower", category: "Vegetables" },
  { name: "Corn", category: "Vegetables" },
  { name: "Kale", category: "Vegetables" },
  { name: "Onion", category: "Vegetables" },
  { name: "Potatoes", category: "Vegetables" },
  { name: "Snap Peas", category: "Vegetables" },
  { name: "Spinach", category: "Vegetables" },
  { name: "Tomatoes", category: "Vegetables" },
  { name: "Zucchini", category: "Vegetables" },
 
  { name: "Balsamic Vinegar", category: "Condiments" },
  { name: "Barbecue Sauce", category: "Condiments" },
  { name: "Dijon Mustard", category: "Condiments" },
  { name: "Ketchup", category: "Condiments" },
  { name: "Maple Syrup", category: "Condiments" },
  { name: "Rice Vinegar", category: "Condiments" },
  { name: "Salsa", category: "Condiments" },
  { name: "Soy Sauce", category: "Condiments" },
  { name: "Sriracha", category: "Condiments" },
  { name: "Tamari", category: "Condiments" },
  { name: "Tahini", category: "Condiments" },
  { name: "Vegan Mayo", category: "Condiments" },
  { name: "Yellow Mustard", category: "Condiments" },

  { name: "Almonds", category: "Nuts" },
  { name: "Cashews", category: "Nuts" },
  { name: "Chia Seeds", category: "Nuts" },
  { name: "Hemp Seeds", category: "Nuts" },
  { name: "Peanut Butter", category: "Nuts" },
  { name: "Peanuts", category: "Nuts" },
  { name: "Pecans", category: "Nuts" },
  { name: "Pistachios", category: "Nuts" },
  { name: "Pumpkin Seeds", category: "Nuts" },
  { name: "Sunflower Seeds", category: "Nuts" },


  { name: "Apple", category: "Fruits" },
  { name: "Avocado", category: "Fruits" },
  { name: "Banana", category: "Fruits" },
  { name: "Cherry", category: "Fruits" },
  { name: "Grapefruit", category: "Fruits" },
  { name: "Grapes", category: "Fruits" },
  { name: "Lemon", category: "Fruits" },
  { name: "Lime", category: "Fruits" },
  { name: "Mango", category: "Fruits" },
  { name: "Orange", category: "Fruits" },
  { name: "Pear", category: "Fruits" },
  { name: "Plantain", category: "Fruits" },
  { name: "Plum", category: "Fruits" },
  { name: "Pomegranate", category: "Fruits" },


  { name: "Basil", category: "Herbs" },
  { name: "Cilantro", category: "Herbs" },
  { name: "Green Onion", category: "Herbs" },
  { name: "Mint", category: "Herbs" },
  { name: "Oregano", category: "Herbs" },
  { name: "Parsley", category: "Herbs" },
  { name: "Rosemary", category: "Herbs" },
  { name: "Sage", category: "Herbs" },
  { name: "Thyme", category: "Herbs" },


  { name: "Cayenne Pepper", category: "Spices" },
  { name: "Chili Powder", category: "Spices" },
  { name: "Coriander", category: "Spices" },
  { name: "Cumin", category: "Spices" },
  { name: "Garlic Powder", category: "Spices" },
  { name: "Ginger", category: "Spices" },
  { name: "Paprika", category: "Spices" },
  { name: "Red Pepper Flakes", category: "Spices" },
  { name: "Turmeric", category: "Spices" },
 ]


 export const ingredientCategories = [
    { category: "Legumes", ingredients: ingredients.filter((ingredient) => ingredient.category === "Legumes") },
    { category: "Grains", ingredients: ingredients.filter((ingredient) => ingredient.category === "Grains") },
    { category: "Vegetables", ingredients: ingredients.filter((ingredient) => ingredient.category === "Vegetables") },
    { category: "Fruits", ingredients: ingredients.filter((ingredient) => ingredient.category === "Fruits") },
    { category: "Nuts/Seeds", ingredients: ingredients.filter((ingredient) => ingredient.category === "Nuts") },
    { category: "Condiments", ingredients: ingredients.filter((ingredient) => ingredient.category === "Condiments") },
    { category: "Herbs", ingredients: ingredients.filter((ingredient) => ingredient.category === "Herbs") },
    { category: "Spices", ingredients: ingredients.filter((ingredient) => ingredient.category === "Spices") },
    { category: "Baking", ingredients: ingredients.filter((ingredient) => ingredient.category === "Baking") },
  ];



 
 


    
