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

export const filterFetching = ()=>{
    return {
        type: 'FILTER_FETCHING'
    }
}
export const filterFetched = (filter)=>{
    return {
        type: 'FILTER_FETCHED',
        payload: filter
    }
}

export const filterFetchingError = ()=>{
    return {
        type: 'FILTER_FETCHING_ERROR'
    }
}

export const activeFilterChanged = (filter) => {
    return {
        type: 'ACTIVE_FILTER_CHANGED',
        payload: filter
    }
}

export const recipeCreated = (newRecipe) => {
    return {
        type: 'RECIPE_CREATED',
        payload: newRecipe
    }
}

export const recipeDeleted = (id) => {
    return {
        type: 'RECIPE_DELETED',
        payload: id
    }
} 