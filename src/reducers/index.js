import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';
import { moviesReducer } from './moviesReducer';
import { ratingsReducer } from './ratingsReducer';

const rootReducer = combineReducers({
  hasError: errorReducer,
  isLoading: loadingReducer,
  movies: moviesReducer,
  ratings: ratingsReducer,
  user: userReducer,
});

export default rootReducer;
