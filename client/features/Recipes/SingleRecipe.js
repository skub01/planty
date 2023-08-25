import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleRecipe } from "../../store/singleRecipeSlice";
import BackButton from "./BackButton";
import { addFavorite, getUserRecipes, removeFavorite } from "../../store/userRecipesSlice";
import Toastify from 'toastify-js'
import { getFavoriteRecipe } from "../../store/favoritesSlice";

const SingleRecipe = (props) => {
  const userId = useSelector((state) => state.auth.me.id);
  const favorites = useSelector((state) => state.userRecipes.userRecipes);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getSingleRecipe(id));
    };
  }, [dispatch, id, userId]);

  const recipe = useSelector((state) => state.singleRecipe.singleRecipe);
  console.log('recipeeeee', recipe)
  const isFavorite = favorites.some((fav) => fav.recipeId === recipe?.id);

  const handleAddFavorite = async (recipeId, title, image) => {
    if (userId) {
      try {
        if (isFavorite) {
    dispatch(removeFavorite({ userId, recipeId: id }));
        } else {
      dispatch(addFavorite({ userId, recipeId, title, image }));
        }
        dispatch(getUserRecipes(userId)); 
      } catch (error) {
        console.log(error);
      }
    } else {
      Toastify({
        text: "Please log in or register to save recipes to your favorites!",
        duration: 2000,
        close: true,
        gravity: "top", 
        position: "center",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
  };

  return (
    <div className="recipe-details">
      {recipe ? (
        <>
          <div className="single-recipe-container">
          <div className="recipe-header-container">
            <h2>{recipe.title} </h2>
            <i
  className={`favorite-star ${isFavorite ? "fas" : "far"} fa-star`}
  onClick={() => handleAddFavorite(recipe.id)}
/>
            </div>
            <img src={recipe.image} className="recipe-img" />
            <p className="instructions">Instructions: {recipe.instructions}</p>
      
            <div>
              <h3>Ingredients:</h3>
              <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>
                    {ingredient.original}
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
