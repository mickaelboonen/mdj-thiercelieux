import { combineReducers } from 'redux';
// on importe tous les reducers
import appReducer from './app';
import gameReducer from './game';
import membersReducer from './members';
import mailboxReducer from './mailbox';
import configurationReducer from './configuration';
import rolesDescriptionsReducer from './rolesDescriptions';

const rootReducer = combineReducers({
  app: appReducer,
  game: gameReducer,
  mails: mailboxReducer,
  members: membersReducer,
  configuration: configurationReducer,
  rolesDescriptions: rolesDescriptionsReducer,
});

export default rootReducer;
