import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//const apiKey = "bb962a282f1d4567a7587b0faea1ecd6";
const apiKey = "3e2c0b66e4a54b4aaf9fc39057ed1697";


export const getAllRecipes = createAsyncThunk("getAllRecipes", async ({ intolerances, type }) => {
  try {
    const params = {
      apiKey: apiKey,
      diet: "vegan",
      number: 3,
      sort: "random",
    };
    if (intolerances) {
      params.intolerances = intolerances;
    }
    if (type) {
      params.type = type;
    }
    console.log('params', params)
    const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
      params: params,
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
      console.log("ingredients!!!", selectedIngredients)
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/findByIngredients",
        {
          params: {
            apiKey: apiKey,
            ingredients: selectedIngredients,
            diet: "vegan",
            number: 3,
          },
        }
      );
      console.log("response!!!", response.data)
      return response.data;
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
      console.log('payload here:', payload)
      state.recipes = payload;
    });
  },
});

export const selectRecipes = (state) => {
  return state.recipes.recipes;
};

export default allRecipesSlice.reducer;
