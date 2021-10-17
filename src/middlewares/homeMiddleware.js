import axios from 'axios';

import {
  FETCH_HOME_DATA,
  saveHomeData,
} from 'src/actions';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_HOME_DATA:
      api.get('/api/cards/roles')
        .then((response) => {
          store.dispatch(saveHomeData(response.data, 'hiddenRoles'));
        })
        .catch((error) => {
          console.error('tags request', error);
        });
      // TODO for games
      api.get('/api/cards/roles')
        .then((response) => {
          store.dispatch(saveHomeData(response.data, 'games'));
        })
        .catch((error) => {
          console.error('tags request', error);
        });
      break;
    default:
  }
  next(action);
};

export default gameMiddleware;
