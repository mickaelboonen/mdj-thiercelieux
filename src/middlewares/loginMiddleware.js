import axios from 'axios';

import {
  CHECK_AUTH,
  LOGIN,
  saveUser,
  login,
} from 'src/actions/user';

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
          api.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
          store.dispatch(login(response.data));
        })
        .catch((error) => {
          console.error('login request', error);
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
    default:
  }
  next(action);
};

export default gameMiddleware;
