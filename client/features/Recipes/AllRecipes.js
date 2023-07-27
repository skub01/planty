import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes, selectRecipes } from "../../store/allRecipesSlice";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const AllRecipes = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes({ page, pageSize: 20 }));
  }, [dispatch, page]);

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);};
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const recipes = useSelector(selectRecipes);

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
        <div className="pageButtons">
          <button onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}>Previous</button>
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
        </div>
      </div>
    </>
  );
}

export default AllRecipes;
