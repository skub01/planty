import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//const apiKey = "bb962a282f1d4567a7587b0faea1ecd6";
const apiKey = "3e2c0b66e4a54b4aaf9fc39057ed1697";
//const apiKey = "97f28d44e25d49a687b086c42bae4aeb"

export const getFavoriteRecipes = createAsyncThunk(
  "favoriteRecipes/getFavoriteRecipes",
  async (recipeIds) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/informationBulk`,
        {
          params: {
            apiKey: apiKey,
            ids: recipeIds.join(","),
          },
        }
      );
      return response.data;
    } catch (err) {
      return console.log(err.response.data);
    }
  }
);

const favoritesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: {
    favoriteRecipes: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteRecipes.fulfilled, (state, { payload }) => {
      state.favoriteRecipes.push(...payload);
    });
  },
});

export const selectFavoriteRecipes = (state) => {
  return state.favorites.favoriteRecipes;
};

export default favoritesSlice.reducer;
