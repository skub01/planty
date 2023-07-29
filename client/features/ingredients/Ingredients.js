import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ingredientCategories } from './IngredientList'
import { getIngredientRecipes } from '../../store/allRecipesSlice';
import { useNavigate } from 'react-router-dom'; 
import Recommended from '../Recipes/Recommended';


const Ingredients = (props) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.me.username);
  const navigate = useNavigate();
  const allIngredientsRef = useRef(null);
  const dietaryRestrictionsRef = useRef(null);

  const initialCheckboxes = ingredientCategories.reduce((acc, { ingredients }) => {
    const ingredientsNames = ingredients.map((ingredient) => ingredient.name);
    return ingredientsNames.reduce((checkboxes, name) => {
      checkboxes[name] = false;
      return checkboxes;
    }, acc);
  }, {});

  const [selectedCourse, setSelectedCourse] = useState("main course"); 
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
  const recipes = useSelector((state) => state.recipes.recipes);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const handleFindRecipes = () => {
    const selectedIngredients = Object.entries(checkboxes)
      .filter(([name, checked]) => checked)
      .map(([name]) => name)
      .join(",");

    dispatch(getIngredientRecipes(selectedIngredients));
    dietaryRestrictionsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDietaryRestrictionChange = (event) => {
    allIngredientsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (recipes.length > 0) {
      navigate('/recommended');
    }
  }, [recipes, navigate]);

  return (
    <div className="ingredients-container">
    
        <h1>What kind of recipe are you looking for?</h1>
        <div id="mealtype">
        <label>
        <input
          type="radio"
          name="recipeType"
          value="breakfast"
          onChange={handleCourseChange}
        />
        Breakfast
      </label>
      <label>
        <input
          type="radio"
          name="recipeType"
          value="main course"
          onChange={handleCourseChange}
        />
        Main Course
      </label>
      <label>
        <input
          type="radio"
          name="recipeType"
          value="side dish"
          onChange={handleCourseChange}
        />
        Side Dish
      </label>
      <label>
        <input
          type="radio"
          name="recipeType"
          value="snack"
          onChange={handleCourseChange}
        />
        Snack
      </label>
      <label>
        <input
          type="radio"
          name="recipeType"
          value="dessert"
          onChange={handleCourseChange}
        />
        Dessert
      </label>
      <label>
        <input
          type="radio"
          name="recipeType"
          value="appetizer"
          onChange={handleCourseChange}
        />
        Appetizer
      </label>
      <label>
        <input
          type="radio"
          name="recipeType"
          value="salad"
          onChange={handleCourseChange}
        />
        Salad
      </label>
      </div>
   
      <h1>Any dietary restrictions?</h1>
      <div id="dietaryRestrictions">
      <label>
        <input
          type="radio"
          name="dietaryRestriction"
          value="tree nuts"
          onChange={handleDietaryRestrictionChange}
        />
        Tree nuts
      </label>
      <label>
        <input
          type="radio"
          name="dietaryRestriction"
          value="Peanuts"
          onChange={handleDietaryRestrictionChange}
        />
        Peanuts
      </label>
      <label>
        <input
          type="radio"
          name="dietaryRestriction"
          value="Gluten"
          onChange={handleDietaryRestrictionChange}
        />
        Gluten
      </label>
      <label>
        <input
          type="radio"
          name="dietaryRestriction"
          value="sesame"
          onChange={handleDietaryRestrictionChange}
        />
        Sesame
      </label>
      <label>
        <input
          type="radio"
          name="dietaryRestriction"
          value="Soy"
          onChange={handleDietaryRestrictionChange}
        />
        Soy
      </label>
</div>

        <h1>What's in your kitchen?</h1>
        <div id="allIngredients">
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
      </div>
      <button onClick={handleFindRecipes}>Find recipes</button>
      {recipes.length > 0 && <Recommended recipes={recipes} />}
  </div>
);
};

export default Ingredients;
