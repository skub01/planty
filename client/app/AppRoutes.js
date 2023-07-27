import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "./store";
import Favorites from "../features/favorites/Favorites";
import Ingredients from "../features/ingredients/Ingredients";
import AllRecipes from "../features/Recipes/AllRecipes";
import SingleRecipe from "../features/Recipes/SingleRecipe";
import { getUserRecipes } from "../store/userRecipesSlice";
import Recommended from "../features/Recipes/Recommended";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  useEffect(() => {
    if (userId) {
    dispatch(getUserRecipes(userId));
    }
  }, [userId]);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/allrecipes" element={<AllRecipes />} />
          <Route path="/allrecipes/:id" element={<SingleRecipe />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/allrecipes" element={<AllRecipes />} />
          <Route path="/allrecipes/:id" element={<SingleRecipe />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
