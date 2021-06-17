import { combineReducers } from 'redux';

import repositoryReducer from './repository/repository.reducer';

export default combineReducers({
  repository: repositoryReducer
});