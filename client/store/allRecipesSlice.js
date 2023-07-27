import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiKey = "3e2c0b66e4a54b4aaf9fc39057ed1697";

export const getAllRecipes = createAsyncThunk("getAllRecipes", async () => {
  try {
    const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
      params: {
        apiKey: apiKey,
        query: "vegan", 
        number: 50, 
      },
    });
    return response.data.results;
  } catch (err) {
    console.log(err);
  }
});

export const getIngredientRecipes = createAsyncThunk(
  "getIngredientRecipes",
  async (selectedIngredients) => {
    try {
      const ingredientsQuery = Object.entries(selectedIngredients)
        .filter(([, checked]) => checked)
        .map(([name]) => name)
        .join(",");

      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: apiKey,
            query: "vegan",
            number: 5,
            includeIngredients: ingredientsQuery,
          },
        }
      );
      return response.data.results;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);


const allRecipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRecipes.fulfilled, (state, { payload }) => {
      state.recipes = payload;
    });
    builder.addCase(getIngredientRecipes.fulfilled, (state, { payload }) => {
      state.recipes = payload;
    });
  },
});

export const selectRecipes = (state) => {
  return state.recipes.recipes;
};

export default allRecipesSlice.reducer;
