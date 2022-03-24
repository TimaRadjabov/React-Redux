import RecipeListItem from '../recipesListItem/RecipesListItem';
import { useHttp } from '../../hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { recipesFetching, recipesFetched, recipesFetchingError, recipeDeleted } from '../../actions';
import {createSelector} from 'reselect';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import './recipesList.css';




const RecipesList = () => {
    const filteredRecipesSelector = createSelector(
        state => state.recipes.recipes,
        state => state.filters.activeFilter,
        (recipes, filters)=>{
            if(filters === 'all'){
                return recipes;
            }else {
                return recipes.filter(item => item.element === filters)
            }
        }        
    )

    const filteredRecipes = useSelector(filteredRecipesSelector)
    const recipesLoadingStatus  = useSelector(state => state.recipesLoadingStatus);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(recipesFetching());
        request("https://623440b96d5465eaa516b024.mockapi.io/recepts")
            .then(res => dispatch(recipesFetched(res)))
            .catch(() => dispatch(recipesFetchingError()))
    }, []);

    const deleteRecipe = useCallback((id)=>{
        request(`https://623440b96d5465eaa516b024.mockapi.io/recepts/${id}`, "DELETE")
        .then(dispatch(recipeDeleted(id)))
        .catch(error => {
            throw Error(error);
        })
    }, [request]);

    if (recipesLoadingStatus === "loading") {
        return <h3>Закгузка данных</h3>;
    } else if (recipesLoadingStatus === "error") {
        return <h3 className="text-center mt-5">Ошибка загрузки</h3>
    }

    const renderItems = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition timeout={0} classNames='recipe'>
                 <h3 className="text-center mt-5">Рецепты не были добавлены</h3> 
                 </CSSTransition>
            )
        }
        return arr.map(({ id, ...props }) => {
            return (
                <CSSTransition 
                    key={id}
                    timeout={500}
                    classNames="recipe">
                        <RecipeListItem {...props} deleteRecipe={()=> deleteRecipe(id)}/>
                    </CSSTransition>
            ) 
        })
    }

    return (
        <TransitionGroup component="ul">
            {renderItems(filteredRecipes)}
        </TransitionGroup>
    )
}
export default RecipesList;