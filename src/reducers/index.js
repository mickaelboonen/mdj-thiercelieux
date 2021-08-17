import { combineReducers } from 'redux';
// on importe tous les reducers
import appReducer from './app';
import membersReducer from './members';
import mailboxReducer from './mailbox';
import gameReducer from './game';
import rolesDescriptionsReducer from './rolesDescriptions';

const rootReducer = combineReducers({
  app: appReducer,
  game: gameReducer,
  mails: mailboxReducer,
  members: membersReducer,
  rolesDescriptions: rolesDescriptionsReducer,
});

export default rootReducer;
