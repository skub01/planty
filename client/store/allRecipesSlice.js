import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//const apiKey = "bb962a282f1d4567a7587b0faea1ecd6";
//const apiKey = "3e2c0b66e4a54b4aaf9fc39057ed1697";
const apiKey = "97f28d44e25d49a687b086c42bae4aeb"

export const getAllRecipes = createAsyncThunk(
  "getAllRecipes",
  async ({ intolerances, type, page }) => {
    try {
      const params = {
        apiKey: apiKey,
        diet: "vegan",
        number: 8,
        offset: (page - 1) * 8,
      };
      if (intolerances) {
        params.intolerances = intolerances;
      }
      if (type) {
        params.type = type;
      }
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: params,
        }
      );
      console.log("!!!!!!", response);
      return {
        results: response.data.results,
        total: response.data.totalResults,
      };
    } catch (err) {
      console.log(err);
    }
  }
);

export const getIngredientRecipes = createAsyncThunk(
  "getIngredientRecipes",
  async ({ selectedIngredients, intolerances, type }) => {
    const selectedIngredientsArray = selectedIngredients.split(",");
    const maxRetries = selectedIngredientsArray.length;
    let retries = 0;
    let currentIngredients = [...selectedIngredientsArray];

    while (retries <= maxRetries) {
      try {
        const params = {
          apiKey: apiKey,
          includeIngredients: currentIngredients.join(","),
          diet: "vegan",
          number: 4,
          sort: "random",
        };
        if (intolerances) {
          params.intolerances = intolerances;
        }
        if (type) {
          params.type = type;
        }
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch",
          {
            params: params,
          }
        );

        if (response.data.results.length > 0) {
          return response.data.results;
        } else {
          currentIngredients.pop();
          retries++;
        }
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
    return [];
  }
);

const allRecipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    totalResults: 0,
  },
  reducers: {
    resetRecipes: (state) => {
      state.recipes = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRecipes.fulfilled, (state, { payload }) => {
      state.recipes = payload.results;
      state.totalResults = payload.total;
    });
    builder.addCase(getIngredientRecipes.fulfilled, (state, { payload }) => {
      state.recipes = payload;
    });
  },
});

export const { resetRecipes } = allRecipesSlice.actions;
export const selectRecipes = (state) => {
  return state.recipes.recipes;
};

export default allRecipesSlice.reducer;
