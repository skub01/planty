import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes, selectRecipes } from "../../store/allRecipesSlice";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const AllRecipes = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const [page, setPage] = useState(1);
  const [intolerances, setIntolerances] = useState(null);
  const [mealType, setMealType] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes({ intolerances: intolerances, type: mealType }));
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);};
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const recipes = useSelector(selectRecipes);

  const handleFilter = () => {
    dispatch(getAllRecipes({ intolerances: intolerances, type: mealType }));
  };

  return (
    <>
    <div className="filter-container">
        <h2>Filter Options:</h2>
        <div>
          <label>Food Intolerance:</label>
          <select
            value={intolerances}
            onChange={(e) => setIntolerances(e.target.value)}
          >
            <option value="">None</option>
            <option value="Gluten">Gluten</option>
            <option value="Grain">Grain</option>
            <option value="Peanut">Peanut</option>
            <option value="Sesame">Sesame</option>
            <option value="Soy">Soy</option>
            <option value="Tree Nut">Tree Nut</option>
            <option value="Wheat">Wheat</option>
          </select>
        </div>
        <div>
          <label>Meal Type:</label>
          <select
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="">None</option>
            <option value="main course">Main Course</option>
            <option value="side dish">Side Dish</option>
            <option value="dessert">Dessert</option>
            <option value="appetizer">Appetizer</option>
            <option value="salad">Salad</option>
            <option value="breakfast">Breakfast</option>
            <option value="soup">Soup</option>
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
          </select>
        </div>
        <button onClick={handleFilter}>Filter</button>
      </div>

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
        <div className="pageButtons">
          <button onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}>Previous</button>
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
        </div>
    
    </>
  );
}

export default AllRecipes;
