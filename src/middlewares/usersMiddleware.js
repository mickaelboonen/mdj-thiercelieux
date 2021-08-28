import axios from 'axios';

import { FETCH_USERS, saveUsersList, ADD_NEW_FRIEND, saveNewFriend } from 'src/actions/user';
import { users } from 'src/data/users';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// Methods
// GET, POST, PATCH, PUT, DELETE

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS: {
      // TODO request
      const filteredUsers = users.map((user) => {
        if (user.username.toLowerCase().includes(action.value) && action.value !== '') {
          return user;
        }
      });
      const finalUsers = filteredUsers.filter((user) => user !== undefined);
      store.dispatch(saveUsersList(finalUsers));
    }
      break;
    case ADD_NEW_FRIEND: {
      // TODO request
      const newFriend = users.find((user) => user.username === action.name);
      store.dispatch(saveNewFriend(newFriend));
    }
    default:
  }
  next(action);
};

export default registerMiddleware;
