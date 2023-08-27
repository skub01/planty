import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { resetRecipes } from '../../store/allRecipesSlice';

const Recommended = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = () => {
    dispatch(resetRecipes());
    navigate('/ingredients')
  };

  return (
    <>
        {recipes ? (
          <>
                <div className="all-recipes-container">
            {recipes.map((recipe) => (
              <div className="recipe-container" key={recipe.id}>
                <NavLink to={`/allrecipes/${recipe.id}`}>
                  <p id="recipe-name">{recipe.title}</p>
                  <img style={{ width: '200px' }} src={recipe.image} alt={recipe.name} />  
                </NavLink>
              </div>
            ))}
               </div>
     
            <button className="get-started-button" onClick={handleReset}>Back to Search</button>
         
          </>
        ) : (
          <p>No recipes found! Try a different search.</p>
        )}
   
    </>
  );
        } 

export default Recommended;
