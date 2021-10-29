import { combineReducers } from 'redux';
// on importe tous les reducers
import appReducer from './app';
import userReducer from './user';
import gameReducer from './game';
import membersReducer from './members';
import mailboxReducer from './mailbox';
import victoryReducer from './victory';
import configurationReducer from './configuration';
import rolesDescriptionsReducer from './rolesDescriptions';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  game: gameReducer,
  mails: mailboxReducer,
  victory: victoryReducer,
  members: membersReducer,
  configuration: configurationReducer,
  rolesDescriptions: rolesDescriptionsReducer,
});

export default rootReducer;
