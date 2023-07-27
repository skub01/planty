import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allRecipesSlice from '../store/allRecipesSlice';
import userRecipesSlice from '../store/userRecipesSlice';
import singleRecipeSlice from '../store/singleRecipeSlice';

const store = configureStore({
  reducer: { 
    auth: authReducer,
    recipes: allRecipesSlice,
    singleRecipe: singleRecipeSlice,
    userRecipes: userRecipesSlice
 },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
