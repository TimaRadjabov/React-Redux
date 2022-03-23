
const RecipesFilters = () => {
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">фильтрация по составной</p>
                <div className="btn-group">
                    <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Торт</button>
                    <button className="btn btn-primary">Чизкейк</button>
                    <button className="btn btn-success">Капкейк</button>
                </div>
            </div>
        </div>
    )
}

export default RecipesFilters;