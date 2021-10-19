import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
// https://github.com/rt2zz/redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// Middlewares
import gameMiddleware from 'src/middlewares/gameMiddleware';
import homeMiddleware from 'src/middlewares/homeMiddleware';
import loginMiddleware from 'src/middlewares/loginMiddleware';
import usersMiddleware from 'src/middlewares/usersMiddleware';
import rolesMiddleware from 'src/middlewares/rolesMiddleware';
import profileMiddleware from 'src/middlewares/profileMiddleware';
import registerMiddleware from 'src/middlewares/registerMiddleware';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  // Reducers we don't want to be persisted
  blacklist: ['mails', 'members', 'rolesDescriptions'],
  // Reducers that needd to be persisted
  whitelist: ['game', 'configuration', 'user', 'app'],
};

// Applying the persistConfig to the reducer
const pReducer = persistReducer(persistConfig, reducer);

// Lining up all the middlewares
const middlewares = applyMiddleware(
  gameMiddleware,
  loginMiddleware,
  usersMiddleware,
  rolesMiddleware,
  profileMiddleware,
  registerMiddleware,
  homeMiddleware,
);

// on met bout à bout le redux devtools et nos middlewares
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

// Creating store with the persisted Reducer and the enhanced middlewares with the devtool
export const store = createStore(pReducer, enhancers);
// Applying persist on the store
export const persistor = persistStore(store);
