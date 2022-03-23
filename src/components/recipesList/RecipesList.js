import RecipeListItem from '../recipesListItem/RecipesListItem';
import { useHttp } from '../../hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { recipesFetching, recipesFetched, recipesFetchingError } from '../../actions';


const RecipesList = () => {
    const { recipes, recipesLoadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(recipesFetching());
        request("https://623440b96d5465eaa516b024.mockapi.io/recepts")
            .then(data => dispatch(recipesFetched(data)))
            .catch(() => dispatch(recipesFetchingError()))
    }, []);

    if (recipesLoadingStatus === "loading") {
        return <h3>Закгузка данных</h3>;
    } else if (recipesLoadingStatus === "error") {
        return <h3 className="text-center mt-5">Ошибка загрузки</h3>
    }

    const renderItems = (arr) => {
        if (arr.length === 0) {
            return <h3 className="text-center mt-5">Рецепты не были добавлены</h3>
        }
        return arr.map(({ id, ...props }) => {
            return <RecipeListItem key={id} {...props} />
        })
    }

    return (
        <ul>
            {renderItems(recipes)}
        </ul>
    )
}
export default RecipesList;