import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleRecipe } from "../../store/singleRecipeSlice";
import BackButton from "./BackButton";
import { addFavorite, getUserRecipes, removeFavorite } from "../../store/userRecipesSlice";

const SingleRecipe = (props) => {
  const userId = useSelector((state) => state.auth.me.id);
  const favorites = useSelector((state) => state.userRecipes.userRecipes);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false); 

  useEffect(() => {
    if (id) {
      dispatch(getSingleRecipe(id));
    };
  }, [dispatch, id]);

  const recipe = useSelector((state) => state.singleRecipe.singleRecipe);

  const handleAddFavorite = (recipeId) => {
    if (userId) {
      const isAlreadyFavorite = favorites.some(
        (fav) => fav.recipeId === recipeId && fav.userId === userId
      );
  
      if (isAlreadyFavorite) {

        dispatch(removeFavorite({ userId, recipeId }));
      } else {
 
        dispatch(addFavorite({ userId, recipeId }));
      }
    } else {
      alert("Please log in or register to save recipes to your favorites!");
    }
  };

  return (
    <div className="recipe-details">
      {recipe ? (
        <>
          <div>
            <h2>{recipe.name} 
            <button className="add-favorite" onClick={() => handleAddFavorite(recipe.id)}>Favorite</button></h2>
            <img src={recipe.image} className="recipe-img" />
            <p>Instructions: {recipe.instructions}</p>
       
            <div>
              <h3>Ingredients:</h3>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.id}>
                    {ingredient.name} - {ingredient.recipeIngredient.amount}
                  </li>
                ))}
              </ul>
            </div>
              <BackButton />
          </div>
        </>
      ) : (
        <p className="loading-text">Loading recipe...</p>
      )}
    </div>
  );
};

export default SingleRecipe;
