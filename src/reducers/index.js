import { combineReducers } from 'redux';
// on importe tous les reducers
import appReducer from './app';
import rolesReducer from './roles';
import membersReducer from './members';
import newMoonReducer from './newMoon';
import villageReducer from './village';
import mailboxReducer from './mailbox';
import rolesDescriptionsReducer from './rolesDescriptions';

const rootReducer = combineReducers({
  app: appReducer,
  roles: rolesReducer,
  members: membersReducer,
  newMoon: newMoonReducer,
  village: villageReducer,
  mails: mailboxReducer,
  rolesDescriptions: rolesDescriptionsReducer,
});

export default rootReducer;
