import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ingredientCategories } from './IngredientList'
import { getIngredientRecipes } from '../../store/allRecipesSlice';
import { useNavigate } from 'react-router-dom'; 


const Ingredients = (props) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.me.username);
  const navigate = useNavigate();

  const initialCheckboxes = ingredientCategories.reduce((acc, { ingredients }) => {
    const ingredientsNames = ingredients.map((ingredient) => ingredient.name);
    return ingredientsNames.reduce((checkboxes, name) => {
      checkboxes[name] = false;
      return checkboxes;
    }, acc);
  }, {});

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const handleFindRecipes = () => {
    const selectedIngredients = Object.entries(checkboxes)
      .filter(([name, checked]) => checked)
      .map(([name]) => name);

    dispatch(getIngredientRecipes(selectedIngredients));
    navigate('/recommended');
  };

  const handleRecipeTypeChange = (event) => {
    // some kind of filter here? 
  };

  const handleDietaryRestrictionChange = (event) => {
    // another filter
  };

  return (
    <div>
        <h1>What kind of recipe are you looking for?</h1>
        <label>
        <input
          type="radio"
          name="recipeType"
          value="Breakfast"
          onChange={handleRecipeTypeChange}
        />
        Breakfast
      </label>
      <label>
        <input
          type="radio"
          name="recipeType"
          value="Lunch"
          onChange={handleRecipeTypeChange}
        />
        Lunch
      </label>
      <label>
        <input
          type="radio"
          name="recipeType"
          value="Dinner"
          onChange={handleRecipeTypeChange}
        />
        Dinner
      </label>
      <label>
        <input
          type="radio"
          name="recipeType"
          value="Snack"
          onChange={handleRecipeTypeChange}
        />
        Snack
      </label>
      <label>
        <input
          type="radio"
          name="recipeType"
          value="Dessert"
          onChange={handleRecipeTypeChange}
        />
        Dessert
      </label>

      <h1>Any dietary restrictions?</h1>
      <label>
        <input
          type="radio"
          name="dietaryRestriction"
          value="Nut-free"
          onChange={handleDietaryRestrictionChange}
        />
        Nut-free
      </label>
      <label>
        <input
          type="radio"
          name="dietaryRestriction"
          value="Gluten-free"
          onChange={handleDietaryRestrictionChange}
        />
        Gluten-free
      </label>
      <label>
        <input
          type="radio"
          name="dietaryRestriction"
          value="Soy-free"
          onChange={handleDietaryRestrictionChange}
        />
        Soy-free
      </label>


        <h1>What's in your kitchen?</h1>
        {ingredientCategories.map(({ category, ingredients }) => (
        <div key={category}>
          <h2>{category}</h2>
          {ingredients.map((ingredient, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name={ingredient.name}
                checked={checkboxes[ingredient.name] || false}
                onChange={handleCheckboxChange}
              />
              {ingredient.name}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleFindRecipes}>Find recipes</button>
  </div>
);
};

export default Ingredients;
