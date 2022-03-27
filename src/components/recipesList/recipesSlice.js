import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

const initialState = {
   recipes: [],
   recipesLoadingStatus: 'idle',
};

export const fetchRecipes = createAsyncThunk(
   'recipes/fetchRecipes',
   async () => {
      const { request } = useHttp();
      return await request("https://623440b96d5465eaa516b024.mockapi.io/recepts")
   }
);

 const recipesSlice = createSlice({
   name: 'recipes',
   initialState,
   reducers: {
      recipeCreated: (state, action) => { state.recipes.push(action.payload) },
      recipeDelete: (state, action) => { state.recipes = state.recipes.filter(item => item.id !== action.payload) }
   },
   extraReducers: builder => {
      builder
      .addCase(fetchRecipes.pending, state => { state.recipesLoadingStatus = 'loading' })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
         state.recipesLoadingStatus = 'idle';
         state.recipes = action.payload
      })
      .addCase(fetchRecipes.rejected, state => { state.recipesLoadingStatus = 'error' })
   }

});

const { actions, reducer } = recipesSlice;
export default reducer;

export const { recipesFetching, recipesFetched, recipesFetchingError, recipeCreated, recipeDelete } = actions;