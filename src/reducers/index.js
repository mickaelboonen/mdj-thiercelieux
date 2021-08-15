import { combineReducers } from 'redux';
// on importe tous les reducers
import appReducer from './app';
import membersReducer from './members';
import mailboxReducer from './mailbox';
import rolesDescriptionsReducer from './rolesDescriptions';

const rootReducer = combineReducers({
  app: appReducer,
  members: membersReducer,
  mails: mailboxReducer,
  rolesDescriptions: rolesDescriptionsReducer,
});

export default rootReducer;
