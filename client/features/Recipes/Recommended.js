import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Recommended = () => {
  const recipes = useSelector((state) => state.recipes.recipes);


  return (
    <>
      <div className="all-recipes-container">
        {recipes ? (
          recipes.map((recipe) => (
            <div className="recipe-container" key={recipe.id}>
              <NavLink to={`/allrecipes/${recipe.id}`}>
                <p id="recipe-name">{recipe.title}</p>
                  <img style={{ width: '200px' }} src={recipe.image} alt={recipe.name} />  
              </NavLink>
            </div>
          ))
        ) : (
          <p>Loading recipes...</p>
        )}
      </div>
    </>
  );
}

export default Recommended;
