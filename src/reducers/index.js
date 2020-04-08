import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  hasError: errorReducer,
  isLoading: loadingReducer,
  user: userReducer,
});

export default rootReducer;
