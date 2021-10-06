import axios from 'axios';

import {
  CHECK_AUTH,
  LOGIN,
  saveUser,
  login,
} from 'src/actions/user';
import { setAuthErrorMessage } from 'src/actions/user/login';
import { LOGOUT } from '../actions/user/login';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_AUTH: {
      const { data } = action;
      api.post('/api/users/check_auth', data)
        .then((response) => {
          api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          if (response.data.status === 403) {
            store.dispatch(setAuthErrorMessage(response.data.message));
          }
          else if (response.data.status === 200) {
            store.dispatch(login(response.data));
          }
        })
        .catch((error) => {
          const errorData = {};
          errorData.message = 'Le serveur a rencontré une erreur. Veuillez recommencer. Si le problème persiste, veuillez contacter X'; // TODO
          store.dispatch(setAuthErrorMessage(errorData.message));
        });
    }
      break;
    case LOGIN: {
      const { data } = action;
      api.post('/api/users/login', data)
        .then((response) => {
          console.log(response);
          store.dispatch(saveUser(response.data));
        })
        .catch((error) => {
          console.error('login request', error);
        });
    }
      break;
    case LOGOUT:
      delete api.defaults.headers.common.Authorization;
      break;
    default:
  }
  next(action);
};

export default gameMiddleware;
