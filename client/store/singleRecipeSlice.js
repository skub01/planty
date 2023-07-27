import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleRecipe = createAsyncThunk(
  "singleRecipe",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/recipes/${id}`);
      return data;
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
      })
  },
});

export const selectSingleRecipe = (state) => {
  return state.singleRecipe;
};

export default singleRecipeSlice.reducer;
