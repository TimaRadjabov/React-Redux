import {createStore, combineReducers} from 'redux';
import filters from '../reducer/filter';
import recipes from '../reducer/recipe';

const store = createStore(combineReducers({recipes, filters}));

export default store;