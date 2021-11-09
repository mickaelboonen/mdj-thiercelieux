import axios from 'axios';

import {
  FETCH_USERS,
  saveUsersList,
  ADD_NEW_FRIEND,
  saveNewFriend,
  DELETE_FRIEND,
  FETCH_STATS_FOR_PROFILE,
  saveCurrentUserStats,
} from 'src/actions/user';

import { users } from 'src/data/users';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS:
      api.get('/api/users/list')
        .then((response) => {
          const filteredUsers = [];
          response.data.forEach((user) => {
            if (user.pseudo.toLowerCase().includes(action.value) && action.value !== '') {
              filteredUsers.push(user);
            }
          });
          store.dispatch(saveUsersList(filteredUsers));
        })
        .catch((error) => {
          console.error('list user', error);
        });
      break;
    case ADD_NEW_FRIEND: {
      // TODO request
      const newFriend = users.find((user) => user.username === action.name);
      store.dispatch(saveNewFriend(newFriend));
    }
      break;
    case DELETE_FRIEND: // {
      // TODO request
      // api.delete('/route', {})
    // }
      break;
    case FETCH_STATS_FOR_PROFILE: {
      const { user: { id } } = store.getState();
      api.get(`/api/stats/user/${id}`)
        .then((response) => {
          store.dispatch(saveCurrentUserStats(response.data));
        })
        .catch((error) => {
          console.error('list user', error);
        });
    }
      break;
    default:
  }
  next(action);
};

export default registerMiddleware;
