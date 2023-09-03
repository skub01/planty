import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { REACT_APP_API_KEY } from '../../src/env';

export const getSingleRecipe = createAsyncThunk(
  "singleRecipe",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params: {
             apiKey: REACT_APP_API_KEY
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {};

const singleRecipeSlice = createSlice({
  name: "singleRecipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleRecipe.fulfilled, (state, { payload }) => {
        state.singleRecipe = payload;
      })
      .addCase(getSingleRecipe.rejected, (state) => {
        return initialState;
      });
  },
});

export const selectSingleRecipe = (state) => {
  return state.singleRecipe;
};

export default singleRecipeSlice.reducer;
