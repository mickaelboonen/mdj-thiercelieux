import { combineReducers } from 'redux';
// on importe tous les reducers
import appReducer from './app';
import rolesReducer from './roles';

const rootReducer = combineReducers({
  app: appReducer,
  roles: rolesReducer,
});

export default rootReducer;
