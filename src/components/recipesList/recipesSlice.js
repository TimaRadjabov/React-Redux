import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   recipes: [],
   recipesLoadingStatus: 'idle',
}

const recipesSlice = createSlice({
   name: 'recipes',
   initialState,
   reducers: {
      recipesFetching: state =>{state.recipesLoadingStatus = 'loading'},
      recipesFetched: (state, action) =>{
         state.recipesLoadingStatus = 'idle';
         state.recipes = action.payload
      },
      recipesFetchingError: state => {state.recipesLoadingStatus = 'error'},
      recipeCreated: (state, action) =>{state.recipes.push(action.payload)},
      recipeDelete:(state, action) =>{state.recipes = state.recipes.filter(item => item.id !== action.payload)}
   }
});

const {actions, reducer} = recipesSlice;
export default reducer;

export const {recipesFetching, recipesFetched, recipesFetchingError, recipeCreated, recipeDelete} = actions;