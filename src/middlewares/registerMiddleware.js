import axios from 'axios';
import avatar from 'src/assets/pictures/cards/croissant.gif';

import { SAVE_NEW_USER, endRegisterProcess, setRegisterErrorMessage } from 'src/actions/user';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Methods
// GET, POST, PATCH, PUT, DELETE

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_NEW_USER: {
      const newUser = {
        ...action.data,
        avatar: avatar,
      };
      delete newUser.confirmPassword;
      api.post('/api/users/create', newUser)
        .then((response) => {
          // We get a 200, resquests encountered an error and did not create the new user
          if (response.status === 200) {
            const errorsArray = [];
            errorsArray.push(response.data);
            store.dispatch(setRegisterErrorMessage(errorsArray));
          }
        })
        .catch((error) => {
          console.error('register request', error);
        });
    }
      break;
    default:
  }
  next(action);
};

export default registerMiddleware;
