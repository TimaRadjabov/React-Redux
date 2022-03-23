const initialState = {
   recipes: [],
   recipesLoadingStatus: 'idle',
   filters: []
}

const reducer = (state = initialState, action) => {
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
       default: return state
   }
}

export default reducer;