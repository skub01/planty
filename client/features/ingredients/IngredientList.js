


export const ingredients = [
    { name: "Flour", category: "Essentials"},
    { name: "Sugar", category: "Essentials"},
    { name: "Plant-Based Milk", category: "Essentials"},
    { name: "Salt", category: "Essentials"},
    { name: "Vegetable Oil", category: "Essentials"},
    { name: "Nutritional Yeast", category: "Essentials"},
    { name: "Bread Crumbs", category: "Essentials"},

    { name: "Baking Powder", category: "Baking"},
    { name: "Cocoa Powder", category: "Baking"},
    { name: "Vanilla Extract", category: "Baking"},
    { name: "Egg Replacement", category: "Baking"},
    { name: "Cornstarch", category: "Baking"},
    { name: "Baking Soda", category: "Baking"},
    { name: "Chocolate Chips", category: "Baking"},

    { name: "Oatmeal", category: "Grains"},
    { name: "Cereal", category: "Grains"},
    { name: "Rice", category: "Grains"},  
    { name: "Brown Rice", category: "Grains"},   
    { name: "Quinoa", category: "Grains"},
    { name: "Black Beans", category: "Grains"},
    { name: "White Beans", category: "Grains"},
    { name: "Chickpeas", category: "Grains"},
    { name: "Lentils", category: "Grains"},

    { name: "Potatoes", category: "Vegetables"},   
    { name: "Broccoli", category: "Vegetables"},
    { name: "Carrots", category: "Vegetables"},
    { name: "Corn", category: "Vegetables"},
    { name: "Spinach", category: "Vegetables"},
    { name: "Arugula", category: "Vegetables"},
    { name: "Snap Peas", category: "Vegetables"},
    { name: "Bell Peppers", category: "Vegetables"},
    { name: "Red Onion", category: "Vegetables"},
    { name: "Cauliflower", category: "Vegetables"},
    { name: "Zucchini", category: "Vegetables"},
    { name: "Tomatoes", category: "Vegetables"},
    { name: "Kale", category: "Vegetables"},
    { name: "Artichokes", category: "Vegetables"},
 
    { name: "Ketchup", category: "Condiments"},
    { name: "Yellow Mustard", category: "Condiments"},
    { name: "Vegan Mayo", category: "Condiments"},
    { name: "Sriracha", category: "Condiments"},
    { name: "Tahini", category: "Condiments"},
    { name: "Soy Sauce", category: "Condiments"},
    { name: "Tamari", category: "Condiments"},
    { name: "Salsa", category: "Condiments"},
    { name: "Rice Vinegar", category: "Condiments"},
    { name: "Apple Cider Vinegar", category: "Condiments"},
    { name: "Dijon Mustard", category: "Condiments"},
    { name: "Balsamic Vinegar", category: "Condiments"},
    { name: "Maple Syrup", category: "Syrups"},

{ name: "Cashews", category: "Nuts"},
{ name: "Peanut Butter", category: "Nuts"},
{ name: "Pumpkin Seeds", category: "Nuts"},
{ name: "Peanuts", category: "Nuts"},
{ name: "Hemp Seeds", category: "Seeds"},
{ name: "Chia Seeds", category: "Seeds"},
{ name: "Coconut Flakes", category: "Nuts"},
{ name: "Tahini", category: "Nuts"},
{ name: "Pine Nuts", category: "Nuts"},

{ name: "Apples", category: "Fruits"},
{ name: "Oranges", category: "Fruits"},
{ name: "Lemon", category: "Fruits"},
{ name: "Banana", category: "Fruits"},
    { name: "Avocado", category: "Fruits"},
    { name: "Lime", category: "Fruits"},
    { name: "Pomegranate Seeds", category: "Fruits"},
    { name: "Mango", category: "Fruits"},

    { name: "Basil", category: "Herbs"},
    { name: "Mint", category: "Herbs"},
    { name: "Parsley", category: "Herbs"},
    { name: "Cilantro", category: "Herbs"},
    { name: "Rosemary", category: "Herbs"},
    { name: "Thyme", category: "Herbs"},
    { name: "Sage", category: "Herbs"},
    { name: "Oregano", category: "Herbs"},
    { name: "Green Onion", category: "Herbs"},

    { name: "Quinoa Flour", category: "Flours"},
    { name: "Coconut Flour", category: "Flours"},
    { name: "Almond Flour", category: "Flours"},
    { name: "Chickpea Flour", category: "Flours"},

    { name: "Tofu", category: "Proteins"},
    { name: "Tempeh", category: "Proteins"},
    { name: `Ground "Beef"`, category: "Proteins"},
    { name: "Vegan Chicken", category: "Proteins"},

    { name: "Sesame Oil", category: "Oils"},
    { name: "Olive Oil", category: "Oils"},
    { name: "Coconut Oil", category: "Oils"},
    { name: "Avocado Oil", category: "Oils"},

    { name: "Garlic Powder", category: "Spices"},
    { name: "Cumin", category: "Spices"},
    { name: "Chili Powder", category: "Spices"},
    { name: "Ginger", category: "Spices"},
    { name: "Paprika", category: "Spices"},
    { name: "Cayenne Pepper", category: "Spices"},
    { name: "Turmeric", category: "Spices"},
    { name: "Red Pepper Flakes", category: "Spices"},
    { name: "Coriander", category: "Spices"},
 ]


 export const ingredientCategories = [
    { category: "Essentials", ingredients: ingredients.filter((ingredient) => ingredient.category === "Essentials") },
    { category: "Grains/Beans", ingredients: ingredients.filter((ingredient) => ingredient.category === "Grains") },
    { category: "Vegetables", ingredients: ingredients.filter((ingredient) => ingredient.category === "Vegetables") },
    { category: "Condiments", ingredients: ingredients.filter((ingredient) => ingredient.category === "Condiments") },
    { category: "Nuts/Seeds", ingredients: ingredients.filter((ingredient) => ingredient.category === "Nuts") },
    { category: "Fruits", ingredients: ingredients.filter((ingredient) => ingredient.category === "Fruits") },
    { category: "Herbs", ingredients: ingredients.filter((ingredient) => ingredient.category === "Herbs") },
    { category: "Flours", ingredients: ingredients.filter((ingredient) => ingredient.category === "Flours") },
    { category: "Protein", ingredients: ingredients.filter((ingredient) => ingredient.category === "Proteins") },
    { category: "Oils", ingredients: ingredients.filter((ingredient) => ingredient.category === "Oils") },
    { category: "Spices", ingredients: ingredients.filter((ingredient) => ingredient.category === "Spices") },
    { category: "Baking", ingredients: ingredients.filter((ingredient) => ingredient.category === "Baking") },
  ];



 
 


    
