export const recipesFetching = () => {
   return {
       type: 'RECIPES_FETCHING'
   }
}

export const recipesFetched = (heroes) => {
   return {
       type: 'RECIPES_FETCHED',
       payload: heroes
   }
}

export const recipesFetchingError = () => {
   return {
       type: 'RECIPES_FETCHING_ERROR'
   }
}