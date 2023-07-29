import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//const apiKey = "bb962a282f1d4567a7587b0faea1ecd6";
const apiKey = "3e2c0b66e4a54b4aaf9fc39057ed1697";

export const getFavoriteRecipe = createAsyncThunk(
  "favoriteRecipes/getFavoriteRecipe",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params: {
            apiKey: apiKey,
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
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
    builder.addCase(getFavoriteRecipe.fulfilled, (state, { payload }) => {
      state.favoriteRecipes.push(payload);
    });
  },
});

export const selectFavoriteRecipes = (state) => {
  return state.favorites.favoriteRecipes;
};

export default favoritesSlice.reducer;
