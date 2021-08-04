import { combineReducers } from 'redux';
// on importe tous les reducers
import appReducer from './app';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
