import RecipesList from '../recipesList/RecipesList';
import RecipesAddForm from '../recipesAddForm/RecipesAddForm';
import RecipesFilters from '../recipesFilters/RecipesFilters';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './App.css';



const App = () => {

    return (
        <div className="container">
            <Header />
            <main className="app">
                <div className="content">
                    <RecipesList />
                    <div className="content__interactive">
                        <RecipesAddForm />
                        <RecipesFilters />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default App;