const initialState = {
   recipes: [],
   recipesLoadingStatus: 'idle',
}

const recipes = (state = initialState, action) => {
   switch (action.type) {
       case 'RECIPES_FETCHING':
           return {
               ...state,
               recipesLoadingStatus: 'loading'
           }
       case 'RECIPES_FETCHED':
           return {
               ...state,
               recipes: action.payload,
               recipesLoadingStatus: 'idle'
           }
       case 'RECIPES_FETCHING_ERROR':
           return {
               ...state,
               recipesLoadingStatus: 'error'
           }
       case 'ACTIVE_FILTER_CHANGED':
           return {
               ...state,
               activeFilter: action.payload,
           }
       case 'RECIPE_CREATED':
           return {
               ...state,
               recipes: [...state.recipes, action.payload], 
           }
       case 'RECIPE_DELETED':
           return {
               ...state,
               recipes: state.recipes.filter(item => item.id !== action.payload),
           }
       default: return state
   }
}

export default recipes;