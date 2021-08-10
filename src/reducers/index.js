import { combineReducers } from 'redux';
// on importe tous les reducers
import appReducer from './app';
import rolesReducer from './roles';
import membersReducer from './members';

const rootReducer = combineReducers({
  app: appReducer,
  roles: rolesReducer,
  members: membersReducer,
});

export default rootReducer;
