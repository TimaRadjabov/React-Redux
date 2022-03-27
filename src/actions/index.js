import {recipesFetching, recipesFetched, recipesFetchingError} from '../components/recipesList/recipesSlice';
import {filterFetching, filterFetched, filterFetchingError} from '../components/recipesFilters/filtersSlice';
export const fetchRecipes = (request) => (dispatch) => {
    dispatch(recipesFetching());
    request("https://623440b96d5465eaa516b024.mockapi.io/recepts")
        .then(res => dispatch(recipesFetched(res)))
        .catch(() => dispatch(recipesFetchingError()))
}
export const fetchFilters = (request) => (dispatch) => {
    dispatch(filterFetching());
    request('https://623440b96d5465eaa516b024.mockapi.io/filtres')
        .then(data => dispatch(filterFetched(data)))
        .catch(() => dispatch(filterFetchingError()))
}



