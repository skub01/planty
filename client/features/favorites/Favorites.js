import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getFavoriteRecipes } from "../../store/favoritesSlice";
import { getUserRecipes } from "../../store/userRecipesSlice";

const Favorites = (props) => {
  const userId = useSelector((state) => state.auth.me.id);
  const username = useSelector((state) => state.auth.me.username);
  const favorites = useSelector((state) => state.userRecipes.userRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getUserRecipes(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="favorites-container">
      <h3>Welcome to your favorites page, {username}!</h3>
      {favorites.length ? (
        <>
          <h4>Saved Recipes:</h4>
          <ul className="favorite-list">
            {favorites.map((favorite) => (
              <li key={favorite.id}>
                <img src={favorite.image} className="favorite-recipe-img" />
                <Link to={`/allrecipes/${favorite.recipeId}`}>
                  {favorite.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No favorites yet!</p>
      )}
    </div>
  );
};

export default Favorites;
