import axios from 'axios';

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
        avatar: 'https://images2.imgbox.com/15/c9/bFUlvk0I_o.png',
      };
      delete newUser.confirmPassword;
      api.post('/api/users/create', newUser)
        .then((response) => {
          if (response.status === 201) {
            const message = "Message de validation";
            store.dispatch(endRegisterProcess(message));
          }
          // If we get a 200 status, resquest encountered an error and did not create the new user
          else if (response.status === 200) {
            const errorsArray = [];
            errorsArray.push(response.data);
            store.dispatch(setRegisterErrorMessage(errorsArray));
          }
        })
        .catch((error) => {
          // Couldn't connect to the server
          const message = 'Le serveur a rencontré un problème. Merci de bien vouloir réessayer. En cas de nouvel échec, merci de contacter X.'; // TODO
          const errorsArray = [];
          errorsArray.push(message);
          store.dispatch(setRegisterErrorMessage(errorsArray));
        });
    }
      break;
    default:
  }
  next(action);
};

export default registerMiddleware;
