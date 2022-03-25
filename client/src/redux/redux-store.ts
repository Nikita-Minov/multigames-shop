import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer/usersReducer';
import productsReducer from './reducers/productsReducer/productsReducer';
import categoriesReducer from './reducers/categoriesReducer/categoriesReducer';
import agreementsReducer from './reducers/agreementsReducer/agreementsReducer';

// const composeEnhancers =
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(combineReducers({
//   usersReducer,
//   productsReducer,
//   categoriesReducer,
//   agreementsReducer,
// }), composeEnhancers(applyMiddleware(thunk)));

const store = createStore(combineReducers({
  usersReducer,
  productsReducer,
  categoriesReducer,
  agreementsReducer,
}), applyMiddleware(thunk));

export default store;
