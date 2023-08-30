import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleRecipe } from "../../store/singleRecipeSlice";
import BackButton from "./BackButton";
import { addFavorite, getUserRecipes, removeFavorite } from "../../store/userRecipesSlice";
import Toastify from 'toastify-js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";

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

  const handleAddFavorite = (recipeId, title, image) => {
    if (userId) {
      const recipeInFavorites = favorites.find((fav) => fav.recipeId === recipeId);
      if (recipeInFavorites) {
        dispatch(removeFavorite({ userId, recipeId: id }))
        .then(() => dispatch(getUserRecipes(userId)))
        }
         else {
          if (recipe) {
        dispatch(addFavorite({ userId, recipeId, title: recipe.title, image: recipe.image }))}
        };
      }
     else {
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

  const sanitizeHTML = (html) => {
    const strippedHTML = html.replace(/<[^>]+>/g, ''); // Remove HTML tags
    return strippedHTML;
  };

  return (
    <div className="recipe-details">
      {recipe ? (
        <>
          <div className="single-recipe-container">
          <div className="recipe-header-container">
            <h2>{recipe.title} </h2>
            <button
        variant="outline"
        style={{
          border: "none",
          fontSize: "32px",
        }}
        onClick={() => handleAddFavorite(recipe.id, recipe.title, recipe.image)}
      >
        <FontAwesomeIcon
          icon={
            favorites.some((fav) => fav.recipeId === recipe.id)
              ? solidStar
              : outlineStar
          }
          className={`star-icon ${
            favorites.some((fav) => fav.recipeId === recipe.id) ? "active" : ""
          }`}
        />
      </button>
            </div>
            <img src={recipe.image} className="recipe-img" />
            <div className="instructions">
            <h3>Instructions:</h3>
            {sanitizeHTML(recipe.instructions)}
          </div>
      
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
