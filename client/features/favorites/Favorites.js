import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFavoriteRecipe } from '../../store/favoritesSlice';


const Favorites = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const favorites = useSelector((state) => state.userRecipes.userRecipes);
  const favoriteRecipes = useSelector((state) => state.favorites.favoriteRecipes);
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
      const fetchFavorites = async () => {
        const recipeIds = favorites.map((favorite) => favorite.recipeId);

        const newRecipeIds = recipeIds.filter(
          (id) => !favoriteRecipes.some((recipe) => recipe.id === id)
        );

        newRecipeIds.forEach((id) => {
          dispatch(getFavoriteRecipe(id));
        });
      };
      fetchFavorites();
  }, [favorites, dispatch]);

  return (
    
    <div className="favorites-container">
      <h3>Welcome to your favorites page, {username}!</h3>
      {favoriteRecipes.length? (
        <>
      <h4>Your Favorite Recipes:</h4>
      <ul className="favorite-list">
        {favoriteRecipes.map((favorite) => (
         <li key={favorite.id}>
          <img src={favorite.image} className="favorite-recipe-img" />
            <Link to={`/allrecipes/${favorite.id}`}>{favorite.title}</Link>
    </li>
        ))}
      </ul> 
      </> ) : <p>No favorites yet!</p> }
    </div>
    
  );
};


export default Favorites;
