import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleRecipe = createAsyncThunk(
  "singleRecipe",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params: {
            // apiKey: "bb962a282f1d4567a7587b0faea1ecd6",
            apiKey: "3e2c0b66e4a54b4aaf9fc39057ed1697",
            // apiKey: "97f28d44e25d49a687b086c42bae4aeb"
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
