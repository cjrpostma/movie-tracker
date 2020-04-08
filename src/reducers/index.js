import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';
import { moviesReducer } from './moviesReducer';

const rootReducer = combineReducers({
  hasError: errorReducer,
  isLoading: loadingReducer,
  movies: moviesReducer,
  user: userReducer,
});

export default rootReducer;
